import { useRef, useState, useEffect, useCallback } from "react";
import logo from "@/assets/logo.jpeg";

const ParallaxLogo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((clientX: number, clientY: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const x = ((clientX - cx) / (rect.width / 2)) * 15;
    const y = ((clientY - cy) / (rect.height / 2)) * -15;
    setTilt({ x: Math.max(-15, Math.min(15, x)), y: Math.max(-15, Math.min(15, y)) });
  }, []);

  useEffect(() => {
    const onMouse = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [handleMove]);

  return (
    <div ref={containerRef} className="relative flex items-center justify-center" style={{ perspective: "600px" }}>
      {/* Orbiting particle ring */}
      <div
        className="absolute w-28 h-28 rounded-full border border-primary/20"
        style={{ animation: "orbit-ring 8s linear infinite" }}
      >
        {[0, 90, 180, 270].map((deg) => (
          <div
            key={deg}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${deg}deg) translateX(56px) translateY(-50%)`,
              boxShadow: "var(--glow-cyan)",
              animation: "orbit-pulse 2s ease-in-out infinite",
              animationDelay: `${deg * 5}ms`,
            }}
          />
        ))}
      </div>

      {/* Logo with 3D tilt + holographic shimmer */}
      <div
        className="relative h-20 w-20 rounded-2xl overflow-hidden will-change-transform"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transition: "transform 0.1s ease-out",
          boxShadow: "var(--glow-cyan)",
        }}
      >
        <img src={logo} alt="IT2LAB Logo" className="h-full w-full object-cover" />
        {/* Holographic overlay */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            background: "linear-gradient(135deg, hsl(187 100% 50% / 0.4), transparent 40%, hsl(263 84% 58% / 0.4) 60%, transparent 80%, hsl(38 92% 50% / 0.3))",
            backgroundSize: "200% 200%",
            animation: "holo-shift 3s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxLogo;
