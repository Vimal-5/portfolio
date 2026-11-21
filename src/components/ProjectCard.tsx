import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card"
      style={{
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Project header gradient */}
      <div
        style={{
          height: '140px',
          background: index === 0
            ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.12) 0%, rgba(77, 124, 255, 0.08) 100%)'
            : index === 1
            ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(77, 124, 255, 0.08) 100%)'
            : 'linear-gradient(135deg, rgba(236, 72, 153, 0.12) 0%, rgba(168, 85, 247, 0.08) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <span style={{ fontSize: '3rem', opacity: 0.6 }}>
          {index === 0 ? '💱' : index === 1 ? '🏨' : '🤖'}
        </span>
        {/* Decorative circles */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: 'var(--space-xl)', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--text-xl)',
            fontWeight: 600,
            marginBottom: 'var(--space-sm)',
            color: 'var(--color-text-primary)',
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: 'var(--space-lg)',
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tech badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)', marginBottom: 'var(--space-lg)' }}>
          {project.technologies.map((tech) => (
            <span key={tech} className="badge" style={{ fontSize: '0.7rem' }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        {(project.githubUrl.startsWith('https://') || project.liveUrl.startsWith('https://')) && (
          <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
            {project.githubUrl.startsWith('https://') && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                aria-label={`View ${project.title} on GitHub`}
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <Github size={14} />
                GitHub
              </a>
            )}
            {project.liveUrl.startsWith('https://') && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                aria-label={`View ${project.title} live`}
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <ExternalLink size={14} />
                {project.id === 3 ? 'View Details' : 'Live Demo'}
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
