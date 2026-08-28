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

          <style>{`
            .sponsors-grid {
              display: flex;
              flex-direction: column;
              gap: 16px;
              width: 100%;
              margin-top: 2rem;
            }
            .sponsors-row {
              display: grid;
              gap: 16px;
              width: 100%;
              justify-content: center;
            }
            .sponsors-row-1 {
              grid-template-columns: repeat(5, 1fr);
            }
            .sponsors-row-2 {
              grid-template-columns: repeat(5, 1fr);
            }
            .sponsors-row-3 {
              grid-template-columns: repeat(4, 1fr);
              max-width: 80%;
              margin: 0 auto;
            }
            .sponsors-row-4 {
              grid-template-columns: repeat(5, 1fr);
            }
            .sponsors-row-5 {
              grid-template-columns: repeat(4, 1fr);
              max-width: 80%;
              margin: 0 auto;
            }
            .sponsor-card {
              background: #ffffff;
              border: 1px solid rgba(0, 0, 0, 0.08);
              border-radius: 4px;
              padding: 1.2rem 1rem;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 105px;
              box-sizing: border-box;
              transition: all 0.2s ease;
            }
            .sponsor-card:hover {
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
              border-color: rgba(0, 0, 0, 0.15);
            }
            .sponsor-card img {
              height: 70px;
              width: auto;
              max-width: 100%;
              object-fit: contain;
            }
            .sponsors-row-4 .sponsor-card img {
              height: 80px;
              transform: scale(1.15);
            }
            @media (max-width: 1024px) {
              .sponsors-row-1 { grid-template-columns: repeat(3, 1fr); }
              .sponsors-row-2 { grid-template-columns: repeat(3, 1fr); }
              .sponsors-row-3 { grid-template-columns: repeat(3, 1fr); max-width: 100%; }
              .sponsors-row-4 { grid-template-columns: repeat(3, 1fr); }
              .sponsors-row-5 { grid-template-columns: repeat(3, 1fr); max-width: 100%; }
            }
            @media (max-width: 640px) {
              .sponsors-row-1, .sponsors-row-2, .sponsors-row-3, .sponsors-row-4, .sponsors-row-5 {
                grid-template-columns: repeat(2, 1fr);
              }
              .sponsor-card {
                padding: 0.8rem;
                min-height: 90px;
              }
              .sponsor-card img {
                height: 55px;
              }
              .sponsors-row-4 .sponsor-card img {
                height: 65px;
                transform: scale(1.1);
              }
            }
            @media (max-width: 400px) {
              .sponsors-row-1, .sponsors-row-2, .sponsors-row-3, .sponsors-row-4, .sponsors-row-5 {
                grid-template-columns: 1fr;
              }
            }
          `}</style>

          <div className="sponsors-grid">
            {/* Fila 1 - Monterrey, Educación, Arca Continental, Igualdad, San Pedro */}
            <div className="sponsors-row sponsors-row-1 reveal-up">
              {[
                { src: "Monterrey.png", alt: "Gobierno de Monterrey" },
                { src: "secretaria-de-educacion-nl.png", alt: "Secretaría de Educación NL" },
                { src: "ac-logo-100-aniversaario_sin-slogan_color.png", alt: "Arca Continental" },
                { src: "1-secretaria-de-igualdad-e-inclusion.png", alt: "Secretaría de Igualdad e Inclusión" },
                { src: "san-pedro-garza-garcia.png", alt: "San Pedro Garza García" },
              ].map((sponsor, idx) => (
                <div key={idx} className="sponsor-card">
                  <img src={`/Sponsors/${sponsor.src}?v=5`} alt={sponsor.alt} loading="lazy" />
                </div>
              ))}
            </div>

            {/* Fila 2 - Bimbo, Acero, Rotary, Xignux, Berel */}
            <div className="sponsors-row sponsors-row-2 reveal-up">
              {[
                { src: "BIMBO.jpg", alt: "Bimbo" },
                { src: "logo-fd-estandar.png", alt: "Fundación Deacero" },
                { src: "Rotarios.jpeg", alt: "Rotary" },
                { src: "XIGNUX.png", alt: "Xignux" },
                { src: "BEREL.png", alt: "Berel" },
              ].map((sponsor, idx) => (
                <div key={idx} className="sponsor-card">
                  <img src={`/Sponsors/${sponsor.src}?v=5`} alt={sponsor.alt} loading="lazy" />
                </div>
              ))}
            </div>

            {/* Fila 3 - Tec, UDEM, U-ERRE, Montemorelos */}
            <div className="sponsors-row sponsors-row-3 reveal-up">
              {[
                { src: "ITESM.png", alt: "Tecnológico de Monterrey" },
                { src: "UDEM.jpg", alt: "UDEM" },
                { src: "u-erre-logotipo-comercial-rgb.png", alt: "U-ERRE" },
                { src: "universidadMontemorelos.jpeg", alt: "Universidad de Montemorelos" },
              ].map((sponsor, idx) => (
                <div key={idx} className="sponsor-card">
                  <img src={`/Sponsors/${sponsor.src}?v=5`} alt={sponsor.alt} loading="lazy" />
                </div>
              ))}
            </div>

            {/* Fila 4 - Chapa González, Montemayor, Consejo, CFC, Pasteles */}
            <div className="sponsors-row sponsors-row-4 reveal-up">
              {[
                { src: "fundacion-chapa-gonzalez.png", alt: "Fundación Chapa González" },
                { src: "logo-fundacion-alta-01.png", alt: "Fundación Beneficencia Jesús M. Montemayor", style: { transform: 'scale(2.20)' } },
                { src: "consejo-interreligioso.png", alt: "Consejo Interreligioso" },
                { src: "cfc-logo-horizontal-naranja.jpeg", alt: "Charter for Compassion" },
                { src: "pasteles-de-laura.png", alt: "Pasteles de Laura", style: { transform: 'scale(1.65)' } },
              ].map((sponsor, idx) => (
                <div key={idx} className="sponsor-card">
                  <img src={`/Sponsors/${sponsor.src}?v=5`} alt={sponsor.alt} loading="lazy" style={sponsor.style} />
                </div>
              ))}
            </div>

            {/* Fila 5 - Riisa, Printel, Delta Solutions, Nouvell */}
            <div className="sponsors-row sponsors-row-5 reveal-up">
              {[
                { src: "riisa.png", alt: "Fundación Riisa" },
                { src: "printel.png", alt: "Printel" },
                { src: "delta-solutions.png", alt: "Delta Solutions", style: { transform: 'scale(1.65)' } },
                { src: "nouvell.jpg", alt: "Nouvell" },
              ].map((sponsor, idx) => (
                <div key={idx} className="sponsor-card">
                  <img src={`/Sponsors/${sponsor.src}?v=5`} alt={sponsor.alt} loading="lazy" style={sponsor.style} />
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
            <p className="section-subtitle section-subtitle--left">Nos vemos en <span className="text-accent">Showcenter Complex</span> y <span className="text-lime">Cintermex</span>, Nuevo León</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '2rem' }} className="reveal-up">
            {/* Showcenter */}
            <div className="ubicacion-info-panel" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', margin: 0 }}>Día 1: Showcenter Complex</h3>
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
