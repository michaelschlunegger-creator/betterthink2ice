/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: '#0b1021',
        glass: 'rgba(255,255,255,0.08)',
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
      },
      backgroundImage: {
        'gradient-hero': 'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.35), transparent 35%), radial-gradient(circle at 80% 10%, rgba(236,72,153,0.3), transparent 40%), radial-gradient(circle at 50% 80%, rgba(56,189,248,0.25), transparent 35%)',
        'glass-panel': 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.03))',
      },
      boxShadow: {
        glow: '0 20px 60px rgba(99,102,241,0.25)',
        'glow-strong': '0 25px 80px rgba(99,102,241,0.35)',
        glass: '0 10px 40px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
};
