import React, { useEffect, useRef, useState } from 'react';
import { useStore } from '../store/useStore';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { useMediaQuery } from '../hooks/use-media-query';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LinkIcon, Trash2, BookOpen, Quote, Sparkles, Network, ExternalLink, ArrowRight, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { parseRef, BOOK_BY_NAME, expandVerseRange } from '../data/library';
import {
  getTskForVerse,
  getCitationsForVerse,
  getMessianicPropheciesForVerse,
  getMasterChainsForVerse,
  type VerseAnchorRef,
  type NtCitation,
  type MessianicProphecy,
  type MasterChain,
} from '../data/crossRefService';

export function TheMargin() {
  const {
    selectedMarginVerse,
    setSelectedMarginVerse,
    marginActiveTab,
    setMarginActiveTab,
    notes,
    setNote,
    startLinking,
    links,
    removeLink,
    navigateToVerse,
    openThreadPanelWithTab,
    showNotice,
  } = useStore();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const [tskRefs, setTskRefs] = useState<VerseAnchorRef[]>([]);
  const [citations, setCitations] = useState<NtCitation[]>([]);
  const [messianic, setMessianic] = useState<MessianicProphecy[]>([]);
  const [chains, setChains] = useState<MasterChain[]>([]);
  const [isLoadingTsk, setIsLoadingTsk] = useState(false);
  const [activeTab, setActiveTab] = useState('tsk');
  const [noteDraft, setNoteDraft] = useState('');

  // Debounced note persistence: keep typing responsive in local state, flush
  // to IndexedDB after a short idle (or on close / verse switch).
  const noteTimerRef = useRef<number | null>(null);
  const pendingNoteRef = useRef<{ verseId: string; text: string } | null>(null);

  const flushNote = () => {
    if (noteTimerRef.current !== null) {
      window.clearTimeout(noteTimerRef.current);
      noteTimerRef.current = null;
    }
    const pending = pendingNoteRef.current;
    pendingNoteRef.current = null;
    if (pending) void setNote(pending.verseId, pending.text);
  };

  const isOpen = selectedMarginVerse !== null;
  const onOpenChange = (open: boolean) => {
    if (!open) {
      flushNote();
      setSelectedMarginVerse(null);
    }
  };

  // Verse data + tab selection. A verse is "initialized" once; later re-runs
  // of this effect (e.g. after a badge consumes marginActiveTab) must not
  // override the routed tab with the default one.
  const initializedVerseRef = useRef<string | null>(null);

  useEffect(() => {
    if (!selectedMarginVerse) {
      initializedVerseRef.current = null;
      setTskRefs([]);
      setCitations([]);
      setMessianic([]);
      setChains([]);
      return;
    }

    const verseId = selectedMarginVerse.id;
    const isFirstForVerse = initializedVerseRef.current !== verseId;

    const cits = getCitationsForVerse(verseId);
    const mess = getMessianicPropheciesForVerse(verseId);
    const chs = getMasterChainsForVerse(verseId);

    setCitations(cits);
    setMessianic(mess);
    setChains(chs);

    if (isFirstForVerse) {
      // Stale-response guard: a slow TSK fetch for an earlier verse must not
      // overwrite the refs shown for the verse now open.
      let cancelled = false;
      setIsLoadingTsk(true);
      getTskForVerse(verseId)
        .then(res => {
          if (!cancelled) setTskRefs(res);
        })
        .catch(() => {
          if (!cancelled) setTskRefs([]);
        })
        .finally(() => {
          if (!cancelled) setIsLoadingTsk(false);
        });

      if (marginActiveTab) {
        initializedVerseRef.current = verseId;
        setActiveTab(marginActiveTab);
        setMarginActiveTab(null);
      } else {
        initializedVerseRef.current = verseId;
        setActiveTab(prev => {
          // Preserve the user's own notes/links tab across verse switches.
          if (prev === 'notes' || prev === 'links') return prev;
          if (cits.length > 0) return 'citations';
          if (mess.length > 0) return 'messianic';
          if (chs.length > 0) return 'chains';
          return 'tsk';
        });
      }
    } else if (marginActiveTab) {
      // Same verse reopened with an explicit routed tab (badge click).
      setActiveTab(marginActiveTab);
      setMarginActiveTab(null);
    }
  }, [selectedMarginVerse, marginActiveTab, setMarginActiveTab]);

  // Sync the note draft when the margin verse changes (notes is deliberately
  // not a dependency — store updates during typing must not clobber the draft).
  useEffect(() => {
    flushNote();
    setNoteDraft(selectedMarginVerse ? notes[selectedMarginVerse.id] || '' : '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMarginVerse?.id]);

  // Flush a pending note when the margin unmounts.
  useEffect(() => {
    return () => {
      if (noteTimerRef.current !== null) window.clearTimeout(noteTimerRef.current);
      const pending = pendingNoteRef.current;
      pendingNoteRef.current = null;
      if (pending) void useStore.getState().setNote(pending.verseId, pending.text);
    };
  }, []);

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!selectedMarginVerse) return;
    const text = e.target.value;
    setNoteDraft(text);
    pendingNoteRef.current = { verseId: selectedMarginVerse.id, text };
    if (noteTimerRef.current !== null) window.clearTimeout(noteTimerRef.current);
    noteTimerRef.current = window.setTimeout(flushNote, 500);
  };

  const handleStartLinking = () => {
    if (selectedMarginVerse) {
      startLinking(selectedMarginVerse.id);
      setSelectedMarginVerse(null);
    }
  };

  const handleOpenChain = (chain: MasterChain) => {
    openThreadPanelWithTab('chains', chain.id);
    setSelectedMarginVerse(null);
  };

  const handleNavigateRef = (refStr: string, targetTab?: string) => {
    const parsed = parseRef(refStr);
    const meta = parsed ? BOOK_BY_NAME[parsed.book] : undefined;
    if (!parsed || !meta) {
      showNotice(`Couldn't navigate to "${refStr}" — no single target verse.`);
      return;
    }
    const targetId = `${meta.slug}-${parsed.chapter}-${parsed.startVerse}`;
    void navigateToVerse(targetId, { preserveMargin: true, targetTab });
  };

  // Plain JSX (not a component!) — defining it as a component would remount the
  // whole subtree on every store change (e.g. losing textarea focus per keystroke).
  const verseLinks = selectedMarginVerse ? links[selectedMarginVerse.id] || [] : [];
  const totalTskCount = tskRefs.reduce((acc, a) => acc + a.refs.length, 0);

  const content = selectedMarginVerse ? (
    <div className="h-full flex flex-col">
      {/* Verse Reference Header Banner */}
        <div className="p-4 border-b border-foreground/10 bg-foreground/[0.02] shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                {selectedMarginVerse.book} {selectedMarginVerse.chapter}:{selectedMarginVerse.verseNumber}
              </span>
              <span className="text-[10px] text-foreground/40 font-mono">
                {selectedMarginVerse.id}
              </span>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-foreground/10 cursor-pointer text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Close Margin"
              title="Close Margin"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs font-serif italic text-foreground/80 mt-1 line-clamp-2">
            "{selectedMarginVerse.text}"
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex-1 flex flex-col pt-0">
          <TabsList className="flex w-full rounded-none border-b border-foreground/5 bg-transparent p-0 overflow-x-auto scrollbar-none">
            <TabsTrigger
              value="tsk"
              className="flex-1 py-3 text-[10px] uppercase tracking-wider font-bold rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent bg-transparent"
            >
              TSK ({totalTskCount})
            </TabsTrigger>

            {(citations.length > 0 || activeTab === 'citations') && (
              <TabsTrigger
                value="citations"
                className="flex-1 py-3 text-[10px] uppercase tracking-wider font-bold rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent bg-transparent"
              >
                Citations {citations.length > 0 ? `(${citations.length})` : ''}
              </TabsTrigger>
            )}

            {(messianic.length > 0 || activeTab === 'messianic') && (
              <TabsTrigger
                value="messianic"
                className="flex-1 py-3 text-[10px] uppercase tracking-wider font-bold rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent bg-transparent"
              >
                Messianic {messianic.length > 0 ? `(${messianic.length})` : ''}
              </TabsTrigger>
            )}

            {(chains.length > 0 || activeTab === 'chains') && (
              <TabsTrigger
                value="chains"
                className="flex-1 py-3 text-[10px] uppercase tracking-wider font-bold rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent bg-transparent"
              >
                Chains {chains.length > 0 ? `(${chains.length})` : ''}
              </TabsTrigger>
            )}

            <TabsTrigger
              value="context"
              className="flex-1 py-3 text-[10px] uppercase tracking-wider font-bold rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent bg-transparent"
            >
              Context
            </TabsTrigger>

            <TabsTrigger
              value="links"
              className="flex-1 py-3 text-[10px] uppercase tracking-wider font-bold rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent bg-transparent"
            >
              Links {verseLinks.length > 0 && `(${verseLinks.length})`}
            </TabsTrigger>

            <TabsTrigger
              value="notes"
              className="flex-1 py-3 text-[10px] uppercase tracking-wider font-bold rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent bg-transparent"
            >
              Notes
            </TabsTrigger>
          </TabsList>

          {/* TIER 1: TSK CROSS REFERENCES */}
          <TabsContent value="tsk" className="flex-1 overflow-y-auto p-5 space-y-4 my-0 border-none outline-none">
            <div className="flex items-center justify-between pb-2 border-b border-foreground/10">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground/70">
                <BookOpen className="h-3.5 w-3.5 text-accent" />
                <span>Treasury of Scripture Knowledge (TSK)</span>
              </div>
              <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                Tier 1
              </span>
            </div>

            {isLoadingTsk ? (
              <div className="py-8 text-center text-xs text-foreground/50">
                Loading cross-references...
              </div>
            ) : tskRefs.length === 0 ? (
              <div className="py-8 text-center text-xs text-foreground/50">
                No TSK cross-references indexed for this specific verse.
              </div>
            ) : (
              <div className="space-y-4">
                {tskRefs.map((anchorGroup, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-foreground/10 bg-foreground/[0.01] space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-accent">
                        Phrase Anchor:
                      </span>
                      <span className="text-xs font-serif font-medium text-foreground italic">
                        "{anchorGroup.anchor}"
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {anchorGroup.refs.map((ref, rIdx) => (
                        <button
                          key={rIdx}
                          onClick={() => handleNavigateRef(ref, 'tsk')}
                          className="px-2 py-1 text-xs rounded-md bg-foreground/5 hover:bg-accent hover:text-accent-foreground transition-colors font-mono cursor-pointer"
                        >
                          {ref}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* TIER 2: NT CITATIONS & ALLUSIONS */}
          <TabsContent value="citations" className="flex-1 overflow-y-auto p-5 space-y-4 my-0 border-none outline-none">
            <div className="flex items-center justify-between pb-2 border-b border-foreground/10">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground/70">
                <Quote className="h-3.5 w-3.5 text-accent" />
                <span>Apostolic Quotations & Allusions</span>
              </div>
              <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                Tier 2
              </span>
            </div>

            {citations.length === 0 ? (
              <div className="py-8 text-center text-xs text-foreground/50">
                No direct apostolic NT citations or allusions for this verse.
              </div>
            ) : (
              <div className="space-y-4">
                {citations.map(cit => {
                  const isNt = cit.ntVerseId === selectedMarginVerse.id || expandVerseRange(cit.ntRef).includes(selectedMarginVerse.id);
                  const counterpartRef = isNt ? cit.otRef : cit.ntRef;
                  const counterpartVerseId = isNt ? cit.otVerseId : cit.ntVerseId;

                  return (
                    <div key={cit.id} className="p-3.5 rounded-xl border border-foreground/10 bg-background space-y-2.5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                          {cit.category}
                        </span>
                        <span className="text-[10px] text-foreground/40 uppercase font-mono">
                          {cit.type.replace('_', ' ')}
                        </span>
                      </div>

                      <div className="text-xs">
                        <span className="text-foreground/50">
                          {isNt ? 'Quoting OT Passage: ' : 'Quoted in NT by: '}
                        </span>
                        <button
                          onClick={() => navigateToVerse(counterpartVerseId, { preserveMargin: true, targetTab: 'citations' })}
                          className="font-bold text-accent hover:underline inline-flex items-center gap-1 ml-1 cursor-pointer"
                        >
                          <span>{counterpartRef}</span>
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      </div>

                      {cit.formula && (
                        <div className="p-2 rounded bg-foreground/5 text-xs italic font-serif text-foreground/80">
                          "{cit.formula}"
                        </div>
                      )}

                      {cit.greekFormula && (
                        <div className="text-[11px] font-mono text-accent/80">
                          Greek: {cit.greekFormula}
                        </div>
                      )}

                      <p className="text-xs text-foreground/70 leading-relaxed">
                        {cit.theologicalNote}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </TabsContent>

          {/* TIER 3: SPECIFIC MESSIANIC PROPHECIES — Jesus Christ threads, light red */}
          <TabsContent value="messianic" className="flex-1 overflow-y-auto p-5 space-y-4 my-0 border-none outline-none">
            <div className="flex items-center justify-between pb-2 border-b border-foreground/10">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground/70">
                <Sparkles className="h-3.5 w-3.5 text-red-500 dark:text-red-300" />
                <span>Messianic Prophecy & Fulfillment</span>
              </div>
              <span className="text-[10px] font-mono text-red-600 dark:text-red-300 bg-red-100 dark:bg-red-500/15 px-2 py-0.5 rounded-full">
                Tier 3
              </span>
            </div>

            {messianic.length === 0 ? (
              <div className="py-8 text-center text-xs text-foreground/50">
                No specific Messianic prophecy catalogued for this verse.
              </div>
            ) : (
              <div className="space-y-4">
                {messianic.map(m => {
                  const isNtFulfillment = m.otVerseId !== selectedMarginVerse.id && !expandVerseRange(m.prophecyRef).includes(selectedMarginVerse.id);

                  return (
                    <div key={m.id} className="p-3.5 rounded-xl border border-red-200 dark:border-red-500/20 bg-red-50/50 dark:bg-red-500/[0.06] space-y-2.5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-500/15 text-red-600 dark:text-red-300">
                          {m.category}
                        </span>
                        <span className="text-[10px] text-foreground/50 font-mono">
                          Edersheim Cat.
                        </span>
                      </div>

                      <div className="text-sm font-bold text-foreground">
                        {m.title}
                      </div>

                      {isNtFulfillment ? (
                        <div className="text-xs">
                          <span className="text-foreground/50">OT Prophetic Source: </span>
                          <button
                            onClick={() => navigateToVerse(m.otVerseId, { preserveMargin: true, targetTab: 'messianic' })}
                            className="font-bold text-red-500 dark:text-red-300 hover:underline inline-flex items-center gap-1 ml-1 cursor-pointer"
                          >
                            <span>{m.prophecyRef}</span>
                            <ArrowRight className="h-3 w-3" />
                          </button>
                        </div>
                      ) : (
                        <div className="text-xs text-foreground/70">
                          <span className="text-foreground/50">Prophecy Reference: </span>
                          <button
                            onClick={() => navigateToVerse(m.otVerseId, { preserveMargin: true, targetTab: 'messianic' })}
                            className="font-semibold text-red-500 dark:text-red-300 hover:underline cursor-pointer"
                          >
                            {m.prophecyRef}
                          </button>
                        </div>
                      )}

                      <div className="text-xs text-foreground/70">
                        <span className="text-foreground/40 uppercase text-[10px] font-bold block mb-1">
                          Canonical NT Fulfillments:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {m.fulfillmentRefs.map((ref, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleNavigateRef(ref, 'messianic')}
                              className="px-2 py-0.5 rounded bg-red-100/80 dark:bg-red-500/15 text-red-600 dark:text-red-300 font-mono text-[11px] hover:bg-red-400 hover:text-white dark:hover:bg-red-500 dark:hover:text-white transition-colors cursor-pointer"
                            >
                              {ref}
                            </button>
                          ))}
                        </div>
                      </div>

                      <p className="text-xs text-foreground/80 leading-relaxed pt-1">
                        {m.solaScripturaNote}
                      </p>

                      {m.edersheimChapter && (
                        <div className="p-2 rounded bg-foreground/5 text-[11px] text-foreground/60 italic">
                          {m.edersheimChapter}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </TabsContent>

          {/* TIER 4: MASTER CANONICAL REDEMPTIVE CHAINS */}
          <TabsContent value="chains" className="flex-1 overflow-y-auto p-5 space-y-4 my-0 border-none outline-none">
            <div className="flex items-center justify-between pb-2 border-b border-foreground/10">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground/70">
                <Network className="h-3.5 w-3.5 text-accent" />
                <span>Master Canonical Redemptive Chains</span>
              </div>
              <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                Tier 4
              </span>
            </div>

            {chains.length === 0 ? (
              <div className="py-8 text-center text-xs text-foreground/50">
                This verse is not part of the 42 Master Chains.
              </div>
            ) : (
              <div className="space-y-4">
                {chains.map(chain => (
                  <div key={chain.id} className="p-3.5 rounded-xl border border-foreground/10 bg-background space-y-2.5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent">
                        Chain #{chain.number} • {chain.category}
                      </span>
                    </div>

                    <div className="text-sm font-bold text-foreground">
                      {chain.name}
                    </div>

                    <p className="text-xs text-foreground/70 leading-relaxed">
                      {chain.summary}
                    </p>

                    <div className="text-xs text-foreground/70 flex items-center justify-between">
                      <span>
                        Anchor:{' '}
                        <button
                          onClick={() => navigateToVerse(chain.primaryAnchorVerseId, { preserveMargin: true, targetTab: 'chains' })}
                          className="font-mono text-accent hover:underline cursor-pointer font-bold"
                        >
                          {chain.primaryAnchor}
                        </button>
                      </span>
                      <span className="text-foreground/50 text-[11px]">{chain.steps.length} milestones</span>
                    </div>

                    <div className="pt-1">
                      <span className="text-[10px] uppercase font-bold text-foreground/40 block mb-1">
                        Timeline Milestones:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {chain.steps.map((step, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleNavigateRef(step.ref, 'chains')}
                            className="px-2 py-0.5 rounded bg-accent/10 hover:bg-accent hover:text-accent-foreground text-accent font-mono text-[10px] transition-colors cursor-pointer"
                            title={`${step.title} (${step.ref})`}
                          >
                            {step.ref}
                          </button>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => handleOpenChain(chain)}
                      variant="outline"
                      size="sm"
                      className="w-full gap-2 text-xs font-sans mt-2 cursor-pointer"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Open Master Timeline in Thread Pane</span>
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* HISTORICAL CONTEXT TAB */}
          <TabsContent value="context" className="flex-1 overflow-y-auto p-6 space-y-6 my-0 border-none outline-none">
            <div>
              <h4 className="text-xs font-bold uppercase mb-2 text-foreground/40 tracking-wider">
                Canonical Context
              </h4>
              <p className="text-sm leading-relaxed font-serif">
                The book of {selectedMarginVerse.book} chapter {selectedMarginVerse.chapter} forms part of the inspired canonical narrative. Every verse in the Sola Scriptura tradition is illuminated by comparing scripture with scripture across all 66 books of the Bible.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase mb-2 text-foreground/40 tracking-wider">
                Hermeneutical Pillar
              </h4>
              <p className="text-xs leading-relaxed text-foreground/70">
                "To the law and to the testimony: if they speak not according to this word, it is because there is no light in them." (Isaiah 8:20). Every doctrine and chain in Threads Bible is tethered to the immutable Word of God.
              </p>
            </div>
          </TabsContent>

          {/* LINKS TAB */}
          <TabsContent value="links" className="flex-1 overflow-y-auto p-6 my-0 border-none outline-none space-y-6">
            <div>
              <Button onClick={handleStartLinking} variant="outline" className="w-full gap-2 font-sans">
                <LinkIcon className="w-4 h-4" />
                Create Internal Link
              </Button>
              <p className="text-xs text-foreground/50 mt-2 text-center">
                Click to connect {selectedMarginVerse.book} {selectedMarginVerse.chapter}:{selectedMarginVerse.verseNumber} to another verse.
              </p>
            </div>

            {verseLinks.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase mb-3 text-foreground/40 border-b border-foreground/10 pb-2">
                  Connected Verses
                </h4>
                <ul className="space-y-3 mt-4">
                  {verseLinks.map(targetId => (
                    <li key={targetId} className="flex flex-col gap-2 p-3 bg-foreground/5 rounded-md text-sm border border-foreground/5 justify-between">
                      <div className="flex justify-between items-center w-full">
                        <span
                          className="font-sans font-medium cursor-pointer hover:underline text-accent"
                          onClick={() => navigateToVerse(targetId, { preserveMargin: true })}
                        >
                          {targetId}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeLink(selectedMarginVerse.id, targetId)}
                          className="h-6 w-6 rounded-full text-destructive hover:bg-destructive/10 hover:text-destructive"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </TabsContent>

          {/* NOTES TAB */}
          <TabsContent value="notes" className="flex-1 flex flex-col p-6 my-0 border-none outline-none">
            <div className="mt-auto p-4 bg-background border border-foreground/10 rounded-lg flex-1 flex flex-col shadow-sm">
              <p className="text-[10px] uppercase tracking-wider font-bold mb-2 opacity-50">
                Your Local Study Note
              </p>
              <textarea
                className="w-full flex-1 bg-transparent border-none text-xs leading-relaxed focus:ring-0 p-0 resize-none font-sans outline-none"
                placeholder="Record your insights and Bible cross-references in the margin..."
                value={noteDraft}
                onChange={handleNoteChange}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
  ) : null;

  if (isDesktop) {
    return (
      <Sheet open={isOpen} onOpenChange={onOpenChange} modal={false}>
        <SheetContent showCloseButton={false} className="w-88 sm:max-w-[460px] p-0 flex flex-col bg-card border-l border-foreground/10 shadow-2xl">
          <SheetHeader className="p-6 pb-2 border-b border-foreground/5 hidden">
            <SheetTitle className="font-serif">
              {selectedMarginVerse?.book} {selectedMarginVerse?.chapter}:{selectedMarginVerse?.verseNumber}
            </SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-hidden">
            {content}
          </div>
          <div
            onClick={() => onOpenChange(false)}
            className="absolute top-1/2 -left-4 w-5 h-12 bg-card border border-foreground/15 border-r-0 rounded-l-md flex items-center justify-center cursor-pointer shadow-[-4px_0_10px_rgba(0,0,0,0.06)] hover:bg-foreground/5 hover:text-accent transition-colors"
            title="Collapse Margin"
            aria-label="Collapse Margin"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent className="h-[80vh] bg-card p-0">
        <div className="mx-auto w-full max-w-md flex flex-col h-full">
          <DrawerHeader className="p-4 border-b border-foreground/5 hidden">
            <DrawerTitle className="font-serif text-center">
              {selectedMarginVerse?.book} {selectedMarginVerse?.chapter}:{selectedMarginVerse?.verseNumber}
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex-1 overflow-hidden pb-8">
            {content}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
