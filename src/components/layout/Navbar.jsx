import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../ui/button.jsx';
import DarkModeToggle from './DarkModeToggle.jsx';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/form', label: 'Form' },
  { to: '/dashboard', label: 'Dashboard' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-surface/70 border-b border-white/5">
      <div className="section-max flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-brand-500 to-sky-400 shadow-glow flex items-center justify-center text-white font-display text-xl">
            BT
          </div>
          <div>
            <p className="text-sm text-slate-300">BetterThink</p>
            <p className="font-semibold text-white">Calm Coach</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-semibold transition ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute left-3 right-3 -bottom-1 h-0.5 bg-gradient-to-r from-brand-400 to-sky-300 rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <Button asChild className="hidden md:inline-flex">
            <Link to={location.pathname === '/form' ? '/dashboard' : '/form'}>
              {location.pathname === '/form' ? 'View Dashboard' : 'Get Started'}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
