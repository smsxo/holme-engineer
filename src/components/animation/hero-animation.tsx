"use client";

import { useEffect, useRef } from "react";

// ─── Types ──────────────────────────────────────────────────
interface Panel {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotX: number;
  rotY: number;
  driftX: number;
  driftY: number;
  driftZ: number;
  rotSpeedX: number;
  rotSpeedY: number;
  opacity: number;
  hue: number;
}

// ─── Constants ──────────────────────────────────────────────
const PANEL_COUNT = 18;
const PERSPECTIVE = 800;
const MAX_DEPTH = 600;
const GLOW_BLUR = 12;
const BASE_HUE = 185;

// ── Pure helper: create a panel with random properties ──────
function createPanel(w: number, h: number): Panel {
  const spread = Math.max(w, h) * 0.8;
  return {
    x: (Math.random() - 0.5) * spread,
    y: (Math.random() - 0.5) * spread * 0.6,
    z: Math.random() * MAX_DEPTH,
    width: 60 + Math.random() * 140,
    height: 30 + Math.random() * 80,
    rotX: (Math.random() - 0.5) * Math.PI * 0.4,
    rotY: (Math.random() - 0.5) * Math.PI * 0.3,
    driftX: (Math.random() - 0.5) * 0.15,
    driftY: (Math.random() - 0.5) * 0.1,
    driftZ: -(0.08 + Math.random() * 0.18),
    rotSpeedX: (Math.random() - 0.5) * 0.0008,
    rotSpeedY: (Math.random() - 0.5) * 0.0006,
    opacity: 0.04 + Math.random() * 0.12,
    hue: BASE_HUE + (Math.random() - 0.5) * 25,
  };
}

/**
 * HeroAnimation
 *
 * Canvas-based animated background inspired by the first stage of
 * pimskie's "CSS Scroll Based Animations" CodePen (OPMQVjP).
 *
 * Recreates the 3D perspective-transformed rectangular panels that
 * emerge from depth — rendered as floating geometric shapes with
 * subtle cyan glow, drifting slowly through a projected 3D space.
 *
 * - GPU-accelerated via canvas
 * - Pauses when browser tab is inactive
 * - Adapts to viewport resize
 * - ~60 fps with minimal draw calls
 */
export function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animFrame = 0;
    let panels: Panel[] = [];
    let w = 0;
    let h = 0;

    // ── Resize canvas to match parent & DPR ──────────────
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.parentElement?.getBoundingClientRect();
      w = rect?.width ?? window.innerWidth;
      h = rect?.height ?? window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);

      if (panels.length === 0) {
        panels = Array.from({ length: PANEL_COUNT }, () => createPanel(w, h));
      }
    };

    // ── Project a 3D point to 2D screen coordinates ──────
    const project = (
      px: number,
      py: number,
      pz: number,
      cx: number,
      cy: number,
    ) => {
      const d = PERSPECTIVE / (PERSPECTIVE + pz);
      return { sx: cx + px * d, sy: cy + py * d, scale: d };
    };

    // ── Draw a single 3D-rotated panel ───────────────────
    const drawPanel = (
      ctx: CanvasRenderingContext2D,
      p: Panel,
      cx: number,
      cy: number,
    ) => {
      const cosX = Math.cos(p.rotX);
      const sinX = Math.sin(p.rotX);
      const cosY = Math.cos(p.rotY);
      const sinY = Math.sin(p.rotY);
      const hw = p.width / 2;
      const hh = p.height / 2;

      const corners: [number, number][] = [
        [-hw, -hh],
        [hw, -hh],
        [hw, hh],
        [-hw, hh],
      ];

      const projected = corners.map(([lx, ly]) => {
        const rx = lx * cosY;
        const rzA = lx * sinY;
        const ry = ly * cosX - rzA * sinX;
        const rz = ly * sinX + rzA * cosX;
        return project(p.x + rx, p.y + ry, p.z + rz, cx, cy);
      });

      const avgScale =
        projected.reduce((s, pt) => s + pt.scale, 0) / projected.length;
      const alpha = p.opacity * avgScale * avgScale;
      if (alpha < 0.003) return;

      ctx.save();

      if (alpha > 0.03) {
        ctx.shadowColor = `hsla(${p.hue}, 80%, 60%, ${alpha * 0.6})`;
        ctx.shadowBlur = GLOW_BLUR * avgScale;
      }

      ctx.beginPath();
      ctx.moveTo(projected[0].sx, projected[0].sy);
      for (let i = 1; i < projected.length; i++) {
        ctx.lineTo(projected[i].sx, projected[i].sy);
      }
      ctx.closePath();

      ctx.fillStyle = `hsla(${p.hue}, 70%, 55%, ${alpha * 0.35})`;
      ctx.fill();

      ctx.strokeStyle = `hsla(${p.hue}, 80%, 65%, ${alpha * 0.7})`;
      ctx.lineWidth = Math.max(0.5, avgScale * 1.2);
      ctx.stroke();

      ctx.restore();
    };

    // ── Main animation loop ──────────────────────────────
    const tick = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const cx = w / 2;
      const cy = h / 2;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < panels.length; i++) {
        const p = panels[i];

        p.x += p.driftX;
        p.y += p.driftY;
        p.z += p.driftZ;
        p.rotX += p.rotSpeedX;
        p.rotY += p.rotSpeedY;

        // Recycle panels that pass behind the camera or drift too far
        if (
          p.z < -PERSPECTIVE * 0.3 ||
          Math.abs(p.x) > w * 0.7 ||
          Math.abs(p.y) > h * 0.7
        ) {
          const spread = Math.max(w, h) * 0.8;
          p.x = (Math.random() - 0.5) * spread;
          p.y = (Math.random() - 0.5) * spread * 0.6;
          p.z = MAX_DEPTH + Math.random() * 200;
          p.rotX = (Math.random() - 0.5) * Math.PI * 0.4;
          p.rotY = (Math.random() - 0.5) * Math.PI * 0.3;
          p.opacity = 0.04 + Math.random() * 0.12;
        }

        drawPanel(ctx, p, cx, cy);
      }

      animFrame = requestAnimationFrame(tick);
    };

    // ── Visibility: pause when tab hidden ────────────────
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animFrame);
      } else {
        animFrame = requestAnimationFrame(tick);
      }
    };

    resize();

    // Skip animation if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Draw a single static frame instead of looping
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const cx = w / 2;
        const cy = h / 2;
        ctx.clearRect(0, 0, w, h);
        for (const p of panels) drawPanel(ctx, p, cx, cy);
      }
      return () => {
        window.removeEventListener("resize", resize);
      };
    }

    animFrame = requestAnimationFrame(tick);

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full pointer-events-none"
      style={{ willChange: "transform" }}
    />
  );
}
