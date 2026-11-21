import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { certifications } from '../data/certifications';
import { ExternalLink, BadgeCheck } from 'lucide-react';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="section" ref={ref}>
      <div className="container">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Validated skills and competencies
          </motion.p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'var(--space-xl)',
          }}
          className="cert-grid"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
              className="glass-card"
              style={{
                padding: 'var(--space-xl)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-md)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-md)' }}>
                <span style={{ fontSize: '2rem' }}>{cert.icon}</span>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'var(--text-lg)',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--space-xs)',
                    }}
                  >
                    {cert.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                      {cert.platform}
                    </span>
                    <BadgeCheck size={14} style={{ color: 'var(--color-accent-cyan)' }} />
                  </div>
                </div>
              </div>

              {cert.verifiedUrl.startsWith('https://') && (
                <a
                  href={cert.verifiedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ alignSelf: 'flex-start' }}
                  aria-label={`View ${cert.title} certificate`}
                >
                  <ExternalLink size={13} />
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
