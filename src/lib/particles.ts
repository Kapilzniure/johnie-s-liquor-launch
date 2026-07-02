export type ParticleType = "snow" | "rain" | "firework" | "smoke";

interface DriftParticle {
  x: number;
  y: number;
  r: number;
  speedY: number;
  speedX: number;
  drift: number;
  opacity: number;
}

interface FireworkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
}

const BASE_COUNT: Record<ParticleType, number> = {
  snow: 70,
  rain: 120,
  firework: 0, // spawned in bursts, not a fixed pool
  smoke: 10,
};

const countForViewport = (type: ParticleType, width: number) => {
  const base = BASE_COUNT[type];
  if (width < 480) return Math.round(base * 0.35);
  if (width < 768) return Math.round(base * 0.6);
  return base;
};

/**
 * Starts a lightweight canvas particle loop on the given canvas element.
 * Returns a stop function that cancels the loop and removes listeners.
 */
export const startParticleSystem = (canvas: HTMLCanvasElement, type: ParticleType): (() => void) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let raf = 0;
  let running = true;

  const drift: DriftParticle[] = [];
  const fireworks: FireworkParticle[] = [];
  let nextBurstAt = 0;

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seedDrift();
  };

  const seedDrift = () => {
    drift.length = 0;
    if (type === "firework") return;
    const count = countForViewport(type, width);
    for (let i = 0; i < count; i++) {
      drift.push(makeDriftParticle(true));
    }
  };

  const makeDriftParticle = (initial = false): DriftParticle => {
    if (type === "snow") {
      return {
        x: Math.random() * width,
        y: initial ? Math.random() * height : -10,
        r: 1.5 + Math.random() * 2.5,
        speedY: 0.4 + Math.random() * 0.8,
        speedX: 0,
        drift: Math.random() * Math.PI * 2,
        opacity: 0.3 + Math.random() * 0.5,
      };
    }
    if (type === "rain") {
      return {
        x: Math.random() * width,
        y: initial ? Math.random() * height : -20,
        r: 10 + Math.random() * 10, // length of streak
        speedY: 6 + Math.random() * 4,
        speedX: -1.5,
        drift: 0,
        opacity: 0.15 + Math.random() * 0.15,
      };
    }
    // smoke — large, slow, very soft
    return {
      x: Math.random() * width,
      y: initial ? Math.random() * height : height + 40,
      r: 80 + Math.random() * 140,
      speedY: -(0.15 + Math.random() * 0.25),
      speedX: (Math.random() - 0.5) * 0.15,
      drift: Math.random() * Math.PI * 2,
      opacity: 0.02 + Math.random() * 0.04,
    };
  };

  const spawnFirework = () => {
    const cx = width * (0.2 + Math.random() * 0.6);
    const cy = height * (0.15 + Math.random() * 0.35);
    const hue = Math.floor(Math.random() * 360);
    const color = `hsl(${hue}, 85%, 60%)`;
    const count = 26;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const speed = 1.5 + Math.random() * 2;
      fireworks.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 60 + Math.random() * 30,
        color,
      });
    }
  };

  const step = () => {
    if (!running) return;
    ctx.clearRect(0, 0, width, height);

    if (type === "snow" || type === "rain" || type === "smoke") {
      for (const p of drift) {
        p.y += p.speedY;
        p.drift += 0.01;
        p.x += p.speedX + (type === "snow" ? Math.sin(p.drift) * 0.3 : 0);

        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = type === "smoke" ? "#ffffff" : "#ffffff";
        if (type === "rain") {
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + 2, p.y + p.r);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }

        const offscreen = type === "smoke" ? p.y < -p.r : p.y > height + 20;
        if (offscreen) Object.assign(p, makeDriftParticle(false));
      }
    }

    if (type === "firework") {
      if (performance.now() > nextBurstAt) {
        spawnFirework();
        nextBurstAt = performance.now() + 1800 + Math.random() * 2200;
      }
      for (let i = fireworks.length - 1; i >= 0; i--) {
        const p = fireworks[i];
        p.vy += 0.03; // gravity
        p.x += p.vx;
        p.y += p.vy;
        p.life += 1;
        const t = p.life / p.maxLife;
        if (t >= 1) {
          fireworks.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = 1 - t;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.globalAlpha = 1;
    raf = requestAnimationFrame(step);
  };

  const onVisibility = () => {
    running = document.visibilityState === "visible";
    if (running) raf = requestAnimationFrame(step);
    else cancelAnimationFrame(raf);
  };

  resize();
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", onVisibility);
  raf = requestAnimationFrame(step);

  return () => {
    running = false;
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", resize);
    document.removeEventListener("visibilitychange", onVisibility);
  };
};
