import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '../data/skills';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory
    ? skillCategories.filter((category) => category.title === activeCategory)
    : skillCategories;

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Technologies and tools I have worked with
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'var(--space-sm)',
            marginBottom: 'var(--space-3xl)',
          }}
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`badge ${!activeCategory ? 'badge-cyan' : ''}`}
            aria-pressed={!activeCategory}
            style={{ padding: '0.5rem 1rem', cursor: 'pointer', fontSize: 'var(--text-sm)' }}
          >
            All
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(activeCategory === category.title ? null : category.title)}
              className={`badge ${activeCategory === category.title ? 'badge-cyan' : ''}`}
              aria-pressed={activeCategory === category.title}
              style={{ padding: '0.5rem 1rem', cursor: 'pointer', fontSize: 'var(--text-sm)' }}
            >
              {category.icon} {category.title}
            </button>
          ))}
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-lg)' }}>
          {filteredCategories.map((category, index) => (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + index * 0.06 }}
              className="glass-card"
              aria-label={category.title}
              style={{ padding: 'var(--space-xl)', position: 'relative', overflow: 'hidden' }}
            >
              <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--gradient-primary)' }} />
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 'var(--space-lg)' }}>
                <span aria-hidden="true">{category.icon}</span> {category.title}
              </h3>
              <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
                {category.skills.map((skill) => (
                  <li key={skill.name} className="badge" style={{ fontSize: 'var(--text-sm)', padding: '0.4rem 0.8rem' }}>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
}
