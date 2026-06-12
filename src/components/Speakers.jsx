import React, { useRef, useEffect, useState, useCallback } from 'react';

// Subcomponent for the cyber tilt logic
function SpeakerCard({ speaker, index, isCurrent, onClick }) {
  const cardRef = useRef(null);
  const [isTilting, setIsTilting] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const mouseEnter = () => setIsTilting(true);
    const mouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -15;
      const rotY = ((x - cx) / cx) * 15;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
    };
    const mouseLeave = () => {
      setIsTilting(false);
      card.style.transform = '';
    };

    card.addEventListener('mouseenter', mouseEnter);
    card.addEventListener('mousemove', mouseMove);
    card.addEventListener('mouseleave', mouseLeave);

    return () => {
      card.removeEventListener('mouseenter', mouseEnter);
      card.removeEventListener('mousemove', mouseMove);
      card.removeEventListener('mouseleave', mouseLeave);
    };
  }, []);

  return (
    <article 
      ref={cardRef}
      className={`sc-card ${isTilting ? 'tilting' : ''} ${isCurrent ? 'active' : ''}`} 
      data-index={index} 
      tabIndex="0"
      onClick={onClick}
    >
      {/* Photo */}
      <div className="sc-card__photo">
        {speaker.img
          ? <img src={speaker.img.includes('?v=') ? speaker.img.replace(/v=\d+/, 'v=4') : `${speaker.img}?v=4`} alt={speaker.name} loading="lazy" style={{ objectPosition: speaker.imgPosition || undefined, transform: `${speaker.imgScale ? `scale(${speaker.imgScale})` : ''} ${speaker.imgOffsetY ? `translateY(${speaker.imgOffsetY})` : ''}`.trim() || undefined, transformOrigin: speaker.imgScale ? 'top center' : undefined }} />
          : <div className="sc-card__photo-fallback" style={{ '--gradient': speaker.gradient }}>{speaker.initials}</div>}
      </div>

      {/* Info */}
      <div className="sc-card__body">
        <h3 className="sc-card__name">{speaker.name}</h3>
        <p className="sc-card__company">{speaker.company}</p>
        <p className="sc-card__role">{speaker.role}</p>
        <p className="sc-card__bio">{speaker.bio}</p>
        <div className="sc-card__footer">
          <a href="#agenda" className="btn btn--ghost btn--sm" onClick={(e) => e.stopPropagation()}>Ver agenda →</a>
        </div>
      </div>
    </article>
  );
}

