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
              gap: 28px;
              width: 100%;
              margin-top: 2rem;
              background: #ffffff;
              border-radius: 16px;
              padding: 3rem 2.5rem;
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
              box-sizing: border-box;
            }
            .sponsors-row {
              display: grid;
              gap: 16px;
              width: 100%;
              justify-content: center;
              align-items: center;
            }
            .sponsors-row-1 {
              grid-template-columns: repeat(5, 1fr);
            }
            .sponsors-row-2 {
              grid-template-columns: repeat(7, 1fr);
            }
            .sponsors-row-3 {
              grid-template-columns: repeat(9, 1fr);
              gap: 12px;
            }
            .sponsors-row-3 .sponsor-card {
              padding: 0.4rem 0.2rem;
            }
            .sponsors-row-4 {
              grid-template-columns: repeat(6, 1fr);
            }
            .sponsors-row-5 {
              grid-template-columns: repeat(7, 1fr);
            }
            .sponsor-card {
              background: transparent;
              border: none;
              border-radius: 0;
              padding: 0.6rem 0.4rem;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 85px;
              box-sizing: border-box;
              transition: transform 0.2s ease, opacity 0.2s ease;
            }
            .sponsor-card:hover {
              transform: scale(1.06);
            }
            .sponsor-card img {
              height: 65px;
              width: auto;
              max-width: 100%;
              object-fit: contain;
            }

            @media (max-width: 1024px) {
              .sponsors-grid {
                padding: 2rem 1.5rem;
                gap: 20px;
              }
              .sponsors-row-1 { grid-template-columns: repeat(3, 1fr); }
              .sponsors-row-2 { grid-template-columns: repeat(3, 1fr); max-width: 100%; }
              .sponsors-row-3 { grid-template-columns: repeat(3, 1fr); }
              .sponsors-row-4 { grid-template-columns: repeat(3, 1fr); }
              .sponsors-row-5 { grid-template-columns: repeat(3, 1fr); }
            }
            @media (max-width: 640px) {
              .sponsors-grid {
                padding: 1.5rem 1rem;
                border-radius: 12px;
                gap: 16px;
              }
              .sponsors-row-1, .sponsors-row-2, .sponsors-row-3, .sponsors-row-4, .sponsors-row-5 {
                grid-template-columns: repeat(2, 1fr);
              }
              .sponsor-card {
                padding: 0.4rem 0.2rem;
                min-height: 75px;
              }
              .sponsor-card img {
                height: 50px;
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
                { src: "secretaria-de-educacion-nl.png", alt: "Secretaría de Educación NL", style: { transform: 'scale(1.20)' } },
                { src: "ac-logo-100-aniversaario_sin-slogan_color.png", alt: "Arca Continental" },
                { src: "1-secretaria-de-igualdad-e-inclusion.png", alt: "Secretaría de Igualdad e Inclusión", style: { transform: 'scale(1.20)' } },
                { src: "san-pedro-garza-garcia.png", alt: "San Pedro Garza García", style: { transform: 'scale(1.25)' } },
              ].map((sponsor, idx) => (
                <div key={idx} className="sponsor-card">
                  <img src={`/Sponsors/${sponsor.src}?v=5`} alt={sponsor.alt} loading="lazy" style={sponsor.style} />
                </div>
              ))}
            </div>

            {/* Fila 2 - Nuevo León OVC, Oficina de Convenciones, Bimbo, Acero, Xignux, Berel, Marinela */}
            <div className="sponsors-row sponsors-row-2 reveal-up">
              {[
                { src: "nuevo-leon-ovc.png", alt: "Nuevo León OVC", style: { transform: 'scale(1.8)' } },
                { src: "oficina-convenciones-mty.png", alt: "Oficina de Convenciones y Visitantes de Monterrey", style: { transform: 'scale(1.20)' } },
                { src: "BIMBO.jpg", alt: "Bimbo" },
                { src: "logo-fd-estandar.png", alt: "Fundación Deacero" },
                { src: "XIGNUX.png", alt: "Xignux", style: { transform: 'scale(1.30)' } },
                { src: "BEREL.png", alt: "Berel" },
                { src: "marinela.png", alt: "Marinela", style: { transform: 'scale(1.50)' } },
              ].map((sponsor, idx) => (
                <div key={idx} className="sponsor-card">
                  <img src={`/Sponsors/${sponsor.src}?v=5`} alt={sponsor.alt} loading="lazy" style={sponsor.style} />
                </div>
              ))}
            </div>

            {/* Fila 3 - Riisa, Value, Media Group, Televisa Monterrey, Canal 28, EMEPE, Treviño Elizondo, Chapa González, Montemayor */}
            <div className="sponsors-row sponsors-row-3 reveal-up">
              {[
                { src: "riisa.png", alt: "Fundación Riisa", style: { transform: 'scale(1.15)' } },
                { src: "value.png", alt: "Value Casa de Bolsa", style: { transform: 'scale(1.15)' } },
                { src: "media-group.png", alt: "V Media Group", style: { transform: 'scale(1.20)' } },
                { src: "televisa-monterrey.png", alt: "Televisa Monterrey", style: { transform: 'scale(1.15)' } },
                { src: "canal-28.jpg", alt: "Canal 28", style: { transform: 'scale(1.05)', borderRadius: '6px' } },
                { src: "emepe.png", alt: "EMEPE", style: { transform: 'scale(1.70)' } },
                { src: "trevino-elizondo.png", alt: "Asociación de Beneficencia Privada Treviño Elizondo", style: { transform: 'scale(1.15)' } },
                { src: "fundacion-chapa-gonzalez.png", alt: "Fundación Chapa González", style: { transform: 'scale(1.10)' } },
                { src: "logo-fundacion-alta-01.png", alt: "Fundación Beneficencia Jesús M. Montemayor", style: { transform: 'scale(1.90)' } },
              ].map((sponsor, idx) => (
                <div key={idx} className="sponsor-card">
                  <img src={`/Sponsors/${sponsor.src}?v=7`} alt={sponsor.alt} loading="lazy" style={sponsor.style} />
                </div>
              ))}
            </div>

            {/* Fila 4 - Rotary, Tec, UDEM, U-ERRE, UANL, Montemorelos */}
            <div className="sponsors-row sponsors-row-4 reveal-up">
              {[
                { src: "Rotarios.jpeg", alt: "Rotary", style: { transform: 'scale(1.20)' } },
                { src: "ITESM.png", alt: "Tecnológico de Monterrey", style: { transform: 'scale(1.20)' } },
                { src: "UDEM.jpg", alt: "UDEM" },
                { src: "u-erre-logotipo-comercial-rgb.png", alt: "U-ERRE" },
                { src: "UANL.png", alt: "UANL", style: { transform: 'scale(1.15)' } },
                { src: "universidadMontemorelos.jpeg", alt: "Universidad de Montemorelos", style: { transform: 'scale(1.20)' } },
              ].map((sponsor, idx) => (
                <div key={idx} className="sponsor-card">
                  <img src={`/Sponsors/${sponsor.src}?v=5`} alt={sponsor.alt} loading="lazy" style={sponsor.style} />
                </div>
              ))}
            </div>

            {/* Fila 5 - Printel, Delta Solutions, Nouvell, Consejo, CFC, Pasteles, Museo de Historia */}
            <div className="sponsors-row sponsors-row-5 reveal-up">
              {[
                { src: "printel.png", alt: "Printel" },
                { src: "delta-solutions.png", alt: "Delta Solutions", style: { transform: 'scale(1.75)' } },
                { src: "nouvell.jpg", alt: "Nouvell", style: { transform: 'scale(1.20)' } },
                { src: "consejo-interreligioso.png", alt: "Consejo Interreligioso", style: { transform: 'scale(1.45)' } },
                { src: "cfc-logo-horizontal-naranja.jpeg", alt: "Charter for Compassion", style: { transform: 'scale(1.10)' } },
                { src: "pasteles-de-laura.png", alt: "Pasteles de Laura", style: { transform: 'scale(1.65)' } },
                { src: "museo-historia.png", alt: "Museo de Historia Mexicana", style: { transform: 'scale(1.40)' } },
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
