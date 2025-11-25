import { cn } from '../../utils/cn';

export default function Progress({ value, className }) {
  return (
    <div className={cn('h-2 w-full overflow-hidden rounded-full bg-white/10', className)}>
      <div
        className="h-full rounded-full bg-gradient-to-r from-brand-500 via-purple-500 to-sky-400 transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
