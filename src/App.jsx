import Loader from './components/Loader';
import Chrome from './components/Chrome';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import CoursesCarousel from './components/CoursesCarousel';
import Method from './components/Method';
import SpotifySection from './components/SpotifySection';
import ChinafunkVideo from './components/ChinafunkVideo';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useSmoothAnchorScroll } from './hooks/useSmoothAnchorScroll';
import { AppProvider } from './context/AppContext';

export default function App() {
  // Global, page-wide behaviours that used to live at the bottom of script.js
  useScrollReveal();
  useSmoothAnchorScroll();

  return (
    <AppProvider>
      <Loader />
      <Chrome />
      <Nav />
      <Hero />
      <Marquee />
      <CoursesCarousel />
      <Method />
      <SpotifySection />
      <ChinafunkVideo />
      <FinalCTA />
      <Footer />
    </AppProvider>
  );
}

