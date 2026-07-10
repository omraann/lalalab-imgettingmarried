import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProposalPage from './pages/ProposalPage';
import VowsPage from './pages/VowsPage';
import LoveLetterPage from './pages/LoveLetterPage';
import RingAdvisorPage from './pages/RingAdvisorPage';
import DateIdeasPage from './pages/DateIdeasPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--color-bg)' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/proposal" element={<ProposalPage />} />
            <Route path="/vows" element={<VowsPage />} />
            <Route path="/love-letter" element={<LoveLetterPage />} />
            <Route path="/ring-advisor" element={<RingAdvisorPage />} />
            <Route path="/date-ideas" element={<DateIdeasPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
