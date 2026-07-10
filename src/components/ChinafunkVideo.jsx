export default function ChinafunkVideo() {
  return (
    <section className="chinafunk" id="chinafunk">
      <div className="chinafunk-container">
        <div className="chinafunk-text" data-reveal>
          <div className="section-eyebrow">Destacado</div>
          <h2 className="section-title">Chinafunk</h2>
          <p className="chinafunk-sub">
            Descubre una de las piezas más populares de Jesús Molina. Una explosión de ritmo, virtuosismo y energía pura en el escenario.
          </p>
        </div>
        <div className="chinafunk-video-wrapper" data-reveal>
          <video 
            className="chinafunk-video" 
            src={`${import.meta.env.BASE_URL}video/0709.mp4`} 
            autoPlay 
            muted 
            loop 
            playsInline
            controls
          ></video>
        </div>
        <div className="chinafunk-actions" data-reveal>
          <a href={`${import.meta.env.BASE_URL}video/0709.mp4`} target="_blank" rel="noreferrer" className="btn btn-primary">
            Mirar ahora
          </a>
        </div>
      </div>
    </section>
  );
}
