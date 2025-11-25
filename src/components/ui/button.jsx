import React from 'react';
import { cn } from '../../utils/cn';

const baseStyles =
  'inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:ring-brand-400 disabled:opacity-60 disabled:cursor-not-allowed';

const variants = {
  primary: 'bg-gradient-to-r from-brand-500 via-purple-500 to-sky-400 text-white shadow-glow hover:shadow-glow-strong',
  secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/15',
  ghost: 'text-slate-200 hover:bg-white/10',
};

export default function Button({ variant = 'primary', className, children, asChild = false, ...props }) {
  const classes = cn(baseStyles, variants[variant], className);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(classes, children.props.className),
      ...props,
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
