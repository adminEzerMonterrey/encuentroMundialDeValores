import React from 'react';

export default function Agenda() {
  return (
    <section className="section agenda" id="agenda" aria-labelledby="agendaHeading">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">03 / AGENDA</span>
          <h2 className="section-title" id="agendaHeading">Agenda</h2>
          <p className="section-subtitle">Dos días completos de <span className="text-accent">aprendizaje</span> y <span className="text-lime">networking</span></p>
        </div>

        <div className="ag-blob-wrapper" style={{ marginTop: '3rem' }}>
          <div className="ag-blob ag-blob--1" aria-hidden="true"></div>
          <div className="ag-blob ag-blob--2" aria-hidden="true"></div>
          <div className="ag-blob ag-blob--3" aria-hidden="true"></div>
          <div className="ag-blob-bg" aria-hidden="true"></div>
          
          <div className="agenda-table reveal-up" role="table" aria-label="Programa del evento">
            <div className="agenda-table__head" role="row">
              <span role="columnheader">HORA</span>
              <span role="columnheader">SPEAKER</span>
              <span role="columnheader">CHARLA</span>
            </div>

            {/* ─── DÍA 1 ─── */}
            <div className="ag-row ag-row--block" role="row">
              <div className="ag-row__time" role="cell"><span className="ag-time">3 OCT</span></div>
              <div className="ag-row__speaker" role="cell" style={{ gridColumn: 'span 2' }}>
                <span className="ag-block-label" style={{ color: '#06b6d4' }}>DÍA 1: SHOWCENTER</span>
              </div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-time">09:00</span><span className="ag-dur">AM</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Dra. María Cristina González / Mons. Rogelio Cabrera</span>
                <span className="ag-speaker-role">EMV / Arquidiócesis</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-a" style={{marginRight:8}}>Reconocimiento</span>Reconocimiento "David Noel Ramírez"</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-time">09:30</span><span className="ag-dur">AM</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Dan Levy</span><span className="ag-speaker-role">Harvard Kennedy School</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-b" style={{marginRight:8}}>Gobernanza</span>Gobernanza de la inteligencia artificial: entre innovación y responsabilidad</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-time">10:15</span><span className="ag-dur">AM</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Emma Seppälä</span><span className="ag-speaker-role">Stanford</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-c" style={{marginRight:8}}>Bienestar</span>Calma en tiempos de inteligencia artificial: la ciencia del bienestar emocional</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-time">10:45</span><span className="ag-dur">AM</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Marian Rojas Estapé</span><span className="ag-speaker-role">Psiquiatra</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-main" style={{marginRight:8}}>IA & Salud</span>La mente en la era digital: dopamina, ansiedad y reconexión interior</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-time">11:30</span><span className="ag-dur">AM</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Monica Zambrano / Marian Rojas / Sofía Lozano</span><span className="ag-speaker-role">Panelistas</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-a" style={{marginRight:8}}>IA & Salud</span>El Ser Humano como Guía, la IA como Soporte</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-time">12:30</span><span className="ag-dur">PM</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Dr. Arumugam Murukiah / Caroline Sanchez / Dr. Melina Uncapher</span><span className="ag-speaker-role">Panelistas</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-b" style={{marginRight:8}}>Autonomía Humana</span>IA Humanizada: Tecnología, Educación e Innovación Industrial Integrada</div>
            </div>

            <div className="ag-row ag-row--break" role="row">
              <div className="ag-row__time" role="cell"><span className="ag-dot ag-dot--lime"></span><span className="ag-time">13:30</span><span className="ag-dur">1.5 hrs</span></div>
              <div className="ag-row__speaker" role="cell"><span className="ag-speaker-name">Todos los asistentes</span><span className="ag-speaker-role">Showcenter</span></div>
              <div className="ag-row__talk ag-row__talk--bold" role="cell">🍕 Comida &amp; Networking</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-time">15:15</span><span className="ag-dur">PM</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Sofialeticia Morales / Alejandro Almazán</span><span className="ag-speaker-role">Panelistas</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-c" style={{marginRight:8}}>Educación</span>Educación en la Era de la IA: Retos y Oportunidades</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-time">16:00</span><span className="ag-dur">PM</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Juan Pablo Murra / Juan Paura / Eugenio Garza / Angel Casán / Santos Guzmán</span><span className="ag-speaker-role">Panelistas</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-main" style={{marginRight:8}}>Educación Superior</span>¿Cómo integrar IA en la Educación Superior sin perder el Factor Humano?</div>
            </div>

            <div className="ag-row" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-time">16:45</span><span className="ag-dur">PM</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Jorge Ramos / Marian Mimi Edmunds</span><span className="ag-speaker-role">Periodistas</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-a" style={{marginRight:8}}>Autonomía Humana</span>El compromiso con la verdad en la era de la Inteligencia Artificial</div>
            </div>

            <div className="ag-row ag-row--featured" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-time">17:30</span><span className="ag-dur">PM</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Mauricio Martinez / Farid Dieck / Mariana Treviño</span><span className="ag-speaker-role">Creativos</span>
              </div>
              <div className="ag-row__talk ag-row__talk--bold" role="cell"><span className="agenda-tab-pill track-b" style={{marginRight:8}}>Arte y Creatividad</span>Ser Humano en escena: Creatividad, Arte e Identidad en tiempos de IA</div>
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
                <span className="ag-time">09:00</span><span className="ag-dur">AM</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">Varias figuras clave</span><span className="ag-speaker-role">Paneles Especializados</span>
              </div>
              <div className="ag-row__talk" role="cell"><span className="agenda-tab-pill track-c" style={{marginRight:8}}>Sesiones Temáticas</span>Rotarios, Salud, Autonomía Humana, Educación y Espiritualidad</div>
            </div>

            <div className="ag-row ag-row--featured" role="row">
              <div className="ag-row__time" role="cell">
                <span className="ag-dot ag-dot--accent"></span>
                <span className="ag-time">12:30</span><span className="ag-dur">PM</span>
              </div>
              <div className="ag-row__speaker" role="cell">
                <span className="ag-speaker-name">EMV</span><span className="ag-speaker-role">Cierre oficial</span>
              </div>
              <div className="ag-row__talk ag-row__talk--bold" role="cell">Cierre del Evento</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
