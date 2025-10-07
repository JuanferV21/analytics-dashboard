import { cn } from '../../lib/utils';

export function Tabs({ children, defaultValue, value, onValueChange, className }) {
  return (
    <div className={cn('w-full', className)}>
      {children}
    </div>
  );
}

export function TabsList({ children, className }) {
  return (
    <div
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-xl bg-muted p-1 text-muted-foreground',
        className
      )}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({ children, value, isActive, onClick, className }) {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        isActive
          ? 'bg-background text-foreground shadow-sm'
          : 'hover:bg-background/50',
        className
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value, activeTab, className }) {
  if (value !== activeTab) return null;

  return (
    <div
      className={cn(
        'mt-6 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
    >
      {children}
    </div>
  );
}
