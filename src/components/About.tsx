import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, BookOpen, Code, Lightbulb, Music, Award } from 'lucide-react';

const interests = [
  { icon: <Code size={16} />, label: 'Software Development' },
  { icon: <Lightbulb size={16} />, label: 'Problem Solving' },
  { icon: <BookOpen size={16} />, label: 'Learning Technologies' },
  { icon: <Award size={16} />, label: 'Hackathons' },
  { icon: <Music size={16} />, label: 'Music' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Who I Am
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A glimpse into my journey
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3xl)', alignItems: 'start' }} className="about-grid">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-lg)' }}>
              I'm <span style={{ color: 'var(--color-accent-cyan)', fontWeight: 600 }}>Vimal V.</span>, an aspiring software developer
              studying for my <strong style={{ color: 'var(--color-text-primary)' }}>B.E. in Information Technology</strong> at
              Sri Shanmugha College of Engineering and Technology, Tamil Nadu, India.
            </p>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-xl)' }}>
              I'm passionate about building practical software solutions, diving deep into data structures &amp; algorithms,
              and exploring new technologies. When I'm not coding, you'll find me participating in hackathons,
              sharpening my communication through debates, enjoying music, or strategizing over a chess board.
            </p>

            {/* Interest badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
              {interests.map((item, i) => (
                <motion.span
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="badge"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.85rem' }}
                >
                  {item.icon}
                  {item.label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* College Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="glass-card"
            style={{ padding: 'var(--space-2xl)', position: 'relative', overflow: 'hidden' }}
          >
            {/* Decorative gradient */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'var(--gradient-primary)',
              }}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(77, 124, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}
              >
                🎓
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                  Education
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>Current Institution</p>
              </div>
            </div>

            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-sm)', color: 'var(--color-text-primary)' }}>
              Sri Shanmugha College of Engineering and Technology
            </h4>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-accent-cyan)', fontWeight: 500, marginBottom: 'var(--space-lg)' }}>
              B.E. Information Technology
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>
                <Calendar size={14} style={{ color: 'var(--color-accent-blue)', flexShrink: 0 }} />
                <span>2024 — 2028</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>
                <MapPin size={14} style={{ color: 'var(--color-accent-blue)', flexShrink: 0 }} />
                <span>Tamil Nadu, India</span>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)', marginTop: 'var(--space-xl)', paddingTop: 'var(--space-xl)', borderTop: 'var(--border-subtle)' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--color-accent-cyan)' }}>3+</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Projects</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--color-accent-purple)' }}>3</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Certifications</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
