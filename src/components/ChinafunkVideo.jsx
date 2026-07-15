import { useApp } from '../context/AppContext';

const featuredItems = [
  {
    id: 'chinafunk',
    title: 'Chinafunk',
    label: 'Destacado principal',
    description: 'Una pieza vibrante que reúne ritmo, energía y una presencia escénica difícil de olvidar.',
  },
  {
    id: 'piano-en-vivo',
    title: 'Piano en vivo',
    label: 'En escena',
    description: 'Momentos de improvisación y conexión con el público, donde cada interpretación se vuelve única.',
  },
  {
    id: 'improvisacion',
    title: 'Improvisación',
    label: 'Nueva propuesta',
    description: 'Una mirada creativa al piano, pensada para quienes buscan explorar más allá de la partitura.',
  },
];

export default function ChinafunkVideo() {
  const { t } = useApp();

  return (
    <section className="chinafunk" id="destacados">
      <div className="chinafunk-container">
        <div className="chinafunk-text" data-reveal>
          <div className="section-eyebrow">{t.featuredEyebrow}</div>
          <h2 className="section-title">{t.featuredTitle}</h2>
          <p className="chinafunk-sub">
            {t.featuredSub}
          </p>
        </div>

        <div className="featured-grid" data-reveal>
          {featuredItems.map((item) => (
            <article className="featured-card" key={item.id}>
              <div className="featured-card-media">
                <video
                  className="featured-card-video"
                  src={`${import.meta.env.BASE_URL}video/0709.mp4`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                ></video>
                <span className="featured-card-chip">{item.label}</span>
              </div>
              <div className="featured-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#contacto" className="featured-card-link">
                  {t.featuredCta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
