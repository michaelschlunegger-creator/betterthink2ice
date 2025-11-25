import { Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import FormPage from './pages/FormPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import GradientOrbs from './components/GradientOrbs.jsx';
import LayoutShell from './components/layout/LayoutShell.jsx';

function App() {
  return (
    <div className="min-h-screen bg-surface text-slate-50 relative overflow-hidden">
      <GradientOrbs />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <LayoutShell>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </LayoutShell>
        <Footer />
      </div>
    </div>
  );
}

export default App;
