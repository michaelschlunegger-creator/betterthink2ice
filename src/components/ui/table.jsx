import { cn } from '../../utils/cn';

export function Table({ className, children }) {
  return <div className={cn('overflow-hidden rounded-2xl border border-white/10 glass', className)}>{children}</div>;
}

export function TableHeader({ children }) {
  return <div className="bg-white/5 text-xs uppercase tracking-wide text-slate-300 px-4 py-3">{children}</div>;
}

export function TableRow({ children }) {
  return <div className="grid grid-cols-4 items-center px-4 py-3 text-sm text-slate-100 border-t border-white/5">{children}</div>;
}

export function TableCell({ className, children }) {
  return <div className={cn('truncate', className)}>{children}</div>;
}
