import { useEffect } from 'react';

/* Palette */
const COL = {
  white: '#f5eddf',
  whiteMid: '#e8dfd0',
  whiteBot: '#d8cfbf',
  black: '#181614',
  blackMid: '#221f1c',
  blackTop: '#2a2722',
};

const NUM_WHITE = 24; // keys visible (~3 octaves + extra)
// White key pattern per octave (true = has black key to its right)
const HAS_BLACK_PATTERN = [true, true, false, true, true, true, false]; // C D - F G A -

// White keys: 0=C3…6=B3, 7=C4…13=B4, 14=C5…20=B5, 21=C6…
// Black keys: 0=C#3,1=D#3,2=F#3,3=G#3,4=A#3, 5=C#4…9=A#4, 10=C#5…14=A#5, 15=C#6…
const FRAMES = [
  { w: [], b: [] }, // 0 – rest
  { w: [{ i: 14, v: 0.6 }], b: [] }, // 1 – C5 softly strikes
  { w: [{ i: 14, v: 0.95 }, { i: 16, v: 0.85 }, { i: 18, v: 0.8 }], b: [] }, // 2 – C major
  { w: [{ i: 14, v: 1 }, { i: 16, v: 0.9 }, { i: 18, v: 0.85 }, { i: 21, v: 0.75 }], b: [] }, // 3
  { w: [{ i: 14, v: 0.9 }, { i: 15, v: 0.75 }, { i: 16, v: 0.85 }, { i: 17, v: 0.7 }, { i: 18, v: 0.95 }], b: [] }, // 4
  { w: [{ i: 18, v: 0.95 }, { i: 20, v: 0.85 }, { i: 22, v: 0.8 }], b: [] }, // 5 – G major
  { w: [{ i: 19, v: 1 }, { i: 21, v: 0.9 }, { i: 23, v: 0.85 }], b: [] }, // 6 – Am
  { w: [{ i: 17, v: 0.9 }, { i: 19, v: 0.85 }, { i: 21, v: 0.8 }], b: [{ i: 12, v: 0.6 }] }, // 7 – F major
  { w: [{ i: 12, v: 0.9 }, { i: 16, v: 0.8 }, { i: 19, v: 0.85 }, { i: 21, v: 0.75 }, { i: 23, v: 0.7 }], b: [] }, // 8
  { w: [{ i: 14, v: 1 }, { i: 16, v: 0.9 }, { i: 18, v: 0.85 }, { i: 20, v: 0.7 }], b: [] }, // 9 – Cmaj7
  {
    w: [{ i: 9, v: 1 }, { i: 11, v: 0.9 }, { i: 13, v: 0.85 }, { i: 16, v: 0.8 }, { i: 18, v: 0.75 }, { i: 23, v: 0.7 }],
    b: [{ i: 7, v: 0.55 }, { i: 12, v: 0.5 }],
  }, // 10
  {
    w: [
      { i: 5, v: 1 }, { i: 7, v: 1 }, { i: 9, v: 1 }, { i: 12, v: 0.95 }, { i: 14, v: 0.9 },
      { i: 16, v: 0.85 }, { i: 19, v: 0.9 }, { i: 21, v: 0.85 }, { i: 23, v: 0.8 },
    ],
    b: [{ i: 4, v: 0.7 }, { i: 6, v: 0.6 }, { i: 9, v: 0.65 }, { i: 14, v: 0.55 }],
  }, // 11 – grand finale
];

function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

/**
 * Draws the fully-generated (no image assets) animated piano background
 * used behind the hero. Plays a short intro sequence once the loader
 * finishes (`piano:enter` window event), then hands control over to
 * scroll position for the rest of the hero section.
 */
