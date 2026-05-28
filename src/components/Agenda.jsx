import React from 'react';

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
    type: "Ceremonia de apertura",
    title: "Entrega de reconocimiento · Familia David Noel Ramírez",
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Dra. María Cristina González Parás", role: "Directora EMV" },
      { name: "Mons. Rogelio Cabrera López", role: "Arzobispo Metropolitano de Monterrey" }
    ]
  },
  {
    type: "Conferencia magistral",
    title: '"Calma en tiempos de IA: la ciencia del bienestar emocional"',
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Emma Seppälä", role: "Psicóloga · Stanford & Yale" }
    ]
  },
  {
    type: "Conferencia magistral",
    title: '"La mente en la era digital: dopamina, ansiedad y reconexión interior"',
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Marian Rojas Estapé", role: "Psiquiatra · Experta en bienestar emocional" }
    ]
  },
  {
    type: "Panel",
    title: '"El Ser Humano como Guía, la IA como Soporte"',
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Marian Rojas Estapé", role: "Psiquiatra" },
      { name: "Mónica Zambrano Vignau", role: "HUMIND" },
      { name: "Sofía Lozano Snively", role: "Ingenium" }
    ]
  },
  {
    type: "Panel",
    title: '"IA Humanizada: Tecnología, Educación e Innovación Industrial Integrada"',
    track: "IA y Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [
      { name: "Dr. Arumugam Murukiah", role: "Fundador · Broadline Technologies" },
      { name: "Caroline Sánchez Crozier", role: "CEO CSC Consulting · Presidenta IA LULAC" },
      { name: "Dra. Melina Uncapher", role: "Neurocientífica · SETA-ED (por confirmar)" }
    ]
  },
  {
    type: "Panel",
    title: '"Reinventing Medicine in the Age of AI: Beyond the Doctor of the Gaps"',
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Dra. Alma Rosa Marroquín", role: "Secretaria de Salud · Nuevo León" },
      { name: "Dr. Bimal Desai", role: "VP & CHIO · Children's Hospital of Philadelphia" }
    ]
  },
  {
    type: "Panel",
    title: '"Educación en la Era de la IA: Retos y Oportunidades"',
    track: "IA, Educación e Inclusión",
    color: "var(--color-orange)",
    speakers: [
      { name: "Alejandro Almazán Zimerman", role: "Head of Google for Education · LATAM" },
      { name: "Dra. Sofialeticia Morales Garza", role: "Coordinadora Ecosistema Educativo Legado NL" }
    ]
  },
  {
    type: "Mesa de rectores",
    title: '"¿Cómo integrar IA en la Educación Superior sin perder el Factor Humano?"',
    track: "IA, Educación e Inclusión",
    color: "var(--color-orange)",
    speakers: [
      { name: "Por definir", role: "Rector · UANL" },
      { name: "Por definir", role: "Próximo Rector · UDEM" },
      { name: "Mario Adrián Flores Castro", role: "Vicepresidente · Tecnológico de Monterrey" },
      { name: "Ángel Casán Marcos", role: "Rector · Universidad Regiomontana U-ERRE" },
      { name: "Juan Paura García", role: "Secretario de Educación · Nuevo León" }
    ]
  },
  {
    type: "Panel",
    title: '"El compromiso con la verdad en la era de la Inteligencia Artificial"',
    track: "IA y Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [
      { name: "Marian Mimi Edmunds", role: "Periodista y Productora · CBS 60 Minutes" },
      { name: "Jorge Lerdo de Tejada", role: "Global Ambassador · Singularity University" },
      { name: "Jorge Ramos", role: "Periodista · Univision (por confirmar)" }
    ]
  },
  {
    type: "Panel",
    title: '"Ser Humano en escena: Creatividad, Arte e Identidad en tiempos de IA"',
    track: "IA y Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [
      { name: "Mauricio Martínez", role: "Actor y cantante · Broadway" },
      { name: "Farid Dieck Assad", role: "Psicólogo · Influencer · 60M seguidores" }
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
    type: "Taller / Sesión privada",
    title: "Sesión Rotarios · Liderazgo, comunidad y tecnología al servicio del bien",
    track: "IA y Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [
      { name: "David Eaton", role: "Gobernador Electo · Distrito Rotario 4130" },
      { name: "Salvador Rizzo Tavares", role: "Rotarios" }
    ]
  },
  {
    type: "Sesión paralela · Sala Salud",
    title: "Salud e IA: sesión especializada",
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Dr. Bimal Desai", role: "VP & CHIO · Children's Hospital of Philadelphia" }
    ]
  },
  {
    type: "Sesión paralela · Sala Autonomía Humana",
    title: "Medios de comunicación e IA",
    track: "IA y Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [
      { name: "Marian Mimi Edmunds", role: "Periodista y Productora" }
    ]
  },
  {
    type: "Sesión paralela · Sala Educación",
    title: "Educación, Google e Inclusión Digital",
    track: "IA, Educación e Inclusión",
    color: "var(--color-orange)",
    speakers: [
      { name: "Alejandro Almazán Zimerman", role: "Head of Google for Education · LATAM" },
      { name: "Caroline Sánchez Crozier", role: "CEO CSC Consulting" }
    ]
  },
  {
    type: "Consejo Interreligioso · Sala Espiritualidad",
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
    type: "Sesión paralela · Sala Salud",
    title: "Bienestar emocional e IA",
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Emma Seppälä", role: "Psicóloga · Stanford & Yale" }
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
    type: "Sesión especial",
    title: "Sabiduría ancestral y el futuro tecnológico",
    track: "IA y Espiritualidad",
    color: "var(--color-lime)",
    speakers: [
      { name: "Abuelo Maya Antonio Oxté", role: "Sabio Maya · Tzucacab, Yucatán" }
    ]
  },
  {
    type: "Conferencia / Sala Espiritualidad",
    title: "Salud mental y autonomía personal ante la IA",
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Farid Dieck Assad", role: "Psicólogo · Influencer · 60M seguidores" }
    ]
  },
  {
    type: "Panel · Sala Autonomía Humana",
    title: '"IA Humanizada: soluciones tecnológicas con impacto"',
    track: "IA y Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [
      { name: "Dr. Arumugam Murukiah", role: "Fundador · Broadline Technologies" },
      { name: "Dra. Melina Uncapher", role: "Neurocientífica · SETA-ED" },
      { name: "Caroline Sánchez Crozier", role: "CEO CSC Consulting · Presidenta IA LULAC" }
    ]
  },
  {
    type: "Presentación especial",
    title: "Nayo Escobar · Comediante y creador de contenido",
    track: "IA y Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [
      { name: "Nayo Escobar", role: "Comediante y creador de contenido" }
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
          <p className="section-subtitle"><span className="text-accent">3 y 4 de octubre de 2026</span></p>
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
