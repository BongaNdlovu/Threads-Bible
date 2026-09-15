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
  ChevronUp,
  Landmark,
  Sparkles,
  BookOpen,
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Search,
  SlidersHorizontal,
  Compass,
  Columns,
  Grid,
} from 'lucide-react';
import { useStore } from '../store/useStore';
import {
  type ThreadGraph,
  type MapNode,
  type MapEdge,
  type MapLayoutMode,
  type MapSpacingMode,
  type NodePosition,
  computeThreadLayout,
} from './threadMapModel';
import { cn } from '@/lib/utils';

/**
 * Ordo — the cinematic mindmap view of a single biblical thread.
 *
 * Upgraded with:
 *  1. Collision-free dynamic layout engine (Column, Radial Arc, Two-Column Grid)
 *  2. Non-overlapping staggered SVG edge label badges with readability clamping
 *  3. Non-overlapping minimap dynamically positioned above collapsible dossier
 *  4. Unified floating controls with integrated step scrubber & tour speed
 *  5. Full-featured in-map node search & filter (with `/` shortcut & match cycle)
 *  6. Zoom In, Zoom Out, Auto-Fit All (`0`), Focus Node (`F`), and Reset View
 *  7. Multi-touch pinch-to-zoom and drag panning for mobile/tablet devices
 *  8. Collapsible 5-pillar interrogation dossier (Ultimate Point, What, When, How, Why)
 *  9. Fullscreen canvas mode toggle
 * 10. Persistent preferences across sessions
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
    cardBg: 'linear-gradient(160deg, rgba(25,25,32,.94), rgba(11,11,13,.98))',
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
    labelHalo: 'rgba(11,11,13,.90)',
    panelBg: 'rgba(16,16,19,.90)',
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
    labelHalo: 'rgba(250,249,246,.90)',
    panelBg: 'rgba(250,249,246,.92)',
  },
};

const NODE_W = 250;

function strandColor(strand: MapNode['strand'], P: Palette): string {
  return strand === 'gold' ? P.gold : P.steel;
}

export interface OrdoSettings {
  narration: boolean;
  camera: boolean;
  autoplay: boolean;
  layoutMode: MapLayoutMode;
  spacingMode: MapSpacingMode;
  tourSpeed: number;
  showMinimap: boolean;
  dossierCollapsed: boolean;
}

const ORDO_KEY = 'threads-bible-ordo-v2';
const ORDO_DEFAULTS: OrdoSettings = {
  narration: true,
  camera: true,
  autoplay: true,
  layoutMode: 'column',
  spacingMode: 'normal',
  tourSpeed: 1,
  showMinimap: true,
  dossierCollapsed: false,
};

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

interface SizeEntry {
  w: number;
  h: number;
}
interface EdgeMid {
  x: number;
  y: number;
  angle: number;
}

export function ThreadMap({
  graph,
  theme = 'dark',
  isFullscreen = false,
  onToggleFullscreen,
}: {
  graph: ThreadGraph;
  theme?: MapTheme;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
}) {
  const P = useMemo(() => PALETTES[theme], [theme]);
  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodeRefs = useRef(new Map<string, HTMLElement>());
  const edgeLayer = React.useRef<SVGSVGElement>(null);
  const dossierRef = useRef<HTMLDivElement>(null);

  const [sizes, setSizes] = useState<Record<string, SizeEntry>>({});
  const [dossierHeight, setDossierHeight] = useState(170);

  const reduceMotion =
    typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  /* Persistent settings */
  const [settings, updateSettings] = useOrdoSettings();
  const [step, setStep] = useState(1);
  const [playing, setPlaying] = useState(settings.autoplay && !reduceMotion);
  const [view, setView] = useState({ x: 0, y: 0, scale: 1 });
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [hoveredEdge, setHoveredEdge] = useState<string | null>(null);
  const [edgeMids, setEdgeMids] = useState<Record<string, EdgeMid>>({});
  const [boxSize, setBoxSize] = useState({ w: 0, h: 0 });

  /* Map Search State */
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  /* Layout Dropdown State & Ref for click-outside */
  const [layoutMenuOpen, setLayoutMenuOpen] = useState(false);
  const layoutMenuRef = useRef<HTMLDivElement>(null);

  /* Top Bar Ref & Height measurement to prevent floating controls collision */
  const topBarRef = useRef<HTMLDivElement>(null);
  const [topBarHeight, setTopBarHeight] = useState(48);

  /* Store integration */
  const { setHistoricalContextOpen } = useStore();
  const [dossierTab, setDossierTab] = useState<'ultimate' | 'what' | 'when' | 'how' | 'why'>('ultimate');
  const [scholarlyModalOpen, setScholarlyModalOpen] = useState(false);

  // Click-outside listener for layout mode dropdown
  useEffect(() => {
    if (!layoutMenuOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (layoutMenuRef.current && !layoutMenuRef.current.contains(e.target as Node)) {
        setLayoutMenuOpen(false);
      }
    };
    window.addEventListener('mousedown', onClickOutside);
    return () => window.removeEventListener('mousedown', onClickOutside);
  }, [layoutMenuOpen]);

  // Intercept Escape to close sub-modals without closing ThreadMapPage
  useEffect(() => {
    if (!scholarlyModalOpen && !isSearchOpen && !layoutMenuOpen) return;
    const onEscapeCapture = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        e.preventDefault();
        if (scholarlyModalOpen) setScholarlyModalOpen(false);
        else if (isSearchOpen) {
          setIsSearchOpen(false);
          setSearchQuery('');
        } else if (layoutMenuOpen) {
          setLayoutMenuOpen(false);
        }
      }
    };
    window.addEventListener('keydown', onEscapeCapture, true);
    return () => window.removeEventListener('keydown', onEscapeCapture, true);
  }, [scholarlyModalOpen, isSearchOpen, layoutMenuOpen]);

  const dragRef = useRef<{ sx: number; sy: number; ox: number; oy: number } | null>(null);
  const activePointers = useRef(new Map<number, { x: number; y: number }>());
  const pinchStartDist = useRef<number | null>(null);
  const pinchStartScale = useRef<number>(1);
  const glideRef = useRef<number>(0);
  const viewRef = useRef(view);
  viewRef.current = view;

  useStarfield(canvasRef, boxRef, P);

  // Track map surface size
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const ro = new ResizeObserver(() => setBoxSize({ w: box.clientWidth, h: box.clientHeight }));
    ro.observe(box);
    setBoxSize({ w: box.clientWidth, h: box.clientHeight });
    return () => ro.disconnect();
  }, []);

  // Track top controls bar height dynamically to guarantee top reserve matches actual toolbar height
  useEffect(() => {
    const el = topBarRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      if (el.offsetHeight > 0) setTopBarHeight(el.offsetHeight);
    });
    ro.observe(el);
    setTopBarHeight(el.offsetHeight || 48);
    return () => ro.disconnect();
  }, [isSearchOpen, layoutMenuOpen]);

  // Track dossier height dynamically to guarantee minimap and camera never overlap dossier
  useEffect(() => {
    const el = dossierRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      if (el.offsetHeight > 0) setDossierHeight(el.offsetHeight);
    });
    ro.observe(el);
    setDossierHeight(el.offsetHeight || 170);
    return () => ro.disconnect();
  }, [settings.dossierCollapsed, step, dossierTab]);

  // Measure card sizes when nodes render or expand
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

  // Compute collision-free node positions dynamically using measured card heights
  const positions = useMemo(() => {
    return computeThreadLayout(graph, {
      mode: settings.layoutMode,
      spacing: settings.spacingMode,
      nodeSizes: sizes,
      nodeWidth: NODE_W,
    });
  }, [graph, sizes, settings.layoutMode, settings.spacingMode]);

  // Auto-advance tour while playing
  useEffect(() => {
    if (!playing) return;
    const interval = Math.round(4200 / (settings.tourSpeed || 1));
    const t = window.setInterval(() => {
      setStep(s => (s >= graph.totalSteps ? 1 : s + 1));
    }, interval);
    return () => window.clearInterval(t);
  }, [playing, graph.totalSteps, settings.tourSpeed]);

  // A new thread restarts walkthrough
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

  /* Cinematic Camera glide */
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

  // Compute camera target to frame active connection safely above dossier and below top bar
  const frameForStep = (k: number): { x: number; y: number; scale: number } => {
    const w = boxSize.w || 800;
    const h = boxSize.h || 500;
    const bottomReserve = settings.dossierCollapsed ? 48 : dossierHeight + 16;
    const topReserve = Math.max(56, topBarHeight + 14);
    const usableH = Math.max(180, h - bottomReserve - topReserve);

    const source = graph.nodes[0];
    const target = graph.nodes.find(n => n.step === k) ?? source;
    const posA = positions[source.id] ?? { x: source.x, y: source.y };
    const posB = positions[target.id] ?? { x: target.x, y: target.y };
    const sa = sizes[source.id] ?? { w: NODE_W, h: 160 };
    const sb = sizes[target.id] ?? { w: NODE_W, h: 160 };

    const midX = (posA.x + sa.w / 2 + posB.x + sb.w / 2) / 2;
    const midY = (posA.y + sa.h / 2 + posB.y + sb.h / 2) / 2;
    const spanX = Math.abs(posB.x - posA.x) + NODE_W + 90;
    const spanY = Math.abs(posB.y - posA.y) + Math.max(sa.h, sb.h) + 60;

    const scaleX = Math.min(1, Math.max(0.48, (w - 80) / spanX));
    const scaleY = Math.min(1, Math.max(0.48, (usableH - 30) / spanY));
    const scale = Math.min(scaleX, scaleY);

    return {
      x: -(midX * scale) + w / 2,
      y: -(midY * scale) + (usableH / 2 + topReserve),
      scale,
    };
  };

  useEffect(() => {
    if (!settings.camera || boxSize.w === 0) return;
    glideTo(frameForStep(step));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, settings.camera, boxSize.w, boxSize.h, positions, settings.dossierCollapsed, dossierHeight, topBarHeight]);

  /* Focus current active selection centered safely in usable viewport */
  const focusCurrent = () => {
    glideTo(frameForStep(step));
  };

  /* Auto-Fit All nodes within visible canvas */
  const fitAll = () => {
    if (!world) return;
    const w = boxSize.w || 800;
    const h = boxSize.h || 500;
    const bottomReserve = settings.dossierCollapsed ? 48 : dossierHeight + 16;
    const topReserve = Math.max(56, topBarHeight + 14);
    const usableH = Math.max(180, h - bottomReserve - topReserve);
    const usableW = Math.max(250, w - 80);
    const scaleX = usableW / world.w;
    const scaleY = usableH / world.h;
    const scale = Math.min(1.15, Math.max(0.35, Math.min(scaleX, scaleY)));
    const midX = world.minX + world.w / 2;
    const midY = world.minY + world.h / 2;
    const targetX = -(midX * scale) + w / 2;
    const targetY = -(midY * scale) + (usableH / 2 + topReserve);
    glideTo({ x: targetX, y: targetY, scale });
  };

  const zoomIn = () => {
    cancelGlide();
    setView(v => ({ ...v, scale: Math.min(2.4, Math.round(v.scale * 1.25 * 100) / 100) }));
  };

  const zoomOut = () => {
    cancelGlide();
    setView(v => ({ ...v, scale: Math.max(0.3, Math.round(v.scale * 0.8 * 100) / 100) }));
  };

  /* Search & Filter matching */
  const matchingNodeIds = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return new Set<string>();
    const matches = new Set<string>();
    for (const n of graph.nodes) {
      if (
        n.ref.toLowerCase().includes(q) ||
        n.title.toLowerCase().includes(q) ||
        n.body.toLowerCase().includes(q) ||
        n.fullText.toLowerCase().includes(q)
      ) {
        matches.add(n.id);
      }
    }
    return matches;
  }, [graph, searchQuery]);

  const matchedSteps = useMemo(() => {
    if (matchingNodeIds.size === 0) return [];
    return graph.nodes.filter(n => matchingNodeIds.has(n.id)).map(n => n.step);
  }, [graph, matchingNodeIds]);

  const jumpToNextMatch = () => {
    if (matchedSteps.length === 0) return;
    const next = matchedSteps.find(s => s > step) ?? matchedSteps[0];
    goToStep(next);
  };

  const jumpToPrevMatch = () => {
    if (matchedSteps.length === 0) return;
    const reversed = [...matchedSteps].reverse();
    const prev = reversed.find(s => s < step) ?? reversed[0];
    goToStep(prev);
  };

  const currentMatchIndex = useMemo(() => {
    if (matchedSteps.length === 0) return 0;
    const idx = matchedSteps.indexOf(step);
    return idx >= 0 ? idx + 1 : 0;
  }, [matchedSteps, step]);

  /* Keyboard Navigation */
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const isInput = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
      if (scholarlyModalOpen) return;

      if (e.key === '/' && !isInput) {
        e.preventDefault();
        e.stopPropagation();
        setIsSearchOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 50);
        return;
      }

      if (isInput) {
        if (e.key === 'Escape') {
          e.preventDefault();
          e.stopPropagation();
          setSearchQuery('');
          setIsSearchOpen(false);
          searchInputRef.current?.blur();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (e.shiftKey) {
            jumpToPrevMatch();
          } else {
            jumpToNextMatch();
          }
        }
        return;
      }

      if (/^[1-9]$/.test(e.key)) {
        const num = parseInt(e.key, 10);
        if (num <= graph.totalSteps) {
          e.preventDefault();
          goToStep(num);
          return;
        }
      }

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
        case '0':
          e.preventDefault();
          fitAll();
          break;
        case '+':
        case '=':
          e.preventDefault();
          zoomIn();
          break;
        case '-':
        case '_':
          e.preventDefault();
          zoomOut();
          break;
        case 'c':
        case 'C':
          e.preventDefault();
          updateSettings({ camera: !settings.camera });
          break;
        case 'd':
        case 'D':
          e.preventDefault();
          updateSettings({ dossierCollapsed: !settings.dossierCollapsed });
          break;
        case 'm':
        case 'M':
          e.preventDefault();
          updateSettings({ showMinimap: !settings.showMinimap });
          break;
      }
    };
    window.addEventListener('keydown', h, true);
    return () => window.removeEventListener('keydown', h, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, settings, graph.totalSteps, scholarlyModalOpen, positions, boxSize, sizes, matchedSteps, topBarHeight, dossierHeight]);

  // Non-passive wheel listener for smooth zoom
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const onWheelNative = (e: WheelEvent) => {
      e.preventDefault();
      cancelGlide();
      setView(v => ({ ...v, scale: Math.min(2.4, Math.max(0.3, v.scale * (e.deltaY < 0 ? 1.12 : 0.88))) }));
    };
    el.addEventListener('wheel', onWheelNative, { passive: false });
    return () => el.removeEventListener('wheel', onWheelNative);
  }, []);

  // Multi-touch drag & pinch-to-zoom
  const onPointerDown = (e: React.PointerEvent) => {
    cancelGlide();
    activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (activePointers.current.size === 1) {
      dragRef.current = { sx: e.clientX, sy: e.clientY, ox: view.x, oy: view.y };
    } else if (activePointers.current.size === 2) {
      dragRef.current = null;
      const pts = Array.from(activePointers.current.values());
      pinchStartDist.current = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      pinchStartScale.current = view.scale;
    }
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (activePointers.current.size === 2 && pinchStartDist.current) {
      const pts = Array.from(activePointers.current.values());
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const factor = dist / pinchStartDist.current;
      const targetScale = Math.min(2.4, Math.max(0.3, pinchStartScale.current * factor));
      setView(v => ({ ...v, scale: targetScale }));
      return;
    }
    const d = dragRef.current;
    if (!d || activePointers.current.size !== 1) return;
    setView(v => ({ ...v, x: d.ox + (e.clientX - d.sx), y: d.oy + (e.clientY - d.sy) }));
  };

  const onPointerUp = (e: React.PointerEvent) => {
    activePointers.current.delete(e.pointerId);
    if (activePointers.current.size < 2) pinchStartDist.current = null;
    if (activePointers.current.size === 1) {
      const remaining = Array.from(activePointers.current.values())[0];
      dragRef.current = { sx: remaining.x, sy: remaining.y, ox: view.x, oy: view.y };
    } else {
      dragRef.current = null;
    }
  };

  // Edge geometry adapting dynamically to node positions
  const geometry = useMemo(() => {
    const byId = new Map(
      graph.nodes.map(n => {
        const pos = positions[n.id] ?? { x: n.x, y: n.y };
        return [n.id, { ...n, x: pos.x, y: pos.y, size: sizes[n.id] ?? { w: NODE_W, h: 160 } }];
      })
    );
    const paths = graph.edges.map(e => {
      const a = byId.get(e.from);
      const b = byId.get(e.to);
      if (!a || !b) return null;
      const acx = a.x + a.size.w / 2;
      const acy = a.y + a.size.h / 2;
      const bcx = b.x + b.size.w / 2;
      const bcy = b.y + b.size.h / 2;
      let sx = acx;
      let sy = acy;
      let tx = bcx;
      let ty = bcy;
      let d = '';

      if (bcx > a.x + a.size.w + 20) {
        // B is to the right of A
        sx = a.x + a.size.w + 4;
        sy = acy;
        tx = b.x - 13;
        ty = bcy;
        const dx = tx - sx;
        d = `M ${sx} ${sy} C ${sx + dx * 0.48} ${sy}, ${tx - dx * 0.48} ${ty}, ${tx} ${ty}`;
      } else if (bcx < a.x - 20) {
        // B is to the left of A
        sx = a.x - 4;
        sy = acy;
        tx = b.x + b.size.w + 13;
        ty = bcy;
        const dx = tx - sx;
        d = `M ${sx} ${sy} C ${sx + dx * 0.48} ${sy}, ${tx - dx * 0.48} ${ty}, ${tx} ${ty}`;
      } else {
        // B is roughly above or below A
        sy = acy < bcy ? a.y + a.size.h + 4 : a.y - 4;
        ty = acy < bcy ? b.y - 12 : b.y + b.size.h + 12;
        const dy = ty - sy;
        d = `M ${acx} ${sy} C ${acx} ${sy + dy * 0.5}, ${bcx} ${ty - dy * 0.5}, ${bcx} ${ty}`;
      }
      const active = e.step <= step;
      const current = e.step === step;
      return { edge: e, d, active, current, start: { x: sx, y: sy }, end: { x: tx, y: ty } };
    });
    return paths.filter(Boolean) as {
      edge: MapEdge;
      d: string;
      active: boolean;
      current: boolean;
      start: { x: number; y: number };
      end: { x: number; y: number };
    }[];
  }, [graph, positions, sizes, step]);

  // Animated stroke reveal & energy traveling dot on active edge
  useEffect(() => {
    const svg = edgeLayer.current;
    if (!svg) return;
    const rafs: number[] = [];
    for (const g of geometry) {
      if (!g.current) continue;
      const path = svg.querySelector<SVGPathElement>(`[data-edge="${g.edge.id}"]`);
      if (!path) continue;
      let len = 800;
      try {
        len = path.getTotalLength();
      } catch {
        /* headless */
      }
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
          try {
            const pt = path.getPointAtLength(p * len);
            dot.setAttribute('cx', String(pt.x));
            dot.setAttribute('cy', String(pt.y));
            dot.style.opacity = p < 1 ? '1' : '0';
          } catch {
            dot.style.opacity = '0';
          }
          if (p < 1) rafs.push(requestAnimationFrame(frame));
        };
        rafs.push(requestAnimationFrame(frame));
      }
    }
    return () => rafs.forEach(cancelAnimationFrame);
  }, [geometry, step]);

  // Staggered non-overlapping edge label midpoints with clamped angle
  useEffect(() => {
    const svg = edgeLayer.current;
    if (!svg) return;
    const next: Record<string, EdgeMid> = {};
    for (const g of geometry) {
      const path = svg.querySelector<SVGPathElement>(`[data-edge="${g.edge.id}"]`);
      const t = 0.38 + ((g.edge.step % 3) * 0.12);
      let calculated = false;

      if (path && typeof path.getTotalLength === 'function' && typeof path.getPointAtLength === 'function') {
        try {
          const len = path.getTotalLength();
          if (len > 0) {
            const pt = path.getPointAtLength(len * t);
            const pt2 = path.getPointAtLength(Math.min(len, len * t + 2));
            let angle = (Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * 180) / Math.PI;
            if (angle > 90) angle -= 180;
            if (angle < -90) angle += 180;
            const clampedAngle = Math.max(-25, Math.min(25, angle));
            next[g.edge.id] = { x: pt.x, y: pt.y, angle: clampedAngle };
            calculated = true;
          }
        } catch {
          // fallback below
        }
      }

      if (!calculated) {
        // Safe linear midpoint fallback
        const mx = g.start.x + (g.end.x - g.start.x) * t;
        const my = g.start.y + (g.end.y - g.start.y) * t;
        next[g.edge.id] = { x: mx, y: my, angle: 0 };
      }
    }
    setEdgeMids(next);
  }, [geometry]);

  const activeEdge = graph.edges.find(e => e.step === step) ?? null;
  const sourceNode = graph.nodes[0];
  const currentNode = graph.nodes.find(n => n.step === step) ?? sourceNode;

  useEffect(() => {
    setDossierTab('ultimate');
  }, [step]);

  /* Typewriter Narration */
  const introText = `The thread begins at ${sourceNode.ref} — “${sourceNode.body}”. ${graph.edges.length} connection${
    graph.edges.length === 1 ? '' : 's'
  } lead${graph.edges.length === 1 ? '' : 's'} from here.`;

  const getDossierText = () => {
    if (!activeEdge) return introText;
    const inter = activeEdge.interrogation;
    if (!inter) return activeEdge.why;
    switch (dossierTab) {
      case 'ultimate':
        return inter.ultimatePoint;
      case 'what':
        return inter.what;
      case 'when':
        return inter.when;
      case 'how':
        return inter.how;
      case 'why':
        return inter.why;
      default:
        return inter.ultimatePoint;
    }
  };

  const narratedText = getDossierText();
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

  /* Overview Minimap Bounds */
  const world = useMemo(() => {
    if (graph.nodes.length === 0) return null;
    let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;
    for (const n of graph.nodes) {
      const pos = positions[n.id] ?? { x: n.x, y: n.y };
      const s = sizes[n.id] ?? { w: NODE_W, h: 160 };
      minX = Math.min(minX, pos.x);
      minY = Math.min(minY, pos.y);
      maxX = Math.max(maxX, pos.x + s.w);
      maxY = Math.max(maxY, pos.y + s.h);
    }
    minX -= 40;
    minY -= 40;
    maxX += 40;
    maxY += 40;
    return { minX, minY, w: maxX - minX, h: maxY - minY };
  }, [graph, positions, sizes]);

  const minimapW = 150;
  const minimapH = world ? Math.max(68, Math.min(112, (world.h / world.w) * minimapW)) : 68;
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
    const w = boxSize.w || 800;
    const h = boxSize.h || 500;
    const bottomReserve = settings.dossierCollapsed ? 48 : dossierHeight + 16;
    const topReserve = Math.max(56, topBarHeight + 14);
    const usableH = Math.max(180, h - bottomReserve - topReserve);
    setView(v => ({
      ...v,
      x: -(wx * v.scale) + w / 2,
      y: -(wy * v.scale) + (usableH / 2 + topReserve),
    }));
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
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Main Interactive Pan / Zoom Canvas */}
      <div
        className="absolute inset-0 cursor-grab active:cursor-grabbing touch-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div
          className="absolute left-0 top-0 origin-top-left transition-transform duration-75"
          style={{ transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})` }}
        >
          {/* Edge Curves Layer */}
          <svg className="pointer-events-none absolute left-0 top-0 overflow-visible" width={1} height={1} ref={edgeLayer}>
            <defs>
              {graph.edges.map(e => {
                const from = graph.nodes[0];
                const to = graph.nodes.find(n => n.id === e.to);
                const posA = positions[from.id] ?? { x: from.x, y: from.y };
                const posB = positions[to?.id ?? ''] ?? { x: to?.x ?? 0, y: to?.y ?? 0 };
                const fs = sizes[from.id] ?? { w: NODE_W, h: 160 };
                const ts = sizes[to?.id ?? ''] ?? { w: NODE_W, h: 160 };
                return (
                  <linearGradient
                    key={e.id}
                    id={`eg-${e.id}`}
                    gradientUnits="userSpaceOnUse"
                    x1={posA.x + fs.w / 2}
                    y1={posA.y + fs.h / 2}
                    x2={posB.x + ts.w / 2}
                    y2={posB.y + ts.h / 2}
                  >
                    <stop offset="0%" stopColor={P.gold} />
                    <stop offset="100%" stopColor={P.steel} />
                  </linearGradient>
                );
              })}
              {graph.edges.map(e => (
                <marker
                  key={`mk-${e.id}`}
                  id={`mk-${e.id}`}
                  viewBox="0 0 10 10"
                  refX={7.5}
                  refY={5}
                  markerWidth={6.5}
                  markerHeight={6.5}
                  orient="auto-start-reverse"
                >
                  <path d="M0,0 L10,5 L0,10 z" fill={P.steel} />
                </marker>
              ))}
            </defs>

            {geometry.map(g => {
              const mid = edgeMids[g.edge.id];
              const label = g.edge.label.replace(/^Thread → /, '');
              const labelWidth = Math.max(70, label.length * 6.2 + 18);
              return (
                <React.Fragment key={g.edge.id}>
                  {/* Base Edge Path */}
                  <path
                    data-edge={g.edge.id}
                    d={g.d}
                    fill="none"
                    stroke={`url(#eg-${g.edge.id})`}
                    strokeWidth={g.current ? 2.4 : 1.6}
                    markerEnd={`url(#mk-${g.edge.id})`}
                    style={{ opacity: g.active ? 1 : 0.25, transition: 'opacity .4s' }}
                  />

                  {/* Flowing Energy on Active Edge */}
                  {g.current && (
                    <path
                      d={g.d}
                      fill="none"
                      stroke={P.goldBright}
                      strokeWidth={2.8}
                      strokeLinecap="round"
                      className="ordo-flow"
                      opacity={0.95}
                    />
                  )}

                  {/* Wide Hover Target & Clickable Connection */}
                  <path
                    d={g.d}
                    fill="none"
                    stroke="rgba(0,0,0,0)"
                    strokeWidth={24}
                    className="cursor-pointer"
                    pointerEvents="stroke"
                    onClick={() => goToStep(g.edge.step)}
                    onPointerEnter={() => setHoveredEdge(g.edge.id)}
                    onPointerLeave={() => setHoveredEdge(h => (h === g.edge.id ? null : h))}
                  />

                  {/* Non-overlapping Staggered Label Badge (Clickable) */}
                  {mid && g.active && (
                    <g
                      transform={`translate(${mid.x}, ${mid.y}) rotate(${mid.angle})`}
                      className="cursor-pointer pointer-events-auto transition-transform hover:scale-105"
                      onClick={e => {
                        e.stopPropagation();
                        goToStep(g.edge.step);
                      }}
                    >
                      <rect
                        x={-labelWidth / 2}
                        y={-10}
                        width={labelWidth}
                        height={20}
                        rx={5}
                        fill={P.panelBg}
                        stroke={g.current ? P.gold : P.border}
                        strokeWidth={g.current ? 1.4 : 1}
                        style={{
                          filter: g.current
                            ? `drop-shadow(0 0 6px ${P.gold}66)`
                            : 'drop-shadow(0 1px 3px rgba(0,0,0,0.35))',
                        }}
                      />
                      <text
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontFamily="IBM Plex Mono, monospace"
                        fontSize={9.5}
                        fontWeight={g.current ? 700 : 500}
                        fill={g.current ? P.gold : P.text}
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

          {/* Node Cards Layer */}
          {graph.nodes.map(n => {
            const visible = n.step <= step;
            const active = n.step === step;
            const color = strandColor(n.strand, P);
            const isExpanded = expanded.has(n.id);
            const pos = positions[n.id] ?? { x: n.x, y: n.y };
            const isMatched = matchingNodeIds.size > 0 && matchingNodeIds.has(n.id);
            const isDimmed = matchingNodeIds.size > 0 && !matchingNodeIds.has(n.id);

            return (
              <article
                key={n.id}
                ref={el => {
                  if (el) nodeRefs.current.set(n.id, el);
                  else nodeRefs.current.delete(n.id);
                }}
                onClick={() => goToStep(n.step)}
                className={cn(
                  'absolute rounded-xl border backdrop-blur-[3px] transition-all duration-350 cursor-pointer select-text hover:shadow-lg',
                  active ? 'ordo-breathe ring-1 ring-amber-400/50' : 'hover:-translate-y-1 hover:border-amber-400/40',
                  isDimmed && 'opacity-25 filter grayscale'
                )}
                style={{
                  left: pos.x,
                  top: pos.y,
                  width: NODE_W,
                  borderColor: isMatched ? P.goldBright : active ? color : P.border,
                  boxShadow: isMatched
                    ? `0 0 24px 2px ${P.goldBright}`
                    : active
                    ? `0 0 34px -10px ${color}`
                    : '0 4px 20px -8px rgba(0,0,0,0.3)',
                  background: P.cardBg,
                  opacity: isDimmed ? 0.25 : visible ? 1 : 0.35,
                  transform: visible ? 'translateY(0)' : 'translateY(12px)',
                }}
              >
                {/* Watermark Step Number */}
                <span
                  className="absolute font-serif font-light select-none pointer-events-none"
                  style={{ fontSize: 74, right: 10, top: -6, color: P.watermark }}
                >
                  {String(n.step).padStart(2, '0')}
                </span>

                {/* Card Header Pill Row */}
                <div className="relative px-4 pt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.18em]">
                  <span style={{ color }} className="font-semibold flex items-center gap-1">
                    ◆ {String(n.step).padStart(2, '0')}
                    {isMatched && (
                      <span className="text-[8px] px-1 py-0.5 rounded uppercase font-bold tracking-normal bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        Match
                      </span>
                    )}
                  </span>
                  <span className="uppercase text-[9px] truncate max-w-[120px]" style={{ color: P.mute }}>
                    {n.kind === 'source' ? 'Thread Source' : 'Connection'}
                  </span>
                </div>

                {/* Node Title */}
                <h3
                  className="relative font-serif font-medium text-[15px] leading-snug px-4 pt-1.5 pr-8 break-words"
                  style={{ color: P.text }}
                >
                  {n.kind === 'source' ? n.title : n.ref}
                </h3>

                {/* Snippet Body */}
                <p
                  className="relative px-4 pt-1.5 text-[11.5px] leading-relaxed line-clamp-4 break-words"
                  style={{ color: P.dim }}
                >
                  {n.body || '…'}
                </p>

                {/* Expandable Passage Reader */}
                {isExpanded && (
                  <div
                    className="relative mx-4 mt-2.5 mb-1 max-h-48 overflow-y-auto rounded-lg border px-3 py-2 text-[11.5px] leading-relaxed font-serif scrollbar-thin"
                    style={{ borderColor: P.border, color: P.text, background: 'rgba(0,0,0,.08)' }}
                  >
                    {n.fullText}
                  </div>
                )}

                {/* Footer / Expansion Toggle */}
                <div className="relative px-4 pb-3 pt-2.5 flex items-center justify-between gap-2 font-mono text-[9px] tracking-[0.12em]">
                  <span className="truncate" style={{ color }}>
                    {n.kind === 'source' ? n.ref : 'READ PASSAGE →'}
                  </span>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      toggleExpanded(n.id);
                    }}
                    aria-label={isExpanded ? 'Collapse the full passage' : 'Read the full passage'}
                    title={isExpanded ? 'Collapse' : 'Read the full passage'}
                    className="h-5 w-5 shrink-0 rounded-full flex items-center justify-center border cursor-pointer transition-transform hover:opacity-80"
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

      {/* ── TOP FLOATING BARS (Unified, Responsive, Zero Collision) ── */}
      <div
        ref={topBarRef}
        className="absolute top-3 left-3 right-3 z-20 pointer-events-none flex flex-wrap items-center justify-between gap-2"
      >
        {/* Left Bar: Tour & Playback Cluster */}
        <div
          className="pointer-events-auto flex items-center gap-1.5 p-1 rounded-full border shadow-lg backdrop-blur-md transition-all"
          style={{ borderColor: P.ctrlBorder, background: P.panelBg }}
        >
          <button
            onClick={() => goToStep(step - 1)}
            aria-label="Previous step"
            title="Previous step (←)"
            className="h-7 w-7 rounded-full flex items-center justify-center border cursor-pointer hover:opacity-80 transition-colors"
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
            className="h-7 w-7 rounded-full flex items-center justify-center border cursor-pointer hover:opacity-90 transition-colors"
            style={{ borderColor: P.gold, color: P.goldBright, background: `${P.gold}33` }}
          >
            {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          </button>

          <button
            onClick={() => goToStep(step + 1)}
            aria-label="Next step"
            title="Next step (→)"
            className="h-7 w-7 rounded-full flex items-center justify-center border cursor-pointer hover:opacity-80 transition-colors"
            style={{ borderColor: P.ctrlBorder, color: P.text }}
          >
            <SkipForward className="h-3.5 w-3.5" />
          </button>

          <span className="px-1.5 font-mono text-[10px] font-semibold tracking-wider" style={{ color: P.gold }}>
            {String(step).padStart(2, '0')}/{String(graph.totalSteps).padStart(2, '0')}
          </span>

          {/* Integrated Filmstrip Step Scrubber Dots */}
          <div className="hidden sm:flex items-center gap-1 px-1">
            {Array.from({ length: graph.totalSteps }, (_, i) => i + 1).map(k => {
              const node = graph.nodes.find(n => n.step === k);
              const label = node ? `${node.kind === 'source' ? 'Source: ' : ''}${node.ref}` : `Step ${k}`;
              const isActive = k === step;
              return (
                <button
                  key={k}
                  onClick={() => goToStep(k)}
                  aria-label={`Go to step ${k}: ${label}`}
                  title={`${k}. ${label}`}
                  className="rounded-full cursor-pointer transition-all duration-300"
                  style={{
                    width: isActive ? 16 : 6,
                    height: 6,
                    background: k <= step ? P.gold : P.mute,
                    boxShadow: isActive ? `0 0 6px ${P.gold}` : 'none',
                  }}
                />
              );
            })}
          </div>

          <div className="h-3.5 w-[1px] mx-0.5" style={{ background: P.border }} />

          {/* Tour Speed Cycle */}
          <button
            onClick={() => {
              const next = settings.tourSpeed === 1 ? 1.5 : settings.tourSpeed === 1.5 ? 2 : 1;
              updateSettings({ tourSpeed: next });
            }}
            aria-label={`Tour speed: ${settings.tourSpeed}x`}
            title="Tour speed (1x / 1.5x / 2x)"
            className="h-6 px-2 rounded-full border text-[9.5px] font-mono font-bold flex items-center justify-center cursor-pointer transition-colors"
            style={{ borderColor: P.ctrlBorder, color: P.text }}
          >
            {settings.tourSpeed}x
          </button>

          {/* Cinematic Camera Follow Toggle */}
          <button
            onClick={() => updateSettings({ camera: !settings.camera })}
            aria-label="Toggle cinematic camera"
            title="Camera follow active step (C)"
            aria-pressed={settings.camera}
            className="h-7 w-7 rounded-full flex items-center justify-center border cursor-pointer transition-colors"
            style={
              settings.camera
                ? { borderColor: P.gold, color: P.goldBright, background: `${P.gold}26` }
                : { borderColor: P.ctrlBorder, color: P.dim }
            }
          >
            <Camera className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Center / Search Bar */}
        <div className="pointer-events-auto flex items-center">
          {isSearchOpen ? (
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border shadow-lg backdrop-blur-md animate-in fade-in zoom-in-95 duration-200 max-w-[calc(100vw-32px)]"
              style={{ borderColor: P.gold, background: P.panelBg }}
            >
              <Search className="h-3.5 w-3.5 shrink-0" style={{ color: P.gold }} />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search nodes (e.g. Rom 8, Isa)..."
                className="bg-transparent text-xs outline-none w-32 sm:w-52"
                style={{ color: P.text }}
              />
              {matchedSteps.length > 0 && (
                <span className="font-mono text-[9px] px-1 py-0.2 rounded font-bold shrink-0" style={{ color: P.gold }}>
                  {currentMatchIndex > 0 ? `${currentMatchIndex}/${matchedSteps.length}` : `${matchedSteps.length}`}
                </span>
              )}
              {matchedSteps.length > 0 && (
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={jumpToPrevMatch}
                    className="text-[9.5px] px-1.5 py-0.5 rounded border font-mono font-semibold cursor-pointer hover:opacity-80"
                    style={{ borderColor: P.gold, color: P.gold }}
                    title="Previous match (Shift+Enter)"
                  >
                    Prev
                  </button>
                  <button
                    onClick={jumpToNextMatch}
                    className="text-[9.5px] px-1.5 py-0.5 rounded border font-mono font-semibold cursor-pointer hover:opacity-80"
                    style={{ borderColor: P.gold, color: P.gold }}
                    title="Next match (Enter)"
                  >
                    Next
                  </button>
                </div>
              )}
              <button
                onClick={() => {
                  setSearchQuery('');
                  setIsSearchOpen(false);
                }}
                className="h-5 w-5 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 shrink-0"
                style={{ color: P.dim }}
                title="Close search (Esc)"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setIsSearchOpen(true);
                setTimeout(() => searchInputRef.current?.focus(), 50);
              }}
              className="h-8 px-2.5 rounded-full border shadow-md backdrop-blur-md flex items-center gap-1.5 text-xs cursor-pointer hover:opacity-90 transition-colors"
              style={{ borderColor: P.ctrlBorder, background: P.panelBg, color: P.dim }}
              title="Search nodes in map (press /)"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="hidden md:inline font-mono text-[10px]">Search (/)</span>
            </button>
          )}
        </div>

        {/* Right Bar: View & Canvas Tools */}
        <div
          className="pointer-events-auto flex items-center gap-1.5 p-1 rounded-full border shadow-lg backdrop-blur-md"
          style={{ borderColor: P.ctrlBorder, background: P.panelBg }}
        >
          {/* Layout Mode Selector */}
          <div className="relative" ref={layoutMenuRef}>
            <button
              onClick={() => setLayoutMenuOpen(!layoutMenuOpen)}
              aria-label="Graph layout mode"
              title={`Layout: ${settings.layoutMode}`}
              className="h-7 px-2 rounded-full border flex items-center gap-1 text-[10px] font-mono cursor-pointer transition-colors"
              style={{ borderColor: P.ctrlBorder, color: P.text }}
            >
              {settings.layoutMode === 'column' && <Columns className="h-3 w-3" />}
              {settings.layoutMode === 'grid' && <Grid className="h-3 w-3" />}
              {settings.layoutMode === 'radial' && <Compass className="h-3 w-3" />}
              <span className="hidden sm:inline capitalize">{settings.layoutMode}</span>
            </button>

            {layoutMenuOpen && (
              <div
                className="absolute right-0 top-9 w-44 rounded-xl border shadow-xl p-2 z-30 flex flex-col gap-1 backdrop-blur-md animate-in fade-in zoom-in-95 duration-150"
                style={{ borderColor: P.border, background: P.panelBg }}
              >
                <div className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5" style={{ color: P.mute }}>
                  Graph Layout
                </div>
                {(['column', 'grid', 'radial'] as MapLayoutMode[]).map(mode => (
                  <button
                    key={mode}
                    onClick={() => {
                      updateSettings({ layoutMode: mode });
                      setLayoutMenuOpen(false);
                    }}
                    className={cn(
                      'px-2 py-1.5 rounded-lg text-xs font-medium text-left flex items-center justify-between cursor-pointer transition-colors',
                      settings.layoutMode === mode ? 'font-bold' : ''
                    )}
                    style={{
                      background: settings.layoutMode === mode ? `${P.gold}24` : 'transparent',
                      color: settings.layoutMode === mode ? P.gold : P.text,
                    }}
                  >
                    <span className="capitalize">{mode === 'column' ? 'Linear Flow' : mode === 'grid' ? 'Split Bilateral' : 'Radial Web'}</span>
                    {settings.layoutMode === mode && <span className="text-[10px]">✓</span>}
                  </button>
                ))}

                <div className="h-[1px] my-1" style={{ background: P.border }} />

                <div className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5" style={{ color: P.mute }}>
                  Card Spacing
                </div>
                {(['compact', 'normal', 'relaxed'] as MapSpacingMode[]).map(sp => (
                  <button
                    key={sp}
                    onClick={() => {
                      updateSettings({ spacingMode: sp });
                      setLayoutMenuOpen(false);
                    }}
                    className={cn(
                      'px-2 py-1.5 rounded-lg text-xs font-medium text-left flex items-center justify-between cursor-pointer transition-colors',
                      settings.spacingMode === sp ? 'font-bold' : ''
                    )}
                    style={{
                      background: settings.spacingMode === sp ? `${P.gold}24` : 'transparent',
                      color: settings.spacingMode === sp ? P.gold : P.text,
                    }}
                  >
                    <span className="capitalize">{sp}</span>
                    {settings.spacingMode === sp && <span className="text-[10px]">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="h-3.5 w-[1px] mx-0.5" style={{ background: P.border }} />

          {/* Zoom Out / Zoom In */}
          <button
            onClick={zoomOut}
            aria-label="Zoom out"
            title="Zoom out (-)"
            className="h-7 w-7 rounded-full flex items-center justify-center border cursor-pointer hover:opacity-80 transition-colors"
            style={{ borderColor: P.ctrlBorder, color: P.text }}
          >
            <ZoomOut className="h-3 w-3" />
          </button>
          <button
            onClick={zoomIn}
            aria-label="Zoom in"
            title="Zoom in (+)"
            className="h-7 w-7 rounded-full flex items-center justify-center border cursor-pointer hover:opacity-80 transition-colors"
            style={{ borderColor: P.ctrlBorder, color: P.text }}
          >
            <ZoomIn className="h-3 w-3" />
          </button>

          {/* Auto-Fit All */}
          <button
            onClick={fitAll}
            aria-label="Fit all nodes to view"
            title="Fit all nodes to view (0)"
            className="h-7 w-7 rounded-full flex items-center justify-center border cursor-pointer hover:opacity-80 transition-colors"
            style={{ borderColor: P.ctrlBorder, color: P.dim }}
          >
            <Maximize2 className="h-3 w-3" />
          </button>

          {/* Focus Active Selection */}
          <button
            onClick={focusCurrent}
            aria-label="Focus active selection"
            title="Center active selection (F)"
            className="h-7 w-7 rounded-full flex items-center justify-center border cursor-pointer hover:opacity-80 transition-colors"
            style={{ borderColor: P.ctrlBorder, color: P.dim }}
          >
            <Focus className="h-3 w-3" />
          </button>

          {/* Reset View */}
          <button
            onClick={() => setView({ x: 0, y: 0, scale: 1 })}
            aria-label="Reset view"
            title="Reset position"
            className="h-7 w-7 rounded-full flex items-center justify-center border cursor-pointer hover:opacity-80 transition-colors"
            style={{ borderColor: P.ctrlBorder, color: P.dim }}
          >
            <RotateCcw className="h-3 w-3" />
          </button>

          {/* Narration Toggle */}
          <button
            onClick={() => updateSettings({ narration: !settings.narration })}
            aria-label="Toggle typewriter narration"
            title="Narration typewriter"
            aria-pressed={settings.narration}
            className="h-7 w-7 rounded-full flex items-center justify-center border cursor-pointer transition-colors"
            style={
              settings.narration
                ? { borderColor: P.gold, color: P.goldBright, background: `${P.gold}26` }
                : { borderColor: P.ctrlBorder, color: P.dim }
            }
          >
            <Captions className="h-3.5 w-3.5" />
          </button>

          {/* Minimap Toggle (hidden on mobile where minimap itself is hidden) */}
          <button
            onClick={() => updateSettings({ showMinimap: !settings.showMinimap })}
            aria-label="Toggle minimap"
            title="Toggle minimap (M)"
            aria-pressed={settings.showMinimap}
            className="hidden sm:flex h-7 w-7 rounded-full items-center justify-center border cursor-pointer transition-colors"
            style={
              settings.showMinimap
                ? { borderColor: P.gold, color: P.goldBright, background: `${P.gold}26` }
                : { borderColor: P.ctrlBorder, color: P.dim }
            }
          >
            <Compass className="h-3.5 w-3.5" />
          </button>

          {/* Fullscreen Canvas Mode */}
          {onToggleFullscreen && (
            <button
              onClick={onToggleFullscreen}
              aria-label={isFullscreen ? 'Exit full screen' : 'Full screen canvas'}
              title={isFullscreen ? 'Exit full screen' : 'Full screen canvas'}
              className="h-7 w-7 rounded-full flex items-center justify-center border cursor-pointer hover:opacity-80 transition-colors"
              style={{ borderColor: P.ctrlBorder, color: P.text }}
            >
              {isFullscreen ? <Minimize2 className="h-3 w-3" /> : <Maximize2 className="h-3 w-3" />}
            </button>
          )}
        </div>
      </div>

      {/* ── OVERVIEW MINIMAP (Positioned Strictly Above Dossier, Zero Collision) ── */}
      {settings.showMinimap && world && graph.nodes.length > 1 && (
        <svg
          className="hidden sm:block absolute right-4 z-20 rounded-lg border cursor-pointer shadow-xl backdrop-blur-sm overflow-hidden transition-all duration-300"
          style={{
            bottom: settings.dossierCollapsed ? 52 : `${dossierHeight + 14}px`,
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
            const posA = positions[a.id] ?? { x: a.x, y: a.y };
            const posB = positions[b.id] ?? { x: b.x, y: b.y };
            const p1 = minimapPoint(posA.x + 100, posA.y + 70);
            const p2 = minimapPoint(posB.x + 100, posB.y + 70);
            return (
              <line
                key={e.id}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke={P.mute}
                strokeWidth={0.8}
                opacity={e.step <= step ? 0.9 : 0.35}
              />
            );
          })}
          {graph.nodes.map(n => {
            const pos = positions[n.id] ?? { x: n.x, y: n.y };
            const p = minimapPoint(pos.x, pos.y);
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
            strokeWidth={1.2}
            opacity={0.9}
          />
        </svg>
      )}

      {/* Edge Hover Tooltip */}
      {hovered && hoveredMid && (
        <div
          className="absolute z-30 max-w-[320px] rounded-lg border px-3 py-2 text-[11px] leading-relaxed shadow-2xl pointer-events-none transition-all duration-150"
          style={{
            left: Math.min(Math.max(12, view.x + hoveredMid.x * view.scale - 130), (boxSize.w || 800) - 330),
            top: Math.max(12, Math.min(view.y + hoveredMid.y * view.scale - 10, (boxSize.h || 500) - 180)),
            borderColor: P.gold,
            background: P.dossierBg,
            color: P.text,
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="font-mono text-[9.5px] font-bold tracking-[0.16em] mb-1" style={{ color: P.gold }}>
            ◆ {hovered.label}
          </div>
          <p className="text-[11px] leading-relaxed">{hovered.why}</p>
        </div>
      )}

      {/* ── BOTTOM COLLAPSIBLE DOSSIER PANEL (Zero Overlap) ── */}
      <div
        ref={dossierRef}
        className="absolute bottom-0 left-0 right-0 z-20 border-t backdrop-blur-md transition-all duration-300"
        style={{ borderColor: P.border, background: P.dossierBg }}
      >
        {settings.dossierCollapsed ? (
          /* Sleek Collapsed Bar (40px) */
          <div
            className="max-w-6xl mx-auto px-5 py-2 flex items-center justify-between gap-3 cursor-pointer hover:opacity-95"
            onClick={() => updateSettings({ dossierCollapsed: false })}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="font-mono text-[11px] font-bold tracking-wider shrink-0" style={{ color: P.gold }}>
                ◆ {activeEdge ? activeEdge.label : sourceNode.ref}
              </span>
              <span
                className="text-[10px] px-2 py-0.5 rounded border uppercase font-mono font-semibold shrink-0"
                style={{ borderColor: `${P.gold}44`, background: `${P.gold}14`, color: P.gold }}
              >
                {dossierTab}
              </span>
              <p className="text-xs truncate" style={{ color: P.dim }}>
                {narratedText}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {activeEdge && (
                <button
                  onClick={e => {
                    e.stopPropagation();
                    setScholarlyModalOpen(true);
                  }}
                  className="h-6 px-2.5 rounded-md border text-[10px] font-medium flex items-center gap-1 cursor-pointer"
                  style={{ borderColor: P.ctrlBorder, color: P.text }}
                  title="Full scholarly dossier"
                >
                  <BookOpen className="h-3 w-3" />
                  <span className="hidden sm:inline">Dossier</span>
                </button>
              )}
              <button
                onClick={e => {
                  e.stopPropagation();
                  updateSettings({ dossierCollapsed: false });
                }}
                className="h-6 px-2 rounded-md border text-[10px] flex items-center gap-1 font-mono cursor-pointer"
                style={{ borderColor: P.gold, color: P.gold }}
                title="Expand dossier panel"
              >
                <span>Expand</span>
                <ChevronUp className="h-3 w-3" />
              </button>
            </div>
          </div>
        ) : (
          /* Full Expanded Dossier */
          <div className="px-5 py-3.5 max-w-6xl mx-auto">
            {activeEdge ? (
              <div>
                {/* Header: Label, Interrogation Tabs, and Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2.5">
                  <div className="flex items-center justify-between gap-2 min-w-0">
                    <span className="font-mono text-[11px] font-bold tracking-[0.12em] shrink-0" style={{ color: P.gold }}>
                      ◆ {activeEdge.label}
                    </span>
                    {/* Mobile quick actions */}
                    <div className="flex sm:hidden items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => setScholarlyModalOpen(true)}
                        className="h-6 px-2 rounded-md border text-[9.5px] font-medium flex items-center gap-1 cursor-pointer"
                        style={{ borderColor: P.ctrlBorder, color: P.text }}
                        title="Dossier"
                      >
                        <BookOpen className="h-3 w-3" />
                        <span>Dossier</span>
                      </button>
                      <button
                        onClick={() => setHistoricalContextOpen(true, activeEdge.interrogation.id)}
                        className="h-6 w-6 rounded-md border flex items-center justify-center cursor-pointer"
                        style={{ borderColor: P.gold, color: P.gold, background: `${P.gold}14` }}
                        title="Historical Context"
                      >
                        <Landmark className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => updateSettings({ dossierCollapsed: true })}
                        aria-label="Collapse dossier panel"
                        title="Collapse dossier panel"
                        className="h-6 w-6 rounded-md border flex items-center justify-center cursor-pointer"
                        style={{ borderColor: P.ctrlBorder, color: P.dim }}
                      >
                        <ChevronDown className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Interrogation Quick Tabs */}
                  <div
                    className="flex items-center gap-0.5 p-0.5 rounded-lg border overflow-x-auto no-scrollbar max-w-full"
                    style={{ borderColor: P.border, background: `${P.gold}0d` }}
                  >
                    <button
                      onClick={() => setDossierTab('ultimate')}
                      className="px-2.5 py-1 rounded-md text-[10.5px] flex items-center gap-1 cursor-pointer transition-all shrink-0"
                      style={{
                        background: dossierTab === 'ultimate' ? `${P.gold}28` : 'transparent',
                        color: dossierTab === 'ultimate' ? P.gold : P.dim,
                        border: dossierTab === 'ultimate' ? `1px solid ${P.gold}44` : '1px solid transparent',
                        fontWeight: dossierTab === 'ultimate' ? 700 : 500,
                      }}
                    >
                      <Sparkles className="h-3 w-3" />
                      <span>Ultimate Point</span>
                    </button>
                    {(['what', 'when', 'how', 'why'] as const).map(tab => (
                      <button
                        key={tab}
                        onClick={() => setDossierTab(tab)}
                        className="px-2.5 py-1 rounded-md text-[10.5px] capitalize cursor-pointer transition-all shrink-0"
                        style={{
                          background: dossierTab === tab ? `${P.gold}22` : 'transparent',
                          color: dossierTab === tab ? P.gold : P.dim,
                          border: dossierTab === tab ? `1px solid ${P.gold}38` : '1px solid transparent',
                          fontWeight: dossierTab === tab ? 700 : 500,
                        }}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Desktop Actions & Collapse Button */}
                  <div className="hidden sm:flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setScholarlyModalOpen(true)}
                      className="h-7 px-2.5 rounded-md border text-[10px] font-medium flex items-center gap-1 cursor-pointer hover:opacity-90 transition-colors"
                      style={{ borderColor: P.ctrlBorder, color: P.text }}
                      title="Open the full 5-part scholarly dossier"
                    >
                      <BookOpen className="h-3 w-3" />
                      <span>Full Dossier</span>
                    </button>
                    <button
                      onClick={() => setHistoricalContextOpen(true, activeEdge.interrogation.id)}
                      className="h-7 px-2.5 rounded-md border text-[10px] font-semibold flex items-center gap-1 cursor-pointer hover:opacity-90 transition-colors"
                      style={{ borderColor: P.gold, color: P.gold, background: `${P.gold}14` }}
                      title="Open historical context for this connection"
                    >
                      <Landmark className="h-3 w-3" />
                      <span>Historical Context ↗</span>
                    </button>
                    <button
                      onClick={() => updateSettings({ dossierCollapsed: true })}
                      aria-label="Collapse dossier panel"
                      title="Collapse dossier panel"
                      className="h-7 w-7 rounded-md border flex items-center justify-center cursor-pointer hover:opacity-80 transition-colors"
                      style={{ borderColor: P.ctrlBorder, color: P.dim }}
                    >
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* Active Content Display with Typewriter Effect */}
                {dossierTab === 'ultimate' ? (
                  <div
                    className="p-3 rounded-lg border flex items-start gap-2.5 min-h-[3.4em]"
                    style={{ borderColor: `${P.gold}44`, background: `${P.gold}0e` }}
                  >
                    <Sparkles className="h-4 w-4 shrink-0 mt-0.5" style={{ color: P.gold }} />
                    <p className="font-serif text-[13.5px] font-medium leading-relaxed" style={{ color: P.text }}>
                      {typed}
                      {typing && <span className="ordo-caret" style={{ color: P.gold }}>▍</span>}
                    </p>
                  </div>
                ) : (
                  <div className="min-h-[3.4em] px-1">
                    <div className="font-mono text-[9px] uppercase tracking-wider mb-0.5 font-semibold" style={{ color: P.mute }}>
                      {dossierTab === 'what' && '1. Textual & Thematic Parallelism'}
                      {dossierTab === 'when' && '2. Chronological Dating & Redemptive Horizons'}
                      {dossierTab === 'how' && '3. Exegesis & Hermeneutical Mechanics'}
                      {dossierTab === 'why' && '4. Divine Purpose & Theological Necessity'}
                    </div>
                    <p className="text-[12.5px] leading-relaxed" style={{ color: P.text }}>
                      {typed}
                      {typing && <span className="ordo-caret" style={{ color: P.gold }}>▍</span>}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em]">
                    <span style={{ color: P.gold }}>◆ {sourceNode.ref}</span>
                    <span className="uppercase" style={{ color: P.mute }}>
                      Thread Principle
                    </span>
                  </div>
                  <button
                    onClick={() => updateSettings({ dossierCollapsed: true })}
                    aria-label="Collapse dossier panel"
                    title="Collapse dossier panel"
                    className="h-6 w-6 rounded-md border flex items-center justify-center cursor-pointer hover:opacity-80 transition-colors"
                    style={{ borderColor: P.ctrlBorder, color: P.dim }}
                  >
                    <ChevronDown className="h-3 w-3" />
                  </button>
                </div>
                <p className="text-[13px] leading-relaxed min-h-[2.8em]" style={{ color: P.text }}>
                  {typed}
                  {typing && <span className="ordo-caret" style={{ color: P.gold }}>▍</span>}
                </p>
              </div>
            )}

            {/* Keyboard Shortcuts Guide */}
            <div className="mt-2.5 text-[10px] font-mono tracking-[0.14em] flex items-center justify-between" style={{ color: P.mute }}>
              <span>←/→ steps · Space play · Home/End jump · F focus · 0 fit · +/- zoom · / search</span>
              <span className="hidden sm:inline">drag to pan · pinch to zoom</span>
            </div>
          </div>
        )}
      </div>

      {/* ── SCHOLARLY DOSSIER MODAL ── */}
      {scholarlyModalOpen && activeEdge && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={e => {
            if (e.target === e.currentTarget) setScholarlyModalOpen(false);
          }}
        >
          <div
            className="w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden"
            style={{ borderColor: P.border, background: P.dossierBg, color: P.text }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b shrink-0" style={{ borderColor: P.border }}>
              <div className="flex items-center gap-2.5">
                <div
                  className="h-8 w-8 rounded-lg flex items-center justify-center border"
                  style={{ borderColor: P.gold, background: `${P.gold}1a`, color: P.gold }}
                >
                  <BookOpen className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold">Biblical Connection Scholarly Dossier</h3>
                  <div className="font-mono text-[10px] tracking-wider" style={{ color: P.gold }}>
                    {activeEdge.interrogation.anchorRef} ➔ {activeEdge.interrogation.targetRef}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setScholarlyModalOpen(false)}
                className="h-8 w-8 rounded-full flex items-center justify-center border cursor-pointer hover:opacity-80 transition-opacity"
                style={{ borderColor: P.ctrlBorder, color: P.text }}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5 text-xs leading-relaxed">
              {/* Ultimate Point */}
              <div className="p-4 rounded-xl border space-y-1.5" style={{ borderColor: P.gold, background: `${P.gold}14` }}>
                <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-wider" style={{ color: P.gold }}>
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>The Ultimate Redemptive Climax</span>
                </div>
                <p className="font-serif text-sm font-semibold leading-relaxed" style={{ color: P.text }}>
                  {activeEdge.interrogation.ultimatePoint}
                </p>
              </div>

              {/* What */}
              <div className="p-3.5 rounded-xl border space-y-1" style={{ borderColor: P.border, background: 'rgba(0,0,0,.04)' }}>
                <div className="font-mono text-[10px] uppercase font-bold tracking-wider" style={{ color: P.gold }}>
                  1. WHAT: The Textual & Thematic Parallelism
                </div>
                <p style={{ color: P.dim }}>{activeEdge.interrogation.what}</p>
              </div>

              {/* When */}
              <div className="p-3.5 rounded-xl border space-y-1" style={{ borderColor: P.border, background: 'rgba(0,0,0,.04)' }}>
                <div className="font-mono text-[10px] uppercase font-bold tracking-wider" style={{ color: P.gold }}>
                  2. WHEN: Chronological Dating & Redemptive Timeline
                </div>
                <p style={{ color: P.dim }}>{activeEdge.interrogation.when}</p>
              </div>

              {/* How */}
              <div className="p-3.5 rounded-xl border space-y-1" style={{ borderColor: P.border, background: 'rgba(0,0,0,.04)' }}>
                <div className="font-mono text-[10px] uppercase font-bold tracking-wider" style={{ color: P.gold }}>
                  3. HOW: Exegesis & Hermeneutical Mechanics
                </div>
                <p style={{ color: P.dim }}>{activeEdge.interrogation.how}</p>
              </div>

              {/* Why */}
              <div className="p-3.5 rounded-xl border space-y-1" style={{ borderColor: P.border, background: 'rgba(0,0,0,.04)' }}>
                <div className="font-mono text-[10px] uppercase font-bold tracking-wider" style={{ color: P.gold }}>
                  4. WHY: Divine Necessity & Theological Purpose
                </div>
                <p style={{ color: P.dim }}>{activeEdge.interrogation.why}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t flex items-center justify-between shrink-0" style={{ borderColor: P.border }}>
              <button
                onClick={() => {
                  setScholarlyModalOpen(false);
                  setHistoricalContextOpen(true, activeEdge.interrogation.id);
                }}
                className="h-8 px-3 rounded-lg border text-xs font-semibold flex items-center gap-1.5 cursor-pointer hover:opacity-90"
                style={{ borderColor: P.gold, color: P.gold, background: `${P.gold}14` }}
              >
                <Landmark className="h-3.5 w-3.5" />
                <span>Open Historical Context Page ↗</span>
              </button>
              <button
                onClick={() => setScholarlyModalOpen(false)}
                className="h-8 px-4 rounded-lg border text-xs font-medium cursor-pointer hover:opacity-90"
                style={{ borderColor: P.ctrlBorder, color: P.text }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
