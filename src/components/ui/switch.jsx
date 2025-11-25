import { cn } from '../../utils/cn';

export default function Switch({ checked, onChange, className, label }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={cn(
        'relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-white/15 bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60',
        checked && 'bg-gradient-to-r from-brand-500 to-sky-400',
        className,
      )}
      aria-pressed={checked}
      aria-label={label || 'Toggle'}
    >
      <span
        className={cn(
          'inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform',
          checked ? 'translate-x-5' : 'translate-x-1',
        )}
      />
    </button>
  );
}
