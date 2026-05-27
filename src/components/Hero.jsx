import React, { useEffect, useRef, useState } from 'react';

const TARGET_DATE = new Date('2026-10-03T09:00:00');

function getTimeLeft() {
  const diff = TARGET_DATE - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, done: false };
}

export default function Hero() {
  const canvasRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    if (timeLeft.done) return;
    const id = setInterval(() => {
      const t = getTimeLeft();
      setTimeLeft(t);
      if (t.done) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, [timeLeft.done]);

  return (
    <section className="hero" id="hero" aria-labelledby="heroHeadline">

      <div className="hero__content">
        <h1 className="hero__title reveal-up" id="heroHeadline" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', columnGap: '0.15em' }}>
            <span className="hero__title-gradient" style={{fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontWeight: 400, lineHeight: '1'}}>HUMANISMO</span>
            <span className="hero__title-white" style={{fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontWeight: 400, lineHeight: '1'}}>Y</span>
            <span className="hero__title-white" style={{fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontWeight: 400, lineHeight: '1'}}>VALORES</span>
          </div>
          <span className="hero__title-white" style={{fontFamily: '"Helvetica Neue LT Pro 57 Condensed", "Oswald", "Helvetica Neue", "Arial Narrow", sans-serif', fontSize: 'clamp(1.2rem, 3.5vw, 2.4rem)', fontWeight: 400, marginTop: '-0.5em', marginBottom: '-0.25em', color: '#e5e7eb', letterSpacing: '0.15em'}}>EN LA ERA DE LA</span>
          <span className="hero__title-gradient" style={{fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontWeight: 400, textAlign: 'center', lineHeight: '0.85', display: 'inline-block', marginTop: '-0.1em'}}>
            INTELIGENCIA&nbsp;&nbsp;&nbsp;&nbsp;ARTIFICIAL
          </span>
        </h1>
        <p className="hero__tagline reveal-up" style={{ fontStyle: 'italic', maxWidth: '100%', margin: '1rem auto 2rem', fontSize: 'clamp(0.9rem, 2.5vw, 1.15rem)', lineHeight: '1.5', whiteSpace: 'nowrap' }}>
          "Asegurando que el avance tecnológico se alinee con los valores humanos y la responsabilidad social"
        </p>

        {/* ── Countdown / Stats Container ── */}
        <div className="hero__stats-container reveal-up" role="timer" aria-live="polite">
          {[{ v: timeLeft.days,    l: 'DÍAS' },
            { v: timeLeft.hours,   l: 'HORAS' },
            { v: timeLeft.minutes, l: 'MINUTOS' },
            { v: timeLeft.seconds, l: 'SEGUNDOS' }].map(({ v, l }) => (
            <div className="hero__stat-card" key={l}>
              <span className="hero__stat-value">{String(v).padStart(2, '0')}</span>
              <span className="hero__stat-label">{l}</span>
            </div>
          ))}
        </div>
        
        {timeLeft.done && (
          <p className="hero__countdown-done text-center mt-4">🎉 ¡El evento ha comenzado!</p>
        )}

        <p className="hero__meta reveal-up">
          <span className="hero__date-badge" style={{color: 'var(--color-cyan)', borderColor: 'var(--color-cyan)', background: 'rgba(46,134,193,0.1)'}}>MONTERREY · 3 Y 4 DE OCTUBRE DE 2026</span>
          <span className="hero__location">Showcenter (Día 1) & Cintermex (Día 2)</span>
        </p>
        <div className="hero__ctas reveal-up">
          <a href="#speakers" className="btn btn--primary btn--lg">Ver Ponentes →</a>
          <a href="#agenda" className="btn btn--ghost btn--lg">Ver agenda</a>
        </div>
      </div>
      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
}
