import { useEffect, useRef } from "react";

const BackgroundEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Star particles
    const stars = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.3 + 0.05,
      opacity: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Matrix rain characters
    const matrixColumns = 6;
    const matrixChars = "01アイウエオカキクケコ∞∑∏".split("");
    const matrixDrops = Array.from({ length: matrixColumns }, () => ({
      x: 0,
      y: Math.random() * -500,
      speed: Math.random() * 1.5 + 0.5,
      chars: Array.from({ length: 12 }, () => matrixChars[Math.floor(Math.random() * matrixChars.length)]),
    }));
    // Position matrix columns on sides
    matrixDrops.forEach((d, i) => {
      d.x = i < 3 ? 10 + i * 16 : canvas.width - 50 + (i - 3) * 16;
    });

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Stars
      stars.forEach((s) => {
        s.y += s.speed;
        s.pulse += 0.02;
        if (s.y > canvas.height) { s.y = 0; s.x = Math.random() * canvas.width; }
        const o = s.opacity * (0.6 + Math.sin(s.pulse) * 0.4);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${o})`;
        ctx.fill();
      });

      // Matrix rain
      matrixDrops.forEach((d) => {
        d.y += d.speed;
        if (d.y > canvas.height + 200) {
          d.y = Math.random() * -300;
          d.chars = d.chars.map(() => matrixChars[Math.floor(Math.random() * matrixChars.length)]);
        }
        d.chars.forEach((c, ci) => {
          const cy = d.y + ci * 18;
          if (cy < 0 || cy > canvas.height) return;
          const fade = 1 - ci / d.chars.length;
          ctx.font = "11px 'IBM Plex Mono'";
          ctx.fillStyle = `rgba(0, 212, 255, ${0.025 * fade})`;
          ctx.fillText(c, d.x, cy);
        });
      });

      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Animated mesh gradient orbs */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "hsl(187 100% 50%)",
          top: "10%",
          left: "20%",
          animation: "orb-drift-1 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full opacity-15 blur-[100px]"
        style={{
          background: "hsl(263 84% 58%)",
          top: "50%",
          right: "10%",
          animation: "orb-drift-2 25s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-10 blur-[90px]"
        style={{
          background: "hsl(38 92% 50%)",
          bottom: "20%",
          left: "40%",
          animation: "orb-drift-3 18s ease-in-out infinite",
        }}
      />

      {/* Canvas for stars + matrix */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Perspective grid */}
      <div className="perspective-grid" />

      {/* Scanlines */}
      <div className="scanline-overlay" />
      <div className="scanline-bar" />
    </div>
  );
};

export default BackgroundEffects;
