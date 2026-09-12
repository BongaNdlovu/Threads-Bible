import { useStore } from '../store/useStore';

function streakOf(days: string[]): number {
  if (days.length === 0) return 0;
  const set = new Set(days);
  const d = new Date();
  let streak = 0;
  // If today not read yet, start from yesterday
  const today = d.toISOString().slice(0, 10);
  if (!set.has(today)) d.setDate(d.getDate() - 1);
  for (;;) {
    const key = d.toISOString().slice(0, 10);
    if (!set.has(key)) break;
    streak++;
    d.setDate(d.getDate() - 1);
    if (streak > 365) break;
  }
  return streak;
}

export function ProgressRing() {
  const { chaptersReadThisWeek, readDays } = useStore();
  const goal = 7;
  const pct = Math.min(1, chaptersReadThisWeek / goal);
  const streak = streakOf(readDays);
  const r = 10;
  const c = 2 * Math.PI * r;

  return (
    <div className="flex items-center gap-2" title={`${chaptersReadThisWeek} chapters this week · ${streak} day streak`}>
      <svg width="26" height="26" viewBox="0 0 26 26" className="shrink-0">
        <circle cx="13" cy="13" r={r} fill="none" stroke="currentColor" strokeWidth="2.5" className="text-foreground/10" />
        <circle
          cx="13"
          cy="13"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          className="text-accent transition-all duration-500"
          transform="rotate(-90 13 13)"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-[9px] uppercase tracking-wider font-bold text-accent tabular-nums">
          {chaptersReadThisWeek}/{goal}
        </span>
        <span className="text-[9px] text-foreground/40 tabular-nums">{streak}d streak</span>
      </div>
    </div>
  );
}
