import React, { useState } from 'react';
import { AlertTriangle, RefreshCw, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface DataChunkErrorCardProps {
  title?: string;
  chunkName?: string;
  error?: Error | null;
  onRetry?: () => Promise<unknown> | void;
  className?: string;
  compact?: boolean;
}

export const DataChunkErrorCard: React.FC<DataChunkErrorCardProps> = ({
  title,
  chunkName = 'data',
  error,
  onRetry,
  className,
  compact = false,
}) => {
  const [retrying, setRetrying] = useState(false);

  const handleRetry = async () => {
    if (!onRetry || retrying) return;
    try {
      setRetrying(true);
      await Promise.resolve(onRetry());
    } finally {
      setRetrying(false);
    }
  };

  const displayTitle = title || `Unable to Load ${chunkName}`;
  const errorMessage = error?.message || 'Network blip or offline connection prevented loading this dataset.';

  if (compact) {
    return (
      <div
        role="alert"
        className={cn(
          'flex items-center justify-between gap-3 p-3 rounded-xl border border-destructive/30 bg-destructive/5 text-foreground text-xs',
          className
        )}
      >
        <div className="flex items-center gap-2 min-w-0">
          <WifiOff className="h-4 w-4 text-destructive shrink-0" />
          <span className="truncate font-medium">{displayTitle}</span>
        </div>
        {onRetry && (
          <Button
            size="sm"
            variant="outline"
            onClick={handleRetry}
            disabled={retrying}
            className="h-7 px-2.5 text-xs rounded-lg border-destructive/30 hover:bg-destructive/10 text-destructive gap-1 shrink-0"
          >
            <RefreshCw className={cn('h-3 w-3', retrying && 'animate-spin')} />
            <span>{retrying ? 'Retrying…' : 'Retry'}</span>
          </Button>
        )}
      </div>
    );
  }

  return (
    <div
      role="alert"
      className={cn(
        'p-6 rounded-2xl border border-destructive/25 bg-destructive/5 text-center space-y-3 max-w-md mx-auto my-4 shadow-sm',
        className
      )}
    >
      <div className="h-10 w-10 mx-auto rounded-full bg-destructive/10 text-destructive flex items-center justify-center">
        <AlertTriangle className="h-5 w-5" />
      </div>
      <div className="space-y-1">
        <h3 className="font-serif text-base font-bold text-foreground">{displayTitle}</h3>
        <p className="text-xs text-foreground/70 leading-relaxed break-words">{errorMessage}</p>
      </div>
      <div className="pt-2 flex items-center justify-center gap-2">
        {onRetry && (
          <Button
            onClick={handleRetry}
            disabled={retrying}
            size="sm"
            className="rounded-full bg-accent text-accent-foreground hover:opacity-90 gap-1.5 text-xs font-semibold cursor-pointer"
          >
            <RefreshCw className={cn('h-3.5 w-3.5', retrying && 'animate-spin')} />
            <span>{retrying ? 'Retrying…' : 'Retry Loading'}</span>
          </Button>
        )}
        <Button
          onClick={() => window.location.reload()}
          variant="outline"
          size="sm"
          className="rounded-full border-foreground/15 hover:bg-foreground/5 text-xs cursor-pointer"
        >
          Reload Page
        </Button>
      </div>
    </div>
  );
};
