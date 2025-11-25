import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './ui/button.jsx';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 lg:p-14 glass glow-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.04),transparent_35%)]" />
      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm text-slate-100 shadow-glass"
          >
            <Sparkles className="h-4 w-4 text-amber-300" />
            Apple-inspired calm design
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl leading-tight text-white md:text-5xl"
          >
            A modern calm coach to guide your best decisions.
            <span className="block gradient-text text-4xl md:text-5xl">Mindful, playful, and glassy.</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg text-slate-200"
          >
            Navigate emotions with a premium multi-step guide, shimmering dashboards, and live readiness scores.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button asChild className="px-6 py-3 text-base">
              <Link to="/form" className="flex items-center gap-2">
                Start guided form
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="secondary" asChild className="px-6 py-3 text-base">
              <Link to="/dashboard">View dashboard</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -left-6 -top-6 h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-xl" />
          <div className="absolute -right-8 -bottom-8 h-28 w-28 rounded-full bg-gradient-to-br from-brand-500 to-sky-400 blur-3xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-100">Readiness meter</p>
              <span className="text-xs text-slate-300">Live</span>
            </div>
            <div className="grid gap-3">
              {[72, 84, 68].map((value, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-white/10 flex items-center justify-center text-sm text-white">
                    {idx === 0 ? 'Calm' : idx === 1 ? 'Focus' : 'Trust'}
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-brand-500 to-sky-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${value}%` }}
                        transition={{ duration: 1, delay: idx * 0.15 }}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-white font-semibold">{value}%</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
