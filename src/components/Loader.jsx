import { useEffect, useState } from 'react';
import { useLoader } from '../hooks/useLoader';

const NOTES = ['♪', '♫', '♪', '♩', '♬', '♪', '♫', '♪'];

export default function Loader() {
  const { done, progress } = useLoader();
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setRemoved(true), 900);
    return () => clearTimeout(t);
  }, [done]);

  if (removed) return null;

  return (
    <div className={`loader${done ? ' done' : ''}`} id="loader">
      <div className="loader-scene">
        <div className="loader-particles">
          {NOTES.map((n, i) => (
            <span key={i} className={`loader-note loader-note-${i + 1}`}>{n}</span>
          ))}
        </div>

        <div className="loader-piano-wrapper">
          <div className="loader-piano">
            <div className="loader-piano-body">
              <div className="loader-piano-body-front"></div>
              <div className="loader-piano-body-top"></div>
              <div className="loader-piano-body-left"></div>
              <div className="loader-piano-body-right"></div>
              <div className="loader-piano-reflection"></div>
            </div>
            <div className="loader-piano-keys">
              {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                <div key={n} className={`loader-wkey loader-wkey-${n}`}></div>
              ))}
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className={`loader-bkey loader-bkey-${n}`}></div>
              ))}
            </div>
            <div className="loader-glow loader-glow-1"></div>
            <div className="loader-glow loader-glow-2"></div>
            <div className="loader-glow loader-glow-3"></div>
          </div>
        </div>

        <div className="loader-info">
          <div className="loader-brand">JESÚS MOLINA</div>
          <div className="loader-subtitle">P I A N O</div>
          <div className="loader-progress">
            <div className="loader-progress-track">
              <div className="loader-progress-fill" style={{ width: progress + '%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
