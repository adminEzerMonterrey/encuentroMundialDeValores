import React from 'react';

export default function Sponsors() {
  return (
    <>
      {/* ═══════════ SPONSORS — LOGO CARDS ═══════════ */}
      <section className="section sponsors" id="sponsors" aria-labelledby="sponsorsHeading">
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-tag">04 / SPONSORS</span>
            <h2 className="section-title" id="sponsorsHeading">Patrocinadores</h2>
            <p className="section-subtitle">Empresas que hacen posible el Encuentro Mundial de Valores 2026.</p>
          </div>

          <div className="sp-grid reveal-up">

            {/* Accenture */}
            <a href="https://www.accenture.com" target="_blank" rel="noopener noreferrer"
               className="sp-card sp-card--acc" aria-label="Accenture">
              <b></b>
              <div className="sp-card__logo">
                <img src="Sponsors/accenture.jpeg" alt="Accenture" loading="lazy" style={{width:'80%', objectFit:'contain'}} />
              </div>
              <div className="sp-content">
                <p className="sp-title">Accenture<br/><span>Patrocinador Oficial</span></p>
              </div>
            </a>

            {/* SAP */}
            <div className="sp-card sp-card--sap" aria-label="SAP">
              <b></b>
              <div className="sp-card__logo">
                <img src="Sponsors/sap.png" alt="SAP" loading="lazy" style={{width:'80%', objectFit:'contain'}} />
              </div>
              <div className="sp-content">
                <p className="sp-title">SAP<br/><span>Patrocinador Oficial</span></p>
              </div>
            </div>

            {/* Hexaware */}
            <a href="https://www.hexaware.com" target="_blank" rel="noopener noreferrer"
               className="sp-card sp-card--hex" aria-label="Hexaware Technologies">
              <b></b>
              <div className="sp-card__logo">
                <img src="Sponsors/hexaware.svg" alt="Hexaware" loading="lazy" style={{width:'85%', objectFit:'contain'}} />
              </div>
              <div className="sp-content">
                <p className="sp-title">Hexaware<br/><span>Patrocinador Oficial</span></p>
              </div>
            </a>

            {/* AWS */}
            <a href="https://www.instagram.com/aws.cloud.club.udem/" target="_blank" rel="noopener noreferrer"
               className="sp-card sp-card--aws" aria-label="Club AWS UDEM">
              <b></b>
              <div className="sp-card__logo">
                <img src="Sponsors/aws.png" alt="AWS" loading="lazy" style={{width:'80%', objectFit:'contain'}} />
              </div>
              <div className="sp-content">
                <p className="sp-title">Club AWS<br/><span>Patrocinador Oficial</span></p>
              </div>
            </a>

            {/* Snowflake */}
            <a href="https://www.snowflake.com" target="_blank" rel="noopener noreferrer"
               className="sp-card sp-card--snow" aria-label="Snowflake">
              <b></b>
              <div className="sp-card__logo">
                <img src="Sponsors/snowflake.svg" alt="Snowflake" loading="lazy" style={{width:'80%', objectFit:'contain'}} />
              </div>
              <div className="sp-content">
                <p className="sp-title">Snowflake<br/><span>Patrocinador Oficial</span></p>
              </div>
            </a>

            {/* Doña Tota */}
            <div className="sp-card sp-card--tota" aria-label="Doña Tota">
              <b></b>
              <div className="sp-card__logo">
                <img src="Sponsors/dona-tota.webp" alt="Doña Tota" loading="lazy" style={{width:'80%', objectFit:'contain', borderRadius: '8px'}} />
              </div>
              <div className="sp-content">
                <p className="sp-title">Doña Tota<br/><span>Patrocinador Oficial</span></p>
              </div>
            </div>

            {/* OFF-XILE */}
            <div className="sp-card sp-card--offxile" aria-label="OFF-XILE">
              <b></b>
              <div className="sp-card__logo">
                <img src="Sponsors/offxile.jpg" alt="OFF-XILE" loading="lazy" style={{width:'80%', objectFit:'contain', borderRadius: '8px'}} />
              </div>
              <div className="sp-content">
                <p className="sp-title">OFF-XILE<br/><span>Patrocinador Oficial</span></p>
              </div>
            </div>

            {/* Banco Base */}
            <a href="https://www.bancobase.com" target="_blank" rel="noopener noreferrer"
               className="sp-card sp-card--base" aria-label="Banco Base">
              <b></b>
              <div className="sp-card__logo">
                <img src="Sponsors/banco_base_logo.jpeg" alt="Banco Base" loading="lazy" style={{width:'80%', objectFit:'contain', borderRadius: '8px'}} />
              </div>
              <div className="sp-content">
                <p className="sp-title">Banco Base<br/><span>Patrocinador Oficial</span></p>
              </div>
            </a>

            {/* CUB Security */}
            <div className="sp-card sp-card--cub" aria-label="CUB Security">
              <b></b>
              <div className="sp-card__logo">
                <img src="Sponsors/cub_security_logo.jpeg" alt="CUB Security" loading="lazy" style={{width:'80%', objectFit:'contain', borderRadius: '8px'}} />
              </div>
              <div className="sp-content">
                <p className="sp-title">CUB Security<br/><span>Patrocinador Oficial</span></p>
              </div>
            </div>

            {/* Danuanalitica */}
            <div className="sp-card sp-card--danu" aria-label="Danuanalitica">
              <b></b>
              <div className="sp-card__logo">
                <img src="Sponsors/danuanalitica_logo.jpeg" alt="Danuanalitica" loading="lazy" style={{width:'80%', objectFit:'contain', borderRadius: '8px'}} />
              </div>
              <div className="sp-content">
                <p className="sp-title">Danuanalitica<br/><span>Patrocinador Oficial</span></p>
              </div>
            </div>

            {/* Endava */}
            <a href="https://www.endava.com" target="_blank" rel="noopener noreferrer"
               className="sp-card sp-card--endava" aria-label="Endava">
              <b></b>
              <div className="sp-card__logo">
                <img src="Sponsors/endava_logo.jpeg" alt="Endava" loading="lazy" style={{width:'80%', objectFit:'contain', borderRadius: '8px'}} />
              </div>
              <div className="sp-content">
                <p className="sp-title">Endava<br/><span>Patrocinador Oficial</span></p>
              </div>
            </a>

            {/* SoftServe */}
            <a href="https://www.softserveinc.com" target="_blank" rel="noopener noreferrer"
               className="sp-card sp-card--softserve" aria-label="SoftServe">
              <b></b>
              <div className="sp-card__logo">
                <img src="Sponsors/softserve_logo.jpeg" alt="SoftServe" loading="lazy" style={{width:'80%', objectFit:'contain', borderRadius: '8px'}} />
              </div>
              <div className="sp-content">
                <p className="sp-title">SoftServe<br/><span>Patrocinador Oficial</span></p>
              </div>
            </a>

            {/* ACM */}
            <div className="sp-card sp-card--acm" aria-label="ACM">
              <b></b>
              <div className="sp-card__logo">
                <img src="Sponsors/acm.jpg" alt="ACM" loading="lazy" style={{width:'80%', objectFit:'contain', borderRadius: '8px'}} />
              </div>
              <div className="sp-content">
                <p className="sp-title">ACM<br/><span>Patrocinador Oficial</span></p>
              </div>
            </div>

          </div>

          {/* CTA para nuevos patrocinadores */}
          <div className="sp-cta-wrap reveal-up">
            <div className="sp-cta-banner">
              <div className="sp-cta-banner__glow" aria-hidden="true"></div>
              <div className="sp-cta-banner__content">
                <span className="sp-cta-banner__eyebrow">✦ ¿Quieres formar parte? ✦</span>
                <h3 className="sp-cta-banner__title">
                  Sé patrocinador del<br/>
                  <span className="sp-cta-banner__title--accent">Encuentro Mundial de Valores 2026</span>
                </h3>
                <p className="sp-cta-banner__sub">
                  Conecta tu marca con +250 estudiantes y profesionistas de tecnología.<br/>
                  Escríbenos y hagámoslo juntos.
                </p>
                <a
                  href="https://www.instagram.com/encuentromundialdevalores?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
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
