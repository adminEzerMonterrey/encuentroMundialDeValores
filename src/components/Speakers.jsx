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
          ? <img src={speaker.img} alt={speaker.name} loading="lazy" />
          : <div className="sc-card__photo-fallback" style={{ '--gradient': speaker.gradient }}>{speaker.initials}</div>}
        <span className={`sc-card__badge ${speaker.trackClass}`}>{speaker.trackName}</span>
      </div>

      {/* Info */}
      <div className="sc-card__body">
        <h3 className="sc-card__name">{speaker.name}</h3>
        <p className="sc-card__company">{speaker.company}</p>
        <p className="sc-card__role">{speaker.role}</p>
        <p className="sc-card__bio">{speaker.bio}</p>
        <div className="sc-card__footer">
          <span className="sc-card__talk">{speaker.talkIcon} {speaker.talkName}</span>
          <a href="#agenda" className="btn btn--ghost btn--sm">Ver →</a>
        </div>
      </div>
    </article>
  );
}

// Keynotes (Main Speakers) — separate from carousel
const keynotesData = [
  { img: "Speakers/Mons_Rogelio_Cabrera_Lopez.jpg", initials: "RC", name: "Mons. Rogelio Cabrera López", company: "Arquidiócesis de Monterrey", role: "Arzobispo Metropolitano", bio: "Presidente emérito de la Conferencia del Episcopado Mexicano. Participa activamente en diálogos nacionales por la paz y justicia social.", gradient: "linear-gradient(135deg,#7C3AED,#06b6d4)", trackClass: "track-a", trackName: "Reconocimiento", talkIcon: "🏆", talkName: "Reconocimiento David Noel" },
  { img: "Speakers/Mauricio_Martinez.jpg", initials: "MM", name: "Mauricio Martinez", company: "Actor", role: "Cantante Mexicano", bio: "Reconocido actor y cantante. Explorará el impacto de la Inteligencia Artificial en la creatividad, el arte y la escenificación.", gradient: "linear-gradient(135deg,#7C3AED,#06b6d4)", trackClass: "track-b", trackName: "Arte y Creatividad", talkIcon: "🎭", talkName: "Ser Humano en escena" },
  { img: "Speakers/Farid_Dieck_Assad.jpg", initials: "FD", name: "Farid Dieck", company: "Creador de contenido", role: "Psicólogo y Conferencista", bio: "Reconocido creador de contenido y psicólogo, abordando temas de identidad y arte en la era del avance tecnológico.", gradient: "linear-gradient(135deg,#f59e0b,#ef4444)", trackClass: "track-b", trackName: "Arte y Creatividad", talkIcon: "🗣️", talkName: "Ser Humano en escena" },
  { img: "Speakers/Mariana_Trevino.jpg", initials: "MT", name: "Mariana Treviño", company: "Actriz", role: "Actriz de Teatro y Cine", bio: "Destacada actriz mexicana de cine y televisión. Compartirá su perspectiva única sobre el arte y la identidad frente a la IA.", gradient: "linear-gradient(135deg,#db2777,#9333ea)", trackClass: "track-b", trackName: "Arte y Creatividad", talkIcon: "🎬", talkName: "Ser Humano en escena" },
];

