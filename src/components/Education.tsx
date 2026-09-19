import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="section" ref={ref}>
      <div className="container">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Academic foundation
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ maxWidth: '700px', margin: '0 auto' }}
        >
          <div
            className="glass-card"
            style={{
              padding: 'var(--space-2xl)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Gradient accent */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                background: 'var(--gradient-primary)',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
              }}
            />

            {/* Timeline dot */}
            <div
              style={{
                position: 'absolute',
                top: 'var(--space-2xl)',
                left: '-8px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'var(--color-accent-cyan)',
                border: '3px solid var(--color-bg-primary)',
                boxShadow: '0 0 12px rgba(0, 212, 255, 0.4)',
              }}
            />

            <div style={{ paddingLeft: 'var(--space-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: 'var(--radius-lg)',
                    background: 'rgba(0, 212, 255, 0.08)',
                    border: '1px solid rgba(0, 212, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent-cyan)',
                  }}
                >
                  <GraduationCap size={28} />
                </div>
                <div>
                  <span className="badge badge-cyan" style={{ marginBottom: '0.25rem', display: 'inline-block' }}>
                    Currently Pursuing
                  </span>
                </div>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  marginBottom: 'var(--space-sm)',
                }}
              >
                Sri Shanmugha College of Engineering and Technology
              </h3>

              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 500,
                  color: 'var(--color-accent-cyan)',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                B.E. Information Technology
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xl)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--color-text-secondary)' }}>
                  <Calendar size={16} style={{ color: 'var(--color-accent-blue)' }} />
                  <span>2024 — 2028</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--color-text-secondary)' }}>
                  <MapPin size={16} style={{ color: 'var(--color-accent-blue)' }} />
                  <span>Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
