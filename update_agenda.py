import re

css_path = 'src/index.css'
with open(css_path, 'r') as f:
    css_content = f.read()

# Replace agenda table styles with new card styles
css_new = """
/* ── Agenda List Layout ── */
.agenda-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: rgba(10, 15, 36, 0.4);
}

.ag-day-header {
  padding: 12px 24px;
  font-weight: 700;
  color: #000;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.ag-card {
  border-left: 5px solid;
  border-bottom: 1px solid var(--color-border-subtle);
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: background var(--transition-fast);
}
.ag-card:hover {
  background: rgba(255, 255, 255, 0.02);
}
.ag-card:last-child {
  border-bottom: none;
}
.ag-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.ag-card__type {
  font-size: 0.85rem;
  font-style: italic;
  color: var(--color-text-secondary);
}
.ag-card__track {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  border: 1px solid;
  border-radius: var(--radius-full);
  padding: 4px 16px;
}
.ag-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
}
.ag-card__speakers {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 12px;
  margin-top: 4px;
  align-items: center;
}
.ag-card__speaker-row {
  display: contents; /* allows children to join grid */
}
.ag-card__speaker-name-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
}
.ag-card__speaker-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
.ag-card__speaker-name {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
}
.ag-card__speaker-role {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .ag-card__speakers {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .ag-card__speaker-row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }
  .ag-card__speaker-role {
    padding-left: 20px;
  }
}
"""

start_idx = css_content.find("/* Table */")
end_idx = css_content.find("/* ════════════════════════════════\n   SPONSORS")
if start_idx != -1 and end_idx != -1:
    css_content = css_content[:start_idx] + css_new + css_content[end_idx:]
    with open(css_path, 'w') as f:
        f.write(css_content)

