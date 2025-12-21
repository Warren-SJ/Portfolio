'use client';

import React, { useEffect, useRef } from 'react';

type PCBTraceSegment = { x1: number; y1: number; x2: number; y2: number };
type PCBTrace = { segments: PCBTraceSegment[]; hasVia: boolean; viaSize: number };
type Particle = {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  a: number;
};

export function PCBBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -2000, y: -2000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let traces: PCBTrace[] = [];
    let particles: Particle[] = [];
    let lastTime = performance.now();

    const generateTraces = () => {
      const currentTraces: PCBTrace[] = [];
      const numTraces = Math.floor((canvas.width * canvas.height) / 15000);

      for (let i = 0; i < numTraces; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        const segments: PCBTraceSegment[] = [];
        const numSegments = 2 + Math.floor(Math.random() * 4);

        for (let j = 0; j < numSegments; j++) {
          const length = 30 + Math.random() * 80;
          const angles = [
            0,
            Math.PI / 4,
            Math.PI / 2,
            (3 * Math.PI) / 4,
            Math.PI,
            -Math.PI / 4,
            -Math.PI / 2,
            (-3 * Math.PI) / 4,
          ];
          const angle = angles[Math.floor(Math.random() * angles.length)];
          const nextX = x + Math.cos(angle) * length;
          const nextY = y + Math.sin(angle) * length;
          segments.push({ x1: x, y1: y, x2: nextX, y2: nextY });
          x = nextX;
          y = nextY;
        }

        currentTraces.push({
          segments,
          hasVia: Math.random() > 0.4,
          viaSize: 1.5 + Math.random() * 1.5,
        });
      }

      traces = currentTraces;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateTraces();

      const particleCount = Math.floor((canvas.width * canvas.height) / 20000);
      particles = Array.from({ length: particleCount }, (): Particle => {
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: 0.6 + Math.random() * 1.6,
          vy: 0.25 + Math.random() * 0.9,
          vx: -0.15 + Math.random() * 0.3,
          a: 0.3 + Math.random() * 0.05,
        };
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    const render = () => {
      const now = performance.now();
      const dt = Math.min(2, (now - lastTime) / 16.67);
      lastTime = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;
      const glowRadius = 220;

      for (const p of particles) {
        p.y += p.vy * dt;
        p.x += p.vx * dt;

        if (p.y - p.r > canvas.height) {
          p.y = -p.r;
          p.x = Math.random() * canvas.width;
        }
        if (p.x + p.r < 0) p.x = canvas.width + p.r;
        if (p.x - p.r > canvas.width) p.x = -p.r;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${p.a})`;
        ctx.fill();
      }

      traces.forEach((trace) => {
        trace.segments.forEach((seg) => {
          const midX = (seg.x1 + seg.x2) / 2;
          const midY = (seg.y1 + seg.y2) / 2;
          const dist = Math.sqrt((midX - mx) ** 2 + (midY - my) ** 2);

          const isGlowing = dist < glowRadius;
          const glowIntensity = isGlowing ? (1 - dist / glowRadius) * 0.25 : 0;
          const baseOpacity = 0.025;

          ctx.beginPath();
          ctx.moveTo(seg.x1, seg.y1);
          ctx.lineTo(seg.x2, seg.y2);
          ctx.lineWidth = isGlowing ? 1.0 : 0.6;
          ctx.strokeStyle = isGlowing
            ? `rgba(59, 130, 246, ${baseOpacity + glowIntensity})`
            : `rgba(30, 41, 59, ${baseOpacity})`;
          ctx.stroke();

          if (isGlowing) {
            ctx.shadowBlur = 6 * glowIntensity;
            ctx.shadowColor = 'rgba(59, 130, 246, 0.4)';
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        });

        if (trace.hasVia) {
          const lastSeg = trace.segments[trace.segments.length - 1];
          const dist = Math.sqrt((lastSeg.x2 - mx) ** 2 + (lastSeg.y2 - my) ** 2);
          const isGlowing = dist < glowRadius;
          const glowIntensity = isGlowing ? (1 - dist / glowRadius) * 0.3 : 0;

          ctx.beginPath();
          ctx.arc(lastSeg.x2, lastSeg.y2, trace.viaSize, 0, Math.PI * 2);
          ctx.fillStyle = isGlowing
            ? `rgba(96, 165, 250, ${0.04 + glowIntensity})`
            : 'rgba(30, 41, 59, 0.04)';
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}
