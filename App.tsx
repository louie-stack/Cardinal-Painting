import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

// Scroll to top on route change and initialize reveal animations
const NavigationHandler = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
    
    // Slight delay to ensure content is rendered before observing
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);
  
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <NavigationHandler />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;