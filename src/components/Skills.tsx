import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SkillRing from './SkillRing';
import { skillCategories } from '../data/skills';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory
    ? skillCategories.filter((c) => c.title === activeCategory)
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
            What I Know
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Technologies and tools I work with
          </motion.p>
        </div>

        {/* Category Filters */}
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
            style={{
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              fontSize: 'var(--text-sm)',
              fontWeight: !activeCategory ? 600 : 400,
              transition: 'all var(--transition-fast)',
            }}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(activeCategory === cat.title ? null : cat.title)}
              className={`badge ${activeCategory === cat.title ? 'badge-cyan' : ''}`}
              style={{
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                fontSize: 'var(--text-sm)',
                fontWeight: activeCategory === cat.title ? 600 : 400,
                transition: 'all var(--transition-fast)',
              }}
            >
              {cat.icon} {cat.title}
            </button>
          ))}
        </motion.div>

        {/* Skill Category Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3xl)' }}>
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + catIndex * 0.1 }}
              className="glass-card"
              style={{
                padding: 'var(--space-2xl)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top accent line */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--gradient-primary)',
                  opacity: 0.6,
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
                <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {category.title}
                </h3>
                <span
                  className="badge badge-purple"
                  style={{ marginLeft: 'auto', fontSize: 'var(--text-xs)' }}
                >
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skill Rings Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                  gap: 'var(--space-xl)',
                  justifyItems: 'center',
                }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <SkillRing
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={200 + catIndex * 100 + skillIndex * 80}
                    size={100}
                    strokeWidth={5}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
