import { cn } from '../../utils/cn';

export default function Badge({ children, className, variant = 'default' }) {
  const variants = {
    default: 'bg-white/10 text-white border border-white/15',
    success: 'bg-emerald-500/15 text-emerald-200 border border-emerald-400/40',
    warning: 'bg-amber-500/15 text-amber-100 border border-amber-400/50',
    danger: 'bg-rose-500/15 text-rose-100 border border-rose-400/60',
  };

  return (
    <span className={cn('px-3 py-1 text-xs font-semibold rounded-full', variants[variant], className)}>
      {children}
    </span>
  );
}
