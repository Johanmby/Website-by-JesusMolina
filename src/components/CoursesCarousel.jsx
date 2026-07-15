import { useRef, useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

const DUMMY_PLATFORM_COURSES = [
  {
    id: 1,
    title: 'Piano Pro: Armonía y Composición Creativa',
    platform: 'Udemy',
    platformColor: '#A435F0',
    rating: 4.9,
    reviews: 1240,
    duration: '15 horas',
    level: 'Intermedio - Avanzado',
    image: 'images/image1.png',
    link: '#',
    badge: 'Best Seller'
  },
  {
    id: 2,
    title: 'Improvisación de Jazz para Pianistas',
    platform: 'Domestika',
    platformColor: '#FF5A5F',
    rating: 4.8,
    reviews: 850,
    duration: '8 horas',
    level: 'Todos los niveles',
    image: 'images/image3.png',
    link: '#',
    badge: 'Popular'
  },
  {
    id: 3,
    title: 'Bases del Piano: Técnica Clásica y Postura',
    platform: 'Hotmart',
    platformColor: '#F75A22',
    rating: 4.7,
    reviews: 620,
    duration: '10 horas',
    level: 'Inicial',
    image: 'images/image1.png',
    link: '#',
    badge: 'Nuevo'
  },
  {
    id: 4,
    title: 'Composición de Bandas Sonoras en el Piano',
    platform: 'Udemy',
    platformColor: '#A435F0',
    rating: 4.9,
    reviews: 430,
    duration: '12 horas',
    level: 'Avanzado',
    image: 'images/image3.png',
    link: '#',
    badge: 'Destacado'
  },
  {
    id: 5,
    title: 'Ritmos Latinos y Montuno para Piano Popular',
    platform: 'Crehana',
    platformColor: '#00B4FF',
    rating: 4.8,
    reviews: 310,
    duration: '6 horas',
    level: 'Intermedio',
    image: 'images/image1.png',
    link: '#',
    badge: null
  }
];

export default function CoursesCarousel() {
  const { t } = useApp();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollLimits = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollLimits);
      // Run once on load
      checkScrollLimits();
      // Handle resize
      window.addEventListener('resize', checkScrollLimits);
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScrollLimits);
      window.removeEventListener('resize', checkScrollLimits);
    };
  }, []);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('.course-card')?.clientWidth || 320;
    const scrollAmount = (cardWidth + 24) * 2; // Scroll two cards at a time
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="courses-carousel-sec" id="cursos-disponibles">
      <div className="carousel-container">
        <div className="carousel-header">
          <div className="carousel-header-info">
            <span className="section-eyebrow" data-reveal>{t.coursesCarouselEyebrow}</span>
            <h2 className="section-title" data-reveal>{t.coursesCarouselTitle}</h2>
            <p className="carousel-subtitle-text" data-reveal>{t.coursesCarouselSub}</p>
          </div>
          
          <div className="carousel-controls" data-reveal>
            <button 
              className={`carousel-btn prev-btn ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Anterior"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className={`carousel-btn next-btn ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Siguiente"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="carousel-track-wrapper" data-reveal>
          <div className="carousel-track" ref={scrollRef}>
            {DUMMY_PLATFORM_COURSES.map((course) => (
              <div className="course-card" key={course.id}>
                {course.badge && <span className="course-card-badge">{course.badge}</span>}
                <div className="course-card-image">
                  <img src={`${import.meta.env.BASE_URL}${course.image}`} alt={course.title} />
                  <div className="course-card-platform" style={{ '--platform-color': course.platformColor }}>
                    {course.platform}
                  </div>
                </div>
                
                <div className="course-card-content">
                  <div className="course-card-meta">
                    <span className="course-level">{course.level}</span>
                    <span className="course-duration">{course.duration}</span>
                  </div>
                  
                  <h3 className="course-card-title">{course.title}</h3>
                  
                  <div className="course-card-rating">
                    <div className="stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg 
                          key={i} 
                          width="14" 
                          height="14" 
                          viewBox="0 0 24 24" 
                          fill={i < Math.floor(course.rating) ? 'var(--bronce)' : 'none'}
                          stroke="var(--bronce)"
                          strokeWidth="1.5"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="rating-value">{course.rating}</span>
                    <span className="reviews-count">({course.reviews})</span>
                  </div>
                  
                  <a href={course.link} className="course-card-link">
                    <span>Ver curso</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
