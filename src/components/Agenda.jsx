import React from 'react';

export default function Agenda() {
  return (
    <section className="section agenda" id="agenda" aria-labelledby="agendaHeading">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">03 / AGENDA</span>
          <h2 className="section-title" id="agendaHeading">Agenda Oficial</h2>
          <p className="section-subtitle">Orden cronológico de participación · <span className="text-accent">3 y 4 de octubre de 2026</span></p>
        </div>

        <div className="ag-blob-wrapper" style={{ marginTop: '3rem' }}>
          <div className="ag-blob ag-blob--1" aria-hidden="true"></div>
          <div className="ag-blob ag-blob--2" aria-hidden="true"></div>
          <div className="ag-blob ag-blob--3" aria-hidden="true"></div>
          <div className="ag-blob-bg" aria-hidden="true"></div>
          
          <div className="agenda-table reveal-up" role="table" aria-label="Programa del evento">
            <div className="agenda-table__head" role="row">
              <span role="columnheader">TIPO</span>
              <span role="columnheader">SPEAKER(S)</span>
              <span role="columnheader">CHARLA</span>
            </div>

            {/* ─── DÍA 1 ─── */}
            <div className="ag-row ag-row--block" role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">3 OCT</span></div>
              <div className="ag-row__speaker" role="cell" style={{ gridColumn: 'span 2' }}>
                <span className="ag-block-label" style={{ color: '#06b6d4' }}>DÍA 1: SHOWCENTER COMPLEX</span>
              </div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Ceremonia</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Dra. María Cristina González</span>
                <span className="ag-speaker-name">Mons. Rogelio Cabrera López</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA, Salud y Espiritualidad</span>Entrega de reconocimiento · Familia David Noel Ramírez</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Magistral</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Emma Seppälä</span><span className="ag-speaker-role">Psicóloga · Stanford & Yale</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA, Salud y Espiritualidad</span>Calma en tiempos de IA: la ciencia del bienestar emocional</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Magistral</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Marian Rojas Estapé</span><span className="ag-speaker-role">Psiquiatra</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA, Salud y Espiritualidad</span>La mente en la era digital: dopamina, ansiedad y reconexión interior</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Panel</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Marian Rojas Estapé</span>
                <span className="ag-speaker-name">Mónica Zambrano Vignau</span>
                <span className="ag-speaker-name">Sofía Lozano Snively</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA, Salud y Espiritualidad</span>El Ser Humano como Guía, la IA como Soporte</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Panel</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Dr. Arumugam Murukiah</span>
                <span className="ag-speaker-name">Caroline Sánchez Crozier</span>
                <span className="ag-speaker-name">Dra. Melina Uncapher</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA y Autonomía Humana</span>IA Humanizada: Tecnología, Educación e Innovación Industrial Integrada</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Panel</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Dra. Alma Rosa Marroquín</span>
                <span className="ag-speaker-name">Dr. Bimal Desai</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA, Salud y Espiritualidad</span>Reinventing Medicine in the Age of AI: Beyond the Doctor of the Gaps</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Panel</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Alejandro Almazán Zimerman</span>
                <span className="ag-speaker-name">Dra. Sofialeticia Morales Garza</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA, Educación e Inclusión</span>Educación en la Era de la IA: Retos y Oportunidades</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Mesa de rectores</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Santos Guzmán López</span>
                <span className="ag-speaker-name">Eugenio Garza y Garza</span>
                <span className="ag-speaker-name">Mario Adrián Flores Castro</span>
                <span className="ag-speaker-name">Ángel Casán Marcos</span>
                <span className="ag-speaker-name">Juan Paura García</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA, Educación e Inclusión</span>¿Cómo integrar IA en la Educación Superior sin perder el Factor Humano?</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Panel</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Marian Mimi Edmunds</span>
                <span className="ag-speaker-name">Jorge Lerdo de Tejada</span>
                <span className="ag-speaker-name">Jorge Ramos</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA y Autonomía Humana</span>El compromiso con la verdad en la era de la Inteligencia Artificial</div>
            </div>

            <div className="ag-row ag-row--featured" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Panel</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Mauricio Martínez</span>
                <span className="ag-speaker-name">Farid Dieck Assad</span>
              </div>
              <div className="ag-row__talk ag-row__talk--bold" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA y Autonomía Humana</span>Ser Humano en escena: Creatividad, Arte e Identidad en tiempos de IA</div>
            </div>

            {/* ─── DÍA 2 ─── */}
            <div className="ag-row ag-row--block" role="row" style={{ marginTop: '2rem' }}>
              <div className="ag-row__time" role="cell"><span className="ag-time">4 OCT</span></div>
              <div className="ag-row__speaker" role="cell" style={{ gridColumn: 'span 2' }}>
                <span className="ag-block-label" style={{ color: '#06b6d4' }}>DÍA 2: CINTERMEX</span>
              </div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Taller / Sesión</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">David Eaton</span>
                <span className="ag-speaker-name">Salvador Rizzo Tavares</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA y Autonomía Humana</span>Sesión Rotarios · Liderazgo, comunidad y tecnología al servicio del bien</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Sesión</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Dr. Bimal Desai</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA, Salud y Espiritualidad</span>Salud e IA: sesión especializada</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Sesión</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Marian Mimi Edmunds</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA y Autonomía Humana</span>Medios de comunicación e IA</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Sesión</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Alejandro Almazán Zimerman</span>
                <span className="ag-speaker-name">Caroline Sánchez Crozier</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA, Educación e Inclusión</span>Educación, Google e Inclusión Digital</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Consejo</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Mons. Rogelio Cabrera López</span>
                <span className="ag-speaker-name">Padre David Jasso</span>
                <span className="ag-speaker-name">Abuelo Maya Antonio Oxté</span>
                <span className="ag-speaker-name">Bhikkhu Pannakara</span>
                <span className="ag-speaker-name">Gurudev Sri Sri Ravi Shankar</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA y Espiritualidad</span>Consejo Interreligioso</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Sesión</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Emma Seppälä</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA, Salud y Espiritualidad</span>Bienestar emocional e IA</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Charter</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Representante</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA, Salud y Espiritualidad</span>Charter for Compassion</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Sesión especial</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Abuelo Maya Antonio Oxté</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA y Espiritualidad</span>Sabiduría ancestral y el futuro tecnológico</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Conferencia</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Farid Dieck Assad</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA, Salud y Espiritualidad</span>Salud mental y autonomía personal ante la IA</div>
            </div>

            <div className="ag-row ag-row--featured" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dur">Panel</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Dr. Arumugam Murukiah</span>
                <span className="ag-speaker-name">Dra. Melina Uncapher</span>
                <span className="ag-speaker-name">Caroline Sánchez Crozier</span>
              </div>
              <div className="ag-row__talk ag-row__talk--bold" role="cell"><span className="agenda-tab-pill" style={{marginRight:8, background:'rgba(255,255,255,0.1)'}}>IA y Autonomía Humana</span>IA Humanizada: soluciones tecnológicas con impacto</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