// Data Array to keep JSX clean
const speakersData = [
  { img: "Speakers/Emma_Seppala.jpg", initials: "ES", name: "Emma Seppälä", company: "Stanford", role: "Directora Científica / Psicóloga", bio: "Reconocida psicóloga de Stanford, investiga la felicidad y el bienestar. Autora de 'The Happiness Track'. Ha impartido clases en Stanford y Yale.", gradient: "linear-gradient(135deg,#FF9900,#e65c00)", trackClass: "track-a", trackName: "Bienestar", talkIcon: "🧘‍♀️", talkName: "Calma en tiempos de IA" },
  { img: "Speakers/Marian_Rojas_Estape.jpg", initials: "MR", name: "Marian Rojas Estapé", company: "Médica Psiquiatra", role: "Escritora y Conferencista", bio: "Destacada médica psiquiatra española, autora de best sellers. Explorará la reconexión interior en la era digital.", gradient: "linear-gradient(135deg,#db2777,#7C3AED)", trackClass: "track-a", trackName: "IA & Salud", talkIcon: "🧠", talkName: "La mente en la era digital" },
  { img: "Speakers/Dan_Levy.jpg", initials: "DL", name: "Dan Levy", company: "Harvard Kennedy School", role: "Profesor Titular", bio: "Especializado en inteligencia artificial y métodos cuantitativos. Cofundador de Teachly y autor sobre enseñanza con IA.", gradient: "linear-gradient(135deg,#0078D4,#00c6ff)", trackClass: "track-c", trackName: "Educación", talkIcon: "📚", talkName: "Gobernanza de la IA" },
  { img: "Speakers/Dra_Maria_Cristina_Gonzalez.jpg", initials: "CG", name: "Dra. María Cristina González Parás", company: "EMV", role: "Directora General", bio: "Directora del Encuentro Mundial de Valores. Promotora incansable de la ética, los valores humanos y la responsabilidad social.", gradient: "linear-gradient(135deg,#db2777,#f59e0b)", trackClass: "track-a", trackName: "Reconocimiento", talkIcon: "🏆", talkName: "Apertura y Reconocimiento" },
  { img: "Speakers/Dr_Arumugam_Murukiah.jpg", initials: "AM", name: "Dr. Arumugam Murukiah", company: "Broadline Technologies", role: "Estratega Tecnológico", bio: "Líder en transformación digital con más de 4 décadas de experiencia. Innovador en salud pública y cadenas de suministro en la India.", gradient: "linear-gradient(135deg,#f59e0b,#ef4444)", trackClass: "track-a", trackName: "Autonomía Humana", talkIcon: "⚙️", talkName: "IA Humanizada" },
  { img: "Speakers/Caroline_Sanchez_Crozier.jpg", initials: "CC", name: "Caroline Sanchez Crozier", company: "CSC Consulting Group", role: "CEO & Fundadora", bio: "Líder tecnológico y presidenta del Comité de Tecnología e IA de LULAC. Inmigrante mexicana y pionera en equidad digital.", gradient: "linear-gradient(135deg,#db2777,#9333ea)", trackClass: "track-c", trackName: "Inclusión Social", talkIcon: "🤝", talkName: "Tecnología y Educación" },
  { img: "Speakers/Dra_Melina_Uncapher.jpg", initials: "MU", name: "Dr. Melina Uncapher", company: "SETA-ED", role: "CEO y Fundadora", bio: "Neurocientífica educativa con más de 20 años en investigación. Cofundadora del Institute for Applied Neuroscience.", gradient: "linear-gradient(135deg,#008FD3,#00C4CC)", trackClass: "track-c", trackName: "Educación", talkIcon: "🧠", talkName: "Neurociencia Educativa" },
  { img: "Speakers/Dra_Alma_Rosa_Marroquin.jpg", initials: "AR", name: "Dra. Alma Rosa Marroquín", company: "Gobierno de Nuevo León", role: "Secretaria de Salud", bio: "Médica pediatra liderando la transformación del sistema de salud de Nuevo León enfocada en un modelo integral y equitativo.", gradient: "linear-gradient(135deg,#059669,#6C63FF)", trackClass: "track-a", trackName: "Salud", talkIcon: "🏥", talkName: "IA en Medicina" },
  { img: "Speakers/Dr_Bimal_Desai.jpg", initials: "BD", name: "Dr. Bimal Desai", company: "Children's Hospital Philadelphia", role: "Chief Health Informatics Officer", bio: "Innovador en salud digital y pionero en el uso de IA y herramientas digitales para mejorar la atención en pediatría.", gradient: "linear-gradient(135deg,#FF9900,#e65c00)", trackClass: "track-a", trackName: "Salud", talkIcon: "⚕️", talkName: "Reinventing Medicine" },
  { img: "Speakers/Sofialeticia_Morales_Garza.jpg", initials: "SM", name: "Dra. Sofialeticia Morales", company: "Legado Nuevo León", role: "Coordinadora Educativa", bio: "Ex Secretaria de Educación de NL. Impulsora de modelos educativos innovadores y asesora para Naciones Unidas.", gradient: "linear-gradient(135deg,#a3335f,#6C63FF)", trackClass: "track-c", trackName: "Educación", talkIcon: "🎓", talkName: "IA en Educación Superior" },
  { img: "Speakers/Alejandro_Almazan_Zimerman.jpg", initials: "AA", name: "Alejandro Almazán Zimerman", company: "Google for Education", role: "Head Latam", bio: "Lidera iniciativas que conectan a millones de estudiantes con herramientas digitales. Visión en innovación tecnológica y transformación social.", gradient: "linear-gradient(135deg,#06b6d4,#6C63FF)", trackClass: "track-c", trackName: "Educación", talkIcon: "🌐", talkName: "Educación en la Era IA" },
  { img: "", initials: "JM", name: "Juan Pablo Murra", company: "Tecnológico de Monterrey", role: "Rector", bio: "Lidera iniciativas innovadoras enfrentando desafíos globales en educación. Ex directivo senior de McKinsey & Company.", gradient: "linear-gradient(135deg,#00d4fe,#29ABE2)", trackClass: "track-c", trackName: "Educación Superior", talkIcon: "🎓", talkName: "IA en la Educación" },
  { img: "Speakers/Juan_Paura_Garcia_Sec_Educ.jpg", initials: "JP", name: "Juan Paura García", company: "Gobierno de Nuevo León", role: "Secretario de Educación", bio: "Experto en política fiscal y educación superior con más de 35 años de experiencia docente e investigación.", gradient: "linear-gradient(135deg,#29ABE2,#0078D4)", trackClass: "track-c", trackName: "Educación Superior", talkIcon: "📈", talkName: "IA en la Educación" },
  { img: "Speakers/Eugenio_Garza_y_Garza_UDEM.jpg", initials: "EG", name: "Eugenio Garza y Garza", company: "UDEM", role: "Rector", bio: "Rector entrante de la UDEM, combina experiencia empresarial y compromiso educativo ante los desafíos de la Inteligencia Artificial.", gradient: "linear-gradient(135deg,#00d4fe,#6C63FF)", trackClass: "track-c", trackName: "Educación Superior", talkIcon: "🎓", talkName: "IA en la Educación" },
  { img: "Speakers/Angel_Cazan_Marcos_UERRE.jpg", initials: "AC", name: "Ángel Casán Marcos", company: "U-ERRE", role: "Rector", bio: "Actuario y empresario, ha transformado la U-ERRE mediante un modelo educativo innovador y de compromiso social.", gradient: "linear-gradient(135deg,#008FD3,#003f7f)", trackClass: "track-c", trackName: "Educación Superior", talkIcon: "🎓", talkName: "IA en la Educación" },
  { img: "Speakers/Santos_Guzman_Lopez_UANL.jpg", initials: "SG", name: "Santos Guzmán López", company: "UANL", role: "Rector", bio: "Médico y doctor en Medicina. Promueve la excelencia académica, inclusión e innovación con un profundo enfoque humanista.", gradient: "linear-gradient(135deg,#f59e0b,#008FD3)", trackClass: "track-c", trackName: "Educación Superior", talkIcon: "🎓", talkName: "IA en la Educación" },
  { img: "Speakers/Jorge_Ramos.jpg", initials: "JR", name: "Jorge Ramos", company: "Periodista", role: "Escritor y Periodista", bio: "Influyente periodista hispanohablante y escritor. Cubrió eventos históricos y es autor de 15 libros sobre política e inmigración.", gradient: "linear-gradient(135deg,#db2777,#7C3AED)", trackClass: "track-a", trackName: "Autonomía Humana", talkIcon: "🎙️", talkName: "Compromiso con la verdad" },
  { img: "Speakers/Mimi_Edmunds.jpg", initials: "ME", name: "Marian Mimi Edmunds", company: "Periodista", role: "Productora Documental", bio: "Experimentada periodista e investigadora. Ex colaboradora de CBS, PBS y Discovery Network, con múltiples nominaciones al Emmy.", gradient: "linear-gradient(135deg,#0078D4,#00c6ff)", trackClass: "track-a", trackName: "Autonomía Humana", talkIcon: "🎥", talkName: "Compromiso con la verdad" },
  { img: "Speakers/David_Eaton.jpg", initials: "DE", name: "David Eaton", company: "Rotary Distrito 4130", role: "Gobernador Electo", bio: "Líder empresarial y ambientalista, ex directivo de CPKC Railroad e impulsor de importantes iniciativas de conservación.", gradient: "linear-gradient(135deg,#008FD3,#00C4CC)", trackClass: "track-a", trackName: "Rotarios", talkIcon: "🌍", talkName: "Liderazgo Rotario" },
  { img: "", initials: "SR", name: "Salvador Rizzo Tavares", company: "Grupo RIZZO", role: "CEO & Fundador", bio: "Empresario tecnológico y Director de Rotary International. Pionero en aulas inteligentes y educación digital en Latam.", gradient: "linear-gradient(135deg,#059669,#6C63FF)", trackClass: "track-a", trackName: "Rotarios", talkIcon: "💻", talkName: "Innovación Tecnológica" },
  { img: "Speakers/Padre_David_Jasso.jpg", initials: "DJ", name: "Padre David Jasso", company: "Arquidiócesis de Monterrey", role: "Sacerdote", bio: "Sacerdote, comunicólogo y ex directivo del Club Rayados. Promotor del talento humano y la pastoral social latinoamericana.", gradient: "linear-gradient(135deg,#FF9900,#e65c00)", trackClass: "track-a", trackName: "Espiritualidad", talkIcon: "🕊️", talkName: "Conexión y Fe" },
  { img: "Speakers/Abuelo_Maya_Antonio_Oxte.jpg", initials: "AO", name: "Abuelo Maya Antonio Oxté", company: "Medicina Tradicional", role: "Sabio Maya", bio: "Médico tradicional y maestro espiritual de Yucatán. Puente vivo entre el profundo conocimiento ancestral y el mundo actual.", gradient: "linear-gradient(135deg,#a3335f,#6C63FF)", trackClass: "track-a", trackName: "Espiritualidad", talkIcon: "🌿", talkName: "Sabiduría Ancestral" },
  { img: "Speakers/Bhikkhu_Pannakara.jpg", initials: "BP", name: "Bhikkhu Pannakara", company: "Monje Budista", role: "Ingeniero", bio: "Ingeniero convertido en monje budista, promotor de la 'Caminata por la Paz' uniendo conocimiento moderno con sabiduría eterna.", gradient: "linear-gradient(135deg,#06b6d4,#6C63FF)", trackClass: "track-a", trackName: "Espiritualidad", talkIcon: "🚶", talkName: "Paz y Compasión" },
];

