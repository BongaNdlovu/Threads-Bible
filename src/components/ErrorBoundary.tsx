import React, { useState } from 'react';
import { AlertOctagon, ChevronDown, ChevronUp, Copy, Check, RefreshCw, RotateCcw, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface ErrorBoundaryProps {
  /** Label used in logs and the persisted crash note. */
  label?: string;
  /** Custom fallback; defaults to a pane-friendly or full-screen message card. */
  fallback?: (error: Error, reset: () => void) => React.ReactNode;
  /** Whether this boundary represents a full-page crash or an embedded pane. */
  variant?: 'full' | 'pane';
  children: React.ReactNode;
}

export interface ErrorBoundaryState {
  error: Error | null;
  componentStack: string | null;
}

export const CRASH_KEY = 'threads-bible-last-crash';

/**
 * Clears all cached app state (localStorage, sessionStorage, CacheStorage)
 * and reloads the application to restore a clean state.
 */
export async function clearCachedStateAndRestore(): Promise<void> {
  try {
    if (typeof window !== 'undefined') {
      window.localStorage.clear();
      window.sessionStorage.clear();
      if ('caches' in window) {
        const keys = await window.caches.keys();
        await Promise.all(keys.map(key => window.caches.delete(key)));
      }
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map(reg => reg.unregister()));
      }
    }
  } catch (err) {
    console.error('Failed to fully clear caches during recovery:', err);
  } finally {
    if (typeof window !== 'undefined') {
      window.location.href = window.location.origin + window.location.pathname;
    }
  }
}

export interface ErrorDiagnosticsProps {
  error: Error;
  label?: string;
  componentStack?: string | null;
  onReset?: () => void;
  variant?: 'full' | 'pane';
}

export const ErrorDiagnosticsCard: React.FC<ErrorDiagnosticsProps> = ({
  error,
  label = 'app',
  componentStack,
  onReset,
  variant = 'pane',
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);
  const [clearing, setClearing] = useState(false);

  const diagnosticsData = {
    label,
    name: error.name,
    message: error.message,
    stack: error.stack,
    componentStack,
    url: typeof window !== 'undefined' ? window.location.href : '',
    timestamp: new Date().toISOString(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
  };

  const handleCopyDiagnostics = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(diagnosticsData, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore clipboard rejection */
    }
  };

  const handleClearAndRestore = async () => {
    setClearing(true);
    await clearCachedStateAndRestore();
  };

  const isFull = variant === 'full';

  return (
    <div
      role="alert"
      className={cn(
        'w-full flex items-center justify-center p-6 bg-background font-sans select-text',
        isFull ? 'min-h-screen' : 'h-full min-h-[300px]'
      )}
    >
      <div className="max-w-lg w-full space-y-4 text-center">
        {/* Icon & Title */}
        <div className="space-y-2">
          <div className="h-12 w-12 mx-auto rounded-full bg-destructive/10 text-destructive flex items-center justify-center shadow-inner">
            <AlertOctagon className="h-6 w-6" />
          </div>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
            {isFull ? 'Application Encountered an Error' : `Problem in ${label === 'app' ? 'Pane' : label} View`}
          </h2>
          <p className="text-sm text-foreground/70 break-words leading-relaxed">
            {error.message || 'An unexpected rendering exception occurred.'}
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {onReset && (
            <Button
              onClick={onReset}
              size="sm"
              className="rounded-full bg-accent text-accent-foreground hover:opacity-90 font-medium px-4 text-xs gap-1.5 cursor-pointer shadow-sm"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Try Again</span>
            </Button>
          )}

          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            size="sm"
            className="rounded-full border-foreground/15 hover:bg-foreground/5 text-foreground text-xs px-4 gap-1.5 cursor-pointer"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Reload Application</span>
          </Button>

          <Button
            onClick={handleClearAndRestore}
            disabled={clearing}
            variant="ghost"
            size="sm"
            className="rounded-full text-destructive hover:bg-destructive/10 text-xs px-3 gap-1.5 cursor-pointer transition-colors"
            title="Purge localStorage, cached datasets, and reset application cleanly"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span>{clearing ? 'Restoring…' : 'Clear Cached State & Restore'}</span>
          </Button>
        </div>

        {/* Collapsible Error Diagnostics */}
        <div className="pt-3 border-t border-foreground/10 text-left">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowDetails(d => !d)}
              className="text-xs font-mono text-foreground/60 hover:text-foreground inline-flex items-center gap-1 cursor-pointer transition-colors"
            >
              {showDetails ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
              <span>{showDetails ? 'Hide Diagnostics' : 'Show Error Diagnostics'}</span>
            </button>

            {showDetails && (
              <button
                onClick={handleCopyDiagnostics}
                className="text-[11px] font-mono text-foreground/60 hover:text-foreground inline-flex items-center gap-1 cursor-pointer transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-500" />
                    <span className="text-emerald-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Copy Diagnostics</span>
                  </>
                )}
              </button>
            )}
          </div>

          {showDetails && (
            <div className="mt-2.5 p-3 rounded-xl bg-foreground/5 border border-foreground/10 font-mono text-[11px] text-foreground/80 space-y-2 overflow-x-auto max-h-56">
              <div>
                <span className="text-accent font-semibold">Scope:</span> {label}
              </div>
              <div>
                <span className="text-accent font-semibold">Time:</span> {diagnosticsData.timestamp}
              </div>
              {error.stack && (
                <div className="whitespace-pre-wrap break-all text-[10px] text-foreground/70">
                  <span className="text-accent font-semibold block mb-1">Stack Trace:</span>
                  {error.stack}
                </div>
              )}
              {componentStack && (
                <div className="whitespace-pre-wrap break-all text-[10px] text-foreground/70">
                  <span className="text-accent font-semibold block mb-1">Component Stack:</span>
                  {componentStack}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * Render-error containment: a crash inside one pane shows a recoverable card
 * instead of blanking the whole app. Every caught error is logged and stored
 * under localStorage[threads-bible-last-crash] for local diagnosis.
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null, componentStack: null };

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    const label = this.props.label ?? 'app';
    this.setState({ componentStack: info.componentStack ?? null });
    console.error(`[Threads Bible:${label}] render error:`, error, info.componentStack);
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(
          CRASH_KEY,
          JSON.stringify({
            label,
            message: error.message,
            stack: error.stack?.slice(0, 4000),
            componentStack: info.componentStack?.slice(0, 4000),
            at: new Date().toISOString(),
          })
        );
      }
    } catch {
      // Storage may be unavailable (private mode) — logging above is enough.
    }
  }

  reset = (): void => {
    this.setState({ error: null, componentStack: null });
  };

  render(): React.ReactNode {
    const { error, componentStack } = this.state;
    if (error) {
      if (this.props.fallback) {
        return this.props.fallback(error, this.reset);
      }
      return (
        <ErrorDiagnosticsCard
          error={error}
          label={this.props.label}
          componentStack={componentStack}
          onReset={this.reset}
          variant={this.props.variant ?? 'pane'}
        />
      );
    }
    return this.props.children;
  }
}
