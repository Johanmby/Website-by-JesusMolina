import { useTiltCards } from '../hooks/useTiltCards';
import { useApp } from '../context/AppContext';

const COURSE_ICONS = {
  piano: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="9" width="18" height="9" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 9V6a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  compass: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 12c2-6 5-9 9-9s7 3 9 9c-2 6-5 9-9 9s-7-3-9-9z" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  notes: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  people: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5M14 20c0-2.3 1.8-4 4.3-4 1.8 0 3.2 1 3.7 2.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
};

const CLOCK_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const PEOPLE_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM3 21v-1a6 6 0 0112 0v1M16 11a4 4 0 014 4v6" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export default function Courses() {
  useTiltCards();
  const { t } = useApp();

  return (
    <section className="courses" id="cursos">
      <div className="courses-header">
        <div className="section-eyebrow" data-reveal>{t.coursesEyebrow}</div>
        <h2 className="section-title" data-reveal>{t.coursesTitle}</h2>
        <p className="courses-sub" data-reveal>
          {t.coursesSub}
        </p>
      </div>

      <div className="courses-grid">
        {t.courses.map((course) => (
          <article
            className={`course-card${course.featured ? ' course-card-featured' : ''}`}
            data-reveal
            data-tilt
            key={course.id}
          >
            {course.ribbon && <div className="course-card-ribbon">{course.ribbon}</div>}
            <div className="course-card-top">
              <span className="course-card-level">{course.level}</span>
              <span className="course-card-icon">{COURSE_ICONS[course.icon]}</span>
            </div>
            <h3 className="course-card-title">{course.title}</h3>
            <p className="course-card-desc">{course.desc}</p>
            <div className="course-card-meta">
              <span>{CLOCK_ICON} {course.duration}</span>
              <span>{PEOPLE_ICON} {course.mode}</span>
            </div>
            <div className="course-card-footer">
              <span className="course-card-price">${course.price}<small>{t.coursesPriceUnit}</small></span>
              <a href="#planes" className="course-card-link">{t.coursesSeeDetail}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
