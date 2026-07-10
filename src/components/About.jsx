import { timeline } from '../data/timeline';

export default function About() {
  return (
    <section className="about" id="sobre-mi">
      <div className="about-grid">
        <div className="about-visual" data-reveal>
          <div className="about-photo-frame">
            <div className="about-photo">
              <img src={`${import.meta.env.BASE_URL}images/image3.png`} alt="Jesús Molina, pianista" className="about-photo-img" />
              <div className="about-photo-texture"></div>
            </div>
            <div className="about-photo-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              Concertista &amp; docente
            </div>
          </div>
          <div className="about-card-float about-card-float-1">
            <span className="about-card-float-num">2010</span>
            <span className="about-card-float-text">Debut como concertista</span>
          </div>
          <div className="about-card-float about-card-float-2">
            <span className="about-card-float-num">9</span>
            <span className="about-card-float-text">países con clases impartidas</span>
          </div>
        </div>

        <div className="about-content">
          <div className="section-eyebrow" data-reveal>— Quién te va a enseñar</div>
          <h2 className="section-title" data-reveal>
            El piano no se aprende<br /><em>memorizando teoría.</em><br />Se aprende tocando.
          </h2>
          <p className="about-text" data-reveal>
            Empecé a tocar a los 7 años en la sala de mi casa, en un piano vertical
            desafinado. Hoy he dado conciertos en 9 países y formado a cientos de
            estudiantes que llegaron sin saber leer una sola nota.
          </p>
          <p className="about-text" data-reveal>
            Mi método combina técnica clásica con repertorio que realmente quieres
            tocar: desde Chopin hasta tus canciones favoritas. Sin relleno, sin
            ejercicios eternos que no llevan a ningún lado.
          </p>

          <div className="about-timeline" data-reveal>
            {timeline.map((item) => (
              <div className="about-timeline-item" key={item.year}>
                <div className="about-timeline-year">{item.year}</div>
                <div className="about-timeline-text">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
