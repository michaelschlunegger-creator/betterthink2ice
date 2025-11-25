import { cn } from '../../utils/cn';

export function Card({ className, children }) {
  return (
    <div className={cn('glass glow-border rounded-2xl p-6 shadow-glass', className)}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children }) {
  return <div className={cn('flex items-start justify-between gap-2 mb-4', className)}>{children}</div>;
}

export function CardTitle({ className, children }) {
  return <h3 className={cn('text-lg font-semibold text-white', className)}>{children}</h3>;
}

export function CardDescription({ className, children }) {
  return <p className={cn('text-sm text-slate-300', className)}>{children}</p>;
}
