import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Focus,
  RotateCcw,
  Captions,
  Camera,
  ChevronDown,
} from 'lucide-react';
import { snippet, type ThreadGraph, type MapNode, type MapEdge } from './threadMapModel';
import { cn } from '@/lib/utils';

/**
 * Ordo — the cinematic mindmap view of a single thread.
 *
 * Ported from the "Ordo Propheticus" design language, upgraded into a
 * coherent ten-feature experience:
 *  1. on-curve edge labels      6. expandable verse reader on nodes
 *  2. edge hover tooltips       7. breathing active node
 *  3. flowing connections       8. overview minimap
 *  4. cinematic camera glide    9. keyboard journey (arrows/Space/Home/End/F)
 *  5. typewriter narration     10. persistent journey preferences
 * Ships in light (parchment) and dark (ink) palettes.
 */

export type MapTheme = 'dark' | 'light';

interface Palette {
  bg: string;
  cardBg: string;
  text: string;
  dim: string;
  mute: string;
  border: string;
  gold: string;
  goldBright: string;
  steel: string;
  starRGBA: string;
  starAlpha: number;
  dossierBg: string;
  ctrlBorder: string;
  watermark: string;
  labelHalo: string;
  panelBg: string;
}

const PALETTES: Record<MapTheme, Palette> = {
  dark: {
    bg: '#0B0B0D',
    cardBg: 'linear-gradient(160deg, rgba(25,25,32,.92), rgba(11,11,13,.96))',
    text: '#EAE6DA',
    dim: 'rgba(166,161,150,.95)',
    mute: '#6E695F',
    border: 'rgba(234,230,218,.14)',
    gold: '#C8A24B',
    goldBright: '#E8CF8F',
    steel: '#7FA0C4',
    starRGBA: '234, 230, 218',
    starAlpha: 0.35,
    dossierBg: 'rgba(16,16,19,.95)',
    ctrlBorder: 'rgba(255,255,255,.15)',
    watermark: 'rgba(255,255,255,.05)',
    labelHalo: 'rgba(11,11,13,.85)',
    panelBg: 'rgba(16,16,19,.85)',
  },
  light: {
    bg: '#FAF9F6',
    cardBg: 'linear-gradient(160deg, #FFFFFF, #F5F3EC)',
    text: '#2C2C2C',
    dim: '#5A564E',
    mute: '#8A857B',
    border: 'rgba(44,44,44,.16)',
    gold: '#A67C2E',
    goldBright: '#8A6A24',
    steel: '#3C5168',
    starRGBA: '44, 44, 44',
    starAlpha: 0.1,
    dossierBg: 'rgba(255,255,255,.95)',
    ctrlBorder: 'rgba(44,44,44,.22)',
    watermark: 'rgba(44,44,44,.05)',
    labelHalo: 'rgba(250,249,246,.85)',
    panelBg: 'rgba(250,249,246,.88)',
  },
};

const NODE_W = 250;

function strandColor(strand: MapNode['strand'], P: Palette): string {
  return strand === 'gold' ? P.gold : P.steel;
}

/* 10 · persistent journey preferences */
export interface OrdoSettings {
  narration: boolean;
  camera: boolean;
  autoplay: boolean;
}
const ORDO_KEY = 'threads-bible-ordo';
const ORDO_DEFAULTS: OrdoSettings = { narration: true, camera: true, autoplay: true };

function loadOrdoSettings(): OrdoSettings {
  try {
    const raw = localStorage.getItem(ORDO_KEY);
    if (raw) return { ...ORDO_DEFAULTS, ...(JSON.parse(raw) as Partial<OrdoSettings>) };
  } catch {
    // storage unavailable — defaults
  }
  return { ...ORDO_DEFAULTS };
}

function useOrdoSettings(): [OrdoSettings, (patch: Partial<OrdoSettings>) => void] {
  const [settings, setSettings] = useState<OrdoSettings>(loadOrdoSettings);
  const update = (patch: Partial<OrdoSettings>) =>
    setSettings(s => {
      const next = { ...s, ...patch };
      try {
        localStorage.setItem(ORDO_KEY, JSON.stringify(next));
      } catch {
        // storage unavailable — in-memory only
      }
      return next;
    });
  return [settings, update];
}

