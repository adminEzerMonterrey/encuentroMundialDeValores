import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`} id="nav" role="navigation" aria-label="Navegación principal">
        <a href="#" className="nav__brand" aria-label="Volver al inicio" onClick={closeMenu}>
          <img src="/images/EMV XVIII-Blanco.png" alt="Encuentro Mundial de Valores" className="nav__logo-img" style={{ height: 'clamp(90px, 6vw, 100px)', objectFit: 'contain', transition: 'height 0.3s ease' }} />
          <span className="nav__year" style={{ alignSelf: 'flex-end', paddingBottom: '10px' }}>2026</span>
        </a>
        <button 
          className={`nav__hamburger ${isOpen ? 'open' : ''}`} 
          id="navHamburger" 
          aria-label="Abrir menú" 
          aria-expanded={isOpen}
          aria-controls="navMenu"
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>
        <ul className={`nav__menu ${isOpen ? 'open' : ''}`} id="navMenu" role="list">
          <li><a href="#speakers" className="nav__link" onClick={closeMenu}>Panelistas</a></li>
          <li><a href="#agenda" className="nav__link" onClick={closeMenu}>Programa Preliminar</a></li>
          <li><a href="#sponsors" className="nav__link" onClick={closeMenu}>Colaboradores</a></li>
          <li><a href="#ubicacion" className="nav__link" onClick={closeMenu}>Ubicación</a></li>
          <li>
            <a href="https://www.superboletos.com/landing-evento/GKkYPxPOI36IfcL_nK2DYQ" className="btn--gradient-border nav__cta" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              <strong>COMPRAR BOLETO</strong>
            </a>
          </li>
        </ul>
      </nav>

      <a 
        href="https://www.superboletos.com/landing-evento/GKkYPxPOI36IfcL_nK2DYQ" 
        target="_blank" rel="noopener noreferrer"
        className="sticky-cta"
        id="stickyCTA" 
        aria-label="Comprar boleto para el evento"
        style={{ display: isScrolled ? '' : 'none' }}
      >
        <strong>COMPRAR BOLETO →</strong>
        <div className="sticky-stars-container">
          <div className="sticky-stars"></div>
        </div>
        <div className="sticky-glow">
          <div className="sticky-glow-circle"></div>
          <div className="sticky-glow-circle"></div>
        </div>
      </a>
    </>
  );
}
