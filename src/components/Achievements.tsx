import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements } from '../data/achievements';
import { Trophy, Medal, Target } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  award: <Trophy size={28} />,
  certification: <Medal size={28} />,
  participation: <Target size={28} />,
};

const colorMap: Record<string, string> = {
  award: 'var(--color-accent-cyan)',
  certification: 'var(--color-accent-blue)',
  participation: 'var(--color-accent-purple)',
};

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" className="section" ref={ref}>
      <div className="container">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Hackathons & Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Milestones along the way
          </motion.p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 'var(--space-xl)',
          }}
          className="achievements-grid"
        >
          {achievements.map((achievement, index) => {
            const color = colorMap[achievement.type] || 'var(--color-accent-cyan)';
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="glass-card"
                style={{
                  padding: 'var(--space-2xl)',
                  position: 'relative',
                  overflow: 'hidden',
                  textAlign: 'center',
                }}
              >
                {/* Top accent */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-lg)',
                    background: `${color}15`,
                    border: `1px solid ${color}25`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--space-lg)',
                    color: color,
                  }}
                >
                  {iconMap[achievement.type] || <Trophy size={28} />}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    color: color,
                    marginBottom: 'var(--space-xs)',
                  }}
                >
                  {achievement.title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  {achievement.subtitle}
                </p>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .achievements-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