// Data Array to keep JSX clean
const speakersData = [
  {
    img: "/speakers/marian-rojas-estape.jpg",
    initials: "MR",
    name: "Marian Rojas Estapé",
    company: "Instituto Rojas Estapé",
    role: "Psiquiatra, escritora y conferencista",
    bio: "Destacada médica psiquiatra española, autora de best sellers. Explorará la reconexión interior en la era digital.",
    longBio: "Destacada médica psiquiatra española, escritora y conferencista internacional.",
    bullets: [
      "Autora del best seller \"Cómo hacer que te pasen cosas buenas\" (2018) y otros más: \"Encuentra tu persona vitamina\" (2021), \"Recupera tu mente, reconquista tu vida\" (2024)",
      "Reconocida por su profunda comprensión de cómo la tecnología digital impacta la salud mental.",
      "Explora las reacciones neurobiológicas ante la conectividad constante, ofreciendo claves para gestionar los efectos de la era digital en nuestro equilibrio emocional."
    ],
    photoPosition: "right",
    gradient: "linear-gradient(135deg,#E91E8C,#8B5CF6)",
    talkIcon: "🧠",
    talkName: "La mente en la era digital: dopamina, ansiedad y reconexión interior"
  },
  { 
    img: "/speakers/dr-bimal-desai.jpg", 
    initials: "BD", 
    name: "Dr. Bimal Desai", 
    company: "Children's Hospital Philadelphia", 
    role: "Chief Health Informatics Officer", 
    bio: "Innovador en salud digital y pionero en el uso de IA y herramientas digitales para mejorar la atención en pediatría.", 
    longBio: "El Dr. Bimal Desai es un médico pediatra e innovador en salud digital, reconocido por liderar la transformación tecnológica en uno de los hospitales pediátricos más importantes del mundo. Su trabajo integra la informática biomédica, la inteligencia artificial y el diseño centrado en el ser humano para mejorar la atención médica y el bienestar de los pacientes.",
    bullets: [
      "VP y Chief Health Informatics Officer en Children's Hospital of Philadelphia (CHOP)",
      "MD, Washington University School of Medicine; MBI, Oregon Health & Science University",
      "Certificado en Informática Clínica y Pediatría por juntas médicas americanas",
      "Pionero en el uso de IA, registros electrónicos de salud y herramientas digitales en pediatría",
      "Ganador del Healthcare Innovator Award",
      "Profesor Clínico Asistente, Perelman School of Medicine, Universidad de Pennsylvania"
    ],
    photoPosition: "left",
    gradient: "linear-gradient(135deg,#FF9900,#e65c00)", 
    trackClass: "track-a", 
    trackName: "Salud", 
    talkIcon: "⚕️", 
    talkName: "Reinventing Medicine" 
  },
  {
    img: "/speakers/emma-seppala.jpg",
    initials: "ES",
    name: "Emma Seppälä",
    company: "Stanford",
    role: "Directora Científica / Psicóloga",
    bio: "Reconocida psicóloga de Stanford, investiga la felicidad y el bienestar. Autora de 'The Happiness Track'. Ha impartido clases en Stanford y Yale.",
    longBio: "Reconocida psicóloga de Stanford, investiga la felicidad y el bienestar. Su trabajo demuestra cómo priorizar la felicidad no solo mejora la calidad de vida, sino que también impulsa un mayor éxito, productividad y resiliencia. Ha impartido clases en Stanford y Yale, compartiendo sus hallazgos con audiencias globales.",
    bullets: [
      "Autora de \"The Happiness Track: How to Apply the Science of Happiness to Accelerate Your Success\"",
      "Directora Científica en el Stanford Center for Compassion and Altruism Research",
      "Directora de Facultad del Programa de Liderazgo de Mujeres en la Yale School of Management",
      "Co-Directora del Yale's Compassion Research Lab"
    ],
    photoPosition: "right",
    gradient: "linear-gradient(135deg,#FF9900,#e65c00)",
    trackClass: "track-a",
    trackName: "Bienestar",
    talkIcon: "🧘‍♀️",
    talkName: "Calma en tiempos de inteligencia artificial: la ciencia del bienestar emocional"
  },
  {
    img: "/speakers/dr-arumugam-mrukiah.jpg",
    initials: "AM",
    name: "Dr. Arumugam Murukiah",
    company: "Broadline Technologies",
    role: "Emprendedor y Líder Digital",
    bio: "Líder en transformation digital con más de 4 décadas de experiencia. Innovador en salud pública y cadenas de suministro en la India.",
    longBio: "Emprendedor y líder digital con 4 décadas transformando sistemas públicos y corporativos.",
    bullets: [
      "Ha diseñado e implementado soluciones tecnológicas de alto impacto en salud, logística y energía.",
      "Ha colaborado con corporaciones globales como IBM, HP, SAP, Siemens y Xerox, liderando proyectos críticos de infraestructura tecnológica y operaciones globales.",
      "Fundador de Broadline Technologies, impulsando transformación digital en gobiernos, salud y empresas",
      "Su modelo de cadena de suministro para el sistema de salud pública del estado de Tamil Nadu, India, es considerado una referencia internacional por organismos multilaterales debido a su eficiencia y escalabilidad."
    ],
    photoPosition: "right",
    gradient: "linear-gradient(135deg,#F0922A,#ef4444)",
    trackClass: "track-a",
    trackName: "Tecnología",
    talkIcon: "⚙️",
    talkName: "IA Humanizada"
  },
  {
    img: "/speakers/dra-melina-uncapher.jpg",
    initials: "MU",
    name: "Dr. Melina Uncapher",
    company: "SETA-ED",
    role: "CEO y Fundadora",
    bio: "Neurocientífica educativa con más de 20 años en investigación. Cofundadora del Institute for Applied Neuroscience.",
    longBio: "Fundadora y CEO de SETA-ED, es neurocientífica educativa con 20+ años en investigación. Sus trabajos en Stanford y UCSF han generado más de 4,000 citas.",
    bullets: [
      "Fundadora y CEO de SETA-ED, empresa dedicada a soluciones transformadoras en educación basadas en neurociencia (2024)",
      "Cofundadora y Chief of R&D de AERDF, uno de los principales nonprofits de I+D educativo de EE.UU.",
      "Ex Profesora de Neurociencia Educativa en Stanford University y UC San Francisco (UCSF)",
      "Cofundadora del Institute for Applied Neuroscience, nonprofit que equipa a educadores con herramientas basadas en ciencia del aprendizaje",
      "Investigadora financiada por los National Institutes of Health (NIH) sobre el impacto de la tecnología en la cognición estudiantil",
      "Publicaciones académicas citadas más de 4,000 veces; destacada en The New York Times, PBS y FrontlineScript Supervisor en el documental de PBS \"The Brain\" y productora de un cortometraje premiado sobre el cerebro",
      "MacArthur Scholar: su trabajo guía a legisladores en prácticas basadas en evidencia sobre memoria y justicia",
      "Doctorado en Neurobiología, UC Irvine; Posdoctorado en Stanford University"
    ],
    photoPosition: "right",
    gradient: "linear-gradient(135deg,#008FD3,#00C4CC)",
    trackClass: "track-a",
    trackName: "Educación",
    talkIcon: "🧠",
    talkName: "Neurociencia Educativa"
  },
  {
    img: "/speakers/caroline-sanchez-crozier.jpeg",
    imgPosition: "top center",
    imgScale: "1.05",
    initials: "CC",
    name: "Caroline Sanchez Crozier",
    company: "CSC Consulting Group",
    role: "CEO & Fundadora",
    bio: "Líder tecnológico y presidenta del Comité de Tecnología e IA de LULAC. Inmigrante mexicana y pionera en equidad digital.",
    longBio: "Inmigrante mexicana y líder tecnológico, fundó CSC Consulting Group y dirige Latinx Digital Leaders Now.",
    bullets: [
      "CEO y Fundadora de CSC Consulting Group por más de 34 años; Apple fue su primer socio estratégico",
      "Presidenta del Comité de Tecnología e IA de LULAC (League of United Latin American Citizens)",
      "Proveedora de servicios IT para las Escuelas Públicas de Chicago, el 3er sistema escolar más grande de EE.UU.",
      "Forma parte del 1% de mujeres en STEM en Estados Unidos",
      "Líder del Grupo de Trabajo de Equidad y Defensa del Plan Estratégico de Ciencias de la Computación de ISBE (Illinois)",
      "Miembro de CS4IL y defensora de la equidad digital como nuevo derecho civil",
      "Inmigrante mexicana, graduada universitaria de primera generación"
    ],
    photoPosition: "right",
    gradient: "linear-gradient(135deg,#E91E8C,#9333ea)",
    trackClass: "track-a",
    trackName: "Educación",
    talkIcon: "🤝",
    talkName: "Tecnología y Educación"
  },
  { img: "/speakers/alejandro-almazan-zimerman.jpg", initials: "AA", name: "Alejandro Almazán Zimerman", company: "Google for Education", role: "Head Latam", bio: "Lidera iniciativas que conectan a millones de estudiantes con herramientas digitales. Visión en innovación tecnológica y transformación social.", gradient: "linear-gradient(135deg,#2E86C1,#8B5CF6)", trackClass: "track-c", trackName: "Educación", talkIcon: "🌐", talkName: "IA en Educación" },
  { img: "/speakers/dra-alma-rosa-marroquin.jpg", initials: "AR", name: "Dra. Alma Rosa Marroquín Escamilla", company: "Gobierno de Nuevo León", role: "Secretaria de Salud", bio: "Médica pediatra liderando la transformación del sistema de salud de Nuevo León enfocada en un modelo integral y equitativo.", gradient: "linear-gradient(135deg,#059669,#8B5CF6)", trackClass: "track-a", trackName: "Salud", talkIcon: "🏥", talkName: "Reinventing Medicine" },
  { img: "/speakers/dra-sofialeticia-morales-garza.png", initials: "SM", name: "Dra. Sofialeticia Morales Garza", company: "Legado Nuevo León", role: "Coordinadora Educativa", bio: "Ex Secretaria de Educación de NL. Impulsora de modelos educativos innovadores y asesora para Naciones Unidas.", gradient: "linear-gradient(135deg,#a3335f,#8B5CF6)", trackClass: "track-c", trackName: "Educación", talkIcon: "🎓", talkName: "IA en Educación" },
  { img: "/speakers/juan-paura-garcia.png", initials: "JP", name: "Juan Paura García", company: "Gobierno de Nuevo León", role: "Secretario de Educación", bio: "Experto en política fiscal y educación superior con más de 35 años de experiencia docente e investigación.", gradient: "linear-gradient(135deg,#29ABE2,#0078D4)", trackClass: "track-c", trackName: "Educación Superior", talkIcon: "📈", talkName: "IA en Educación Superior" },
  { img: "/speakers/santos-guzman-lopez-uanl.jpg", initials: "SG", name: "Santos Guzmán López", company: "UANL", role: "Rector", bio: "Rector de la Universidad Autónoma de Nuevo León (UANL), impulsando la excelencia académica, la investigación y la innovación tecnológica.", gradient: "linear-gradient(135deg,#059669,#8B5CF6)", trackClass: "track-c", trackName: "Educación Superior", talkIcon: "🎓", talkName: "IA en Educación Superior" },
  { img: "/speakers/angel-casan-marcos-uerre.jpg", initials: "AC", name: "Ángel Casán Marcos", company: "U-ERRE", role: "Rector", bio: "Actuario y empresario, ha transformado la U-ERRE mediante un modelo educativo innovador y de compromiso social.", gradient: "linear-gradient(135deg,#008FD3,#003f7f)", trackClass: "track-c", trackName: "Educación Superior", talkIcon: "🎓", talkName: "IA en Educación Superior" },
  { img: "/speakers/mario-adrian-flores-tec.jpg", initials: "MF", name: "Mario Adrián Flores", company: "Tecnológico de Monterrey", role: "Vicepresidente Región Occidente", bio: "Ingeniero industrial con doctorado en Operations Management. Impulsor del Modelo Educativo TEC21 y del Distrito Tec.", gradient: "linear-gradient(135deg,#00d4fe,#29ABE2)", trackClass: "track-c", trackName: "Educación Superior", talkIcon: "🎓", talkName: "IA en Educación Superior" },
  { img: "/speakers/mauricio-martinez.jpg", initials: "MM", name: "Mauricio Martínez", company: "Actor", role: "Cantante Mexicano", bio: "Reconocido actor y cantante. Explorará el impacto de la Inteligencia Artificial en la creatividad, el arte y la escenificación.", gradient: "linear-gradient(135deg,#8B5CF6,#2E86C1)", trackClass: "track-a", trackName: "Creatividad", talkIcon: "🎭", talkName: "Ser Humano en escena" },
  { img: "/speakers/nayo-escobar.jpeg", imgPosition: "center", initials: "NE", name: "Nayo Escobar", company: "Empresario", role: "Empresario, músico y creador de contenido", bio: "Empresario y músico originario de Monterrey con más de 2 millones de suscriptores en YouTube realizando entrevistas inspiracionales.", gradient: "linear-gradient(135deg,#059669,#8B5CF6)", trackClass: "track-a", trackName: "Creatividad e Identidad", talkIcon: "🎸", talkName: "Ser Humano en escena" },
  { img: "/speakers/marian-mimi-edmunds.jpg", initials: "ME", name: 'Marian "Mimi" Edmunds', company: "Periodista", role: "Productora Documental", bio: "Experimentada periodista e investigadora. Ex colaboradora de CBS, PBS y Discovery Network, con múltiples nominaciones al Emmy.", gradient: "linear-gradient(135deg,#0078D4,#00c6ff)", trackClass: "track-a", trackName: "Autonomía Humana", talkIcon: "🎥", talkName: "Compromiso con la verdad" },
  { img: "/speakers/jorge-lerdo-de-tejada.jpeg", initials: "JL", name: "Jorge Lerdo de Tejada", company: "Singularity University", role: "Embajador Global", bio: "Experto en transformación exponencial con triple certificación OPEN EXO. Conferencista en IA, futuro del trabajo y ciudades inteligentes.", gradient: "linear-gradient(135deg,#FF9900,#e65c00)", trackClass: "track-a", trackName: "Autonomía Humana", talkIcon: "🚀", talkName: "Compromiso con la verdad" },
  { img: "/speakers/farid-dieck-assad.jpg", initials: "FD", name: "Farid Dieck", company: "Creador de contenido", role: "Psicólogo y Conferencista", bio: "Reconocido creador de contenido y psicólogo, abordando temas de identidad y arte en la era del avance tecnológico.", gradient: "linear-gradient(135deg,#F0922A,#ef4444)", trackClass: "track-a", trackName: "Identidad", talkIcon: "🗣️", talkName: "Ser Humano en escena" },
  { img: "/speakers/mons-rogelio-cabrera-lopez.jpg", imgScale: "1.4", initials: "RC", name: "Mons. Rogelio Cabrera López", company: "Arquidiócesis de Monterrey", role: "Arzobispo Metropolitano", bio: "Presidente emérito de la Conferencia del Episcopado Mexicano. Participa activamente en diálogos nacionales por la paz y justicia social.", gradient: "linear-gradient(135deg,#8B5CF6,#2E86C1)", trackClass: "track-a", trackName: "Reconocimiento", talkIcon: "🕊️", talkName: "Reconocimiento" },
  { img: "/speakers/gurudev-sri-sri-ravi-shankar.jpeg", initials: "GS", name: "Gurudev Sri Sri Ravi Shankar", company: "El Arte de Vivir", role: "Líder Humanitario", bio: "Líder humanitario y maestro espiritual, fundador de la organización internacional El Arte de Vivir.", gradient: "linear-gradient(135deg,#E91E8C,#F0922A)", talkIcon: "🧘‍♂️", talkName: "Sabiduría Eterna" },
  { img: "/speakers/padre-david-jasso.png", imgPosition: "center 60%", imgScale: "1.1", imgOffsetY: "0px", initials: "DJ", name: "Padre David Jasso", company: "Arquidiócesis de Monterrey", role: "Sacerdote", bio: "Sacerdote, comunicólogo y ex directivo del Club Rayados. Promotor del talento humano y la pastoral social latinoamericana.", gradient: "linear-gradient(135deg,#FF9900,#e65c00)", trackClass: "track-a", trackName: "Espiritualidad", talkIcon: "🕊️", talkName: "Conexión y Fe" },
  { img: "/speakers/bhikkhu-pannakara.png", initials: "BP", name: "Bhikkhu Pannakara", company: "Monje Budista", role: "Ingeniero", bio: "Ingeniero convertido en monje budista, promotor de la 'Caminata por la Paz' uniendo conocimiento moderno con sabiduría eterna.", gradient: "linear-gradient(135deg,#2E86C1,#8B5CF6)", trackClass: "track-a", trackName: "Espiritualidad", talkIcon: "🚶", talkName: "Paz y Compasión" },
  { img: "/speakers/abuelo-maya-antonio-oxte.jpg", imgPosition: "center", imgScale: "1.1", imgOffsetY: "0px", initials: "AO", name: "Abuelo Maya Antonio Oxté", company: "Medicina Tradicional", role: "Sabio Maya", bio: "Médico tradicional y maestro espiritual de Yucatán. Puente vivo entre el profundo conocimiento ancestral y el mundo actual.", gradient: "linear-gradient(135deg,#a3335f,#8B5CF6)", trackClass: "track-a", trackName: "Espiritualidad", talkIcon: "🌿", talkName: "Sabiduría Ancestral" },
  { img: "/speakers/pastor-federico.jpeg", initials: "FE", name: "Pastor Federico Elizondo", company: "Autor", role: "Autor", bio: "Autor del libro: Inteligencia Artificial y Paz Mundial, una visión cristiana ética.", gradient: "linear-gradient(135deg,#0078D4,#00c6ff)", trackClass: "track-a", trackName: "Espiritualidad", talkIcon: "📖", talkName: "IA y Paz Mundial" },
  { img: "/speakers/javier-prieto.jpg", initials: "JP", name: "Javier Prieto", company: "SELIDER", role: "Presidente y Fundador", bio: "Presidente y Fundador de SELIDER. Maestro de Ceremonias del Encuentro Mundial de Valores.", gradient: "linear-gradient(135deg,#00d4fe,#29ABE2)", trackClass: "track-a", trackName: "Presentación", talkIcon: "🎤", talkName: "Maestro de Ceremonias" },
  { img: "/speakers/monica-zambrano-vignau.jpg", initials: "MZ", name: "Monica Zambrano Vignau", company: "HUMIND", role: "Experta en Bienestar Emocional", bio: "Participa en el panel de IA y Salud: 'El Ser Humano como Guía, la IA como Soporte'.", gradient: "linear-gradient(135deg,#a3335f,#8B5CF6)", trackClass: "track-a", trackName: "Salud", talkIcon: "❤️", talkName: "El Ser Humano como Guía" },
  { img: "/speakers/sofia-lozano-snively.jpeg", initials: "SL", name: "Sofía Lozano Snively", company: "Ingenium", role: "Experta en Bienestar", bio: "Participa en el panel de IA y Salud: 'El Ser Humano como Guía, la IA como Soporte'.", gradient: "linear-gradient(135deg,#2E86C1,#8B5CF6)", trackClass: "track-a", trackName: "Salud", talkIcon: "❤️", talkName: "El Ser Humano como Guía" },
  { img: "/speakers/david-eaton.jpg", initials: "DE", name: "David Eaton", company: "Rotary Distrito 4130", role: "Gobernador Electo", bio: "Líder empresarial y ambientalista, ex directivo de CPKC Railroad e impulsor de importantes iniciativas de conservación.", gradient: "linear-gradient(135deg,#008FD3,#00C4CC)", trackClass: "track-a", trackName: "Rotarios", talkIcon: "🌍", talkName: "Liderazgo Rotario" },
  { img: "/speakers/dr-gerardo-de-jesus-mendoza-jimenez.png", initials: "GM", name: "Dr. Gerardo de Jesús Mendoza", company: "Desarrollo Magisterial", role: "Encargado de la Subsecretaría", bio: "Encargado de la Subsecretaría de Desarrollo Magisterial. Presentador del evento.", gradient: "linear-gradient(135deg,#E91E8C,#8B5CF6)", trackClass: "track-c", trackName: "Presentación", talkIcon: "🎙️", talkName: "Presentador" },
];

