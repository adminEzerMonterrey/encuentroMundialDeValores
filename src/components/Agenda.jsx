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
    title: "",
    track: "Receso",
    color: "var(--color-lime)",
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
  // --- 9:00 - 10:00 AM ---
  {
    type: "9:00 - 10:00 AM · Sala Antártida",
    title: "Sala de Espiritualidad con Pastor Elizondo",
    track: "Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [{ name: "Pastor Elizondo", role: "Conferencista" }]
  },
  {
    type: "9:00 - 10:00 AM · Sala Canadá A",
    title: "Sala de Comunicación con Abuelo Maya y Sebastian Yatra",
    track: "Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [
      { name: "Abuelo Maya", role: "Líder Espiritual Maya" },
      { name: "Sebastian Yatra", role: "Músico y Facilitador" }
    ]
  },
  {
    type: "9:00 - 10:00 AM · Sala Europa",
    title: "Sala de Liderazgo Rotario con David Eaton",
    track: "Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [
      { name: "David Eaton", role: "Gobernador Electo · Distrito Rotario 4130" }
    ]
  },
  {
    type: "9:00 - 10:00 AM · Sala Oceanía",
    title: '"La Nueva Frontera de la Medicina Inteligente"',
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [{ name: "Dr. Bimal Desai", role: "VP & CHIO · Children's Hospital of Philadelphia" }]
  },
  {
    type: "9:00 - 10:00 AM · Sala Canadá B",
    title: '"Del Potencial a la Oportunidad: El Camino de las Mujeres en la Economía Digital"',
    track: "IA, Educación e Inclusión",
    color: "var(--color-orange)",
    speakers: [{ name: "Caroline Sanchez Crozier", role: "CEO CSC Consulting · Presidenta IA LULAC" }]
  },
  // --- 10:10 - 11:00 AM ---
  {
    type: "10:10 - 11:00 AM · Sala Antártida",
    title: '"Espiritualidad cristiana e Inteligencia Artificial"',
    track: "IA, Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [{ name: "Padre David Jasso", role: "Sacerdote · Arquidiócesis de Monterrey" }]
  },
  {
    type: "10:10 - 11:00 AM · Sala Canadá A",
    title: "Sala de Comunicación con Mauricio Martínez",
    track: "Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [{ name: "Mauricio Martínez", role: "Actor y Cantante de Broadway" }]
  },
  {
    type: "10:10 - 11:00 AM · Sala Europa",
    title: "Sala de Liderazgo y Tecnología con Rotarios y Dr. Arumugam",
    track: "Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [
      { name: "Rotarios Distrito 4130", role: "" },
      { name: "Dr. Arumugam Murukiah", role: "Fundador · Broadline Technologies" }
    ]
  },
  {
    type: "10:10 - 11:00 AM · Sala Oceanía",
    title: '"Relaciones Soberanas: Descubre la ciencia detrás de las relaciones prósperas y adquiere herramientas para cultivar conexiones significativas"',
    track: "Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [{ name: "Emma Seppälä", role: "Psicóloga · Stanford & Yale" }]
  },
  {
    type: "10:10 - 11:00 AM · Sala Canadá B",
    title: "Sala de Educación con Alejandro Almazán",
    track: "Educación e Inclusión",
    color: "var(--color-orange)",
    speakers: [{ name: "Alejandro Almazán Zimerman", role: "Head of Google for Education · LATAM" }]
  },
  // --- 11:10 AM - 12:00 PM ---
  {
    type: "11:10 AM - 12:00 PM · Sala Antártida",
    title: '"De Ingeniero Informático a Monje Budista"',
    track: "Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [{ name: "Bhikkhu Pannakara", role: "Monje Budista" }]
  },
  {
    type: "11:10 AM - 12:00 PM · Sala Canadá A",
    title: '"¿Quién decide por ti? Libertad humana en la era del algoritmo"',
    track: "IA y Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [{ name: "Farid Dieck Assad", role: "Psicólogo · Influencer" }]
  },
  {
    type: "11:10 AM - 12:00 PM · Sala Europa",
    title: "Sala de Liderazgo Rotario con David Eaton y Mimi Edmunds",
    track: "Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [
      { name: "David Eaton", role: "Gobernador Electo · Distrito Rotario 4130" },
      { name: 'Marian "Mimi" Edmunds', role: "Periodista y Productora · CBS 60 Minutes" }
    ]
  },
  {
    type: "11:10 AM - 12:00 PM · Sala Oceanía",
    title: "Sala de Salud con Dr. Jesús González",
    track: "Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [{ name: "Dr. Jesús González Álvarez", role: "Médico y Conferencista" }]
  },
  {
    type: "11:10 AM - 12:00 PM · Sala Canadá B",
    title: '"Del Cerebro al Aula: Repensando la Educación en la Era Digital"',
    track: "IA, Educación e Inclusión",
    color: "var(--color-orange)",
    speakers: [{ name: "Dra. Melina Uncapher", role: "Neurocientífica · SETA-ED" }]
  },
  // --- 12:10 - 1:00 PM ---
  {
    type: "12:10 - 1:00 PM · Sala Antártida",
    title: "Sala de Espiritualidad con Univ. Montemorelos",
    track: "Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [{ name: "Universidad de Montemorelos", role: "Representantes" }]
  },
  {
    type: "12:10 - 1:00 PM · Sala Canadá A",
    title: "Sala de Comunicación con Nayo Escobar",
    track: "Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [{ name: "Nayo Escobar", role: "Empresario, músico y creador de contenido" }]
  },
  {
    type: "12:10 - 1:00 PM · Sala Europa",
    title: "Sala de Liderazgo Rotario (Mesa Redonda)",
    track: "Autonomía Humana",
    color: "var(--color-accent)",
    speakers: [{ name: "Líderes Rotarios", role: "Distrito 4130" }]
  },
  {
    type: "12:10 - 1:00 PM · Sala Oceanía",
    title: "Sala de Salud con Marisela Reyes",
    track: "Salud y Espiritualidad",
    color: "var(--color-cyan)",
    speakers: [{ name: "Marisela Reyes", role: "Conferencista y Terapeuta" }]
  },
  {
    type: "12:10 - 1:00 PM · Sala Canadá B",
    title: "Sala de Educación (Cierre Pedagógico)",
    track: "Educación e Inclusión",
    color: "var(--color-orange)",
    speakers: [
      { name: "Caroline Sanchez Crozier", role: "CEO CSC Consulting · Presidenta IA LULAC" },
      { name: "Dra. Melina Uncapher", role: "Neurocientífica · SETA-ED" }
    ]
  },
  // --- 1:00 PM ---
  {
    type: "1:00 PM · Todas las Salas",
    title: "Caminata por la Paz (Clausura)",
    track: "Clausura",
    color: "var(--color-orange)",
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
