import { motion } from 'framer-motion';
import { Mail, ArrowDown, ExternalLink } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';
import { useMouseParallax } from '../hooks/useMouseParallax';

export default function Hero() {
  const mouse = useMouseParallax(0.015);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'var(--nav-height)',
      }}
    >
      {/* Cosmic gradient orbs */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <motion.div
          animate={{ x: mouse.x * 2, y: mouse.y * 2 }}
          transition={{ type: 'tween', ease: 'linear', duration: 0 }}
          style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(77, 124, 255, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          animate={{ x: mouse.x * -1.5, y: mouse.y * -1.5 }}
          transition={{ type: 'tween', ease: 'linear', duration: 0 }}
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', position: 'relative', zIndex: 1 }}>
        {/* Left: Text Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-accent-cyan)',
              marginBottom: 'var(--space-md)',
              letterSpacing: '0.05em',
            }}
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-hero)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 'var(--space-md)',
            }}
          >
            <span
              style={{
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Vimal V.
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-2xl)',
              fontWeight: 600,
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-lg)',
            }}
          >
            Software Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              maxWidth: '520px',
              lineHeight: 1.7,
              marginBottom: 'var(--space-2xl)',
            }}
          >
            I build practical and efficient software solutions using Java, Python and modern web technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', marginBottom: 'var(--space-2xl)' }}
          >
            <a href="#projects" className="btn btn-primary">
              <ExternalLink size={16} />
              View Projects
            </a>
            <a href="/resume.pdf" download className="btn btn-outline">
              Download CV
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            style={{ display: 'flex', gap: 'var(--space-md)' }}
          >
            {[
              { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/Vimal-5' },
              { icon: <Linkedin size={20} />, label: 'LinkedIn', href: '#' },
              { icon: <Mail size={20} />, label: 'Email', href: 'mailto:vimalvijay561@gmail.com' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  border: 'var(--border-subtle)',
                  color: 'var(--color-text-secondary)',
                  transition: 'all var(--transition-base)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent-cyan)';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                  e.currentTarget.style.background = 'rgba(0, 212, 255, 0.06)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                  e.currentTarget.style.borderColor = 'rgba(77, 124, 255, 0.12)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Cosmic Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hero-visual"
          style={{
            flex: '0 0 auto',
            width: '420px',
            height: '420px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Outer orbit ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              inset: 0,
              border: '1px solid rgba(77, 124, 255, 0.12)',
              borderRadius: '50%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-4px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--color-accent-cyan)',
                boxShadow: '0 0 12px rgba(0, 212, 255, 0.5)',
              }}
            />
          </motion.div>

          {/* Middle orbit ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              inset: '50px',
              border: '1px solid rgba(168, 85, 247, 0.1)',
              borderRadius: '50%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: '-3px',
                right: '20%',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--color-accent-purple)',
                boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)',
              }}
            />
          </motion.div>

          {/* Inner orbit ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              inset: '100px',
              border: '1px solid rgba(0, 212, 255, 0.08)',
              borderRadius: '50%',
            }}
          />

          {/* Central planet / astronaut glow */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 30% 30%, rgba(77, 124, 255, 0.3), rgba(168, 85, 247, 0.15), rgba(0, 212, 255, 0.05))',
              boxShadow: '0 0 60px rgba(77, 124, 255, 0.2), 0 0 120px rgba(168, 85, 247, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
            }}
          >
            🚀
          </motion.div>

          {/* Floating code brackets */}
          <motion.span
            animate={{ y: [0, -8, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '15%',
              right: '10%',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-2xl)',
              color: 'rgba(0, 212, 255, 0.3)',
            }}
          >
            {'</>'}
          </motion.span>

          <motion.span
            animate={{ y: [0, 6, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            style={{
              position: 'absolute',
              bottom: '20%',
              left: '5%',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xl)',
              color: 'rgba(168, 85, 247, 0.3)',
            }}
          >
            {'{ }'}
          </motion.span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-label="Scroll to About section"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--color-text-muted)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Scroll Down
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .hero-visual { display: none !important; }
          #home .container { justify-content: center; text-align: center; }
          #home .container > div:first-child { display: flex; flex-direction: column; align-items: center; }
        }
      `}</style>
    </section>
  );
}
