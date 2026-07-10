import { useRef } from 'react';
import { useCustomCursor } from '../hooks/useCustomCursor';
import { useScrollProgress } from '../hooks/useScrollProgress';

/** Groups the small, page-wide decorative bits: grain overlay, custom
 *  cursor and the top scroll-progress bar. */
export default function Chrome() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const barRef = useRef(null);

  useCustomCursor(dotRef, ringRef);
  useScrollProgress(barRef);

  return (
    <>
      <div className="grain"></div>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
      <div className="scroll-progress">
        <div className="scroll-progress-bar" ref={barRef}></div>
      </div>
    </>
  );
}