export function usePianoCanvasBg(canvasRef, heroId = 'inicio') {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let layout = null;
    let W = 0, H = 0;

    function buildLayout() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;

      const wkW = W / NUM_WHITE;
      const keyAreaH = H * 0.46;
      const keyAreaY = H - keyAreaH;
      const wkH = keyAreaH;
      const bkW = wkW * 0.58;
      const bkH = wkH * 0.63;

      const whites = [];
      const blacks = [];
      let bkIdx = 0;

      for (let i = 0; i < NUM_WHITE; i++) {
        const octPos = i % 7;
        whites.push({ x: i * wkW + 1, y: keyAreaY, w: wkW - 2, h: wkH, idx: i });
        if (HAS_BLACK_PATTERN[octPos]) {
          blacks.push({ x: (i + 1) * wkW - bkW / 2, y: keyAreaY, w: bkW, h: bkH, idx: bkIdx });
          bkIdx++;
        }
      }
      layout = { whites, blacks, wkW, wkH, bkW, bkH, keyAreaY };
    }

    function drawScene(frameIdx) {
      if (!layout) return;
      const fd = FRAMES[Math.max(0, Math.min(FRAMES.length - 1, frameIdx))];

      const activeW = new Map();
      const activeB = new Map();
      (fd.w || []).forEach((k) => activeW.set(k.i, k.v));
      (fd.b || []).forEach((k) => activeB.set(k.i, k.v));

      ctx.clearRect(0, 0, W, H);

      const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
      bgGrad.addColorStop(0, 'rgba(10,9,7,0)');
      bgGrad.addColorStop(0.35, 'rgba(10,9,7,0.5)');
      bgGrad.addColorStop(1, 'rgba(8,7,5,0.92)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      if (activeW.size > 0 || activeB.size > 0) {
        const totalIntensity = [...activeW.values()].reduce((a, b) => a + b, 0) / 6;
        const gGrad = ctx.createRadialGradient(W * 0.5, layout.keyAreaY - 40, 10, W * 0.5, layout.keyAreaY, W * 0.7);
        gGrad.addColorStop(0, `rgba(201,162,39,${(totalIntensity * 0.18).toFixed(3)})`);
        gGrad.addColorStop(1, 'rgba(201,162,39,0)');
        ctx.fillStyle = gGrad;
        ctx.fillRect(0, 0, W, H);
      }

      const bodyGrad = ctx.createLinearGradient(0, layout.keyAreaY - 36, 0, layout.keyAreaY);
      bodyGrad.addColorStop(0, 'rgba(15,13,10,0.9)');
      bodyGrad.addColorStop(1, 'rgba(15,13,10,0.0)');
      ctx.fillStyle = bodyGrad;
      ctx.fillRect(0, layout.keyAreaY - 36, W, 36);

      /* White keys */
      layout.whites.forEach((k) => {
        const intensity = activeW.get(k.idx) || 0;
        const isActive = intensity > 0;

        ctx.shadowColor = 'rgba(0,0,0,0.55)';
        ctx.shadowBlur = 8;
        ctx.shadowOffsetY = 3;

        const grad = ctx.createLinearGradient(k.x, k.y, k.x, k.y + k.h);
        if (isActive) {
          grad.addColorStop(0, `rgba(255,248,228,${intensity})`);
          grad.addColorStop(0.3, `rgba(245,230,180,${intensity * 0.95})`);
          grad.addColorStop(0.8, `rgba(230,200,120,${intensity * 0.85})`);
          grad.addColorStop(1, `rgba(200,160,60,${intensity * 0.7})`);
        } else {
          grad.addColorStop(0, COL.white);
          grad.addColorStop(0.5, COL.whiteMid);
          grad.addColorStop(1, COL.whiteBot);
        }
        ctx.fillStyle = grad;
        drawRoundedRect(ctx, k.x, k.y, k.w, k.h, 4);
        ctx.fill();

        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetY = 0;

        ctx.strokeStyle = isActive ? `rgba(201,162,39,${intensity * 0.5})` : 'rgba(255,255,255,0.4)';
        ctx.lineWidth = 0.5;
        ctx.stroke();

        if (isActive) {
          const glowIntensity = intensity * 0.55;
          const gGrad = ctx.createRadialGradient(
            k.x + k.w / 2, k.y + k.h * 0.6, k.w * 0.1,
            k.x + k.w / 2, k.y + k.h * 0.6, k.w * 1.8
          );
          gGrad.addColorStop(0, `rgba(201,162,39,${glowIntensity})`);
          gGrad.addColorStop(0.5, `rgba(201,162,39,${glowIntensity * 0.3})`);
          gGrad.addColorStop(1, 'rgba(201,162,39,0)');
          ctx.fillStyle = gGrad;
          ctx.fillRect(k.x - k.w, k.y, k.w * 3, k.h);

          const rayGrad = ctx.createLinearGradient(k.x + k.w / 2, k.y, k.x + k.w / 2, layout.keyAreaY - 80);
          rayGrad.addColorStop(0, `rgba(201,162,39,${intensity * 0.2})`);
          rayGrad.addColorStop(1, 'rgba(201,162,39,0)');
          ctx.fillStyle = rayGrad;
          ctx.fillRect(k.x + k.w * 0.2, layout.keyAreaY - 80, k.w * 0.6, 80);
        }
      });

      ctx.strokeStyle = 'rgba(0,0,0,0.35)';
      ctx.lineWidth = 1;
      layout.whites.forEach((k) => {
        ctx.beginPath();
        ctx.moveTo(k.x - 0.5, k.y);
        ctx.lineTo(k.x - 0.5, k.y + k.h);
        ctx.stroke();
      });

      /* Black keys (drawn on top) */
      layout.blacks.forEach((k) => {
        const intensity = activeB.get(k.idx) || 0;
        const isActive = intensity > 0;

        ctx.shadowColor = 'rgba(0,0,0,0.8)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetY = 4;

        const grad = ctx.createLinearGradient(k.x, k.y, k.x, k.y + k.h);
        if (isActive) {
          grad.addColorStop(0, `rgba(80,60,10,${intensity})`);
          grad.addColorStop(0.4, `rgba(50,35,5,${intensity})`);
          grad.addColorStop(1, `rgba(20,15,2,${intensity})`);
        } else {
          grad.addColorStop(0, COL.blackTop);
          grad.addColorStop(0.4, COL.blackMid);
          grad.addColorStop(1, COL.black);
        }
        ctx.fillStyle = grad;
        drawRoundedRect(ctx, k.x, k.y, k.w, k.h, 3);
        ctx.fill();

        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetY = 0;

        const sheenGrad = ctx.createLinearGradient(k.x, k.y, k.x + k.w, k.y + k.h * 0.15);
        sheenGrad.addColorStop(0, 'rgba(255,255,255,0.10)');
        sheenGrad.addColorStop(1, 'rgba(255,255,255,0.00)');
        ctx.fillStyle = sheenGrad;
        drawRoundedRect(ctx, k.x, k.y, k.w, k.h * 0.15, 3);
        ctx.fill();

        if (isActive) {
          const gGrad = ctx.createRadialGradient(
            k.x + k.w / 2, k.y + k.h * 0.5, 2,
            k.x + k.w / 2, k.y + k.h * 0.5, k.w * 2.2
          );
          gGrad.addColorStop(0, `rgba(232,200,71,${intensity * 0.7})`);
          gGrad.addColorStop(0.6, `rgba(201,162,39,${intensity * 0.25})`);
          gGrad.addColorStop(1, 'rgba(201,162,39,0)');
          ctx.fillStyle = gGrad;
          ctx.fillRect(k.x - k.w * 0.8, k.y, k.w * 2.6, k.h);
        }
      });

      const shadowGrad = ctx.createLinearGradient(0, layout.keyAreaY, 0, layout.keyAreaY + 20);
      shadowGrad.addColorStop(0, 'rgba(0,0,0,0.6)');
      shadowGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = shadowGrad;
      ctx.fillRect(0, layout.keyAreaY, W, 20);

      /* Floor reflection */
      ctx.save();
      ctx.globalAlpha = 0.07;
      ctx.scale(1, -0.15);
      ctx.drawImage(canvas, 0, -(H + H - layout.keyAreaY) * 6.67);
      ctx.restore();
    }

    let currentFrameF = 0;
    let targetFrame = 0;
    let rafId = null;

    function renderLoop() {
      currentFrameF += (targetFrame - currentFrameF) * 0.12;
      if (Math.abs(targetFrame - currentFrameF) < 0.01) currentFrameF = targetFrame;
      drawScene(Math.round(currentFrameF));
      rafId = requestAnimationFrame(renderLoop);
    }

    function triggerEntry() {
      buildLayout();
      renderLoop();

      canvas.classList.add('entering');
      setTimeout(() => {
        canvas.classList.remove('entering');
        canvas.classList.add('visible');
      }, 1800);

      setTimeout(() => { targetFrame = 1; }, 400);
      setTimeout(() => { targetFrame = 2; }, 900);
      setTimeout(() => { targetFrame = 3; }, 1400);
      setTimeout(() => { targetFrame = 0; }, 2800);
    }

    function onScroll() {
      const hero = document.getElementById(heroId);
      if (!hero || !canvas.classList.contains('visible')) return;
      const heroTop = hero.getBoundingClientRect().top;
      const heroH = hero.offsetHeight;
      const scrolled = -heroTop;
      const progress = Math.max(0, Math.min(1, scrolled / (heroH * 0.85)));
      targetFrame = progress * (FRAMES.length - 1);
    }

    function onResize() {
      buildLayout();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('piano:enter', triggerEntry);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('piano:enter', triggerEntry);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [canvasRef, heroId]);
}
