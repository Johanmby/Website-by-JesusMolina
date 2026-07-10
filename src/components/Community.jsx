import { useRef } from 'react';
import { useScatterCloud } from '../hooks/useScatterCloud';
import { useApp } from '../context/AppContext';

const FLOATERS = ['🎹', '🎵', '♪', '🎼', '♫'];

export default function Community() {
  const cloudRef = useRef(null);
  useScatterCloud(cloudRef);
  const { t } = useApp();
  const titleParts = t.communityTitle.split('|');

  return (
    <section className="community" id="alumnos">
      <div className="community-floaters" aria-hidden="true">
        {FLOATERS.map((f, i) => (
          <div className={`floater floater-${i + 1}`} key={i}><span>{f}</span></div>
        ))}
      </div>

      <div className="community-header">
        <div className="section-eyebrow section-eyebrow-light" data-reveal>{t.communityEyebrow}</div>
        <h2 className="section-title section-title-light" data-reveal>{titleParts[0]}<br />{titleParts[1]}</h2>
        <p className="community-sub" data-reveal>
          {t.communitySub}
        </p>
      </div>

      <div className="scatter-cloud" ref={cloudRef}>
        {t.testimonials.map((test) => (
          <div className={`scatter-item scatter-pos-${test.pos}${test.size === 'lg' ? ' scatter-lg' : ''}`} key={test.pos}>
            <div className="scatter-avatar"><img src={`https://i.pravatar.cc/120?img=${test.avatar}`} alt="" /></div>
            <p className="scatter-quote">{test.quote}<span>{test.name}</span></p>
          </div>
        ))}
        <div className="scatter-item scatter-pos-8">
          <div className="scatter-avatar avatar-more">+500</div>
          <p className="scatter-quote">{t.communityActiveStudents}<span>{t.communityCountries}</span></p>
        </div>
      </div>
    </section>
  );
}