function useStarfield(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  boxRef: React.RefObject<HTMLDivElement | null>,
  P: Palette
) {
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
        const twinkle = P.starAlpha + P.starAlpha * 0.8 * Math.sin(t * 0.0012 + s.tw);
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${P.starRGBA}, ${twinkle.toFixed(3)})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [canvasRef, boxRef, P]);
}

interface SizeEntry { w: number; h: number }
interface EdgeMid { x: number; y: number; angle: number }

export function ThreadMap({ graph, theme = 'dark' }: { graph: ThreadGraph; theme?: MapTheme }) {
  const P = useMemo(() => PALETTES[theme], [theme]);
  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodeRefs = useRef(new Map<string, HTMLElement>());
  const edgeLayer = React.useRef<SVGSVGElement>(null);
  const [sizes, setSizes] = useState<Record<string, SizeEntry>>({});
  const reduceMotion =
    typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  /* 10 · preferences (persisted) — autoplay seeds the initial playback */
  const [settings, updateSettings] = useOrdoSettings();
  const [step, setStep] = useState(1);
  const [playing, setPlaying] = useState(settings.autoplay && !reduceMotion);
  const [view, setView] = useState({ x: 0, y: 0, scale: 1 });
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [hoveredEdge, setHoveredEdge] = useState<string | null>(null);
  const [edgeMids, setEdgeMids] = useState<Record<string, EdgeMid>>({});
  const [boxSize, setBoxSize] = useState({ w: 0, h: 0 });
  const dragRef = useRef<{ sx: number; sy: number; ox: number; oy: number } | null>(null);
  const glideRef = useRef<number>(0);
  const viewRef = useRef(view);
  viewRef.current = view;

  useStarfield(canvasRef, boxRef, P);

  // Track the map surface size (viewport rect + camera framing).
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const ro = new ResizeObserver(() => setBoxSize({ w: box.clientWidth, h: box.clientHeight }));
    ro.observe(box);
    setBoxSize({ w: box.clientWidth, h: box.clientHeight });
    return () => ro.disconnect();
  }, []);

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
  }, [graph, expanded]);

  // Playback: auto-advance while playing.
  useEffect(() => {
    if (!playing) return;
    const t = window.setInterval(() => {
      setStep(s => (s >= graph.totalSteps ? 1 : s + 1));
    }, 4200);
    return () => window.clearInterval(t);
  }, [playing, graph.totalSteps]);

  // A new thread restarts the walkthrough from the beginning, playing.
  const threadKey = graph.nodes[0]?.id ?? '';
  const prevThreadKey = useRef(threadKey);
  useEffect(() => {
    if (prevThreadKey.current !== threadKey) {
      prevThreadKey.current = threadKey;
      setStep(1);
      setPlaying(settings.autoplay && !reduceMotion);
    }
  }, [threadKey, settings.autoplay, reduceMotion]);

  const goToStep = (k: number) => {
    setStep(Math.min(graph.totalSteps, Math.max(1, k)));
  };

  /* 4 · cinematic camera — eased glide to frame the active connection */
  const glideTo = (target: { x: number; y: number; scale: number }, dur = 950) => {
    if (reduceMotion) {
      setView(target);
      return;
    }
    cancelAnimationFrame(glideRef.current);
    const from = { ...viewRef.current };
    const t0 = performance.now();
    const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    const frame = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = ease(p);
      setView({
        x: from.x + (target.x - from.x) * e,
        y: from.y + (target.y - from.y) * e,
        scale: from.scale + (target.scale - from.scale) * e,
      });
      if (p < 1) glideRef.current = requestAnimationFrame(frame);
    };
    glideRef.current = requestAnimationFrame(frame);
  };
  const cancelGlide = () => cancelAnimationFrame(glideRef.current);

  // Camera targets: frame the source and the step's fulfillment together.
  const frameForStep = (k: number): { x: number; y: number; scale: number } => {
    const w = boxSize.w || 800;
    const h = boxSize.h || 500;
    const source = graph.nodes[0];
    const target = graph.nodes.find(n => n.step === k) ?? source;
    const sa = sizes[source.id] ?? { w: NODE_W, h: 160 };
    const sb = sizes[target.id] ?? { w: NODE_W, h: 160 };
    const midX = (source.x + sa.w / 2 + target.x + sb.w / 2) / 2;
    const midY = (source.y + sa.h / 2 + target.y + sb.h / 2) / 2;
    const span = Math.max(Math.abs(target.x - source.x) + NODE_W, 560);
    const scale = Math.min(1, Math.max(0.55, (w - 60) / span));
    return { x: -(midX * scale) + w / 2, y: -(midY * scale) + h / 2, scale };
  };

  useEffect(() => {
    if (!settings.camera || boxSize.w === 0) return;
    glideTo(frameForStep(step));
    // eslint-disable-next-line react-hooks/exhaustive-deps -- glide on every step change
  }, [step, settings.camera, boxSize.w]);

  const focusCurrent = () => {
    const n = graph.nodes.find(x => x.step === step) ?? graph.nodes[0];
    if (!n) return;
    const w = boxSize.w || 800;
    const h = boxSize.h || 500;
    glideTo({ x: -n.x + w / 2 - NODE_W / 2, y: -n.y + h / 2 - 80, scale: 1 });
  };

  /* 9 · keyboard journey */
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault();
          goToStep(step + 1);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          goToStep(step - 1);
          break;
        case ' ':
          e.preventDefault();
          setPlaying(p => {
            updateSettings({ autoplay: !p });
            return !p;
          });
          break;
        case 'Home':
          e.preventDefault();
          goToStep(1);
          break;
        case 'End':
          e.preventDefault();
          goToStep(graph.totalSteps);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          focusCurrent();
          break;
      }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- handlers read the current step
  }, [step, settings, graph.totalSteps]);

  // Pan / zoom — native non-passive wheel listener (React wheel is passive).
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const onWheelNative = (e: WheelEvent) => {
      e.preventDefault();
      cancelGlide();
      setView(v => ({ ...v, scale: Math.min(2.2, Math.max(0.35, v.scale * (e.deltaY < 0 ? 1.1 : 0.9))) }));
    };
    el.addEventListener('wheel', onWheelNative, { passive: false });
    return () => el.removeEventListener('wheel', onWheelNative);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mount only
  }, []);
  const onPointerDown = (e: React.PointerEvent) => {
    cancelGlide();
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
    const byId = new Map(graph.nodes.map(n => [n.id, { ...n, size: sizes[n.id] ?? { w: NODE_W, h: 160 } }]));
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
      return { edge: e, d, active, current };
    });
    return paths.filter(Boolean) as { edge: MapEdge; d: string; active: boolean; current: boolean }[];
  }, [graph, sizes, step]);

  // Animated reveal of newly activated edges (dash draw + traveling dot).
  useEffect(() => {
    const svg = edgeLayer.current;
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

  /* 1 · on-curve labels — measure each path's midpoint and slope */
  useEffect(() => {
    const svg = edgeLayer.current;
    if (!svg) return;
    const next: Record<string, EdgeMid> = {};
    for (const g of geometry) {
      const path = svg.querySelector<SVGPathElement>(`[data-edge="${g.edge.id}"]`);
      if (!path) continue;
      let len = 800;
      try { len = path.getTotalLength(); } catch { len = 800; }
      const pt = path.getPointAtLength(len / 2);
      const pt2 = path.getPointAtLength(Math.min(len, len / 2 + 1));
      let angle = (Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * 180) / Math.PI;
      if (angle > 90) angle -= 180;
      if (angle < -90) angle += 180;
      next[g.edge.id] = { x: pt.x, y: pt.y, angle };
    }
    setEdgeMids(next);
  }, [geometry]);

  const activeEdge = graph.edges.find(e => e.step === step) ?? null;
  const sourceNode = graph.nodes[0];
  const currentNode = graph.nodes.find(n => n.step === step) ?? sourceNode;

  /* 5 · typewriter narration — the dossier types the active why */
  const introText = `The thread begins at ${sourceNode.ref} — “${sourceNode.body}”. ${graph.edges.length} connection${graph.edges.length === 1 ? '' : 's'} lead${graph.edges.length === 1 ? 's' : ''} from here.`;
  const narratedText = activeEdge ? activeEdge.why : introText;
  const [typedCount, setTypedCount] = useState(narratedText.length);
  useEffect(() => {
    if (!settings.narration || reduceMotion) {
      setTypedCount(narratedText.length);
      return;
    }
    setTypedCount(0);
    const iv = window.setInterval(() => {
      setTypedCount(n => {
        if (n >= narratedText.length) {
          window.clearInterval(iv);
          return n;
        }
        return n + 2;
      });
    }, 16);
    return () => window.clearInterval(iv);
  }, [narratedText, settings.narration, reduceMotion]);
  const typed = narratedText.slice(0, typedCount);
  const typing = typedCount < narratedText.length;

  /* 8 · overview minimap geometry */
  const world = useMemo(() => {
    if (graph.nodes.length === 0) return null;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const n of graph.nodes) {
      const s = sizes[n.id] ?? { w: NODE_W, h: 160 };
      minX = Math.min(minX, n.x);
      minY = Math.min(minY, n.y);
      maxX = Math.max(maxX, n.x + s.w);
      maxY = Math.max(maxY, n.y + s.h);
    }
    minX -= 30; minY -= 30; maxX += 30; maxY += 30;
    return { minX, minY, w: maxX - minX, h: maxY - minY };
  }, [graph, sizes]);

  const minimapW = 148;
  const minimapH = world ? Math.max(64, Math.min(110, (world.h / world.w) * minimapW)) : 64;
  const minimapScale = world ? Math.min(minimapW / world.w, minimapH / world.h) : 1;
  const minimapPoint = (wx: number, wy: number) => ({
    x: (wx - (world?.minX ?? 0)) * minimapScale,
    y: (wy - (world?.minY ?? 0)) * minimapScale,
  });
  const minimapJump = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const wx = (e.clientX - rect.left) / minimapScale + (world?.minX ?? 0);
    const wy = (e.clientY - rect.top) / minimapScale + (world?.minY ?? 0);
    cancelGlide();
    setView(v => ({ ...v, x: -(wx * v.scale) + (boxSize.w || 800) / 2, y: -(wy * v.scale) + (boxSize.h || 500) / 2 }));
  };

  const toggleExpanded = (id: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const hovered = hoveredEdge ? graph.edges.find(e => e.id === hoveredEdge) ?? null : null;
  const hoveredMid = hoveredEdge ? edgeMids[hoveredEdge] : undefined;

  return (
    <div className="relative h-full w-full overflow-hidden select-none" style={{ background: P.bg }}>
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
          <svg className="pointer-events-none absolute left-0 top-0 overflow-visible" width={1} height={1} ref={edgeLayer}>
            <defs>
              {graph.edges.map(e => {
                const from = graph.nodes[0];
                const to = graph.nodes.find(n => n.id === e.to);
                const fs = sizes[from.id] ?? { w: NODE_W, h: 160 };
                const ts = sizes[to?.id ?? ''] ?? { w: NODE_W, h: 160 };
                return (
                  <linearGradient key={e.id} id={`eg-${e.id}`} gradientUnits="userSpaceOnUse"
                    x1={from.x + fs.w / 2} y1={from.y + fs.h / 2}
                    x2={(to?.x ?? 0) + ts.w / 2} y2={(to?.y ?? 0) + ts.h / 2}>
                    <stop offset="0%" stopColor={P.gold} />
                    <stop offset="100%" stopColor={P.steel} />
                  </linearGradient>
                );
              })}
            </defs>
            {geometry.map(g => {
              const mid = edgeMids[g.edge.id];
              const label = g.edge.label.replace(/^Thread → /, '');
              return (
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
                  {/* 3 · flowing energy on the current connection */}
                  {g.current && (
                    <path
                      d={g.d}
                      fill="none"
                      stroke={P.goldBright}
                      strokeWidth={2.6}
                      strokeLinecap="round"
                      className="ordo-flow"
                      opacity={0.95}
                    />
                  )}
                  {/* 2 · wide invisible hover hit-area */}
                  <path
                    d={g.d}
                    fill="none"
                    stroke="rgba(0,0,0,0)"
                    strokeWidth={16}
                    pointerEvents="stroke"
                    onPointerEnter={() => setHoveredEdge(g.edge.id)}
                    onPointerLeave={() => setHoveredEdge(h => (h === g.edge.id ? null : h))}
                  />
                  <defs>
                    <marker id={`mk-${g.edge.id}`} viewBox="0 0 10 10" refX={7.5} refY={5} markerWidth={6.5} markerHeight={6.5} orient="auto-start-reverse">
                      <path d="M0,0 L10,5 L0,10 z" fill={P.steel} />
                    </marker>
                  </defs>
                  {/* 1 · on-curve label */}
                  {mid && g.active && (
                    <g transform={`translate(${mid.x}, ${mid.y - 8}) rotate(${mid.angle})`} pointerEvents="none">
                      <text
                        textAnchor="middle"
                        fontFamily="IBM Plex Mono, monospace"
                        fontSize={9}
                        fill={P.text}
                        stroke={P.labelHalo}
                        strokeWidth={3}
                        paintOrder="stroke"
                      >
                        {label}
                      </text>
                    </g>
                  )}
                  <circle data-dot={g.edge.id} r={5} fill={P.steel} style={{ opacity: 0 }} />
                </React.Fragment>
              );
            })}
          </svg>

          {graph.nodes.map(n => {
            const visible = n.step <= step;
            const active = n.step === step;
            const color = strandColor(n.strand, P);
            const isExpanded = expanded.has(n.id);
            return (
              <article
                key={n.id}
                ref={el => {
                  if (el) nodeRefs.current.set(n.id, el);
                  else nodeRefs.current.delete(n.id);
                }}
                onClick={() => goToStep(n.step)}
                className={cn(
                  'absolute rounded-xl border backdrop-blur-[2px] transition-all duration-500 cursor-pointer',
                  active && 'ordo-breathe'
                )}
                style={{
                  left: n.x,
                  top: n.y,
                  width: NODE_W,
                  borderColor: active ? color : P.border,
                  boxShadow: active ? `0 0 34px -12px ${color}` : 'none',
                  background: P.cardBg,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(14px)',
                }}
              >
                <span className="absolute font-serif font-light select-none" style={{ fontSize: 78, right: 10, top: -6, color: P.watermark }}>
                  {String(n.step).padStart(2, '0')}
                </span>
                <div className="relative px-4 pt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.2em]">
                  <span style={{ color }} className="font-semibold">◆ {String(n.step).padStart(2, '0')}</span>
                  <span className="uppercase" style={{ color: P.mute }}>
                    {n.kind === 'source' ? 'Thread Source' : 'Connection'}
                  </span>
                </div>
                <h3 className="relative font-serif font-medium text-[16px] leading-snug px-4 pt-2 pr-10" style={{ color: P.text }}>
                  {n.kind === 'source' ? n.title : n.ref}
                </h3>
                <p className="relative px-4 pt-1.5 text-[11.5px] leading-relaxed" style={{ color: P.dim }}>
                  {n.body || '…'}
                </p>
                {/* 6 · expandable verse reader */}
                {isExpanded && (
                  <div
                    className="relative mx-4 mt-2 mb-1 max-h-44 overflow-y-auto rounded-lg border px-3 py-2 text-[11.5px] leading-relaxed font-serif"
                    style={{ borderColor: P.border, color: P.text, background: 'rgba(0,0,0,.06)' }}
                  >
                    {n.fullText}
                  </div>
                )}
                <div className="relative px-4 pb-3 pt-2.5 flex items-center justify-between gap-2 font-mono text-[9px] tracking-[0.14em]">
                  <span style={{ color }}>{n.kind === 'source' ? n.ref : 'OPEN THE PASSAGE →'}</span>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      toggleExpanded(n.id);
                    }}
                    aria-label={isExpanded ? 'Collapse the full passage' : 'Read the full passage'}
                    title={isExpanded ? 'Collapse' : 'Read the full passage'}
                    className="h-5 w-5 rounded-full flex items-center justify-center border cursor-pointer transition-transform"
                    style={{ borderColor: P.border, color: P.dim, transform: isExpanded ? 'rotate(180deg)' : 'none' }}
                  >
                    <ChevronDown className="h-3 w-3" />
                  </button>
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
          title="Previous step (←)"
          className="h-8 w-8 rounded-full flex items-center justify-center border cursor-pointer transition-colors"
          style={{ borderColor: P.ctrlBorder, color: P.text }}
        >
          <SkipBack className="h-3.5 w-3.5" />
        </button>
        <button
          onClick={() => {
            setPlaying(p => {
              updateSettings({ autoplay: !p });
              return !p;
            });
          }}
          aria-label={playing ? 'Pause the walkthrough (Space)' : 'Play the walkthrough (Space)'}
          title={playing ? 'Pause (Space)' : 'Play (Space)'}
          className="h-8 w-8 rounded-full flex items-center justify-center border cursor-pointer transition-colors"
          style={{ borderColor: P.gold, color: P.goldBright, background: `${P.gold}33` }}
        >
          {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
        </button>
        <button
          onClick={() => goToStep(step + 1)}
          aria-label="Next step"
          title="Next step (→)"
          className="h-8 w-8 rounded-full flex items-center justify-center border cursor-pointer transition-colors"
          style={{ borderColor: P.ctrlBorder, color: P.text }}
        >
          <SkipForward className="h-3.5 w-3.5" />
        </button>
        <span className="ml-1 font-mono text-[10px] tracking-[0.2em]" style={{ color: P.mute }}>
          {String(step).padStart(2, '0')} / {String(graph.totalSteps).padStart(2, '0')}
        </span>
        {/* 5 · narration toggle */}
        <button
          onClick={() => updateSettings({ narration: !settings.narration })}
          aria-label="Toggle typewriter narration"
          title="Narration captions"
          aria-pressed={settings.narration}
          className="h-8 w-8 rounded-full flex items-center justify-center border cursor-pointer transition-colors"
          style={
            settings.narration
              ? { borderColor: P.gold, color: P.goldBright, background: `${P.gold}26` }
              : { borderColor: P.ctrlBorder, color: P.dim }
          }
        >
          <Captions className="h-3.5 w-3.5" />
        </button>
        {/* 4 · camera follow toggle */}
        <button
          onClick={() => updateSettings({ camera: !settings.camera })}
          aria-label="Toggle cinematic camera"
          title="Cinematic camera"
          aria-pressed={settings.camera}
          className="h-8 w-8 rounded-full flex items-center justify-center border cursor-pointer transition-colors"
          style={
            settings.camera
              ? { borderColor: P.gold, color: P.goldBright, background: `${P.gold}26` }
              : { borderColor: P.ctrlBorder, color: P.dim }
          }
        >
          <Camera className="h-3.5 w-3.5" />
        </button>
        <button
          onClick={() => setView({ x: 0, y: 0, scale: 1 })}
          aria-label="Reset view"
          title="Reset view"
          className="ml-2 h-8 w-8 rounded-full flex items-center justify-center border cursor-pointer transition-colors"
          style={{ borderColor: P.ctrlBorder, color: P.dim }}
        >
          <RotateCcw className="h-3 w-3" />
        </button>
        <button
          onClick={focusCurrent}
          aria-label="Focus current node"
          title="Focus current node (F)"
          className="h-8 w-8 rounded-full flex items-center justify-center border cursor-pointer transition-colors"
          style={{ borderColor: P.ctrlBorder, color: P.dim }}
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
              background: k <= step ? P.gold : P.mute,
            }}
          />
        ))}
      </div>

      {/* 8 · overview minimap */}
      {world && graph.nodes.length > 1 && (
        <svg
          className="absolute right-4 z-10 rounded-lg border cursor-pointer shadow-lg"
          style={{
            bottom: 118,
            width: minimapW,
            height: minimapH,
            borderColor: P.border,
            background: P.panelBg,
          }}
          onClick={minimapJump}
          role="img"
          aria-label="Map overview — click to navigate"
        >
          {graph.edges.map(e => {
            const a = graph.nodes.find(n => n.id === e.from);
            const b = graph.nodes.find(n => n.id === e.to);
            if (!a || !b) return null;
            const p1 = minimapPoint(a.x + 100, a.y + 70);
            const p2 = minimapPoint(b.x + 100, b.y + 70);
            return <line key={e.id} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={P.mute} strokeWidth={0.7} opacity={e.step <= step ? 0.9 : 0.35} />;
          })}
          {graph.nodes.map(n => {
            const p = minimapPoint(n.x, n.y);
            const s = sizes[n.id] ?? { w: NODE_W, h: 160 };
            const w2 = s.w * minimapScale;
            const h2 = s.h * minimapScale;
            return (
              <rect
                key={n.id}
                x={p.x}
                y={p.y}
                width={Math.max(3, w2)}
                height={Math.max(2.5, h2)}
                rx={1.5}
                fill={n.step === step ? P.gold : n.step <= step ? P.steel : P.mute}
                opacity={n.step === step ? 1 : 0.6}
              />
            );
          })}
          <rect
            x={(-view.x / view.scale - (world?.minX ?? 0)) * minimapScale}
            y={(-view.y / view.scale - (world?.minY ?? 0)) * minimapScale}
            width={(boxSize.w / view.scale) * minimapScale}
            height={(boxSize.h / view.scale) * minimapScale}
            fill="none"
            stroke={P.goldBright}
            strokeWidth={1}
            opacity={0.9}
          />
        </svg>
      )}

      {/* 2 · edge hover tooltip */}
      {hovered && hoveredMid && (
        <div
          className="absolute z-20 max-w-[300px] rounded-lg border px-3 py-2 text-[11px] leading-relaxed shadow-xl pointer-events-none"
          style={{
            left: Math.min(Math.max(8, view.x + hoveredMid.x * view.scale - 130), (boxSize.w || 800) - 310),
            top: Math.max(8, view.y + hoveredMid.y * view.scale - 10),
            borderColor: P.border,
            background: P.dossierBg,
            color: P.text,
            backdropFilter: 'blur(6px)',
          }}
        >
          <div className="font-mono text-[9px] tracking-[0.18em] mb-1" style={{ color: P.gold }}>
            {hovered.label}
          </div>
          {hovered.why}
        </div>
      )}

      {/* 5 · dossier — the WHY panel with typewriter narration */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t px-5 py-4 backdrop-blur" style={{ borderColor: P.border, background: P.dossierBg }}>
        {activeEdge ? (
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em]">
              <span style={{ color: P.gold }}>◆ {activeEdge.label}</span>
              <span className="uppercase" style={{ color: P.mute }}>Why this connection</span>
            </div>
            <p className="mt-1.5 text-[13px] leading-relaxed min-h-[2.6em]" style={{ color: P.text }}>
              {typed}
              {typing && <span className="ordo-caret" style={{ color: P.gold }}>▍</span>}
            </p>
          </div>
        ) : (
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em]">
              <span style={{ color: P.gold }}>◆ {sourceNode.ref}</span>
              <span className="uppercase" style={{ color: P.mute }}>Why this thread is a thread</span>
            </div>
            <p className="mt-1.5 text-[13px] leading-relaxed min-h-[2.6em]" style={{ color: P.text }}>
              {typed}
              {typing && <span className="ordo-caret" style={{ color: P.gold }}>▍</span>}
            </p>
          </div>
        )}
        {/* 9 · keyboard help */}
        <div className="mt-2 text-[10px] font-mono tracking-[0.14em]" style={{ color: P.mute }}>
          ←/→ steps · Space plays · Home/End jumps · F focuses · hover an arrow for its why
        </div>
      </div>
    </div>
  );
}
