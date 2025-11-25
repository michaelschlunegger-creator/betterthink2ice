# BetterThink Calm Coach

A Vite-powered React demo showcasing a multi-step guided form, an Apple-inspired landing page, and a glassy dashboard with live charts.

## Tech stack
- React 18 + Vite
- Tailwind CSS with glassmorphism theming
- ShadCN-style UI primitives
- Framer Motion for motion flourishes
- Recharts for interactive charting
- React Router for routing

## Getting started
1. Install dependencies
   ```bash
   npm install
   ```
2. Run the dev server
   ```bash
   npm run dev
   ```
3. Build for production
   ```bash
   npm run build
   ```
4. Preview the production build
   ```bash
   npm run preview
   ```

## Deploy to GitHub Pages
1. Build the app:
   ```bash
   npm run build
   ```
2. Push the `dist/` folder to a `gh-pages` branch (e.g., using `git subtree`):
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```
   Or host the contents of `dist/` on any static host.

## Project structure
```
src/
  components/
    dashboard/     # Sidebar, chart, stat cards
    layout/        # Navbar, footer, layout shell
    ui/            # ShadCN-inspired primitives
    Hero.jsx       # Landing hero
    MultiStepForm.jsx
  context/
    FormContext.jsx
  hooks/
    useDarkMode.js
  pages/
    LandingPage.jsx
    FormPage.jsx
    DashboardPage.jsx
  utils/
    cn.js
```

## Notes
- The form state is stored in context so progress persists between routes.
- Tailwind powers the glassy gradients; switch themes with the toggle in the navbar.