export default function Speakers() {
  const [current, setCurrent] = useState(0); // Alberto is at 0 in this array format since we pushed him. Usually it was Alberto -> Beatriz -> Arturo.
  const [activeModalSpeaker, setActiveModalSpeaker] = useState(null);
  const trackRef = useRef(null);
  const autoTimerRef = useRef(null);
  
  const total = speakersData.length;

  // Listen to Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalSpeaker(null);
      }
    };
    if (activeModalSpeaker) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalSpeaker]);

  const getOffset = useCallback((idx) => {
    const track = trackRef.current;
    if (!track) return 0;
    const vp = track.parentElement;
    const cards = Array.from(track.querySelectorAll('.sc-card'));
    const card = cards[idx];
    if (!card || !vp) return 0;
    const vpW = vp.offsetWidth;
    const cardW = card.offsetWidth;
    const gap = 24;
    let offset = 0;
    for (let i = 0; i < idx; i++) offset += (cards[i]?.offsetWidth || cardW) + gap;
    offset -= (vpW / 2) - (cardW / 2);
    return Math.max(0, offset);
  }, []);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translateX(-${getOffset(current)}px)`;
  }, [current, getOffset]);

  const goTo = useCallback((idx) => {
    const maxIdx = (idx + total) % total;
    setCurrent(maxIdx);
  }, [total]);

  const resetAuto = useCallback(() => {
    clearTimeout(autoTimerRef.current);
    autoTimerRef.current = setTimeout(() => goTo(current + 1), 5500);
  }, [current, goTo]);

  useEffect(() => {
    update();
    resetAuto();
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('resize', update);
      clearTimeout(autoTimerRef.current);
    };
  }, [update, resetAuto]);

  // Pointer swipe logic — only capture horizontal drags, let vertical page scroll through
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let startX = null;
    let startY = null;
    let dragging = false;
    let directionLocked = false;
    let startOffset = 0;

    const onPointerDown = (e) => {
      // Only respond to primary pointer (no multi-touch conflicts)
      if (e.button !== 0) return;
      startX = e.clientX;
      startY = e.clientY;
      dragging = false; // Will become true only if horizontal
      directionLocked = false;
      startOffset = getOffset(current);
      clearTimeout(autoTimerRef.current);
    };

    const onPointerMove = (e) => {
      if (startX === null) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      // Determine drag direction once we have enough movement
      if (!directionLocked) {
        if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return; // Too small, wait
        if (Math.abs(dy) > Math.abs(dx)) {
          // Vertical scroll — release and let page scroll normally
          startX = null;
          startY = null;
          return;
        }
        // Horizontal drag — lock and capture
        directionLocked = true;
        dragging = true;
        track.setPointerCapture(e.pointerId);
        track.style.transition = 'none';
      }

      if (!dragging) return;
      e.preventDefault();
      track.style.transform = `translateX(-${startOffset - dx}px)`;
    };

    const onPointerUp = (e) => {
      if (startX === null && !dragging) return;
      if (dragging) {
        track.style.transition = '';
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 60) {
          setCurrent(prev => (prev + (dx < 0 ? 1 : -1) + total) % total);
        } else {
          update(); // snap back
        }
      }
      startX = null;
      startY = null;
      dragging = false;
      directionLocked = false;
      resetAuto();
    };

    track.addEventListener('pointerdown', onPointerDown);
    track.addEventListener('pointermove', onPointerMove);
    track.addEventListener('pointerup', onPointerUp);
    track.addEventListener('pointercancel', onPointerUp);

    return () => {
      track.removeEventListener('pointerdown', onPointerDown);
      track.removeEventListener('pointermove', onPointerMove);
      track.removeEventListener('pointerup', onPointerUp);
      track.removeEventListener('pointercancel', onPointerUp);
    };
  }, [current, getOffset, total, update, resetAuto]);

  return (
    <section className="section speakers" id="speakers" aria-labelledby="speakersHeading">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">02 / PANELISTAS</span>
          <h2 className="section-title" id="speakersHeading">Panelistas</h2>
          <p className="section-subtitle">Los rostros del Encuentro Mundial de Valores.</p>
        </div>

        {/* ── Speakers Collage ── */}
        <div className="speakers-collage reveal-up">
          {speakersData.map((speaker, idx) => (
            <div 
              className="collage-item collage-item--clickable" 
              key={idx}
              onClick={() => {
                setActiveModalSpeaker(speaker);
              }}
            >
              {speaker.img ? (
                <img src={speaker.img.includes('?v=') ? speaker.img.replace(/v=\d+/, 'v=4') : `${speaker.img}?v=4`} alt={speaker.name} loading="lazy" style={{ objectPosition: speaker.imgPosition || undefined, transform: `${speaker.imgScale ? `scale(${speaker.imgScale})` : ''} ${speaker.imgOffsetY ? `translateY(${speaker.imgOffsetY})` : ''}`.trim() || undefined, transformOrigin: speaker.imgScale ? 'top center' : undefined }} />
              ) : (
                <div className="collage-fallback" style={{ background: speaker.gradient }}>{speaker.initials}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="sc-wrap reveal-up">
        <button className="sc-arrow sc-arrow--prev" id="scPrev" aria-label="Speaker anterior" onClick={() => goTo(current - 1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="sc-arrow sc-arrow--next" id="scNext" aria-label="Speaker siguiente" onClick={() => goTo(current + 1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="sc-viewport">
          <div className="sc-track" id="scTrack" ref={trackRef}>
            {speakersData.map((sp, idx) => (
              <SpeakerCard 
                key={idx} 
                speaker={sp} 
                index={idx} 
                isCurrent={idx === current}
                onClick={() => { if (idx !== current) goTo(idx); }}
              />
            ))}
          </div>
        </div>

        <div className="sc-dots" id="scDots" role="tablist" aria-label="Navegar speaker">
          {speakersData.map((_, idx) => (
            <button 
              key={idx}
              className={`sc-dot ${idx === current ? 'active' : ''}`}
              role="tab"
              aria-label={`Speaker ${idx + 1}`}
              aria-selected={idx === current}
              onClick={() => goTo(idx)}
            ></button>
          ))}
        </div>
      </div>

      {/* ── Speakers Modal Overlay ── */}
      {activeModalSpeaker && (
        <div className="speakers-modal-overlay" onClick={() => setActiveModalSpeaker(null)}>
          <div className="speakers-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="speakers-modal-close" onClick={() => setActiveModalSpeaker(null)} aria-label="Cerrar modal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className={`speakers-modal-body ${activeModalSpeaker.photoPosition === 'left' ? 'speakers-modal-body--photo-left' : 'speakers-modal-body--photo-right'}`}>
              <div className="speakers-modal-photo">
                {activeModalSpeaker.img ? (
                  <img src={activeModalSpeaker.img} alt={activeModalSpeaker.name} />
                ) : (
                  <div className="speakers-modal-fallback" style={{ background: activeModalSpeaker.gradient }}>
                    {activeModalSpeaker.initials}
                  </div>
                )}
              </div>
              <div className="speakers-modal-info">
                <span className="speakers-modal-tag">EXPOSITOR</span>
                <h3 className="speakers-modal-name">{activeModalSpeaker.name}</h3>
                <p className="speakers-modal-company">{activeModalSpeaker.company}</p>
                <p className="speakers-modal-role">{activeModalSpeaker.role}</p>
                <div className="speakers-modal-divider"></div>
                <p className="speakers-modal-bio">{activeModalSpeaker.longBio || activeModalSpeaker.bio}</p>
                {activeModalSpeaker.bullets && activeModalSpeaker.bullets.length > 0 && (
                  <ul className="speakers-modal-bullets">
                    {activeModalSpeaker.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {activeModalSpeaker.talkName && (
                  <div className="speakers-modal-talk">
                    <span className="speakers-modal-talk-icon">{activeModalSpeaker.talkIcon}</span>
                    <div className="speakers-modal-talk-details">
                      <h4 className="speakers-modal-talk-title">{activeModalSpeaker.talkName}</h4>
                      {activeModalSpeaker.trackName && (
                        <span className="speakers-modal-talk-track">{activeModalSpeaker.trackName}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
