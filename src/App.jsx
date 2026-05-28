import React, { useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBand from './components/StatsBand';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

// Splash Screen Component
function SplashScreen({ onDone }) {
  const [phase, setPhase] = React.useState('loading'); // 'loading', 'revealing', 'done'

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Solo mostramos las barras por unos instantes antes de revelar
    const t = setTimeout(() => {
      setPhase('revealing');
    }, 800); // 800ms de espera antes de abrir las cortinas

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase === 'revealing') {
      setTimeout(() => {
        document.body.style.overflow = '';
        onDone();
      }, 1200); // Tiempo que tardan las cortinas en subir
    }
  }, [phase, onDone]);

  if (phase === 'done') return null;

  return (
    <div className={`loading-screen ${phase === 'revealing' ? 'is-revealing' : ''}`}>
      <div className="loading-overlay v1"></div>
      <div className="loading-overlay v2"></div>
      <div className="loading-overlay v3"></div>
      <div className="splash-dove-wrapper">
        <img src="/images/icono-de-la-paloma-en-blanco-y-negro-vector-fondos.webp" alt="Dove" className="splash-dove" />
      </div>
    </div>
  );
}

// Global Particles Background
function GlobalParticles() {
  return null;
}

function App() {
  const [showSplash, setShowSplash] = React.useState(true);

  // Global Scroll Reveal Hook
  useEffect(() => {
    if (showSplash) return; // Wait until splash is done to reveal
    
    // Trigger Hero Reveal right away
    document.querySelectorAll('.hero .reveal-up').forEach((el, i) => {
      setTimeout(() => {
        el.style.transitionDelay = '0ms';
        el.classList.add('visible');
      }, i * 110);
    });

    const els = document.querySelectorAll('.reveal-up:not(.hero .reveal-up)');
    if (!els.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const siblings = Array.from(entry.target.parentElement?.children || []);
          const index = siblings.indexOf(entry.target);
          const delay = index > -1 ? index * 60 : 0;
          entry.target.style.transitionDelay = `${Math.min(delay, 400)}ms`;
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

    els.forEach(el => io.observe(el));

    return () => {
      els.forEach(el => io.unobserve(el));
      io.disconnect();
    };
  }, [showSplash]);

  // Section Effects Hook
  useEffect(() => {
    const handleScroll = () => {
      const orbs = document.querySelectorAll('.section-orb');
      const sy = window.scrollY;
      orbs.forEach((orb, i) => {
        const dir  = i % 2 === 0 ? 1 : -1;
        const speed = 0.04 + (i % 3) * 0.015;
        orb.style.transform = `translateY(${dir * sy * speed}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Image Fallback Hook
  useEffect(() => {
    const spinner = () => `
      <div class="img-spinner-wrap" aria-hidden="true">
        <div class="img-spinner-bg"></div>
        <div class="img-spinner"></div>
      </div>`;

    const handleImgError = (e) => {
      const img = e.target;
      if (img.tagName === 'IMG' && !img.dataset.failed) {
        img.dataset.failed = true;
        const wrap = document.createElement('div');
        wrap.innerHTML = spinner();
        const el = wrap.firstElementChild;
        el.style.width  = img.width  ? img.width  + 'px' : '96px';
        el.style.height = img.height ? img.height + 'px' : '96px';
        img.parentNode?.replaceChild(el, img);
      }
    };

    document.addEventListener('error', handleImgError, true);
    return () => document.removeEventListener('error', handleImgError, true);
  }, []);

  return (
    <>
      <Analytics />
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}
      <GlobalParticles />
      
      <div style={{ position: 'relative', zIndex: 1, opacity: showSplash ? 0 : 1, transition: 'opacity 0.4s ease' }}>
        <Navbar />
        <main id="mainContent" tabIndex="-1">
          <Hero />
          <StatsBand />
          <div className="section-orb section-orb--1" aria-hidden="true"></div>
          <Speakers />
          <div className="section-orb section-orb--2" aria-hidden="true"></div>
          <Agenda />
          <div className="section-orb section-orb--3" aria-hidden="true"></div>
          <Sponsors />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
