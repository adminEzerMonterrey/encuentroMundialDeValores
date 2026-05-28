import React from 'react';

export default function Sponsors() {
  return (
    <>
      {/* ═══════════ PATROCINADORES — LOGO CARDS ═══════════ */}
      <section className="section sponsors" id="sponsors" aria-labelledby="sponsorsHeading">
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-tag">04 / COLABORADORES</span>
            <h2 className="section-title" id="sponsorsHeading">Colaboradores y Patrocinadores</h2>
            <p className="section-subtitle">Instituciones y empresas que hacen posible el Encuentro Mundial de Valores 2026.</p>
          </div>

          <div className="sponsors-tiers" style={{ display: 'flex', flexDirection: 'column', gap: '0', alignItems: 'center', width: '100%' }}>
            {/* Fila 1 - Monterrey, UDEM, Tec, U-ERRE, UANL */}
            <div className="sponsor-tier tier-1 reveal-up" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch', gap: '0', width: '100%' }}>
              {[
                { src: "Monterrey.png", alt: "Gobierno de Monterrey" },
                { src: "UDEM.jpg", alt: "UDEM" },
                { src: "ITESM.png", alt: "Tecnológico de Monterrey" },
                { src: "u-erre-logotipo-comercial-rgb.png", alt: "U-ERRE" },
                { src: "UANL.png", alt: "Universidad de Montemorelos" },
              ].map((sponsor, idx) => (
                <div key={idx} style={{ flex: '1 1 18%', minWidth: '100px', padding: '1.2rem 1rem', border: '1px solid rgba(0,0,0,0.08)', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={`/Sponsors/${sponsor.src}`} alt={sponsor.alt} loading="lazy" style={{ height: '60px', width: 'auto', maxWidth: '160px', objectFit: 'contain' }} />
                </div>
              ))}
            </div>

            {/* Fila 2 - Educación NL, Igualdad, San Pedro, Arca Continental, Rotary */}
            <div className="sponsor-tier tier-2 reveal-up" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch', gap: '0', width: '100%' }}>
              {[
                { src: "secretaria-de-educacion-nl.png", alt: "Secretaría de Educación NL" },
                { src: "1-secretaria-de-igualdad-e-inclusion.png", alt: "Secretaría de Igualdad e Inclusión" },
                { src: "san-pedro-garza-garcia.png", alt: "San Pedro Garza García" },
                { src: "ac-logo-100-aniversaario_sin-slogan_color.png", alt: "Arca Continental" },
                { src: "Rotarios.jpeg", alt: "Rotary" },
              ].map((sponsor, idx) => (
                <div key={idx} style={{ flex: '1 1 18%', minWidth: '100px', padding: '1rem', border: '1px solid rgba(0,0,0,0.08)', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={`/Sponsors/${sponsor.src}`} alt={sponsor.alt} loading="lazy" style={{ height: '55px', width: 'auto', maxWidth: '150px', objectFit: 'contain' }} />
                </div>
              ))}
            </div>

            {/* Fila 3 - Deacero, Fundación Montemayor, Chapa González, CFC, Berel, Consejo, Pasteles */}
            <div className="sponsor-tier tier-3 reveal-up" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch', gap: '0', width: '100%' }}>
              {[
                { src: "logo-fd-estandar.png", alt: "Fundación Deacero", scale: 1.15 },
                { src: "logo-fundacion-alta-01.png", alt: "Fundación Beneficencia Jesús M. Montemayor", scale: 2.2 },
                { src: "fundacion-chapa-gonzalez.png", alt: "Fundación Chapa González", scale: 1.4 },
                { src: "cfc-logo-horizontal-naranja.png", alt: "Charter for Compassion" },
                { src: "BEREL.png", alt: "Berel" },
                { src: "consejo-interreligioso.png", alt: "Consejo Interreligioso" },
                { src: "pasteles-de-laura.png", alt: "Pasteles de Laura" },
              ].map((sponsor, idx) => (
                <div key={idx} style={{ flex: '1 1 13%', minWidth: '90px', padding: '0.8rem', border: '1px solid rgba(0,0,0,0.08)', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={`/Sponsors/${sponsor.src}`} alt={sponsor.alt} loading="lazy" style={{ height: sponsor.scale ? `${50 * sponsor.scale}px` : '50px', width: 'auto', maxWidth: sponsor.scale ? `${130 * sponsor.scale}px` : '130px', objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </div>

          {/* CTA para nuevos patrocinadores */}
          <div className="sp-cta-wrap reveal-up">
            <div className="sp-cta-banner">
              <div className="sp-cta-banner__glow" aria-hidden="true"></div>
              <div className="sp-cta-banner__content">
                <span className="sp-cta-banner__eyebrow">✦ ¿Quieres formar parte? ✦</span>
                <h3 className="sp-cta-banner__title">
                  Sé colaborador del<br/>
                  <span className="sp-cta-banner__title--accent">Encuentro Mundial de Valores 2026</span>
                </h3>
                <p className="sp-cta-banner__sub">
                  Únete a las instituciones líderes que están transformando nuestro futuro.<br/>
                  Escríbenos y hagámoslo juntos.
                </p>
                <a
                  href="https://www.instagram.com/encuentromundialdevalores?igsh=MXo0OXZ3d3hxOGl6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sp-cta-banner__btn"
                  aria-label="Contáctanos en Instagram para ser patrocinador"
                  id="sponsorsInstagramCta"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  Contáctanos en Instagram
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════ UBICACIÓN ═══════════ */}
      <section className="section ubicacion" id="ubicacion" aria-labelledby="ubicacionHeading">
        <div className="container">
          <div className="section-header section-header--left reveal-up">
            <span className="section-tag">05 / UBICACIÓN</span>
            <h2 className="section-title" id="ubicacionHeading">Sedes del Evento</h2>
            <p className="section-subtitle section-subtitle--left">Nos vemos en <span className="text-accent">Showcenter</span> y <span className="text-lime">Cintermex</span>, Nuevo León</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '2rem' }} className="reveal-up">
            {/* Showcenter */}
            <div className="ubicacion-info-panel" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', margin: 0 }}>Día 1: Showcenter</h3>
                <img src="/images/logo showcenter.png" alt="Showcenter Complex Logo" style={{ height: '40px', maxWidth: '100px', objectFit: 'contain' }} />
              </div>
              <div className="ubicacion-info-row">
                <span className="ubicacion-info-icon">📍</span>
                <div>
                  <p className="ubicacion-info-label">Dirección</p>
                  <p className="ubicacion-info-value">Showcenter Complex</p>
                  <p className="ubicacion-info-sub">San Pedro Garza García, N.L.</p>
                </div>
              </div>
              <div className="ubicacion-info-row">
                <span className="ubicacion-info-icon">📅</span>
                <div>
                  <p className="ubicacion-info-label">Fecha y hora</p>
                  <p className="ubicacion-info-value">3 de Octubre 2026</p>
                  <p className="ubicacion-info-sub">9:00 AM – 6:30 PM</p>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/3soFQcgwREkTLrG8A" target="_blank"
                rel="noopener noreferrer" className="btn btn--primary btn--lg ubicacion-cta btn--full" style={{marginTop: 'auto'}}>
                Ver en Google Maps →
              </a>
            </div>

            {/* Cintermex */}
            <div className="ubicacion-info-panel" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', margin: 0 }}>Día 2: Cintermex</h3>
                <img src="/images/Logo_Alta_sinFondo Cinternex stroke.png" alt="Cintermex Logo" style={{ height: 'auto', maxHeight: '50px', maxWidth: '120px', objectFit: 'contain' }} />
              </div>
              <div className="ubicacion-info-row">
                <span className="ubicacion-info-icon">📍</span>
                <div>
                  <p className="ubicacion-info-label">Dirección</p>
                  <p className="ubicacion-info-value">Cintermex</p>
                  <p className="ubicacion-info-sub">Monterrey, N.L.</p>
                </div>
              </div>
              <div className="ubicacion-info-row">
                <span className="ubicacion-info-icon">📅</span>
                <div>
                  <p className="ubicacion-info-label">Fecha y hora</p>
                  <p className="ubicacion-info-value">4 de Octubre 2026</p>
                  <p className="ubicacion-info-sub">9:00 AM – 1:00 PM</p>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/V8zw5poX5C9VxUqF9" target="_blank"
                rel="noopener noreferrer" className="btn btn--primary btn--lg ubicacion-cta btn--full" style={{marginTop: 'auto'}}>
                Ver en Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
