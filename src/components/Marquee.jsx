import { Fragment } from 'react';

const ITEMS = [
  'NOCTURNOS DE CHOPIN',
  'IMPROVISACIÓN DE JAZZ',
  'ARMONÍA FUNCIONAL',
  'LECTURA A PRIMERA VISTA',
  'PIANO POPULAR LATINO',
  'TÉCNICA Y POSTURA',
];

export default function Marquee() {
  // Repeated twice so the CSS scroll-loop lines up seamlessly, same as the original markup.
  const track = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {track.map((item, i) => (
          <Fragment key={i}>
            <span>{item}</span>
            <span className="marquee-dot">●</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
