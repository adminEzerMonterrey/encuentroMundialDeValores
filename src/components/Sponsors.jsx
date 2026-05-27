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

          <div className="sponsors-tiers" style={{ display: 'flex', flexDirection: 'column', gap: '4rem', alignItems: 'center' }}>
            {/* Fila 1 - Más Importantes */}
            <div className="sponsor-tier tier-1 reveal-up" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '3rem' }}>
              {[
                { src: "1-secretaria-de-igualdad-e-inclusion.png", alt: "Secretaría de Igualdad e Inclusión" },
                { src: "ac-logo-100-aniversaario_sin-slogan_color.png", alt: "AC 100 Aniversario" },
                { src: "berel.png", alt: "Berel" },
                { src: "itesm.png", alt: "Tecnológico de Monterrey" },
              ].map((sponsor, idx) => (
                <img key={idx} src={`Sponsors/${sponsor.src}`} alt={sponsor.alt} loading="lazy" style={{ height: '140px', width: 'auto', maxWidth: '300px', objectFit: 'contain', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }} />
              ))}
            </div>

            {/* Fila 2 - Medianos */}
            <div className="sponsor-tier tier-2 reveal-up" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '2.5rem' }}>
              {[
                { src: "udem.jpg", alt: "UDEM" },
                { src: "u-erre-logotipo-comercial-rgb.png", alt: "U-ERRE" },
                { src: "uanl.png", alt: "UANL" },
                { src: "monterrey.png", alt: "Monterrey" },
                { src: "san-pedro-garza-garcia.png", alt: "San Pedro Garza García" },
                { src: "secretaria-de-educacion-nl.png", alt: "Secretaría de Educación NL" },
              ].map((sponsor, idx) => (
                <img key={idx} src={`Sponsors/${sponsor.src}`} alt={sponsor.alt} loading="lazy" style={{ height: '90px', width: 'auto', maxWidth: '220px', objectFit: 'contain', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} />
              ))}
            </div>

            {/* Fila 3 - Pequeños */}
            <div className="sponsor-tier tier-3 reveal-up" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
              {[
                { src: "cfc-logo-horizontal-naranja.png", alt: "CFC" },
                { src: "consejo-interreligioso.png", alt: "Consejo Interreligioso" },
                { src: "fundacion-chapa-gonzalez.png", alt: "Fundación Chapa González" },
                { src: "logo-fd-estandar.png", alt: "Logo FD" },
                { src: "pasteles-de-laura.png", alt: "Pasteles de Laura" },
                { src: "rotarios.jpeg", alt: "Rotarios" },
                { src: "logo-fundacion-alta-01.png", alt: "Fundación ALTA" }
              ].map((sponsor, idx) => (
                <img key={idx} src={`Sponsors/${sponsor.src}`} alt={sponsor.alt} loading="lazy" style={{ height: '60px', width: 'auto', maxWidth: '160px', objectFit: 'contain', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} />
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
            <p className="section-subtitle section-subtitle--left">Nos vemos en <span className="text-accent">San Pedro Garza
                García</span> y <span className="text-lime">Monterrey</span>, Nuevo León</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }} className="reveal-up">
            {/* Showcenter */}
            <div className="ubicacion-info-panel" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text-primary)' }}>Día 1: Showcenter</h3>
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
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text-primary)' }}>Día 2: Cintermex</h3>
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
