import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useActiveSection } from '../hooks/useScrollProgress';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const sectionIds = navItems.map((item) => item.id);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleNavClick = (id: string) => {
    setIsMobileOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className="navbar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 1.5rem',
          height: 'var(--nav-height)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
          background: isScrolled
            ? 'rgba(10, 14, 26, 0.85)'
            : 'transparent',
          borderBottom: isScrolled
            ? '1px solid rgba(77, 124, 255, 0.1)'
            : '1px solid transparent',
          transition: 'background 0.3s, border-bottom 0.3s, backdrop-filter 0.3s',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--text-xl)',
            fontWeight: 700,
            background: 'var(--gradient-primary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.02em',
          }}
        >
          VIMAL V.
        </a>

        {/* Desktop Nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                padding: '0.5rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                color:
                  activeSection === item.id
                    ? 'var(--color-accent-cyan)'
                    : 'var(--color-text-secondary)',
                background:
                  activeSection === item.id
                    ? 'rgba(0, 212, 255, 0.08)'
                    : 'transparent',
                transition: 'all 0.25s',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.color = 'var(--color-text-primary)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                  e.currentTarget.style.background = 'transparent';
                }
              }}
              aria-label={`Navigate to ${item.label}`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="btn btn-primary btn-sm"
            style={{ marginLeft: '0.75rem' }}
            aria-label="Download CV"
          >
            <Download size={14} />
            Download CV
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
          style={{
            display: 'none',
            padding: '0.5rem',
            color: 'var(--color-text-primary)',
            zIndex: 201,
          }}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 150,
              background: 'rgba(10, 14, 26, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                onClick={() => handleNavClick(item.id)}
                style={{
                  padding: '0.85rem 2rem',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 500,
                  color:
                    activeSection === item.id
                      ? 'var(--color-accent-cyan)'
                      : 'var(--color-text-secondary)',
                  background: 'transparent',
                  borderRadius: 'var(--radius-md)',
                  transition: 'color 0.2s',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {item.label}
              </motion.button>
            ))}
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary"
              style={{ marginTop: '1rem' }}
              onClick={() => setIsMobileOpen(false)}
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive CSS for mobile hamburger visibility */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
