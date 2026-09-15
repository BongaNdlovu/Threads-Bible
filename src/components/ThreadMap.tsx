import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Pause, Play, SkipBack, SkipForward, Focus, RotateCcw } from 'lucide-react';
import { snippet, type ThreadGraph, type MapNode, type MapEdge } from './threadMapModel';
import { cn } from '@/lib/utils';

/**
 * Ordo — the cinematic mindmap view of a single thread.
 *
 * Ported from the "Ordo Propheticus" design language: ink-dark starfield,
 * cinematic node cards, gradient edges with animated reveal and traveling
 * dots, step-synced playback, and a dossier panel that explains the active
 * connection — the space where a thread shows WHY it is a thread.
 */

const GOLD = '#C8A24B';
const STEEL = '#7FA0C4';
const BONE = '#EAE6DA';

const STRAND_COLOR: Record<MapNode['strand'], string> = { gold: GOLD, steel: STEEL };

function useStarfield(canvasRef: React.RefObject<HTMLCanvasElement | null>, boxRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const box = boxRef.current;
    if (!canvas || !box) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      w = box.clientWidth;
      h = box.clientHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(box);

    const stars = Array.from({ length: 130 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.3 + 0.3,
      drift: Math.random() * 0.008 + 0.002,
      tw: Math.random() * Math.PI * 2,
    }));

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.x += s.drift * 0.02;
        if (s.x > 1.02) s.x = -0.02;
        const twinkle = 0.35 + 0.3 * Math.sin(t * 0.0012 + s.tw);
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(234, 230, 218, ${twinkle.toFixed(3)})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [canvasRef, boxRef]);
}

interface SizeEntry { w: number; h: number }

