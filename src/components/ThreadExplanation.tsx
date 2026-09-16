import {
  getThreadDetail,
  getChainForVerse,
  useThreadDetailsState,
  type ThreadDetail,
  type ThreadChain,
} from '../data/threadDetailService';
import { BookMarked, ChevronRight, Link2 } from 'lucide-react';
import { DataChunkErrorCard } from './DataChunkErrorCard';

function ChainTimeline({ chain }: { chain: ThreadChain }) {
  return (
    <div className="space-y-0">
      <div className="flex items-center gap-2 mb-3">
        <Link2 className="h-3.5 w-3.5 text-accent shrink-0" />
        <span className="text-[10px] uppercase tracking-widest font-bold text-accent">
          Chain · from {chain.origin}
        </span>
      </div>
      <p className="text-xs text-foreground/55 mb-4 leading-relaxed">
        {chain.name}: chronological redemptive sequence. Steps marked <strong>OT</strong> are
        same-testament developments from the earliest source; <strong>NT</strong> steps name the
        fulfillment in Christ.
      </p>
      <ol className="relative border-l border-foreground/15 ml-2 space-y-4">
        {chain.steps.map((step, i) => {
          const isOT = step.testament === 'OT';
          return (
            <li key={`${step.ref}-${i}`} className="relative pl-5">
              <span
                className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 ${
                  isOT
                    ? 'border-accent bg-accent/30'
                    : 'border-amber-500 bg-amber-400/40'
                }`}
              />
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span
                  className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                    isOT
                      ? 'bg-accent/10 text-accent'
                      : 'bg-amber-500/15 text-amber-700 dark:text-amber-300'
                  }`}
                >
                  {step.testament}
                </span>
                <span className="text-xs font-semibold text-foreground">{step.ref}</span>
                {i === 0 && (
                  <span className="text-[9px] uppercase tracking-wider text-foreground/40 font-bold">
                    origin
                  </span>
                )}
              </div>
              <div className="text-sm text-foreground/80 mt-0.5">{step.title}</div>
              <div className="text-xs text-foreground/50 mt-0.5 leading-relaxed">
                {step.connection}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function ThreadExplanation({
  verseId,
  detail: detailProp,
}: {
  verseId: string;
  detail?: ThreadDetail | null;
}) {
  // Re-render once the lazily imported details chunk arrives (the detail prop
  // path from TheThread also re-renders via its own ready hook).
  const { isLoading, error, retry } = useThreadDetailsState();
  const detail = detailProp ?? getThreadDetail(verseId);
  const chain = getChainForVerse(verseId);

  // Prefer explicit sameTestamentLinks; otherwise derive OT→OT steps from the chain
  // starting at the earliest origin through this verse (and later OT steps in the chain).
  const otLinks =
    detail?.sameTestamentLinks && detail.sameTestamentLinks.length > 0
      ? detail.sameTestamentLinks
      : (chain?.steps ?? [])
          .filter(s => s.testament === 'OT')
          .map(s => ({ ref: s.ref, connection: s.connection }));

  if (error && !detail) {
    return (
      <DataChunkErrorCard
        title="Unable to Load Thread Explanations"
        chunkName="Thread Explanations & Typology"
        error={error}
        onRetry={retry}
      />
    );
  }

  if (isLoading && !detail) {
    return (
      <div className="p-4 text-center text-xs text-foreground/50 animate-pulse">
        Loading theological explanation…
      </div>
    );
  }

  if (!detail) {
    return (
      <div className="text-sm text-foreground/50 italic py-4">
        No curated explanation for this thread yet.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <BookMarked className="h-3.5 w-3.5 text-accent" />
          <span className="text-[10px] uppercase tracking-widest font-bold text-accent">
            {detail.draft ? 'Thread connection note' : 'Biblical first principles'}
          </span>
          {detail.draft && (
            <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-foreground/10 text-foreground/50">
              draft
            </span>
          )}
        </div>
        <h3 className="font-serif text-lg md:text-xl text-foreground mb-2">{detail.title}</h3>
        <p className="text-sm md:text-[15px] leading-relaxed text-foreground/80">
          {detail.principle}
        </p>
        <p className="text-[11px] text-foreground/40 mt-3 leading-relaxed">
          Connections are limited to what the text itself supports: explicit quotations,
          shared Hebrew/Greek terms, apostolic interpretation, and the verse’s own context.
        </p>
      </div>

      {detail.terms.length > 0 && (
        <div>
          <div className="text-[10px] uppercase tracking-widest font-bold text-foreground/45 mb-3">
            Original language
          </div>
          <ul className="space-y-3">
            {detail.terms.map((t, i) => (
              <li
                key={`${t.term}-${i}`}
                className="rounded-lg border border-foreground/10 bg-foreground/[0.03] px-3 py-2.5"
              >
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-sm font-semibold text-foreground">{t.term}</span>
                  <span className="font-serif text-base text-accent">{t.original}</span>
                  <span className="text-xs italic text-foreground/55">({t.translit})</span>
                  {t.strongs && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-foreground/40">
                      Strong's {t.strongs}
                    </span>
                  )}
                </div>
                <div className="text-sm text-foreground/75 mt-1">{t.gloss}</div>
                {t.exposition && (
                  <div className="text-xs text-foreground/70 mt-2 leading-relaxed">{t.exposition}</div>
                )}
                {t.note && (
                  <div className="text-xs text-foreground/50 mt-1 leading-relaxed">{t.note}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {otLinks.length > 1 && (
        <div>
          <div className="text-[10px] uppercase tracking-widest font-bold text-foreground/45 mb-2">
            Same-testament chain (OT → OT)
          </div>
          <p className="text-xs text-foreground/50 mb-2 leading-relaxed">
            From the earliest origin through later Old Testament development — before any New Testament fulfillment.
          </p>
          <ul className="space-y-2">
            {otLinks.map((l, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <ChevronRight className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium text-foreground">{l.ref}</span>
                  <span className="text-foreground/60"> — {l.connection}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {chain && <ChainTimeline chain={chain} />}
    </div>
  );
}
