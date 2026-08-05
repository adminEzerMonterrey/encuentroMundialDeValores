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
    type: "08:30 · Inauguración",
    title: "Inauguración EMV 2026",
    track: "Humanismo y Valores",
    color: "var(--color-pink)",
    speakers: [
      { name: "Dra. María Cristina González Parás", role: "Directora EMV" },
      { name: "Mons. Rogelio Cabrera López", role: "Arzobispo Metropolitano de Monterrey" }
    ]
  },
  {
    type: "09:30 · Ceremonia",
    title: "Bendición especial - Reconocimiento 'David Noel Ramírez'",
    track: "Humanismo y Valores",
    color: "var(--color-pink)",
    speakers: [
      { name: "Mons. Rogelio Cabrera López", role: "Arzobispo Metropolitano de Monterrey" },
      { name: "Dra. María Cristina González Parás", role: "Directora EMV" }
    ]
  },
  {
    type: "09:40 · Ceremonia",
    title: "Certificación por la Compasión - Consejo Charter for Compassion",
    track: "Humanismo y Valores",
    color: "var(--color-pink)",
    speakers: [
      { name: "Abuelo Maya", role: "Líder Espiritual Maya" }
    ]
  },
  {
    type: "10:00 · Conferencia Magistral",
    title: '"Calma en tiempos de la IA: la ciencia del bienestar emocional"',
    track: "Autonomía Humana",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Emma Seppälä", role: "Psicóloga · Stanford & Yale" }
    ]
  },
  {
    type: "10:30 · Conferencia Magistral",
    title: '"La mente en la era digital: dopamina, ansiedad y reconexión interior"',
    track: "Humanismo y Valores",
    color: "var(--color-pink)",
    speakers: [
      { name: "Marian Rojas Estapé", role: "Psiquiatra · Experta en bienestar emocional" }
    ]
  },
  {
    type: "11:15 · Panel",
    title: '"El Ser Humano como Guía, la IA como Soporte"',
    track: "Humanismo y Valores",
    color: "var(--color-pink)",
    speakers: [
      { name: "Marian Rojas Estapé", role: "Psiquiatra · Instituto Rojas Estapé" },
      { name: "Mónica Zambrano Vignau", role: "HUMIND" },
      { name: "Sofía Lozano Snively", role: "Ingenium" }
    ]
  },
  {
    type: "12:00 · Sesión Q&A",
    title: "Q&A con David Eaton",
    track: "Autonomía Humana",
    color: "var(--color-cyan)",
    speakers: [
      { name: "David Eaton", role: "Gobernador Electo · Distrito Rotario 4130" }
    ]
  },
  {
    type: "12:30 · Panel",
    title: '"IA Humanizada: Tecnología, Educación e Innovación Industrial Integrada"',
    track: "Autonomía Humana",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Caroline Sanchez Crozier", role: "CEO CSC Consulting · Presidenta IA LULAC" },
      { name: "Dr. Arumugam Murukiah", role: "Fundador · Broadline Technologies" },
      { name: "Dra. Melina Uncapher", role: "Neurocientífica · SETA-ED" }
    ]
  },
  {
    type: "13:30 · Receso",
    title: "Receso",
    track: "Receso",
    color: "var(--color-border-subtle)",
    speakers: []
  },
  {
    type: "14:30 · Panel",
    title: '"Reinventando la Medicina en la Frontera de la IA"',
    track: "Autonomía Humana",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Dr. Bimal Desai", role: "VP & CHIO · Children's Hospital of Philadelphia" },
      { name: "Dra. Alma Rosa Marroquín", role: "Secretaria de Salud · Nuevo León" }
    ]
  },
  {
    type: "15:10 · Conferencia",
    title: '"Inteligencia Artificial vs. Inteligencia Natural: Retos de la Educación y la Sociedad"',
    track: "Educación",
    color: "var(--color-orange)",
    speakers: [
      { name: "Mtro. Juan José Gutiérrez", role: "Secretario General · Sección 50 SNTE" }
    ]
  },
  {
    type: "15:30 · Panel",
    title: '"Educación en la Era de la IA: Retos y Oportunidades"',
    track: "Educación",
    color: "var(--color-orange)",
    speakers: [
      { name: "Dra. Sofialeticia Morales Garza", role: "Coordinadora Ecosistema Educativo Legado NL" },
      { name: "Alejandro Almazán Zimerman", role: "Head of Google for Education · LATAM" }
    ]
  },
  {
    type: "16:10 · Mesa de rectores",
    title: '"Cómo Integrar IA en Educación Superior sin Perder el Factor Humano"',
    track: "Educación",
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
    type: "17:00 · Panel",
    title: '"El Compromiso con la Verdad en la Era de la IA"',
    track: "Autonomía Humana",
    color: "var(--color-cyan)",
    speakers: [
      { name: 'Marian "Mimi" Edmunds', role: "Periodista y Productora · CBS 60 Minutes" },
      { name: "Jorge Lerdo de Tejada", role: "Global Ambassador · Singularity University" }
    ]
  },
  {
    type: "17:40 · Panel",
    title: '"Ser Humano en Escena: Creatividad, Arte e Identidad en Tiempos de IA"',
    track: "Humanismo y Valores",
    color: "var(--color-pink)",
    speakers: [
      { name: "Sebastian Yatra", role: "Músico y Facilitador" },
      { name: "Farid Dieck Assad", role: "Psicólogo · Influencer · 60M seguidores" },
      { name: "Mauricio Martínez", role: "Actor y cantante · Broadway" },
      { name: "Nayo Escobar", role: "Empresario, músico y creador de contenido" }
    ]
  },
  {
    type: "18:30 · Clausura",
    title: "Cierre musical - Sebastián Yatra",
    track: "Humanismo y Valores",
    color: "var(--color-pink)",
    speakers: [
      { name: "Sebastian Yatra", role: "Músico y Facilitador" }
    ]
  },

  // --- DAY 2 ---
  {
    isDayHeader: true,
    day: "DÍA 2 · Domingo 4 de octubre 2026",
    location: "CINTERMEX",
    bgColor: "var(--color-cyan)"
  },
  // --- 9:00 - 10:30 AM ---
  {
    type: "9:00 - 10:30 AM · Sala Antártida",
    title: '"De Ingeniero Informático a Monje Budista"',
    track: "Espiritualidad",
    color: "var(--color-pink)",
    speakers: [
      { name: "Bhikkhu Pannakara", role: "Monje Budista" },
      { name: "Abuelo Maya Antonio Oxté", role: "Sabio Maya · Tzucacab, Yucatán" }
    ]
  },
  {
    type: "9:00 - 10:30 AM · Sala Europa",
    title: '"Relaciones Soberanas: la ciencia de las conexiones prósperas"',
    track: "Autonomía",
    color: "var(--color-accent)",
    speakers: [
      { name: "Emma Seppälä", role: "Psicóloga · Stanford & Yale" }
    ]
  },
  {
    type: "9:00 - 10:30 AM · Sala Oceanía",
    title: '"La Nueva Frontera de la Medicina Inteligente"',
    track: "Salud",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Dr. Bimal Desai", role: "VP & CHIO · Children's Hospital of Philadelphia" }
    ]
  },
  {
    type: "9:00 - 10:30 AM · Sala Canadá 1",
    title: '"Del Cerebro al Aula: Repensando la Educación en la Era Digital"',
    track: "Educación",
    color: "var(--color-orange)",
    speakers: [
      { name: "Dra. Melina Uncapher", role: "Neurocientífica · SETA-ED" }
    ]
  },
  {
    type: "9:00 - 10:30 AM · Sala Canadá 2",
    title: "Liderazgo, comunidad y tecnología al servicio del bien",
    track: "Rotarios",
    color: "var(--color-lime)",
    speakers: [
      { name: "David Eaton", role: "Gobernador Electo · Distrito Rotario 4130" },
      { name: 'Marian "Mimi" Edmunds', role: "Periodista y Productora · CBS 60 Minutes" }
    ]
  },
  // --- 11:00 AM - 12:30 PM ---
  {
    type: "11:00 AM - 12:30 PM · Sala Antártida",
    title: '"Espiritualidad Cristiana e Inteligencia Artificial"',
    track: "Espiritualidad",
    color: "var(--color-pink)",
    speakers: [
      { name: "Padre David Jasso", role: "Sacerdote · Arquidiócesis de Monterrey" }
    ]
  },
  {
    type: "11:00 AM - 12:30 PM · Sala Europa",
    title: '"¿Quién Decide por Ti? Libertad Humana en la Era del Algoritmo"',
    track: "Autonomía",
    color: "var(--color-accent)",
    speakers: [
      { name: "Farid Dieck Assad", role: "Psicólogo · Influencer · 60M seguidores" }
    ]
  },
  {
    type: "11:00 AM - 12:30 PM · Sala Oceanía",
    title: '"Soluciones tecnológicas de alto impacto en el sector Salud"',
    track: "Salud",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Dr. Arumugam Murukiah", role: "Fundador · Broadline Technologies" }
    ]
  },
  {
    type: "11:00 AM - 12:30 PM · Sala Canadá 1",
    title: '"Del Potencial a la Oportunidad: el Camino de las Mujeres en la Economía Digital"',
    track: "Educación",
    color: "var(--color-orange)",
    speakers: [
      { name: "Caroline Sanchez Crozier", role: "CEO CSC Consulting · Presidenta IA LULAC" }
    ]
  },
  {
    type: "11:00 AM - 12:30 PM · Sala Canadá 2",
    title: "Diálogo sobre liderazgo, comunidad y tecnología",
    track: "Rotarios",
    color: "var(--color-lime)",
    speakers: [
      { name: "David Eaton", role: "Gobernador Electo · Distrito Rotario 4130" },
      { name: 'Marian "Mimi" Edmunds', role: "Periodista y Productora · CBS 60 Minutes" }
    ]
  },
  // --- 1:00 PM ---
  {
    type: "1:00 PM · Parque Fundidora",
    title: "Cierre conjunto de las dos sedes",
    track: "Clausura",
    color: "var(--color-pink)",
    speakers: []
  }
];

export default function Agenda() {
  return (
    <section className="section agenda" id="agenda" aria-labelledby="agendaHeading">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">03 / PROGRAMA PRELIMINAR</span>
          <h2 className="section-title" id="agendaHeading">Programa Preliminar</h2>
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
