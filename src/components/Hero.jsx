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
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    let width, height, stars;
    let animationFrameId;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    const initStars = () => {
      stars = Array.from({ length: window.innerWidth < 768 ? 100 : 250 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5,
        targetR: Math.random() * 1.5,
        speed: Math.random() * 0.2 + 0.05,
        glow: Math.random() > 0.8
      }));
    };

    const draw = () => {
      ctx.fillStyle = '#0A0A0F';
      ctx.fillRect(0, 0, width, height);

      stars.forEach(star => {
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);

        if (star.glow) {
          ctx.fillStyle = 'rgba(108, 99, 255, 0.8)';
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#6C63FF';
        } else {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    
    // Defer the heavy animation slightly so it doesn't block the UI thread during mount
    const timeoutId = setTimeout(() => {
      draw();
    }, 100);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, []);

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
      <canvas className="hero__canvas" id="heroCanvas" aria-hidden="true" ref={canvasRef}></canvas>
      <div className="hero__overlay" aria-hidden="true"></div>
      
      {/* Nuevo fondo futurista */}
      <div className="hero__beam"></div>
      <div className="hero__glow-sphere"></div>
      
      {/* Íconos flotantes */}
      <div className="hero__floating-icons">
        <div className="float-icon icon-1">🌐</div>
        <div className="float-icon icon-2">💡</div>
        <div className="float-icon icon-3">🤖</div>
        <div className="float-icon icon-4">⚡</div>
        <div className="float-icon icon-5">🔒</div>
        <div className="float-icon icon-6">🚀</div>
      </div>

      <div className="hero__content">
        <h1 className="hero__title reveal-up" id="heroHeadline" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1.05', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          <span className="hero__title-gradient" style={{fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', fontWeight: 800}}>Humanismo</span>
          <span className="hero__title-white" style={{fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', fontWeight: 800}}>Y Valores</span>
          <span className="hero__title-white" style={{fontSize: 'clamp(1rem, 3vw, 1.8rem)', fontWeight: 600, letterSpacing: '0.05em', margin: '0.4em 0'}}>en la era de la</span>
          <span className="hero__title-gradient" style={{fontSize: 'clamp(2.8rem, 8vw, 5rem)', fontWeight: 800, lineHeight: '0.95', textAlign: 'center'}}>Inteligencia<br/>Artificial</span>
        </h1>
        <p className="hero__tagline reveal-up" style={{ fontStyle: 'italic', maxWidth: '700px', margin: '1rem auto 2rem', fontSize: 'clamp(0.9rem, 2.5vw, 1.15rem)', lineHeight: '1.5' }}>
          "Asegurando que el avance tecnológico se alinee con los valores humanos y la responsabilidad social"
        </p>

        <div className="hero__ctas reveal-up" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
          <a href="#registro" className="btn btn--primary btn--pill">DESCUBRE MÁS</a>
        </div>

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
          <span className="hero__date-badge" style={{color: '#00B8D4', borderColor: '#00B8D4', background: 'rgba(0,184,212,0.1)'}}>MONTERREY · 3 Y 4 DE OCTUBRE DE 2026</span>
          <span className="hero__location">Showcenter (Día 1) & Cintermex (Día 2)</span>
          <span className="hero__ticket-price" aria-label="Costo del boleto: $80 pesos mexicanos — precio anticipado">
            🎟️ Boleto <strong>$80 MXN</strong>
            <span className="hero__ticket-tag">precio anticipado</span>
            <span className="hero__ticket-perks">· Comida &amp; Catering · Acceso total · Rifa de premios</span>
          </span>
        </p>
        <div className="hero__ctas reveal-up">
          <a href="#registro"
            className="btn btn--primary btn--lg btn--starry">Registrarme →
            <div className="star-1"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-2"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-3"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-4"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-5"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-6"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div>
          </a>
          <a href="#agenda" className="btn btn--ghost btn--lg">Ver agenda</a>
        </div>
        <div className="hero__motto reveal-up" aria-label="Inspirando. Transformando. Conectando.">
          <span>--INSPIRANDO.</span>
          <span>----TRANSFORMANDO.</span>
          <span>------CONECTANDO.</span>
        </div>
      </div>
      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
}
