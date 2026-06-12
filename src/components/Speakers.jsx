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
  {
    img: "/speakers/alejandro-almazan-zimerman.jpg",
    initials: "AA",
    name: "Alejandro Almazán Zimerman",
    company: "Google for Education",
    role: "Head Latam",
    bio: "Lidera iniciativas que conectan a millones de estudiantes con herramientas digitales. Visión en innovación tecnológica y transformación social.",
    longBio: "Uno de los líderes más influyentes en educación y tecnología en América Latina. Desde Google, lidera iniciativas que conectan a millones de estudiantes y docentes con herramientas digitales, inteligencia artificial y ciudadanía digital. Su visión combina la innovación tecnológica con el propósito social de transformar la educación en la región.",
    bullets: [
      "Head of Google for Education para Latinoamérica de habla hispana (México, Centroamérica y el Caribe)",
      "Egresado con honores del Tecnológico de Monterrey; Maestría en Desarrollo Económico Local, London School of Economics (Becario Chevening)",
      "Ex Director General de ÚNETE, conectando con tecnología a más de 2.7 millones de alumnos en México",
      "Diplomado en Mediación y Manejo de Conflictos (CIDE) e Inteligencia de Negocios (ITAM)",
      "Líder del programa \"Sé Genial en Internet\" de Google para seguridad y ciudadanía digital en Hispanoamérica",
      "Conferencista internacional en foros de educación, tecnología e innovación"
    ],
    photoPosition: "right",
    gradient: "linear-gradient(135deg,#2E86C1,#8B5CF6)",
    trackClass: "track-c",
    trackName: "Educación",
    talkIcon: "🌐",
    talkName: "IA en Educación"
  },
  {
    img: "/speakers/dra-alma-rosa-marroquin.jpg",
    initials: "AR",
    name: "Dra. Alma Rosa Marroquín Escamilla",
    company: "Gobierno de Nuevo León",
    role: "Secretaria de Salud",
    bio: "Médica pediatra liderando la transformación del sistema de salud de Nuevo León enfocada en un modelo integral y equitativo.",
    longBio: "Médica pediatra y doctora en medicina, liderando actualmente la transformación del sistema de salud de Nuevo León. Su gestión se enfoca en un modelo innovador de atención integral con cobertura universal, priorizando la equidad, la prevención y el bienestar de todas las personas.",
    bullets: [
      "Primera mujer en ocupar el cargo de Secretaria de Salud de Nuevo León (2021-2027).",
      "Doctora en Medicina con especialidad en Pediatría.",
      "Impulsora del fideicomiso para enfermedades de alto costo y cobertura universal en NL.",
      "Reconocida en el Top 60 Mujeres Más Poderosas de México.",
      "Experiencia previa como Directora de Hospitales de los Servicios de Salud de Nuevo León."
    ],
    photoPosition: "left",
    gradient: "linear-gradient(135deg,#059669,#8B5CF6)",
    trackClass: "track-a",
    trackName: "Salud",
    talkIcon: "🏥",
    talkName: "Reinventing Medicine"
  },
  {
    img: "/speakers/dra-sofialeticia-morales-garza.png",
    initials: "SM",
    name: "Dra. Sofialeticia Morales Garza",
    company: "Legado Nuevo León",
    role: "Coordinadora Educativa",
    bio: "Ex Secretaria de Educación de NL. Impulsora de modelos educativos innovadores y asesora para Naciones Unidas.",
    longBio: "Líder educativa de trayectoria internacional, con Doctorado y Maestría en Educación y Desarrollo por la Universidad de Harvard. Impulsó un modelo educativo innovador centrado en la primera infancia, las escuelas de tiempo completo y la educación dual, transformando el sistema educativo de Nuevo León.",
    bullets: [
      "Doctorado y Maestría en Educación y Desarrollo, Universidad de Harvard",
      "Ex Directora de la Unidad de Educación y Desarrollo de la OEA (Washington, D.C.)",
      "Asesora Principal de los ODS para Naciones Unidas, OPS/OMS",
      "Impulsó la creación de 1,180+ escuelas de tiempo completo y un crecimiento del 2,000% en educación dual en Nuevo León."
    ],
    photoPosition: "right",
    gradient: "linear-gradient(135deg,#a3335f,#8B5CF6)",
    trackClass: "track-c",
    trackName: "Educación",
    talkIcon: "🎓",
    talkName: "IA en Educación"
  },
  {
    img: "/speakers/juan-paura-garcia.png",
    initials: "JP",
    name: "Juan Paura García",
    company: "Gobierno de Nuevo León",
    role: "Secretario de Educación",
    bio: "Experto en política fiscal y educación superior con más de 35 años de experiencia docente e investigación.",
    longBio: "Secretario de Educación del Gobierno del Estado de Nuevo León.\n\nDoctorado en Administración (UANL) y Doctorado en Ciencias de lo Fiscal (IEE); Maestría en Derecho Fiscal (UANL); Diplomado en International Taxation, Harvard-ITAM\n\nCon más de 35 años como docente en prestigiosas instituciones y experiencia.\n\nFue Secretario General de la UANL.\n\nExperto destacado en política fiscal y educación superior.",
    bullets: [
      "Miembro del Sistema Nacional de Investigadores e Investigadoras (SNII) Nivel I, CONAHCYT"
    ],
    photoPosition: "left",
    gradient: "linear-gradient(135deg,#29ABE2,#0078D4)",
    trackClass: "track-c",
    trackName: "Educación Superior",
    talkIcon: "📈",
    talkName: "IA en Educación Superior"
  },
  { img: "/speakers/santos-guzman-lopez-uanl.jpg", initials: "SG", name: "Santos Guzmán López", company: "UANL", role: "Rector", bio: "Rector de la Universidad Autónoma de Nuevo León (UANL), impulsando la excelencia académica, la investigación y la innovación tecnológica.", gradient: "linear-gradient(135deg,#059669,#8B5CF6)", trackClass: "track-c", trackName: "Educación Superior", talkIcon: "🎓", talkName: "IA en Educación Superior" },
  {
    img: "/speakers/angel-casan-marcos-uerre.jpg",
    initials: "AC",
    name: "Ángel Casán Marcos",
    company: "U-ERRE",
    role: "Rector",
    bio: "Actuario y empresario, ha transformado la U-ERRE mediante un modelo educativo innovador y de compromiso social.",
    longBio: "Rector de la Universidad Regiomontana desde 2012.\n\nEs actuario y empresario con 31 años de experiencia en el Grupo Alfa.\n\nHa transformado U-ERRE mediante un modelo educativo innovador basado en aprendizaje activo y compromiso social.",
    bullets: [
      "Más de 31 años en Grupo Alfa como líder de Recursos Humanos y Director General de empresas globales (DuPont, BASEL, Akzo, Teijin)",
      "Vicepresidente de CONCAMIN y de CAINTRA; miembro del Consejo Coordinador Empresarial y COPARMEX",
      "Presidente del Comité Ciudadano para la Calidad de los Servicios de Salud de Nuevo León",
      "Condecoración de la Orden de Isabel la Católica, otorgada por el Rey de España Juan Carlos Impulsor del modelo educativo U-ERRE: laboratorios de aprendizaje en IA, gobernanza e Industria 4.0"
    ],
    photoPosition: "left",
    gradient: "linear-gradient(135deg,#008FD3,#003f7f)",
    trackClass: "track-c",
    trackName: "Educación Superior",
    talkIcon: "🎓",
    talkName: "IA en Educación Superior"
  },
  {
    img: "/speakers/mario-adrian-flores-tec.jpg",
    initials: "MF",
    name: "Mario Adrián Flores",
    company: "Tecnológico de Monterrey",
    role: "Vicepresidente Región Occidente",
    bio: "Ingeniero industrial con doctorado en Operations Management. Impulsor del Modelo Educativo TEC21 y del Distrito Tec.",
    longBio: "Ingeniero Industrial con Maestría en Ingeniería Industrial del Tecnológico de Monterrey y Doctorado en Operations Management de Polonia. Certificado como Coach Senior Ontológico, trabajó en Goodyear y Continental. Fue representante mexicano en el Global Entrepreneurship Monitor, evaluando emprendimiento en 70+ países. Su misión es impulsar el desarrollo integral de las personas hacia un México más próspero.",
    bullets: [
      "Vicepresidente de Región Occidente del Tecnológico de Monterrey",
      "Representante de México ante el Global Entrepreneurship Monitor (GEM) — más de 70 países",
      "Certificado como Coach Senior Ontológico y en Conscious Business Coaching",
      "Doctorado en Operations Management, Instituto de Org. & Management, Polonia · Estancias en Inglaterra",
      "Impulsor del Modelo Educativo TEC21 y del Distrito Tec — ecosistema de innovación urbana"
    ],
    photoPosition: "left",
    gradient: "linear-gradient(135deg,#00d4fe,#29ABE2)",
    trackClass: "track-c",
    trackName: "Educación Superior",
    talkIcon: "🎓",
    talkName: "IA en Educación Superior"
  },
  {
    img: "/speakers/mauricio-martinez.jpg",
    initials: "MM",
    name: "Mauricio Martínez",
    company: "Actor",
    role: "Cantante Mexicano",
    bio: "Reconocido actor y cantante. Explorará el impacto de la Inteligencia Artificial en la creatividad, el arte y la escenificación.",
    longBio: "Mauricio Martínez es un actor y cantante mexicano reconocido por interpretar a Emilio Estefan en el musical de Broadway On Your Feet! También ha participado en la serie El Vato (NBC) y ha protagonizado producciones teatrales destacadas en México y América Latina.",
    bullets: [
      "Debut en Broadway como Emilio Estefan en On Your Feet! (Marquis Theatre, 2017)",
      "Protagonista de la gira nacional de On Your Feet! en teatros como The Kennedy Center y The Pantages Theatre. Actuación en los Kennedy Center Honors en CBS, en tributo a Gloria Estefan",
      "Participación en The 2019 Gershwin Prize en PBS junto a Rita Moreno, Andy García y Gloria Estefan",
      "Ganador del Emmy por su papel en la serie El Vato (NBC Universo / Netflix)",
      "Dos álbumes de pop latino: Desde 1978 (2012) y Desde 1978... Lado B (2014)",
      "Álbum en vivo Live in NYC (2024), grabado en 54 Below, Nueva York",
      "Protagonista en el estreno mundial de Children of Salt en el New York Musical Festival (2016)"
    ],
    photoPosition: "left",
    gradient: "linear-gradient(135deg,#8B5CF6,#2E86C1)",
    trackClass: "track-a",
    trackName: "Creatividad",
    talkIcon: "🎭",
    talkName: "Ser Humano en escena"
  },
  {
    img: "/speakers/nayo-escobar.jpeg",
    imgPosition: "center",
    initials: "NE",
    name: "Nayo Escobar",
    company: "Empresario",
    role: "Empresario, músico y creador de contenido",
    bio: "Empresario y músico originario de Monterrey con más de 2 millones de suscriptores en YouTube realizando entrevistas inspiracionales.",
    longBio: "Empresario, músico y creador de contenido originario de Monterrey, Nuevo León, México. Es conocido por su canal de YouTube con más de 2 millones de suscriptores, donde realiza entrevistas inspiracionales, y por su trayectoria como conferencista motivacional.",
    bullets: [
      "Conferencista motivacional con presencia en escenarios internacionales en México y Latinoamérica.",
      "Canal de YouTube con más de 2 millones de suscriptores y contenido viral de entrevistas inspiracionales",
      "Músico y empresario originario de Monterrey, Nuevo León, con amplia trayectoria en el ámbito del entretenimiento y el desarrollo personal"
    ],
    photoPosition: "left",
    gradient: "linear-gradient(135deg,#059669,#8B5CF6)",
    trackClass: "track-a",
    trackName: "Creatividad e Identidad",
    talkIcon: "🎸",
    talkName: "Ser Humano en escena"
  },
  {
    img: "/speakers/marian-mimi-edmunds.jpg",
    initials: "ME",
    name: 'Marian "Mimi" Edmunds',
    company: "Periodista",
    role: "Productora Documental",
    bio: "Experimentada periodista e investigadora. Ex colaboradora de CBS, PBS y Discovery Network, con múltiples nominaciones al Emmy.",
    longBio: "Experimentada periodista y productora con más de 30 años en investigación y documental. Trabajó 15 años en CBS, incluyendo 11 en 60 Minutes. Colaboró con PBS y Discovery Network. Su obra ha recibido nominaciones Emmy y premios Cable.",
    bullets: [
      "15 años como periodista en CBS News, incluyendo 11 años en 60 Minutes",
      "Productora y escritora para PBS y Discovery Network",
      "Nominaciones al Emmy y premios Cable por sus documentales",
      "Licenciatura en Humanidades, Universidad de California, Berkeley",
      "Maestría en Antropología y Educación Internacional, Universidad de Columbia",
      "MFA en No Ficción Creativa, Stonecoast Program, Universidad del Sur de Maine",
      "Profesora de periodismo en USC Los Ángeles y Emerson College Boston; docente en Maine Media Workshops desde 1986, con talleres en Oaxaca y La Habana"
    ],
    photoPosition: "right",
    gradient: "linear-gradient(135deg,#0078D4,#00c6ff)",
    trackClass: "track-a",
    trackName: "Autonomía Humana",
    talkIcon: "🎥",
    talkName: "Compromiso con la verdad"
  },
  {
    img: "/speakers/jorge-lerdo-de-tejada.jpeg",
    initials: "JL",
    name: "Jorge Lerdo de Tejada",
    company: "Singularity University",
    role: "Embajador Global",
    bio: "Experto en transformación exponencial con triple certificación OPEN EXO. Conferencista en IA, futuro del trabajo y ciudades inteligentes.",
    longBio: "Embajador Global de Singularity University y experto en transformación exponencial con triple certificación OPEN EXO. Gerente de Forbes México Zona Norte, conductor de podcast y conferencista en IA y liderazgo. Más de 25 años en tecnología, innovación y transformación digital. Mentor empresarial y creador de contenido con amplio alcance en redes sociales",
    bullets: [
      "Global Ambassador de Singularity University — Institución pionera en educación sobre tecnologías exponenciales desde 2008",
      "Triple certificación OPEN EXO: ExO Foundations, ExO Sprint y ExO Consultant — experto en transformación organizacional exponencial",
      "Gerente de la Oficina de Representación de Forbes México Zona Norte (2022-presente) — eventos, libros, documentales y cobertura mediática",
      "Conductor del Forbes México Podcast — más de 44 episodios sobre tecnología, disrupción e innovación. Conferencista en temas como IA, futuro del trabajo, ciudades inteligentes, liderazgo exponencial y medicina del futuro",
      "Más de 25 años de experiencia en tecnología, innovación y transformación digital",
      "Creador de contenido sobre futurismo, innovación y transformación digital con miles de seguidores en redes sociales",
      "Asesor y mentor de empresas e instituciones en su proceso de adaptación a la era digital"
    ],
    photoPosition: "right",
    gradient: "linear-gradient(135deg,#FF9900,#e65c00)",
    trackClass: "track-a",
    trackName: "Autonomía Humana",
    talkIcon: "🚀",
    talkName: "Compromiso con la verdad"
  },
  {
    img: "/speakers/farid-dieck-assad.jpg",
    initials: "FD",
    name: "Farid Dieck",
    company: "Creador de contenido",
    role: "Psicólogo y Conferencista",
    bio: "Reconocido creador de contenido y psicólogo, abordando temas de identidad y arte en la era del avance tecnológico.",
    longBio: "Psicólogo, autor y creador de contenido de Monterrey, Nuevo León. Tiene un Master en Salud Mental: Clínica Psicoanalítica por la Universidad de León de España y actualmente está terminando una Maestría en Psicoterapia Psicoanalítica por el Centro Eleia.",
    bullets: [
      "Cuenta con más de 60 millones de seguidores en sus diferentes redes sociales",
      "Ha dado conferencias en más de 10 países en América y Europa",
      "Se ha consolidado como una de las figuras más influyentes en el ámbito de la psicología, filosofía y creación de contenido reflexivo en Latinoamérica."
    ],
    photoPosition: "left",
    gradient: "linear-gradient(135deg,#F0922A,#ef4444)",
    trackClass: "track-a",
    trackName: "Identidad",
    talkIcon: "🗣️",
    talkName: "Ser Humano en escena"
  },
  {
    img: "/speakers/mons-rogelio-cabrera-lopez.jpg",
    imgScale: "1.4",
    initials: "RC",
    name: "Mons. Rogelio Cabrera López",
    company: "Arquidiócesis de Monterrey",
    role: "Arzobispo Metropolitano",
    bio: "Presidente emérito de la Conferencia del Episcopado Mexicano. Participa activamente en diálogos nacionales por la paz y justicia social.",
    longBio: "Arzobispo Metropolitano de Monterrey desde 2012 y Presidente emérito de la Conferencia del Episcopado Mexicano. Con formación en Teología de universidades romanas, ha participado activamente en diálogos nacionales por la paz y justicia social. En 2025, fue recibido por el Papa León XIV en el Vaticano.",
    bullets: [
      "Arzobispo Metropolitano de Monterrey desde el 3 de octubre de 2012, nombrado por el Papa Benedicto XVI",
      "Presidente de la Conferencia del Episcopado Mexicano (CEM) 2018-2021",
      "Presidente del Consejo Económico de CELAM (Conferencia del Episcopado Latinoamericano) 2019",
      "Miembro de la Pontificia Comisión para América Latina (desde 2020)",
      "Miembro del Dicasterio para el Servicio del Desarrollo Humano Integral (desde 2026)",
      "Audiencia privada con el Papa León XIV en el Vaticano (octubre 2025)",
      "Anteriormente Arzobispo de Tuxtla Gutiérrez (2004-2012) y Obispo de Tapachula y Tacámbaro",
      "Licenciatura en Teología, Pontificia Universidad Gregoriana, Roma; Licenciatura en Sagrada Escritura, Pontificio Instituto Bíblico, Roma"
    ],
    photoPosition: "left",
    gradient: "linear-gradient(135deg,#8B5CF6,#2E86C1)",
    trackClass: "track-a",
    trackName: "Reconocimiento",
    talkIcon: "🕊️",
    talkName: "Reconocimiento"
  },
  {
    img: "/speakers/gurudev-sri-sri-ravi-shankar.jpeg",
    initials: "GS",
    name: "Gurudev Sri Sri Ravi Shankar",
    company: "El Arte de Vivir",
    role: "Líder Humanitario",
    bio: "Líder humanitario y maestro espiritual, fundador de la organización internacional El Arte de Vivir.",
    longBio: "POR CONFIRMAR\nLíder humanitario y maestro espiritual, fundador de la organización internacional El Arte de Vivir.",
    bullets: [
      "Líder humanitario y maestro espiritual",
      "Fundador de la organización internacional El Arte de Vivir"
    ],
    photoPosition: "left",
    gradient: "linear-gradient(135deg,#E91E8C,#F0922A)",
    talkIcon: "🧘‍♂️",
    talkName: "Sabiduría Eterna"
  },
  {
    img: "/speakers/padre-david-jasso.png",
    imgPosition: "center 60%",
    imgScale: "1.1",
    imgOffsetY: "0px",
    initials: "DJ",
    name: "Padre David Jasso",
    company: "Arquidiócesis de Monterrey",
    role: "Sacerdote",
    bio: "Sacerdote, comunicólogo y ex directivo del Club Rayados. Promotor del talento humano y la pastoral social latinoamericana.",
    longBio: "Es sacerdote de la Arquidiócesis de Monterrey. Es Lic. En Comunicación y cuenta con estudios de Humanidades, Filosofía, Teología, Ciencias de la Educación y Comercio Internacional.",
    bullets: [
      "En 2003 suspende su formación sacerdotal, trabajando siete años en el Club de Futbol Monterrey Rayados, siendo además campeón del Futbol Mexicano en 2009 y 2010.",
      "Fue miembro de distintos consejos consultivos y asesor de movimientos ciudadanos y fundó su empresa \"La Fábrica de Respuestas\".",
      "En 2013 regresa al seminario, terminando su formación sacerdotal en 2018, donde ha realizo una diversidad de actividades: asesor pastoral de grupos y movimientos apostólicos a nivel local y nacional",
      "EAutor de libros, secretario adjunto y adscrito del CELAM 2019-2023,",
      "Vicario Parroquial, Vicecanciller y administrador parroquial, secretario técnico del proyecto global de Pastoral 2031-2033 y miembro del comité técnico de la Novena Intercontinental Guadalupana",
      "Actualmente, es Rector del Templo Expiatorio San Luis Gonzaga, Auxiliar del Moderador de la Curia para el Talento Humano y ProVicario Episcopal de la Vicaría de Pastoral.",
      "AA nivel Latinoamericano, junto a Mons. Rogelio Cabrera, es asesor de la Unión Cristiana Internacional de Ejecutivos de Empresas (UNIAPAC)"
    ],
    photoPosition: "left",
    gradient: "linear-gradient(135deg,#FF9900,#e65c00)",
    trackClass: "track-a",
    trackName: "Espiritualidad",
    talkIcon: "🕊️",
    talkName: "Conexión y Fe"
  },
  {
    img: "/speakers/bhikkhu-pannakara.png",
    initials: "BP",
    name: "Bhikkhu Pannakara",
    company: "Monje Budista",
    role: "Ingeniero",
    bio: "Ingeniero convertido en monje budista, promotor de la 'Caminata por la Paz' uniendo conocimiento moderno con sabiduría eterna.",
    longBio: "Monje budista y ingeniero vietnamita-estadounidense, reconocido por liderar una histórica \"Caminata por la Paz\" desde Texas hasta Washington, D.C.",
    bullets: [
      "Es vicepresidente del centro budista Huong Dao Vipassana Bhavana en Fort Worth, Texas.",
      "Su vida es una singular historia de transformación: del mundo de la tecnología a una vida dedicada por completo a la paz y la compasión.",
      "Al graduarse en Tecnología de la Información en la Universidad de Texas, se adentró en un futuro que muchos considerarían exitoso. Sin embargo, tras ese éxito se escondía una pregunta más profunda: cómo servir a la humanidad de una manera que verdaderamente sane el sufrimiento.",
      "Respondiendo a esa llamada interior, abandonó el camino convencional de un ingeniero y eligió el antiguo camino del Buda.",
      "A través de la ordenación y la meditación, transformó su vida en un mensaje vivo de bondad amorosa",
      "Hoy, como líder de la Caminata por la Paz, camina no para sí mismo, sino para el mundo, llevando la compasión a través de ciudades, culturas y corazones. Su trayectoria conecta el conocimiento moderno con la sabiduría eterna"
    ],
    photoPosition: "left",
    gradient: "linear-gradient(135deg,#2E86C1,#8B5CF6)",
    trackClass: "track-a",
    trackName: "Espiritualidad",
    talkIcon: "🚶",
    talkName: "Paz y Compasión"
  },
  {
    img: "/speakers/abuelo-maya-antonio-oxte.jpg",
    imgPosition: "center",
    imgScale: "1.1",
    imgOffsetY: "0px",
    initials: "AO",
    name: "Abuelo Maya Antonio Oxté",
    company: "Medicina Tradicional",
    role: "Sabio Maya",
    bio: "Médico tradicional y maestro espiritual de Yucatán. Puente vivo entre el profundo conocimiento ancestral y el mundo actual.",
    longBio: "El Abuelo Antonio Oxté es uno de los sabios, médicos tradicionales y maestros espirituales mayas más importantes de nuestra generación, originario de Tzucacab, Yucatán.",
    bullets: [
      "Su labor se centra en la preservación y difusión de la cosmovisión, astronomía, medicina y arquitectura maya, actuando como un puente entre el conocimiento ancestral y el mundo actual."
    ],
    photoPosition: "left",
    gradient: "linear-gradient(135deg,#a3335f,#8B5CF6)",
    trackClass: "track-a",
    trackName: "Espiritualidad",
    talkIcon: "🌿",
    talkName: "Sabiduría Ancestral"
  },
  {
    img: "/speakers/pastor-federico.jpeg",
    initials: "FE",
    name: "Pastor Federico Elizondo",
    company: "Autor",
    role: "Autor",
    bio: "Autor del libro: Inteligencia Artificial y Paz Mundial, una visión cristiana ética.",
    longBio: "Autor del libro: Inteligencia Artificial y Paz Mundial, una visión cristiana ética.",
    bullets: [
      "Autor del libro: Inteligencia Artificial y Paz Mundial"
    ],
    photoPosition: "left",
    gradient: "linear-gradient(135deg,#0078D4,#00c6ff)",
    trackClass: "track-a",
    trackName: "Espiritualidad",
    talkIcon: "📖",
    talkName: "IA y Paz Mundial"
  },
  {
    img: "/speakers/javier-prieto.jpg",
    initials: "JP",
    name: "Javier Prieto",
    company: "SELIDER",
    role: "Presidente y Fundador",
    bio: "Presidente y Fundador de SELIDER. Maestro de Ceremonias del Encuentro Mundial de Valores.",
    longBio: "Presidente y Fundador de SELIDER y MAESTRO DE CEREMONIAS de este magno evento.",
    bullets: [
      "Presidente y Fundador de SELIDER",
      "Maestro de Ceremonias del Encuentro Mundial de Valores"
    ],
    photoPosition: "left",
    gradient: "linear-gradient(135deg,#00d4fe,#29ABE2)",
    trackClass: "track-a",
    trackName: "Presentación",
    talkIcon: "🎤",
    talkName: "Maestro de Ceremonias"
  },
  { img: "/speakers/monica-zambrano-vignau.jpg", initials: "MZ", name: "Monica Zambrano Vignau", company: "HUMIND", role: "Experta en Bienestar Emocional", bio: "Participa en el panel de IA y Salud: 'El Ser Humano como Guía, la IA como Soporte'.", gradient: "linear-gradient(135deg,#a3335f,#8B5CF6)", trackClass: "track-a", trackName: "Salud", talkIcon: "❤️", talkName: "El Ser Humano como Guía" },
  { img: "/speakers/sofia-lozano-snively.jpeg", initials: "SL", name: "Sofía Lozano Snively", company: "Ingenium", role: "Experta en Bienestar", bio: "Participa en el panel de IA y Salud: 'El Ser Humano como Guía, la IA como Soporte'.", gradient: "linear-gradient(135deg,#2E86C1,#8B5CF6)", trackClass: "track-a", trackName: "Salud", talkIcon: "❤️", talkName: "El Ser Humano como Guía" },
  {
    img: "/speakers/david-eaton.jpg",
    initials: "DE",
    name: "David Eaton",
    company: "Rotary Distrito 4130",
    role: "Gobernador Electo",
    bio: "Líder empresarial y ambientalista, ex directivo de CPKC Railroad e impulsor de importantes iniciativas de conservación.",
    longBio: "David Eaton es un líder empresarial y ambientalista de Monterrey con 25 años en CPKC Railroad. Gobernador Electo del Distrito Rotario 4130 (2026/2027), supervisa 72 clubes en el noreste de México. Miembro del Club Rotario Metropolitano desde hace 28 años, impulsa la iniciativa Operation Pollination para conservar la mariposa Monarca.",
    bullets: [
      "Gobernador Electo del Distrito Rotario 4130 (2026/2027), responsable de 72 clubes en el noreste de México",
      "28 años de servicio en el Club Rotario Metropolitano de Monterrey",
      "Director de Desarrollo de Negocios para México, CPKC Railroad (casi 25 años en la empresa)",
      "Ex Vicepresidente de Asuntos Corporativos, Bienes Raíces, Servicio al Cliente y Operaciones en CPKC México",
      "Presidente del Consejo de NASCO (North America's SuperCorridor Coalition) para América del Norte",
      "Vicepresidente de la Cámara Americana de Comercio (AMCHAM), División Noreste",
      "Presidente de la Asociación Nacional de Transporte de Carga (NFTA) 2020-2022",
      "Impulsor de \"Operation Pollination\": recaudó más de $100,000 USD para 60,000 árboles oyamel para la mariposa Monarca",
      "Licenciado en Derecho, Universidad de Arizona; Maestría en Derecho Comercial, Tecnológico de Monterrey (ITESM)"
    ],
    photoPosition: "left",
    gradient: "linear-gradient(135deg,#008FD3,#00C4CC)",
    trackClass: "track-a",
    trackName: "Rotarios",
    talkIcon: "🌍",
    talkName: "Liderazgo Rotario"
  },
  {
    img: "/speakers/dr-gerardo-de-jesus-mendoza-jimenez.png",
    initials: "GM",
    name: "Dr. Gerardo de Jesús Mendoza",
    company: "Desarrollo Magisterial",
    role: "Encargado de la Subsecretaría",
    bio: "Encargado de la Subsecretaría de Desarrollo Magisterial. Presentador del evento.",
    longBio: "Dr. Gerardo de Jesús Mendoza Jiménez\nEncargado de la Subsecretaría de Desarrollo Magisterial\nPRESENTADOR",
    bullets: [
      "Encargado de la Subsecretaría de Desarrollo Magisterial del Estado",
      "Presentador oficial del evento"
    ],
    photoPosition: "left",
    gradient: "linear-gradient(135deg,#E91E8C,#8B5CF6)",
    trackClass: "track-c",
    trackName: "Presentación",
    talkIcon: "🎙️",
    talkName: "Presentador"
  },
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
