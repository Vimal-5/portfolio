import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SkillRingProps {
  name: string;
  percentage: number;
  size?: number;
  strokeWidth?: number;
  delay?: number;
  color?: string;
}

export default function SkillRing({
  name,
  percentage,
  size = 110,
  strokeWidth = 6,
  delay = 0,
  color,
}: SkillRingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (count / 100) * circumference;

  // Determine color based on percentage if not provided
  const ringColor =
    color ||
    (percentage >= 80
      ? 'var(--color-accent-cyan)'
      : percentage >= 60
      ? 'var(--color-accent-blue)'
      : 'var(--color-accent-purple)');

  // Animate the count
  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * percentage);
      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, percentage, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        cursor: 'default',
      }}
      title={`${name}: ${percentage}%`}
    >
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          style={{ transform: 'rotate(-90deg)' }}
        >
          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(77, 124, 255, 0.08)"
            strokeWidth={strokeWidth}
          />
          {/* Progress ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={ringColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transition: 'stroke-dashoffset 0.05s linear',
              filter: `drop-shadow(0 0 6px ${ringColor})`,
            }}
          />
        </svg>
        {/* Center text */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: size > 100 ? 'var(--text-xl)' : 'var(--text-base)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
            }}
          >
            {count}%
          </span>
        </div>
      </div>
      <span
        style={{
          fontSize: 'var(--text-xs)',
          fontWeight: 500,
          color: 'var(--color-text-secondary)',
          textAlign: 'center',
          maxWidth: `${size + 20}px`,
          lineHeight: 1.3,
        }}
      >
        {name}
      </span>
    </motion.div>
  );
}
