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
    title: "Humanismo y Valores en la Era de la Inteligencia Artificial",
    track: "Humanismo y Valores",
    color: "var(--color-pink)",
    speakers: [
      { name: "Comité organizador EMV", role: "" }
    ]
  },
  {
    type: "09:30 · Reconocimiento",
    title: 'Entrega de Reconocimiento Póstumo a la Familia de "David Noel Ramírez" • Bendición del Consejo Interreligioso',
    track: "Humanismo y Valores",
    color: "var(--color-pink)",
    speakers: [
      { name: "Mons. Rogelio Cabrera López", role: "Arzobispo Metropolitano de Monterrey" }
    ]
  },
  {
    type: "09:40 · Reconocimiento",
    title: "Reconocimiento al Abuelo Maya • Certificación por la Compasión — Consejo Charter for Compassion",
    track: "Humanismo y Valores",
    color: "var(--color-pink)",
    speakers: [
      { name: "Abuelo Maya Antonio Oxté", role: "Sabio Maya" }
    ]
  },
  {
    type: "10:00 · Conferencia",
    title: '"Calma en tiempos de inteligencia artificial: la ciencia del bienestar emocional"',
    track: "Autonomía Humana",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Emma Seppälä", role: "Psicóloga · Stanford & Yale" }
    ]
  },
  {
    type: "10:30 · Conferencia",
    title: '"La mente en la era digital: dopamina, ansiedad y reconexión interior"',
    track: "Humanismo y Valores",
    color: "var(--color-pink)",
    speakers: [
      { name: "Marian Rojas Estapé", role: "Psiquiatra · Experta en bienestar emocional" }
    ]
  },
  {
    type: "11:15 · Panel",
    title: '"El Ser Humano como Guía, la IA como Soporte" (Humind • Ingenium)',
    track: "Humanismo y Valores",
    color: "var(--color-pink)",
    speakers: [
      { name: "Marian Rojas Estapé", role: "Psiquiatra · Instituto Rojas Estapé" },
      { name: "Mónica Zambrano Vignau", role: "HUMIND" },
      { name: "Sofía Lozano Snively", role: "Ingenium" }
    ]
  },
  {
    type: "12:00 · Q&R",
    title: "David Eaton entrevista a Marian Rojas · Preguntas y respuestas abiertas",
    track: "Autonomía Humana",
    color: "var(--color-cyan)",
    speakers: [
      { name: "David Eaton", role: "" },
      { name: "Marian Rojas Estapé", role: "" }
    ]
  },
  {
    type: "12:30 · Panel",
    title: '"IA Humanizada: Tecnología, Educación e Innovación Industrial Integrada"',
    track: "Autonomía Humana",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Caroline Sánchez Crozier", role: "CEO CSC Consulting · Presidenta IA LULAC" },
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
    type: "14:30 · Conferencia",
    title: '"Reinventando la medicina en la frontera de la IA: redefiniendo el papel del médico"',
    track: "Autonomía Humana",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Dr. Bimal Desai", role: "VP & CHIO · Children's Hospital of Philadelphia" },
      { name: "Dra. Alma Rosa Marroquín Escamilla", role: "Secretaria de Salud · Nuevo León" }
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
    title: '"Percepción y Uso de la IA en Secundaria"',
    track: "Educación",
    color: "var(--color-orange)",
    speakers: [
      { name: "Dra. Sofialeticia Morales Garza", role: "Coordinadora Ecosistema Educativo Legado NL" },
      { name: "Alejandro Almazán Zimerman", role: "Head of Google for Education · LATAM" }
    ]
  },
  {
    type: "16:10 · Panel de Rectores",
    title: '"¿Cómo integrar IA en la Educación Superior sin perder el Factor Humano?"',
    track: "Educación",
    color: "var(--color-orange)",
    speakers: [
      { name: "Dr. Juan Paura García", role: "Secretario de Educación · Nuevo León" },
      { name: "Mario Adrián Flores Castro", role: "Vicepresidente · Tecnológico de Monterrey, Campus Monterrey" },
      { name: "Ángel Casán Marcos", role: "Rector · Universidad Regiomontana U-ERRE" }
    ]
  },
  {
    type: "17:00 · Panel",
    title: '"El compromiso con la verdad en la era de la Inteligencia Artificial"',
    track: "Autonomía Humana",
    color: "var(--color-cyan)",
    speakers: [
      { name: 'Marian "Mimi" Edmunds', role: "Periodista y Productora · CBS 60 Minutes" },
      { name: "Jorge Lerdo de Tejada", role: "Global Ambassador · Singularity University" },
      { name: "Gregorio Martínez", role: "Periodista y presentador de televisión" }
    ]
  },
  {
    type: "17:40 · Panel",
    title: '"Ser Humano en Escena: Creatividad, Arte e Identidad en Tiempos de IA"',
    track: "Humanismo y Valores",
    color: "var(--color-pink)",
    speakers: [
      { name: "Farid Dieck", role: "Psicólogo · Conferencista" },
      { name: "Mauricio Martínez", role: "Actor y cantante · Broadway" },
      { name: "Nayo Escobar", role: "Empresario, músico y creador de contenido" }
    ]
  },
  {
    type: "18:30 · Celebración de cierre",
    title: "Celebración de cierre · Día 1",
    track: "Humanismo y Valores",
    color: "var(--color-pink)",
    speakers: [
      { name: "Encuentro Mundial de Valores", role: "" }
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
    title: '"Inteligencia Artificial y Paz Mundial: una visión cristiana y ética"',
    track: "Espiritual",
    color: "var(--color-pink)",
    speakers: [
      { name: "Pastor Federico Elizondo", role: "Presenta: Alma Rosa Asís" }
    ]
  },
  {
    type: "9:00 - 10:00 AM · Sala Europa",
    title: '"Sabiduría ancestral y voz global: comunicar valores entre generaciones"',
    track: "Comunicación",
    color: "var(--color-accent)",
    speakers: [
      { name: "Abuelo Maya Antonio Oxté", role: "" },
      { name: "Sebastián Yatra", role: "" },
      { name: "Eduardo Dondé", role: "" },
      { name: "Sebastián Latapí", role: "" }
    ]
  },
  {
    type: "9:00 - 10:00 AM · Sala Canadá A",
    title: '"PAZ POSITIVA · UDEM Paz"',
    track: "Rotarios",
    color: "var(--color-lime)",
    speakers: [
      { name: "David Eaton", role: "" },
      { name: "Carlos Sandoval", role: "" }
    ]
  },
  {
    type: "9:00 - 10:00 AM · Sala Oceanía",
    title: '"La Nueva Frontera de la Medicina Inteligente"',
    track: "Salud",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Dr. Bimal Desai", role: "" }
    ]
  },
  {
    type: "9:00 - 10:00 AM · Sala Canadá B",
    title: '"Del Potencial a la Oportunidad: El Camino de las Mujeres en la Economía Digital"',
    track: "Educación",
    color: "var(--color-orange)",
    speakers: [
      { name: "Caroline Sánchez Crozier", role: "" }
    ]
  },
  // --- 10:10 - 11:00 AM ---
  {
    type: "10:10 - 11:00 AM · Sala Antártida",
    title: '"Espiritualidad cristiana e Inteligencia Artificial"',
    track: "Espiritual",
    color: "var(--color-pink)",
    speakers: [
      { name: "Padre David Jasso", role: "" }
    ]
  },
  {
    type: "10:10 - 11:00 AM · Sala Europa",
    title: '"Comunicar desde la autenticidad: la voz humana en la era de la IA"',
    track: "Comunicación",
    color: "var(--color-accent)",
    speakers: [
      { name: "Mauricio Martínez", role: "" }
    ]
  },
  {
    type: "10:10 - 11:00 AM · Sala Canadá A",
    title: '"Tecnología al servicio de la comunidad: alianzas para el desarrollo sostenible"',
    track: "Rotarios",
    color: "var(--color-lime)",
    speakers: [
      { name: "Dr. Arumugam Murukiah", role: "" },
      { name: "David Eaton", role: "" }
    ]
  },
  {
    type: "10:10 - 11:00 AM · Sala Oceanía",
    title: '"Relaciones Soberanas: la ciencia detrás de las conexiones prósperas"',
    track: "Salud",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Emma Seppälä", role: "" }
    ]
  },
  {
    type: "10:10 - 11:00 AM · Sala Canadá B",
    title: '"IA, educación e inclusión: cerrar brechas en el aula del futuro"',
    track: "Educación",
    color: "var(--color-orange)",
    speakers: [
      { name: "Alejandro Almazán Zimerman", role: "" }
    ]
  },
  // --- 11:10 AM - 12:00 PM ---
  {
    type: "11:10 AM - 12:00 PM · Sala Antártida",
    title: '"De Ingeniero Informático a Monje Budista"',
    track: "Espiritual",
    color: "var(--color-pink)",
    speakers: [
      { name: "Bhikkhu Pannakara", role: "" }
    ]
  },
  {
    type: "11:10 AM - 12:00 PM · Sala Europa",
    title: '"¿Quién decide por ti? Libertad humana en la era del algoritmo"',
    track: "Comunicación",
    color: "var(--color-accent)",
    speakers: [
      { name: "Farid Dieck", role: "" }
    ]
  },
  {
    type: "11:10 AM - 12:00 PM · Sala Canadá A",
    title: '"Intercambio de jóvenes, embajadores de Paz"',
    track: "Rotarios",
    color: "var(--color-lime)",
    speakers: [
      { name: "Javier Prieto", role: "" },
      { name: "David Eaton", role: "" },
      { name: 'Marian "Mimi" Edmunds', role: "" }
    ]
  },
  {
    type: "11:10 AM - 12:00 PM · Sala Oceanía",
    title: '"Los retos de la salud en la era de la tecnología artificial"',
    track: "Salud",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Dr. Jesús González Álvarez", role: "" },
      { name: "Dra. Lilia Elida García Rodríguez", role: "" },
      { name: "Orlando Londoño", role: "" },
      { name: "Susana Cabrera", role: "" },
      { name: "Dr. Jesús Ancer", role: "" }
    ]
  },
  {
    type: "11:10 AM - 12:00 PM · Sala Canadá B",
    title: '"Del Cerebro al Aula: Repensando la Educación en la Era Digital"',
    track: "Educación",
    color: "var(--color-orange)",
    speakers: [
      { name: "Dra. Melina Uncapher", role: "" }
    ]
  },
  // --- 12:10 - 1:00 PM ---
  {
    type: "12:10 - 1:00 PM · Sala Antártida",
    title: '"¿Puede la Inteligencia Artificial tener valores?" · Los límites de la IA y el papel del ser humano',
    track: "Espiritual",
    color: "var(--color-pink)",
    speakers: [
      { name: "Dra. Flor Ontiveros", role: "Universidad de Montemorelos" }
    ]
  },
  {
    type: "12:10 - 1:00 PM · Sala Europa",
    title: '"IA sabe todo de mí, pero sólo yo sé quién soy"',
    track: "Comunicación",
    color: "var(--color-accent)",
    speakers: [
      { name: "Marisela Reyes", role: "" }
    ]
  },
  {
    type: "12:10 - 1:00 PM · Sala Canadá A",
    title: '"Bioética y prueba cuádruple en la era de la IA"',
    track: "Rotarios",
    color: "var(--color-lime)",
    speakers: [
      { name: "Yeyetsi Ordoñez", role: "Doctora en Bioética y Médica Familiar" }
    ]
  },
  {
    type: "12:10 - 1:00 PM · Sala Oceanía",
    title: '"IA Consciente: tecnología para volver a ti" · Del exceso de información al acompañamiento que transforma',
    track: "Salud",
    color: "var(--color-cyan)",
    speakers: [
      { name: "Pablo Merino", role: "" }
    ]
  },
  {
    type: "12:10 - 1:00 PM · Sala Canadá B",
    title: '"Ética en la Educación"',
    track: "Educación",
    color: "var(--color-orange)",
    speakers: [
      { name: "Mtro. Juan José Gutiérrez", role: "Secretario General · Sección 50 SNTE" }
    ]
  },
  // --- 1:00 PM ---
  {
    type: "1:00 PM · Parque Fundidora",
    title: "Caminata por la Paz · Parque Fundidora",
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