export default function Speakers() {
  const [current, setCurrent] = useState(0); // Alberto is at 0 in this array format since we pushed him. Usually it was Alberto -> Beatriz -> Arturo.
  const trackRef = useRef(null);
  const autoTimerRef = useRef(null);
  
  const total = speakersData.length;

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
          <span className="section-tag">02 / SPEAKERS</span>
          <h2 className="section-title" id="speakersHeading">Ponentes</h2>
          <p className="section-subtitle">Líderes de la industria tech compartiendo su visión del futuro.</p>
        </div>

        {/* ── Keynotes Grid ── */}
        <div className="speakers__keynotes-grid">
          {keynotesData.map((keynote, idx) => (
            <article className="keynote-card reveal-up noselect" key={idx}>
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className={`keynote-tracker tr-${i + 1}`}></div>
              ))}

              <div className="keynote-3d-content">
                {/* Photo */}
                <div className="keynote-card__photo">
                  {keynote.img
                    ? <img src={keynote.img} alt={keynote.name} loading="lazy" />
                    : <div className="keynote-card__photo-fallback" style={{ background: keynote.gradient }}>{keynote.initials}</div>}
                  <span className={`keynote-card__badge ${keynote.trackClass}`}>✨ Principal</span>
                </div>

                {/* Info */}
                <div className="keynote-card__body">
                  <h3 className="keynote-card__name">{keynote.name}</h3>
                  <p className="keynote-card__company">{keynote.company}</p>
                  <p className="keynote-card__role">{keynote.role}</p>
                  <p className="keynote-card__talk">
                    <span className="keynote-card__talk-icon">{keynote.talkIcon || "🎤"}</span>
                    {keynote.talkName}
                  </p>
                  <p className="keynote-card__bio">{keynote.bio}</p>
                </div>
              </div>
            </article>
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
    </section>
  );
}
