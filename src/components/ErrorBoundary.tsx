import React from 'react';

interface ErrorBoundaryProps {
  /** Label used in logs and the persisted crash note. */
  label?: string;
  /** Custom fallback; defaults to a pane-friendly message card. */
  fallback?: (error: Error, reset: () => void) => React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

const CRASH_KEY = 'threads-bible-last-crash';

/**
 * Render-error containment: a crash inside one pane shows a recoverable card
 * instead of blanking the whole app. Every caught error is logged and stored
 * under localStorage[threads-bible-last-crash] so crashes are at least
 * diagnosable locally (the app is fully static — there is no report endpoint).
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    const label = this.props.label ?? 'app';
    console.error(`[Threads Bible:${label}] render error:`, error, info.componentStack);
    try {
      window.localStorage.setItem(
        CRASH_KEY,
        JSON.stringify({
          label,
          message: error.message,
          stack: error.stack?.slice(0, 4000),
          at: new Date().toISOString(),
        })
      );
    } catch {
      // Storage may be unavailable (private mode) — logging above is enough.
    }
  }

  reset = (): void => {
    this.setState({ error: null });
  };

  render(): React.ReactNode {
    const { error } = this.state;
    if (error) {
      if (this.props.fallback) return this.props.fallback(error, this.reset);
      return (
        <div className="h-full w-full flex items-center justify-center p-6 bg-background">
          <div className="max-w-md space-y-3 text-center">
            <div className="text-3xl">⚠️</div>
            <h2 className="font-serif text-lg font-bold text-foreground">
              This pane hit a problem
            </h2>
            <p className="text-sm text-foreground/60 break-words">{error.message}</p>
            <div className="flex items-center justify-center gap-2 pt-1">
              <button
                onClick={this.reset}
                className="px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium cursor-pointer hover:opacity-90"
              >
                Try again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-3 py-1.5 rounded-full border border-foreground/15 text-sm text-foreground/70 cursor-pointer hover:bg-foreground/5"
              >
                Reload page
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
