import { cn } from '../../utils/cn';

export default function Label({ className, children, ...props }) {
  return (
    <label className={cn('text-sm font-medium text-slate-100', className)} {...props}>
      {children}
    </label>
  );
}