export function ThreadMap({ graph }: { graph: ThreadGraph }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodeRefs = useRef(new Map<string, HTMLElement>());
  const [sizes, setSizes] = useState<Record<string, SizeEntry>>({});
  const reduceMotion =
    typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const [step, setStep] = useState(1);
  // Clicking a verse should open the thread already telling its story.
  const [playing, setPlaying] = useState(!reduceMotion);
  const [view, setView] = useState({ x: 0, y: 0, scale: 1 });
  const dragRef = useRef<{ sx: number; sy: number; ox: number; oy: number } | null>(null);

  useStarfield(canvasRef, boxRef);

  // Measure node cards (transform-independent offsets) for edge geometry.
  useEffect(() => {
    const measure = () => {
      const next: Record<string, SizeEntry> = {};
      for (const n of graph.nodes) {
        const el = nodeRefs.current.get(n.id);
        if (el) next[n.id] = { w: el.offsetWidth, h: el.offsetHeight };
      }
      setSizes(next);
    };
    const t = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(t);
  }, [graph]);

  // Playback: auto-advance while playing.
  useEffect(() => {
    if (!playing) return;
    const t = window.setInterval(() => {
      setStep(s => (s >= graph.totalSteps ? 1 : s + 1));
    }, 4200);
    return () => window.clearInterval(t);
  }, [playing, graph.totalSteps]);

  const goToStep = (k: number) => {
    setStep(Math.min(graph.totalSteps, Math.max(1, k)));
  };

  // Pan / zoom — native non-passive wheel listener (React wheel is passive).
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const onWheelNative = (e: WheelEvent) => {
      e.preventDefault();
      setView(v => ({ ...v, scale: Math.min(2.2, Math.max(0.35, v.scale * (e.deltaY < 0 ? 1.1 : 0.9))) }));
    };
    el.addEventListener('wheel', onWheelNative, { passive: false });
    return () => el.removeEventListener('wheel', onWheelNative);
  }, []);
  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { sx: e.clientX, sy: e.clientY, ox: view.x, oy: view.y };
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d) return;
    setView(v => ({ ...v, x: d.ox + (e.clientX - d.sx), y: d.oy + (e.clientY - d.sy) }));
  };
  const onPointerUp = () => {
    dragRef.current = null;
  };

  // Edge geometry from measured node boxes.
  const geometry = useMemo(() => {
    const byId = new Map(graph.nodes.map(n => [n.id, { ...n, size: sizes[n.id] ?? { w: 250, h: 160 } }]));
    const paths = graph.edges.map(e => {
      const a = byId.get(e.from);
      const b = byId.get(e.to);
      if (!a || !b) return null;
      const acx = a.x + a.size.w / 2;
      const acy = a.y + a.size.h / 2;
      const bcx = b.x + b.size.w / 2;
      const bcy = b.y + b.size.h / 2;
      let d: string;
      if (Math.abs(acx - bcx) < 10) {
        const sy = a.y + a.size.h + 4;
        const ty = b.y - 11;
        const dy = ty - sy;
        d = `M ${acx} ${sy} C ${acx} ${sy + dy * 0.5}, ${bcx} ${ty - dy * 0.5}, ${bcx} ${ty}`;
      } else {
        const sx = a.x + a.size.w + 4;
        const sy = acy;
        const tx = b.x - 13;
        const ty = bcy;
        const dx = tx - sx;
        d = `M ${sx} ${sy} C ${sx + dx * 0.48} ${sy}, ${tx - dx * 0.48} ${ty}, ${tx} ${ty}`;
      }
      const active = e.step <= step;
      const current = e.step === step;
      return { edge: e, d, color: STEEL, active, current };
    });
    return paths.filter(Boolean) as { edge: MapEdge; d: string; color: string; active: boolean; current: boolean }[];
  }, [graph, sizes, step]);

  // Animated reveal of newly activated edges (dash draw + traveling dot).
  const dotLayer = React.useRef<SVGSVGElement>(null);
  useEffect(() => {
    const svg = dotLayer.current;
    if (!svg) return;
    const rafs: number[] = [];
    for (const g of geometry) {
      if (!g.current) continue;
      const path = svg.querySelector<SVGPathElement>(`[data-edge="${g.edge.id}"]`);
      if (!path) continue;
      let len = 800;
      try { len = path.getTotalLength(); } catch { /* headless */ }
      path.style.strokeDasharray = `${len} ${len}`;
      path.style.strokeDashoffset = String(len);
      path.getBoundingClientRect();
      path.style.transition = 'stroke-dashoffset 1.1s ease-out';
      path.style.strokeDashoffset = '0';
      const dot = svg.querySelector<SVGCircleElement>(`[data-dot="${g.edge.id}"]`);
      if (dot) {
        const dur = 1100;
        const t0 = performance.now();
        const frame = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          const pt = path.getPointAtLength(p * len);
          dot.setAttribute('cx', String(pt.x));
          dot.setAttribute('cy', String(pt.y));
          dot.style.opacity = p < 1 ? '1' : '0';
          if (p < 1) rafs.push(requestAnimationFrame(frame));
        };
        rafs.push(requestAnimationFrame(frame));
      }
    }
    return () => rafs.forEach(cancelAnimationFrame);
  }, [geometry, step]);

  const activeEdge = graph.edges.find(e => e.step === step) ?? null;
  const sourceNode = graph.nodes[0];
  const currentNode = graph.nodes.find(n => n.step === step) ?? sourceNode;

  // A new thread restarts the walkthrough from the beginning, playing.
  const threadKey = graph.nodes[0]?.id ?? '';
  const prevThreadKey = useRef(threadKey);
  useEffect(() => {
    if (prevThreadKey.current !== threadKey) {
      prevThreadKey.current = threadKey;
      setStep(1);
      setPlaying(!reduceMotion);
    }
  }, [threadKey, reduceMotion]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0B0B0D] select-none">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div
          className="absolute left-0 top-0 origin-top-left"
          style={{ transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})` }}
        >
          <svg className="pointer-events-none absolute left-0 top-0 overflow-visible" width={1} height={1} ref={dotLayer}>
            <defs>
              {graph.edges.map(e => {
                const from = graph.nodes[0];
                const to = graph.nodes.find(n => n.id === e.to);
                const fs = sizes[from.id] ?? { w: 250, h: 160 };
                const ts = sizes[to?.id ?? ''] ?? { w: 250, h: 160 };
                return (
                  <linearGradient key={e.id} id={`eg-${e.id}`} gradientUnits="userSpaceOnUse"
                    x1={from.x + fs.w / 2} y1={from.y + fs.h / 2}
                    x2={(to?.x ?? 0) + ts.w / 2} y2={(to?.y ?? 0) + ts.h / 2}>
                    <stop offset="0%" stopColor={GOLD} />
                    <stop offset="100%" stopColor={STEEL} />
                  </linearGradient>
                );
              })}
            </defs>
            {geometry.map(g => (
              <React.Fragment key={g.edge.id}>
                <path
                  data-edge={g.edge.id}
                  d={g.d}
                  fill="none"
                  stroke={`url(#eg-${g.edge.id})`}
                  strokeWidth={g.current ? 2.2 : 1.6}
                  markerEnd={`url(#mk-${g.edge.id})`}
                  style={{ opacity: g.active ? 1 : 0, transition: 'opacity .5s' }}
                />
                <defs>
                  <marker id={`mk-${g.edge.id}`} viewBox="0 0 10 10" refX={7.5} refY={5} markerWidth={6.5} markerHeight={6.5} orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill={STEEL} />
                  </marker>
                </defs>
                <circle data-dot={g.edge.id} r={5} fill={STEEL} style={{ opacity: 0 }} />
              </React.Fragment>
            ))}
          </svg>

          {graph.nodes.map(n => {
            const visible = n.step <= step;
            const active = n.step === step;
            const color = STRAND_COLOR[n.strand];
            return (
              <article
                key={n.id}
                ref={el => {
                  if (el) nodeRefs.current.set(n.id, el);
                  else nodeRefs.current.delete(n.id);
                }}
                onClick={() => goToStep(n.step)}
                className="pcard absolute rounded-xl border backdrop-blur-[2px] transition-all duration-500 cursor-pointer"
                style={{
                  left: n.x,
                  top: n.y,
                  width: 250,
                  borderColor: active ? color : 'rgba(234,230,218,.14)',
                  boxShadow: active ? `0 0 34px -12px ${color}` : 'none',
                  background: 'linear-gradient(160deg, rgba(25,25,32,.92), rgba(11,11,13,.96))',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(14px)',
                }}
              >
                <span className="absolute font-serif font-light text-white/[.05] select-none" style={{ fontSize: 78, right: 10, top: -6 }}>
                  {String(n.step).padStart(2, '0')}
                </span>
                <div className="relative px-4 pt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.2em]">
                  <span style={{ color }} className="font-semibold">◆ {String(n.step).padStart(2, '0')}</span>
                  <span className="uppercase" style={{ color: 'rgba(166,161,150,.85)' }}>
                    {n.kind === 'source' ? 'Thread Source' : 'Connection'}
                  </span>
                </div>
                <h3 className="relative font-serif font-medium text-[16px] leading-snug px-4 pt-2 pr-10" style={{ color: BONE }}>
                  {n.kind === 'source' ? n.title : n.ref}
                </h3>
                <p className="relative px-4 pt-1.5 text-[11.5px] leading-relaxed" style={{ color: 'rgba(166,161,150,.95)' }}>
                  {n.body || '…'}
                </p>
                <div className="relative px-4 pb-3 pt-2.5 flex items-center justify-between gap-2 font-mono text-[9px] tracking-[0.14em]">
                  <span style={{ color }}>{n.kind === 'source' ? n.ref : 'OPEN THE PASSAGE →'}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
        <button
          onClick={() => goToStep(step - 1)}
          aria-label="Previous step"
          className="h-8 w-8 rounded-full flex items-center justify-center border border-white/15 text-[#EAE6DA]/80 hover:bg-white/10 cursor-pointer transition-colors"
        >
          <SkipBack className="h-3.5 w-3.5" />
        </button>
        <button
          onClick={() => setPlaying(p => !p)}
          aria-label={playing ? 'Pause playback' : 'Play the thread as a cinematic walkthrough'}
          className="h-8 w-8 rounded-full flex items-center justify-center border bg-[#C8A24B]/20 text-[#E8CF8F] border-[#C8A24B]/50 hover:bg-[#C8A24B]/30 cursor-pointer transition-colors"
        >
          {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
        </button>
        <button
          onClick={() => goToStep(step + 1)}
          aria-label="Next step"
          className="h-8 w-8 rounded-full flex items-center justify-center border border-white/15 text-[#EAE6DA]/80 hover:bg-white/10 cursor-pointer transition-colors"
        >
          <SkipForward className="h-3.5 w-3.5" />
        </button>
        <span className="ml-1 font-mono text-[10px] tracking-[0.2em] text-[#EAE6DA]/60">
          {String(step).padStart(2, '0')} / {String(graph.totalSteps).padStart(2, '0')}
        </span>
        <button
          onClick={() => setView({ x: 0, y: 0, scale: 1 })}
          aria-label="Reset view"
          title="Reset view"
          className="ml-2 h-8 w-8 rounded-full flex items-center justify-center border border-white/15 text-[#EAE6DA]/60 hover:bg-white/10 cursor-pointer transition-colors"
        >
          <RotateCcw className="h-3 w-3" />
        </button>
        <button
          onClick={() => { const n = currentNode; if (n) setView(v => ({ ...v, x: -(n.x * v.scale) + (boxRef.current?.clientWidth ?? 600) / 2 - 125, y: -(n.y * v.scale) + (boxRef.current?.clientHeight ?? 400) / 2 - 80 })); }}
          aria-label="Focus current node"
          title="Focus current node"
          className="h-8 w-8 rounded-full flex items-center justify-center border border-white/15 text-[#EAE6DA]/60 hover:bg-white/10 cursor-pointer transition-colors"
        >
          <Focus className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Filmstrip */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5">
        {Array.from({ length: graph.totalSteps }, (_, i) => i + 1).map(k => (
          <button
            key={k}
            onClick={() => goToStep(k)}
            aria-label={`Go to step ${k}`}
            className="rounded-full cursor-pointer transition-all"
            style={{
              width: k === step ? 18 : 7,
              height: 7,
              background: k <= step ? GOLD : 'rgba(234,230,218,.25)',
            }}
          />
        ))}
      </div>

      {/* Dossier — the WHY panel */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-[#101013]/95 backdrop-blur px-5 py-4">
        {activeEdge ? (
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em]">
              <span style={{ color: GOLD }}>◆ {activeEdge.label}</span>
              <span className="text-[#6E695F] uppercase">Why this connection</span>
            </div>
            <p className="mt-1.5 text-[13px] leading-relaxed text-[#EAE6DA]/90">{activeEdge.why}</p>
          </div>
        ) : (
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em]">
              <span style={{ color: GOLD }}>◆ {sourceNode.ref}</span>
              <span className="text-[#6E695F] uppercase">Why this thread is a thread</span>
            </div>
            <p className="mt-1.5 text-[13px] leading-relaxed text-[#EAE6DA]/90">
              {snippet(sourceNode.body, 260)}
            </p>
          </div>
        )}
        <div className="mt-2 text-[10px] font-mono tracking-[0.14em] text-[#6E695F]">
          Drag to pan · Scroll to zoom · Click a node to travel
        </div>
      </div>
    </div>
  );
}
