import { Mail, Heart } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: 'var(--border-subtle)',
        padding: 'var(--space-2xl) 0',
        background: 'rgba(10, 14, 26, 0.5)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--space-lg)',
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-lg)',
              fontWeight: 700,
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            VIMAL V.
          </a>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
            {[
              { icon: <Github size={18} />, label: 'GitHub', href: 'https://github.com/Vimal-5' },
              { icon: <Linkedin size={18} />, label: 'LinkedIn', href: '#' },
              { icon: <Mail size={18} />, label: 'Email', href: 'mailto:vimalvijay561@gmail.com' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                style={{
                  color: 'var(--color-text-muted)',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent-cyan)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-muted)'; }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            © {currentYear} Vimal V. Made with <Heart size={13} style={{ color: 'var(--color-accent-pink)' }} /> and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
