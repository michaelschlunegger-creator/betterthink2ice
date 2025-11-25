import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';
import Switch from '../ui/switch.jsx';

export default function DarkModeToggle() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 border border-white/10">
      <Sun className="h-4 w-4 text-amber-300" />
      <Switch checked={isDark} onChange={toggle} label="Toggle theme" />
      <Moon className="h-4 w-4 text-indigo-200" />
    </div>
  );
}
