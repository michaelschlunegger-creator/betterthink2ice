import { cn } from '../../utils/cn';

export default function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/50',
        className,
      )}
      {...props}
    />
  );
}
