export default function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="absolute right-10 top-10 h-60 w-60 rounded-full bg-rose-400/25 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />
    </div>
  );
}
