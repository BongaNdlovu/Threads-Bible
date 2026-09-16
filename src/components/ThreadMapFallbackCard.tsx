import React from 'react';
import { Compass, RotateCcw, BookOpen, Grid, AlertCircle, Sparkles } from 'lucide-react';
import { type MapTheme } from './ThreadMap';

export interface ThreadMapFallbackCardProps {
  theme?: MapTheme;
  title: string;
  reason?: 'zero-connections' | 'empty-graph' | 'invalid-reference' | 'layout-failure' | 'generic';
  description?: string;
  reference?: string;
  onSelectAnotherVerse: () => void;
  onResetMapView: () => void;
  onOpenPassageReader: () => void;
}

const THEME_STYLES = {
  dark: {
    bg: '#0B0B0D',
    cardBg: 'linear-gradient(160deg, rgba(25,25,32,.96), rgba(11,11,13,.98))',
    text: '#EAE6DA',
    dim: 'rgba(166,161,150,.92)',
    mute: '#7A756B',
    border: 'rgba(234,230,218,.14)',
    borderHover: 'rgba(200,162,75,.4)',
    gold: '#C8A24B',
    goldBright: '#E8CF8F',
    goldBg: 'rgba(200,162,75,.12)',
    buttonBg: '#C8A24B',
    buttonText: '#0B0B0D',
    secButtonBorder: 'rgba(234,230,218,.18)',
    secButtonText: '#EAE6DA',
    shadow: '0 20px 40px -15px rgba(0,0,0,0.8), 0 0 30px rgba(200,162,75,0.1)',
  },
  light: {
    bg: '#FAF9F6',
    cardBg: 'linear-gradient(160deg, #FFFFFF, #F5F3EC)',
    text: '#2C2C2C',
    dim: '#5A564E',
    mute: '#8A857B',
    border: 'rgba(44,44,44,.16)',
    borderHover: 'rgba(166,124,46,.5)',
    gold: '#A67C2E',
    goldBright: '#8A6A24',
    goldBg: 'rgba(166,124,46,.10)',
    buttonBg: '#A67C2E',
    buttonText: '#FAF9F6',
    secButtonBorder: 'rgba(44,44,44,.22)',
    secButtonText: '#2C2C2C',
    shadow: '0 20px 40px -15px rgba(44,44,44,0.12), 0 0 30px rgba(166,124,46,0.08)',
  },
  parchment: {
    bg: '#FAF9F6',
    cardBg: 'linear-gradient(160deg, #FFFFFF, #F5F3EC)',
    text: '#2C2C2C',
    dim: '#5A564E',
    mute: '#8A857B',
    border: 'rgba(44,44,44,.16)',
    borderHover: 'rgba(166,124,46,.5)',
    gold: '#A67C2E',
    goldBright: '#8A6A24',
    goldBg: 'rgba(166,124,46,.10)',
    buttonBg: '#A67C2E',
    buttonText: '#FAF9F6',
    secButtonBorder: 'rgba(44,44,44,.22)',
    secButtonText: '#2C2C2C',
    shadow: '0 20px 40px -15px rgba(44,44,44,0.12), 0 0 30px rgba(166,124,46,0.08)',
  },
};

export const ThreadMapFallbackCard: React.FC<ThreadMapFallbackCardProps> = ({
  theme = 'dark',
  title,
  reason = 'generic',
  description,
  reference,
  onSelectAnotherVerse,
  onResetMapView,
  onOpenPassageReader,
}) => {
  const S = (THEME_STYLES as Record<string, typeof THEME_STYLES.dark>)[theme] ?? THEME_STYLES.dark;

  const defaultDescriptions: Record<string, string> = {
    'zero-connections':
      'This scripture passage does not have any cross-book fulfillment connections or typological links recorded in the Ordo graph yet.',
    'empty-graph':
      'No graph nodes or edges could be generated for the active thread view.',
    'invalid-reference':
      'The requested scripture reference could not be parsed canonically or located within the biblical text database.',
    'layout-failure':
      'Graph layout computation encountered an unrenderable geometry or failed to converge on collision-free coordinates.',
    generic:
      'The Ordo mindmap could not render the requested theological thread.',
  };

  const finalDescription = description || defaultDescriptions[reason] || defaultDescriptions.generic;

  return (
    <div
      className="h-full w-full flex items-center justify-center p-6 select-text transition-colors"
      style={{ background: S.bg, color: S.text }}
    >
      <div
        className="max-w-lg w-full rounded-2xl border p-8 text-center space-y-6 transition-all"
        style={{
          background: S.cardBg,
          borderColor: S.border,
          boxShadow: S.shadow,
        }}
      >
        {/* Emblem */}
        <div className="relative inline-block mx-auto">
          <div
            className="h-16 w-16 rounded-2xl flex items-center justify-center border transition-all"
            style={{
              borderColor: S.gold,
              background: S.goldBg,
              color: S.gold,
            }}
          >
            {reason === 'layout-failure' ? (
              <AlertCircle className="h-8 w-8" />
            ) : reason === 'zero-connections' ? (
              <Compass className="h-8 w-8" />
            ) : (
              <Sparkles className="h-8 w-8" />
            )}
          </div>
        </div>

        {/* Header and Details */}
        <div className="space-y-2">
          {reference && (
            <div
              className="font-mono text-[11px] uppercase tracking-[0.2em] font-semibold"
              style={{ color: S.gold }}
            >
              Ordo · {reference}
            </div>
          )}
          <h2 className="font-serif text-2xl font-bold tracking-tight" style={{ color: S.text }}>
            {title}
          </h2>
          <p className="text-sm leading-relaxed max-w-md mx-auto" style={{ color: S.dim }}>
            {finalDescription}
          </p>
        </div>

        {/* Thematic Fallback Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <button
            onClick={onSelectAnotherVerse}
            className="px-4 py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all hover:opacity-90 shadow-sm"
            style={{
              background: S.buttonBg,
              color: S.buttonText,
            }}
            title="Browse other verses with active threads in the chapter grid"
          >
            <Grid className="h-4 w-4" />
            <span>Select Another Verse</span>
          </button>

          <button
            onClick={onResetMapView}
            className="px-4 py-2.5 rounded-full border text-xs font-medium flex items-center justify-center gap-2 cursor-pointer transition-colors hover:bg-black/5 dark:hover:bg-white/5"
            style={{
              borderColor: S.secButtonBorder,
              color: S.secButtonText,
            }}
            title="Reset map zoom, layout mode, and coordinates to default"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Reset Map View</span>
          </button>

          <button
            onClick={onOpenPassageReader}
            className="px-4 py-2.5 rounded-full border text-xs font-medium flex items-center justify-center gap-2 cursor-pointer transition-colors hover:bg-black/5 dark:hover:bg-white/5"
            style={{
              borderColor: S.secButtonBorder,
              color: S.secButtonText,
            }}
            title="Return to the Bible passage reader"
          >
            <BookOpen className="h-4 w-4" />
            <span>Open Passage Reader</span>
          </button>
        </div>

        {/* Contextual Hint */}
        <div
          className="text-[11px] pt-2 border-t font-mono"
          style={{ borderColor: S.border, color: S.mute }}
        >
          Tip: You can use the Chapter Grid (G) to discover {reference ? 'other verses' : 'canonical threads'}.
        </div>
      </div>
    </div>
  );
};
