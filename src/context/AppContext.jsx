import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext(null);

export const translations = {
  es: {
    /* ── NAV ── */
    home: "Inicio",
    concerts: "Conciertos",
    biography: "Biografía",
    services: "Servicios",
    navCourses: "Cursos",
    masterclass: "Masterclass",
    contact: "Contacto",
    platform: "Plataforma",
    startNow: "Empezar ahora",

    /* ── HERO ── */
    heroEyebrow: "Músico profesional · Multi-instrumentista",
    heroTitle1: "Jesús",
    heroTitle2: "Molina",
    heroTitle3: "Pianista · Compositor · Intérprete",
    heroSub: "Más de 14 años sobre los escenarios de 9 países, dominando más de 5 instrumentos. La música no es solo lo que hago — es lo que soy.",
    heroCta1: "Descubre mi música",
    heroCta2: "Ver en vivo",
    heroScrollDown: "Desplázate",
    heroStat1Label: "años de carrera",
    heroStat2Label: "países",
    heroStat3Label: "instrumentos",

    /* ── ABOUT ── */
    aboutEyebrow: "— Quién te va a enseñar",
    aboutTitle: "El piano no se aprende|memorizando teoría.|Se aprende tocando.",
    aboutP1: "Empecé a tocar a los 7 años en la sala de mi casa, en un piano vertical desafinado. Hoy he dado conciertos en 9 países y formado a cientos de estudiantes que llegaron sin saber leer una sola nota.",
    aboutP2: "Mi método combina técnica clásica con repertorio que realmente quieres tocar: desde Chopin hasta tus canciones favoritas. Sin relleno, sin ejercicios eternos que no llevan a ningún lado.",
    aboutBadge: "Concertista & docente",
    aboutDebut: "Debut como concertista",
    aboutCountries: "países con clases impartidas",
    aboutTimeline: [
      { year: 2010, text: "Primer concierto profesional, Conservatorio Nacional" },
      { year: 2015, text: "Inicio de clases particulares y primeros métodos propios" },
      { year: 2019, text: "Lanzamiento de cursos online — primeros 100 alumnos" },
      { year: 2026, text: "+500 estudiantes activos en 9 países" },
    ],

    /* ── METHOD ── */
    methodEyebrow: "— Cómo funciona",
    methodTitle: "Tu camino, en tres movimientos",
    methodSub: "Como una sonata: exposición, desarrollo y recapitulación. Cada curso sigue esta misma estructura, para que el progreso se sienta y no haya que adivinarlo.",
    methodBentoBeginnerLabel: "Para empezar",
    methodBentoBeginnerTitle: "Nivel inicial",
    methodBentoBeginnerDesc: "Para alumnos de todos los niveles",
    methodBentoStep1: "Paso 4 · Escalas",
    methodBentoStep2: "Paso 5 · Acordes",
    methodBentoCommunityTitle: "Comunidad",
    methodBentoCommunityDesc: "Alumnos afines y siempre dispuestos a compartir avances",
    methodBentoAppLabel: "Próximamente",
    methodBentoAppTitle: "App de práctica",
    methodBentoAppDesc: "Tu progreso, partituras y métricas en un solo lugar",
    methodBentoTopicsTitle: "Elige tu repertorio",
    methodBentoTopicsDesc: "Personaliza tu plan de estudio por estilo",
    methodBentoTags: ["Clásico", "Jazz", "Pop & Latino", "Bandas sonoras", "Improvisación", "Técnica"],
    methodCards: [
      { mark: "I", icon: "file", title: "Diagnóstico y bases", desc: "Evaluamos tu nivel real, corregimos postura y mano, y fijamos lectura musical desde el primer ejercicio — no después de 10 clases.", tag: "Semanas 1–3" },
      { mark: "II", icon: "compass", title: "Repertorio guiado", desc: "Eliges una pieza real que quieras tocar y la trabajamos por partes, con retroalimentación en cada sesión y ejercicios técnicos hechos a su medida.", tag: "Semanas 4–10" },
      { mark: "III", icon: "star", title: "Interpretación y escenario", desc: "Pulimos dinámica, fraseo y expresión. Cierras el curso con una pieza lista para grabar, tocar en familia o subir a tus redes.", tag: "Semanas 11–12" },
    ],
    methodShowcaseTitle: "Practica con seguimiento real, no solo con buena voluntad",
    methodShowcaseDesc: "Cada alumno recibe acceso a la plataforma de práctica: video-clases descargables, partituras anotadas y métricas de progreso por pieza.",
    methodShowcaseItems: [
      "Video-clases en HD, disponibles para siempre",
      "Partituras digitales con anotaciones personalizadas",
      "Corrección de video semanal, en menos de 48h",
    ],
    methodPhoneProgress: "Mi progreso",
    methodWeek: "Semana 6 de 12",
    methodContinue: "Continuar práctica",

    /* ── COURSES ── */
    coursesEyebrow: "— Catálogo",
    coursesTitle: "Elige tu próxima pieza",
    coursesSub: "Cuatro programas, cada uno pensado para un punto de partida distinto. Todos incluyen clases en vivo, material descargable y corrección personalizada.",
    coursesSeeDetail: "Ver detalle →",
    coursesPriceUnit: "/mes",
    courses: [
      { id: "desde-cero", icon: "piano", featured: false, ribbon: null, level: "Nivel inicial", title: "Piano desde Cero", desc: "Lectura musical, postura, primeras escalas y tu primera pieza completa en 8 semanas.", duration: "8 semanas", mode: "Individual", price: 45 },
      { id: "repertorio-tecnica", icon: "compass", featured: true, ribbon: "Más elegido", level: "Nivel intermedio", title: "Repertorio & Técnica", desc: "Chopin, Debussy y piano popular latino. Trabajamos 3 piezas a tu medida con técnica avanzada.", duration: "12 semanas", mode: "Individual", price: 75 },
      { id: "improvisacion-jazz", icon: "notes", featured: false, ribbon: null, level: "Nivel avanzado", title: "Improvisación & Jazz", desc: "Armonía funcional, voicings, walking bass y cómo improvisar sobre cualquier estándar.", duration: "10 semanas", mode: "Individual", price: 85 },
      { id: "mentoria-grupal", icon: "people", featured: false, ribbon: null, level: "Todos los niveles", title: "Mentoría Grupal en Vivo", desc: "Clases grupales semanales por nivel + comunidad privada para mostrar tus avances.", duration: "Continuo", mode: "Grupal", price: 25 },
    ],

    /* ── COMMUNITY ── */
    communityEyebrow: "— Comunidad",
    communityTitle: "No tocas solo.|Tocas en comunidad.",
    communitySub: "Más de 500 alumnos comparten avances, dudas y grabaciones en nuestro grupo privado. Cada semana hay sesión de preguntas en vivo.",
    communityActiveStudents: "Alumnos activos",
    communityCountries: "en 9 países",
    testimonials: [
      { pos: 1, size: "md", avatar: 12, quote: "\"En 3 meses ya toco el Nocturno completo.\"", name: "Camila R." },
      { pos: 2, size: "md", avatar: 33, quote: "\"Cambió cómo escucho música.\"", name: "Andrés F." },
      { pos: 3, size: "lg", avatar: 47, quote: "\"Profesor increíblemente didáctico.\"", name: "Marcela T." },
      { pos: 4, size: "md", avatar: 5, quote: "\"Las correcciones son rápidas y claras.\"", name: "Diego S." },
      { pos: 5, size: "lg", avatar: 65, quote: "\"Nunca me sentí empezando de cero.\"", name: "Valentina P." },
      { pos: 6, size: "md", avatar: 21, quote: "\"Una paciencia que no había visto.\"", name: "Roberto M." },
      { pos: 7, size: "md", avatar: 58, quote: "\"Toco en el recital del colegio.\"", name: "Sofía L." },
    ],

    /* ── PRICING ── */
    pricingEyebrow: "— Inversión",
    pricingTitle: "Planes claros, sin letra pequeña",
    pricingSub: "Todos los planes incluyen acceso de por vida al material grabado y garantía de 14 días.",
    pricingMonthly: "Mensual",
    pricingYearly: "Anual",
    pricingYearlyNote: "– 2 meses gratis",
    pricingPeriodMonthly: "/mes",
    pricingPeriodYearly: "/mes · facturado anual",
    pricingFootnote: "¿No estás seguro de cuál elegir?",
    pricingFootnoteLink: "Escríbeme y te recomiendo el plan según tu nivel →",
    pricingPlans: [
      { id: "esencial", featured: false, name: "Esencial", desc: "Para quien empieza desde cero y quiere bases sólidas.", monthly: 45, yearly: 38, features: ["1 clase individual por semana", "Material descargable de por vida", "Corrección de video cada 2 semanas", "Acceso a comunidad privada"], cta: "Elegir Esencial", ctaVariant: "outline" },
      { id: "intensivo", featured: true, badge: "Recomendado", name: "Intensivo", desc: "El plan de la mayoría: avance rápido con seguimiento cercano.", monthly: 75, yearly: 63, features: ["2 clases individuales por semana", "Material descargable de por vida", "Corrección de video semanal en 48h", "Acceso a comunidad privada", "Repertorio personalizado"], cta: "Elegir Intensivo", ctaVariant: "primary" },
      { id: "grupal", featured: false, name: "Mentoría Grupal", desc: "Para aprender en comunidad, con presupuesto ajustado.", monthly: 25, yearly: 21, features: ["1 clase grupal por semana (máx. 6 alumnos)", "Material descargable de por vida", "Sesión de preguntas en vivo mensual", "Acceso a comunidad privada"], cta: "Elegir Grupal", ctaVariant: "outline" },
    ],

    /* ── FINAL CTA ── */
    ctaEyebrow: "— Empecemos",
    ctaTitle: "Tu primera pieza|empieza con una clase.",
    ctaSub: "Agenda una clase de diagnóstico gratuita de 20 minutos. Hablamos de tu nivel, tus metas, y armamos el plan que tiene sentido para ti — sin compromiso.",
    ctaBtn: "Agendar clase gratuita",
    ctaWhatsapp: "Escríbeme por WhatsApp",

    /* ── FOOTER ── */
    footerNav: "Navegación",
    footerNavLinks: [
      { href: "#sobre-mi", label: "Sobre mí" },
      { href: "#metodo", label: "Método" },
      { href: "#cursos", label: "Cursos" },
      { href: "#planes", label: "Planes" },
    ],
    footerCourses: "Cursos",
    footerCourseLinks: [
      { href: "#cursos", label: "Piano desde Cero" },
      { href: "#cursos", label: "Repertorio & Técnica" },
      { href: "#cursos", label: "Improvisación & Jazz" },
      { href: "#cursos", label: "Mentoría Grupal" },
    ],
    footerContact: "Contacto",
    footerCopyright: "© 2026 Jesús Molina. Todos los derechos reservados.",
    footerTagline: "Hecho con cuidado, nota por nota.",
  },

  en: {
    /* ── NAV ── */
    home: "Home",
    concerts: "Concerts",
    biography: "Biography",
    services: "Services",
    navCourses: "Courses",
    masterclass: "Masterclass",
    contact: "Contact",
    platform: "Platform",
    startNow: "Start now",

    /* ── HERO ── */
    heroEyebrow: "Professional musician · Multi-instrumentalist",
    heroTitle1: "Jesús",
    heroTitle2: "Molina",
    heroTitle3: "Pianist · Composer · Performer",
    heroSub: "Over 14 years on stages across 9 countries, mastering more than 5 instruments. Music is not just what I do — it's who I am.",
    heroCta1: "Discover my music",
    heroCta2: "Watch live",
    heroScrollDown: "Scroll",
    heroStat1Label: "years of career",
    heroStat2Label: "countries",
    heroStat3Label: "instruments",

    /* ── ABOUT ── */
    aboutEyebrow: "— Who will teach you",
    aboutTitle: "Piano isn't learned|by memorizing theory.|It's learned by playing.",
    aboutP1: "I started playing at age 7 in my living room, on an out-of-tune upright piano. Today I've performed in 9 countries and trained hundreds of students who arrived without knowing how to read a single note.",
    aboutP2: "My method combines classical technique with repertoire you actually want to play: from Chopin to your favorite songs. No filler, no endless exercises that lead nowhere.",
    aboutBadge: "Concert pianist & teacher",
    aboutDebut: "Concert debut",
    aboutCountries: "countries with classes taught",
    aboutTimeline: [
      { year: 2010, text: "First professional concert, National Conservatory" },
      { year: 2015, text: "Start of private lessons and first own teaching methods" },
      { year: 2019, text: "Launch of online courses — first 100 students" },
      { year: 2026, text: "+500 active students in 9 countries" },
    ],

    /* ── METHOD ── */
    methodEyebrow: "— How it works",
    methodTitle: "Your journey, in three movements",
    methodSub: "Like a sonata: exposition, development, and recapitulation. Each course follows this same structure, so progress is felt and never guessed.",
    methodBentoBeginnerLabel: "Getting started",
    methodBentoBeginnerTitle: "Beginner level",
    methodBentoBeginnerDesc: "For students of all levels",
    methodBentoStep1: "Step 4 · Scales",
    methodBentoStep2: "Step 5 · Chords",
    methodBentoCommunityTitle: "Community",
    methodBentoCommunityDesc: "Like-minded students always ready to share progress",
    methodBentoAppLabel: "Coming soon",
    methodBentoAppTitle: "Practice app",
    methodBentoAppDesc: "Your progress, sheet music, and metrics in one place",
    methodBentoTopicsTitle: "Choose your repertoire",
    methodBentoTopicsDesc: "Customize your study plan by style",
    methodBentoTags: ["Classical", "Jazz", "Pop & Latin", "Soundtracks", "Improvisation", "Technique"],
    methodCards: [
      { mark: "I", icon: "file", title: "Assessment & foundations", desc: "We evaluate your actual level, correct posture and hand position, and establish music reading from the very first exercise — not after 10 classes.", tag: "Weeks 1–3" },
      { mark: "II", icon: "compass", title: "Guided repertoire", desc: "You choose a real piece you want to play and we work through it part by part, with feedback in every session and tailored technical exercises.", tag: "Weeks 4–10" },
      { mark: "III", icon: "star", title: "Interpretation & performance", desc: "We refine dynamics, phrasing, and expression. You finish the course with a piece ready to record, play for family, or share online.", tag: "Weeks 11–12" },
    ],
    methodShowcaseTitle: "Practice with real tracking, not just good intentions",
    methodShowcaseDesc: "Each student gets access to the practice platform: downloadable video lessons, annotated sheet music, and progress metrics by piece.",
    methodShowcaseItems: [
      "HD video lessons, available forever",
      "Digital sheet music with personalized annotations",
      "Weekly video correction, within 48 hours",
    ],
    methodPhoneProgress: "My progress",
    methodWeek: "Week 6 of 12",
    methodContinue: "Continue practice",

    /* ── COURSES ── */
    coursesEyebrow: "— Catalog",
    coursesTitle: "Choose your next piece",
    coursesSub: "Four programs, each designed for a different starting point. All include live classes, downloadable material, and personalized correction.",
    coursesSeeDetail: "See details →",
    coursesPriceUnit: "/mo",
    courses: [
      { id: "desde-cero", icon: "piano", featured: false, ribbon: null, level: "Beginner", title: "Piano from Scratch", desc: "Music reading, posture, first scales, and your first complete piece in 8 weeks.", duration: "8 weeks", mode: "Individual", price: 45 },
      { id: "repertorio-tecnica", icon: "compass", featured: true, ribbon: "Most chosen", level: "Intermediate", title: "Repertoire & Technique", desc: "Chopin, Debussy, and Latin pop piano. We work on 3 tailored pieces with advanced technique.", duration: "12 weeks", mode: "Individual", price: 75 },
      { id: "improvisacion-jazz", icon: "notes", featured: false, ribbon: null, level: "Advanced", title: "Improvisation & Jazz", desc: "Functional harmony, voicings, walking bass, and how to improvise over any standard.", duration: "10 weeks", mode: "Individual", price: 85 },
      { id: "mentoria-grupal", icon: "people", featured: false, ribbon: null, level: "All levels", title: "Live Group Mentoring", desc: "Weekly group classes by level + private community to showcase your progress.", duration: "Ongoing", mode: "Group", price: 25 },
    ],

    /* ── COMMUNITY ── */
    communityEyebrow: "— Community",
    communityTitle: "You don't play alone.|You play in community.",
    communitySub: "More than 500 students share progress, questions, and recordings in our private group. Every week there's a live Q&A session.",
    communityActiveStudents: "Active students",
    communityCountries: "in 9 countries",
    testimonials: [
      { pos: 1, size: "md", avatar: 12, quote: "\"In 3 months I already play the full Nocturne.\"", name: "Camila R." },
      { pos: 2, size: "md", avatar: 33, quote: "\"It changed how I listen to music.\"", name: "Andrés F." },
      { pos: 3, size: "lg", avatar: 47, quote: "\"Incredibly didactic teacher.\"", name: "Marcela T." },
      { pos: 4, size: "md", avatar: 5, quote: "\"Corrections are fast and clear.\"", name: "Diego S." },
      { pos: 5, size: "lg", avatar: 65, quote: "\"I never felt like I was starting from zero.\"", name: "Valentina P." },
      { pos: 6, size: "md", avatar: 21, quote: "\"A patience I've never seen before.\"", name: "Roberto M." },
      { pos: 7, size: "md", avatar: 58, quote: "\"I play at the school recital now.\"", name: "Sofía L." },
    ],

    /* ── PRICING ── */
    pricingEyebrow: "— Investment",
    pricingTitle: "Clear plans, no fine print",
    pricingSub: "All plans include lifetime access to recorded material and a 14-day guarantee.",
    pricingMonthly: "Monthly",
    pricingYearly: "Annual",
    pricingYearlyNote: "– 2 months free",
    pricingPeriodMonthly: "/mo",
    pricingPeriodYearly: "/mo · billed annually",
    pricingFootnote: "Not sure which to choose?",
    pricingFootnoteLink: "Write me and I'll recommend the right plan for your level →",
    pricingPlans: [
      { id: "esencial", featured: false, name: "Essential", desc: "For those starting from scratch who want solid foundations.", monthly: 45, yearly: 38, features: ["1 individual class per week", "Downloadable material for life", "Video correction every 2 weeks", "Private community access"], cta: "Choose Essential", ctaVariant: "outline" },
      { id: "intensivo", featured: true, badge: "Recommended", name: "Intensive", desc: "The most popular plan: fast progress with close monitoring.", monthly: 75, yearly: 63, features: ["2 individual classes per week", "Downloadable material for life", "Weekly video correction in 48h", "Private community access", "Personalized repertoire"], cta: "Choose Intensive", ctaVariant: "primary" },
      { id: "grupal", featured: false, name: "Group Mentoring", desc: "To learn in community, on a budget.", monthly: 25, yearly: 21, features: ["1 group class per week (max. 6 students)", "Downloadable material for life", "Monthly live Q&A session", "Private community access"], cta: "Choose Group", ctaVariant: "outline" },
    ],

    /* ── FINAL CTA ── */
    ctaEyebrow: "— Let's begin",
    ctaTitle: "Your first piece|starts with one class.",
    ctaSub: "Schedule a free 20-minute diagnostic class. We'll talk about your level, your goals, and build the plan that makes sense for you — no commitment.",
    ctaBtn: "Schedule free class",
    ctaWhatsapp: "Write me on WhatsApp",

    /* ── FOOTER ── */
    footerNav: "Navigation",
    footerNavLinks: [
      { href: "#sobre-mi", label: "About me" },
      { href: "#metodo", label: "Method" },
      { href: "#cursos", label: "Courses" },
      { href: "#planes", label: "Plans" },
    ],
    footerCourses: "Courses",
    footerCourseLinks: [
      { href: "#cursos", label: "Piano from Scratch" },
      { href: "#cursos", label: "Repertoire & Technique" },
      { href: "#cursos", label: "Improvisation & Jazz" },
      { href: "#cursos", label: "Group Mentoring" },
    ],
    footerContact: "Contact",
    footerCopyright: "© 2026 Jesús Molina. All rights reserved.",
    footerTagline: "Made with care, note by note.",
  },

  fr: {
    /* ── NAV ── */
    home: "Accueil",
    concerts: "Concerts",
    biography: "Biographie",
    services: "Services",
    navCourses: "Cours",
    masterclass: "Masterclass",
    contact: "Contact",
    platform: "Plateforme",
    startNow: "Commencer",

    /* ── HERO ── */
    heroEyebrow: "Musicien professionnel · Multi-instrumentiste",
    heroTitle1: "Jesús",
    heroTitle2: "Molina",
    heroTitle3: "Pianiste · Compositeur · Interprète",
    heroSub: "Plus de 14 ans sur les scènes de 9 pays, maîtrisant plus de 5 instruments. La musique n'est pas seulement ce que je fais — c'est ce que je suis.",
    heroCta1: "Découvrez ma musique",
    heroCta2: "Voir en direct",
    heroScrollDown: "Défiler",
    heroStat1Label: "ans de carrière",
    heroStat2Label: "pays",
    heroStat3Label: "instruments",

    /* ── ABOUT ── */
    aboutEyebrow: "— Qui vous enseignera",
    aboutTitle: "Le piano ne s'apprend pas|en mémorisant la théorie.|Il s'apprend en jouant.",
    aboutP1: "J'ai commencé à jouer à 7 ans dans le salon de ma maison, sur un piano droit désaccordé. Aujourd'hui, j'ai donné des concerts dans 9 pays et formé des centaines d'élèves qui ne savaient pas lire une seule note.",
    aboutP2: "Ma méthode combine la technique classique avec le répertoire que vous voulez vraiment jouer : de Chopin à vos chansons préférées. Sans remplissage, sans exercices interminables qui ne mènent nulle part.",
    aboutBadge: "Concertiste & enseignant",
    aboutDebut: "Débuts en concert",
    aboutCountries: "pays avec des cours dispensés",
    aboutTimeline: [
      { year: 2010, text: "Premier concert professionnel, Conservatoire National" },
      { year: 2015, text: "Début des cours particuliers et premières méthodes propres" },
      { year: 2019, text: "Lancement des cours en ligne — 100 premiers élèves" },
      { year: 2026, text: "+500 élèves actifs dans 9 pays" },
    ],

    /* ── METHOD ── */
    methodEyebrow: "— Comment ça fonctionne",
    methodTitle: "Votre parcours, en trois mouvements",
    methodSub: "Comme une sonate : exposition, développement et récapitulation. Chaque cours suit cette même structure, pour que les progrès soient ressentis et non devinés.",
    methodBentoBeginnerLabel: "Pour commencer",
    methodBentoBeginnerTitle: "Niveau débutant",
    methodBentoBeginnerDesc: "Pour les élèves de tous niveaux",
    methodBentoStep1: "Étape 4 · Gammes",
    methodBentoStep2: "Étape 5 · Accords",
    methodBentoCommunityTitle: "Communauté",
    methodBentoCommunityDesc: "Des élèves partageant les mêmes idées, prêts à partager leurs progrès",
    methodBentoAppLabel: "Bientôt disponible",
    methodBentoAppTitle: "Application de pratique",
    methodBentoAppDesc: "Vos progrès, partitions et métriques en un seul endroit",
    methodBentoTopicsTitle: "Choisissez votre répertoire",
    methodBentoTopicsDesc: "Personnalisez votre plan d'étude par style",
    methodBentoTags: ["Classique", "Jazz", "Pop & Latin", "Bandes sonores", "Improvisation", "Technique"],
    methodCards: [
      { mark: "I", icon: "file", title: "Évaluation & bases", desc: "Nous évaluons votre niveau réel, corrigeons la posture et la main, et établissons la lecture musicale dès le premier exercice — pas après 10 cours.", tag: "Semaines 1–3" },
      { mark: "II", icon: "compass", title: "Répertoire guidé", desc: "Vous choisissez un vrai morceau à jouer et nous le travaillons partie par partie, avec des retours à chaque séance et des exercices techniques adaptés.", tag: "Semaines 4–10" },
      { mark: "III", icon: "star", title: "Interprétation & scène", desc: "Nous peaufinons la dynamique, le phrasé et l'expression. Vous terminez le cours avec un morceau prêt à enregistrer, jouer en famille ou partager en ligne.", tag: "Semaines 11–12" },
    ],
    methodShowcaseTitle: "Pratiquez avec un suivi réel, pas seulement de la bonne volonté",
    methodShowcaseDesc: "Chaque élève a accès à la plateforme de pratique : vidéos téléchargeables, partitions annotées et métriques de progression par morceau.",
    methodShowcaseItems: [
      "Vidéos HD disponibles à vie",
      "Partitions numériques avec annotations personnalisées",
      "Correction vidéo hebdomadaire, en moins de 48h",
    ],
    methodPhoneProgress: "Mes progrès",
    methodWeek: "Semaine 6 sur 12",
    methodContinue: "Continuer la pratique",

    /* ── COURSES ── */
    coursesEyebrow: "— Catalogue",
    coursesTitle: "Choisissez votre prochain morceau",
    coursesSub: "Quatre programmes, chacun conçu pour un point de départ différent. Tous incluent des cours en direct, du matériel téléchargeable et une correction personnalisée.",
    coursesSeeDetail: "Voir les détails →",
    coursesPriceUnit: "/mois",
    courses: [
      { id: "depuis-zero", icon: "piano", featured: false, ribbon: null, level: "Débutant", title: "Piano de Zéro", desc: "Lecture musicale, posture, premières gammes et votre premier morceau complet en 8 semaines.", duration: "8 semaines", mode: "Individuel", price: 45 },
      { id: "repertoire-technique", icon: "compass", featured: true, ribbon: "Le plus choisi", level: "Intermédiaire", title: "Répertoire & Technique", desc: "Chopin, Debussy et piano pop latin. Nous travaillons 3 morceaux adaptés avec technique avancée.", duration: "12 semaines", mode: "Individuel", price: 75 },
      { id: "improvisation-jazz", icon: "notes", featured: false, ribbon: null, level: "Avancé", title: "Improvisation & Jazz", desc: "Harmonie fonctionnelle, voicings, walking bass et comment improviser sur n'importe quel standard.", duration: "10 semaines", mode: "Individuel", price: 85 },
      { id: "mentorat-groupe", icon: "people", featured: false, ribbon: null, level: "Tous niveaux", title: "Mentorat en Groupe en Direct", desc: "Cours de groupe hebdomadaires par niveau + communauté privée pour montrer vos progrès.", duration: "Continu", mode: "Groupe", price: 25 },
    ],

    /* ── COMMUNITY ── */
    communityEyebrow: "— Communauté",
    communityTitle: "Vous ne jouez pas seul.|Vous jouez en communauté.",
    communitySub: "Plus de 500 élèves partagent progrès, questions et enregistrements dans notre groupe privé. Chaque semaine, une séance de questions en direct.",
    communityActiveStudents: "Élèves actifs",
    communityCountries: "dans 9 pays",
    testimonials: [
      { pos: 1, size: "md", avatar: 12, quote: "\"En 3 mois je joue déjà tout le Nocturne.\"", name: "Camila R." },
      { pos: 2, size: "md", avatar: 33, quote: "\"Cela a changé ma façon d'écouter la musique.\"", name: "Andrés F." },
      { pos: 3, size: "lg", avatar: 47, quote: "\"Professeur incroyablement didactique.\"", name: "Marcela T." },
      { pos: 4, size: "md", avatar: 5, quote: "\"Les corrections sont rapides et claires.\"", name: "Diego S." },
      { pos: 5, size: "lg", avatar: 65, quote: "\"Je n'ai jamais eu l'impression de partir de zéro.\"", name: "Valentina P." },
      { pos: 6, size: "md", avatar: 21, quote: "\"Une patience que je n'avais jamais vue.\"", name: "Roberto M." },
      { pos: 7, size: "md", avatar: 58, quote: "\"Je joue maintenant au récital de l'école.\"", name: "Sofía L." },
    ],

    /* ── PRICING ── */
    pricingEyebrow: "— Investissement",
    pricingTitle: "Des plans clairs, sans petits caractères",
    pricingSub: "Tous les plans incluent l'accès à vie au matériel enregistré et une garantie de 14 jours.",
    pricingMonthly: "Mensuel",
    pricingYearly: "Annuel",
    pricingYearlyNote: "– 2 mois gratuits",
    pricingPeriodMonthly: "/mois",
    pricingPeriodYearly: "/mois · facturé annuellement",
    pricingFootnote: "Vous ne savez pas lequel choisir ?",
    pricingFootnoteLink: "Écrivez-moi et je vous recommande le plan selon votre niveau →",
    pricingPlans: [
      { id: "essentiel", featured: false, name: "Essentiel", desc: "Pour ceux qui débutent de zéro et veulent des bases solides.", monthly: 45, yearly: 38, features: ["1 cours individuel par semaine", "Matériel téléchargeable à vie", "Correction vidéo toutes les 2 semaines", "Accès à la communauté privée"], cta: "Choisir Essentiel", ctaVariant: "outline" },
      { id: "intensif", featured: true, badge: "Recommandé", name: "Intensif", desc: "Le plan de la majorité : progression rapide avec un suivi étroit.", monthly: 75, yearly: 63, features: ["2 cours individuels par semaine", "Matériel téléchargeable à vie", "Correction vidéo hebdomadaire en 48h", "Accès à la communauté privée", "Répertoire personnalisé"], cta: "Choisir Intensif", ctaVariant: "primary" },
      { id: "groupe", featured: false, name: "Mentorat en Groupe", desc: "Pour apprendre en communauté, avec un budget ajusté.", monthly: 25, yearly: 21, features: ["1 cours de groupe par semaine (max. 6 élèves)", "Matériel téléchargeable à vie", "Séance de questions en direct mensuelle", "Accès à la communauté privée"], cta: "Choisir Groupe", ctaVariant: "outline" },
    ],

    /* ── FINAL CTA ── */
    ctaEyebrow: "— Commençons",
    ctaTitle: "Votre premier morceau|commence par un cours.",
    ctaSub: "Réservez un cours de diagnostic gratuit de 20 minutes. Nous parlerons de votre niveau, vos objectifs, et nous construirons ensemble le plan qui vous convient — sans engagement.",
    ctaBtn: "Réserver un cours gratuit",
    ctaWhatsapp: "Écrivez-moi sur WhatsApp",

    /* ── FOOTER ── */
    footerNav: "Navigation",
    footerNavLinks: [
      { href: "#sobre-mi", label: "À propos" },
      { href: "#metodo", label: "Méthode" },
      { href: "#cursos", label: "Cours" },
      { href: "#planes", label: "Tarifs" },
    ],
    footerCourses: "Cours",
    footerCourseLinks: [
      { href: "#cursos", label: "Piano de Zéro" },
      { href: "#cursos", label: "Répertoire & Technique" },
      { href: "#cursos", label: "Improvisation & Jazz" },
      { href: "#cursos", label: "Mentorat en Groupe" },
    ],
    footerContact: "Contact",
    footerCopyright: "© 2026 Jesús Molina. Tous droits réservés.",
    footerTagline: "Fait avec soin, note par note.",
  },
};

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const t = translations[language];

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, language, setLanguage, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
