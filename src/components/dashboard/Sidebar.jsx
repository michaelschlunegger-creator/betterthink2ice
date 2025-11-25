import { LayoutGrid, BarChart3, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { icon: LayoutGrid, label: 'Overview', href: '/dashboard' },
  { icon: BarChart3, label: 'Trends', href: '/dashboard#trends' },
  { icon: Sparkles, label: 'Coaching', href: '/form' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="glass glow-border rounded-3xl p-5 h-full">
      <div className="mb-4">
        <p className="text-sm text-slate-300">Navigation</p>
      </div>
      <div className="space-y-2">
        {links.map((link) => {
          const active = location.pathname + location.hash === link.href;
          return (
            <Link
              key={link.label}
              to={link.href}
              className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-semibold transition ${
                active ? 'bg-white/10 text-white shadow-glow' : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
