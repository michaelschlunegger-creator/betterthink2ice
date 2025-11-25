import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface/80 backdrop-blur-xl">
      <div className="section-max flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">Stay centered.</p>
          <p className="text-slate-400 text-sm">Built with love, glass, and gradients.</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-300">
          <Link to="/">Home</Link>
          <Link to="/form">Form</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
    </footer>
  );
}
