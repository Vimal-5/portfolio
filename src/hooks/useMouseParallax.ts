import { useState, useEffect, useCallback } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function useMouseParallax(intensity: number = 0.02) {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setPosition({
        x: (e.clientX - centerX) * intensity,
        y: (e.clientY - centerY) * intensity,
      });
    },
    [intensity]
  );

  useEffect(() => {
    // Skip parallax on touch devices / reduced-motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = 'ontouchstart' in window;
    if (prefersReduced || isTouch) return;

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return position;
}