jsx_path = 'src/components/Agenda.jsx'
jsx_content = """import React from 'react';

// Data for Agenda to keep JSX clean
const agendaData = [
  // --- DAY 1 ---
  {
    isDayHeader: true,
    day: "DÍA 1 · Sábado 3 de octubre 2026",
    location: "ShowCenter Complex",
    bgColor: "var(--color-orange)"
  },
  {
    type: "8:30 am · Ceremonia de apertura",
    title: "Inauguración",
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Dra. María Cristina González Parás", role: "Directora EMV" },
      { name: "Mons. Rogelio Cabrera López", role: "Arzobispo Metropolitano de Monterrey" }
    ]
  },
  {
    type: "10:00 am · Conferencia magistral",
    title: '"Calma en tiempos de IA: la ciencia del bienestar emocional"',
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Emma Seppälä", role: "Psicóloga · Stanford & Yale" }
    ]
  },
  {
    type: "10:30 am · Conferencia magistral",
    title: '"La mente en la era digital: dopamina, ansiedad y reconexión interior"',
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Marian Rojas Estapé", role: "Psiquiatra · Experta en bienestar emocional" }
    ]
  },
  {
    type: "11:15 am · Panel",
    title: '"El Ser Humano como Guía, la IA como Soporte"',
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Marian Rojas Estapé", role: "Psiquiatra · Instituto Rojas Estapé" },
      { name: "Mónica Zambrano Vignau", role: "HUMIND" },
      { name: "Sofía Lozano Snively", role: "Ingenium" }
    ]
  },
  {
    type: "12:00 pm · Sesión de preguntas y respuestas",
    title: "Q&A con Marian Rojas y David Eaton",
    track: "IA y Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [
      { name: "Marian Rojas Estapé", role: "Psiquiatra · Instituto Rojas Estapé" },
      { name: "David Eaton", role: "Gobernador Electo · Distrito Rotario 4130" }
    ]
  },
  {
    type: "12:30 pm · Panel",
    title: '"IA Humanizada: Tecnología, Educación e Innovación Industrial Integrada"',
    track: "IA, Educación e Inclusión",
    color: "var(--color-orange)",
    speakers: [
      { name: "Dr. Arumugam Murukiah", role: "Fundador · Broadline Technologies" },
      { name: "Caroline Sanchez Crozier", role: "CEO CSC Consulting · Presidenta IA LULAC" },
      { name: "Dra. Melina Uncapher", role: "Neurocientífica · SETA-ED" }
    ]
  },
  {
    type: "13:30 pm · Receso",
    title: "Receso",
    track: "Receso",
    color: "var(--color-border-subtle)",
    speakers: []
  },
  {
    type: "14:30 pm · Panel",
    title: '"Reinventando la medicina en la frontera de la IA: Redefiniendo el papel del médico"',
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Dra. Alma Rosa Marroquín", role: "Secretaria de Salud · Nuevo León" },
      { name: "Dr. Bimal Desai", role: "VP & CHIO · Children's Hospital of Philadelphia" }
    ]
  },
  {
    type: "15:30 pm · Panel",
    title: '"Educación en la Era de la IA: Retos y Oportunidades"',
    track: "IA, Educación e Inclusión",
    color: "var(--color-orange)",
    speakers: [
      { name: "Alejandro Almazán Zimerman", role: "Head of Google for Education · LATAM" },
      { name: "Dra. Sofialeticia Morales Garza", role: "Coordinadora Ecosistema Educativo Legado NL" }
    ]
  },
  {
    type: "16:30 pm · Mesa de rectores",
    title: '"¿Cómo integrar IA en la Educación Superior sin perder el Factor Humano?"',
    track: "IA, Educación e Inclusión",
    color: "var(--color-orange)",
    speakers: [
      { name: "Juan Paura García", role: "Secretario de Educación · Nuevo León" },
      { name: "Ángel Casán Marcos", role: "Rector · Universidad Regiomontana U-ERRE" },
      { name: "Mario Adrián Flores Castro", role: "Vicepresidente · Tecnológico de Monterrey, Campus Monterrey" },
      { name: "Por definir", role: "Próximo Rector · UDEM" },
      { name: "Por definir", role: "Rector · UANL" }
    ]
  },
  {
    type: "17:15 pm · Panel",
    title: '"El compromiso con la verdad en la era de la Inteligencia Artificial"',
    track: "IA y Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [
      { name: 'Marian "Mimi" Edmunds', role: "Periodista y Productora · CBS 60 Minutes" },
      { name: "Jorge Lerdo de Tejada", role: "Global Ambassador · Singularity University" }
    ]
  },
  {
    type: "18:00 pm · Panel",
    title: '"Ser Humano en escena: Creatividad, Arte e Identidad en tiempos de IA"',
    track: "IA y Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [
      { name: "Mauricio Martínez", role: "Actor y cantante · Broadway" },
      { name: "Farid Dieck Assad", role: "Psicólogo · Influencer · 60M seguidores" },
      { name: "Nayo Escobar", role: "Empresario, músico y creador de contenido" }
    ]
  },

  // --- DAY 2 ---
  {
    isDayHeader: true,
    day: "DÍA 2 · Domingo 4 de octubre 2026",
    location: "CINTERMEX",
    bgColor: "var(--color-cyan)"
  },
  {
    type: "9:00 a 10:30 am · Taller / Sesión privada",
    title: "Sesión Rotarios · Liderazgo, comunidad y tecnología al servicio del bien",
    track: "IA y Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [
      { name: "David Eaton", role: "Gobernador Electo · Distrito Rotario 4130" },
      { name: 'Marian "Mimi" Edmunds', role: "Periodista y Productora" }
    ]
  },
  {
    type: "9:00 a 10:30 am · Sesión paralela · Sala Salud",
    title: "La nueva frontera de la Medicina Inteligente",
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Dr. Bimal Desai", role: "VP & CHIO · Children's Hospital of Philadelphia" }
    ]
  },
  {
    type: "9:00 a 10:30 am · Sesión paralela · Sala Educación",
    title: '"Del Cerebro al Aula: Repensando la Educación en la Era Digital"',
    track: "IA, Educación e Inclusión",
    color: "var(--color-orange)",
    speakers: [
      { name: "Dra. Melina Uncapher", role: "Neurocientífica · SETA-ED" }
    ]
  },
  {
    type: "9:00 a 10:30 am · Sesión especial · Sala Espiritualidad",
    title: '"De Ingeniero Informático a Monje Budista" y Sabiduría ancestral',
    track: "IA y Espiritualidad",
    color: "var(--color-lime)",
    speakers: [
      { name: "Bhikkhu Pannakara", role: "Monje Budista" },
      { name: "Abuelo Maya Antonio Oxté", role: "Sabio Maya · Tzucacab, Yucatán" }
    ]
  },
  {
    type: "9:00 a 10:30 am · Sesión paralela · Sala Salud",
    title: '"Relaciones Soberanas: la ciencia detrás de las relaciones prósperas y herramientas para cultivar conexiones significativas"',
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Emma Seppälä", role: "Psicóloga · Stanford & Yale" }
    ]
  },
  {
    type: "11:00 am a 12:30 pm · Conferencia · Sala Espiritualidad",
    title: '"Espiritualidad cristiana e Inteligencia Artificial"',
    track: "IA y Espiritualidad",
    color: "var(--color-lime)",
    speakers: [
      { name: "Padre David Jasso", role: "Sacerdote · Arquidiócesis de Monterrey" }
    ]
  },
  {
    type: "11:00 am a 12:30 pm · Conferencia · Sala Espiritualidad",
    title: '"¿Quién decide por ti? Libertad humana en la era del algoritmo"',
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Farid Dieck Assad", role: "Psicólogo · Influencer · 60M seguidores" }
    ]
  },
  {
    type: "11:00 am a 12:30 pm · Sesión paralela · Sala Salud",
    title: '"Diseño e implementación de soluciones tecnológicas de alto impacto en el sector salud"',
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Dr. Arumugam Murukiah", role: "Fundador · Broadline Technologies" }
    ]
  },
  {
    type: "11:00 am a 12:30 pm · Sesión paralela · Sala Educación",
    title: '"Del Potencial a la Oportunidad: El Camino de las Mujeres en la Economía Digital"',
    track: "IA, Educación e Inclusión",
    color: "var(--color-orange)",
    speakers: [
      { name: "Caroline Sanchez Crozier", role: "CEO CSC Consulting · Presidenta IA LULAC" }
    ]
  },
  {
    type: "11:00 am a 12:30 pm · Diálogo · Sala Autonomía Humana",
    title: "Diálogo sobre liderazgo, comunidad y tecnología",
    track: "IA y Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [
      { name: "David Eaton", role: "Rotary Distrito 4130" },
      { name: 'Marian "Mimi" Edmunds', role: "Periodista y Productora · CBS 60 Minutes" }
    ]
  },
  {
    type: "11:00 am a 12:30 pm · Consejo Interreligioso · Sala Espiritualidad",
    title: "Consejo Interreligioso",
    track: "IA y Espiritualidad",
    color: "var(--color-lime)",
    speakers: [
      { name: "Mons. Rogelio Cabrera López", role: "Arzobispo Metropolitano de Monterrey" },
      { name: "Padre David Jasso", role: "Sacerdote · Arquidiócesis de Monterrey" },
      { name: "Abuelo Maya Antonio Oxté", role: "Sabio Maya · Tzucacab, Yucatán" },
      { name: "Bhikkhu Pannakara", role: "Monje Budista" },
      { name: "Gurudev Sri Sri Ravi Shankar", role: "Líder espiritual · Fundador Arte de Vivir" }
    ]
  },
  {
    type: "Charter for Compassion",
    title: "Charter for Compassion",
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Representante Charter for Compassion", role: "" }
    ]
  },
  {
    type: "Presentación especial",
    title: "Por definir",
    track: "IA y Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [
      { name: "Nayo Escobar", role: "Empresario, músico y creador de contenido" }
    ]
  },
  {
    type: "Presentación de libro",
    title: "Inteligencia Artificial y Paz Mundial",
    track: "IA y Espiritualidad",
    color: "var(--color-lime)",
    speakers: [
      { name: "Pastor Federico Elizondo", role: "Autor · Inteligencia Artificial y Paz Mundial" }
    ]
  }
];

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
          
          <div className="agenda-list reveal-up">
            {agendaData.map((item, idx) => {
              if (item.isDayHeader) {
                return (
                  <div key={idx} className="ag-day-header" style={{ background: item.bgColor }}>
                    <span>{item.day}</span>
                    <span style={{ fontWeight: 400, opacity: 0.8 }}>· {item.location}</span>
                  </div>
                );
              }

              return (
                <div key={idx} className="ag-card" style={{ borderLeftColor: item.color }}>
                  <div className="ag-card__header">
                    <span className="ag-card__type">{item.type}</span>
                    <span className="ag-card__track" style={{ borderColor: item.color, color: item.color }}>
                      {item.track}
                    </span>
                  </div>
                  <h3 className="ag-card__title">{item.title}</h3>
                  <div className="ag-card__speakers">
                    {item.speakers.map((sp, i) => (
                      <div className="ag-card__speaker-row" key={i}>
                        <div className="ag-card__speaker-name-wrap">
                          <span className="ag-card__speaker-dot" style={{ background: item.color }}></span>
                          <span className="ag-card__speaker-name">{sp.name}</span>
                        </div>
                        {sp.role && <span className="ag-card__speaker-role">{sp.role}</span>}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
"""

with open(jsx_path, 'w') as f:
    f.write(jsx_content)

print('Done')
