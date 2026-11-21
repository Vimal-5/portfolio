import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name.trim()}`);
      const body = encodeURIComponent(
        `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\n${formData.message.trim()}`
      );
      window.location.href = `mailto:vimalvijay561@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.85rem 1rem',
    borderRadius: 'var(--radius-md)',
    border: 'var(--border-subtle)',
    background: 'rgba(15, 22, 41, 0.5)',
    color: 'var(--color-text-primary)',
    fontSize: 'var(--text-base)',
    fontFamily: 'var(--font-body)',
    transition: 'all var(--transition-base)',
    outline: 'none',
  };

  const inputFocusHandler = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.4)';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.08)';
  };

  const inputBlurHandler = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(77, 124, 255, 0.12)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Have a question or want to work together?
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'var(--space-3xl)', maxWidth: '900px', margin: '0 auto' }} className="contact-grid">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(0, 212, 255, 0.08)',
                  border: '1px solid rgba(0, 212, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent-cyan)',
                  flexShrink: 0,
                }}
              >
                <Phone size={18} />
              </div>
              <div>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</p>
                <p style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>6381606246</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(77, 124, 255, 0.08)',
                  border: '1px solid rgba(77, 124, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent-blue)',
                  flexShrink: 0,
                }}
              >
                <Mail size={18} />
              </div>
              <div>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</p>
                <a href="mailto:vimalvijay561@gmail.com" style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>vimalvijay561@gmail.com</a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(168, 85, 247, 0.08)',
                  border: '1px solid rgba(168, 85, 247, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent-purple)',
                  flexShrink: 0,
                }}
              >
                <MapPin size={18} />
              </div>
              <div>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</p>
                <p style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>Tamil Nadu, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
              {[
                { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/Vimal-5' },
                { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/vimal-vellaiyan/' },
                { icon: <Mail size={20} />, label: 'Email', href: 'mailto:vimalvijay561@gmail.com' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-md)',
                    border: 'var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-secondary)',
                    transition: 'all var(--transition-base)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-accent-cyan)';
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                    e.currentTarget.style.borderColor = 'rgba(77, 124, 255, 0.12)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card"
              style={{ padding: 'var(--space-2xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}
              noValidate
            >

              <div>
                <label htmlFor="contact-name" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginBottom: '0.35rem', display: 'block' }}>
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={inputFocusHandler}
                  onBlur={inputBlurHandler}
                  style={inputStyle}
                  aria-required="true"
                  required
                />
                {errors.name && <p style={{ color: '#ef4444', fontSize: 'var(--text-xs)', marginTop: '0.25rem' }}>{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="contact-email" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginBottom: '0.35rem', display: 'block' }}>
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={inputFocusHandler}
                  onBlur={inputBlurHandler}
                  style={inputStyle}
                  aria-required="true"
                  required
                />
                {errors.email && <p style={{ color: '#ef4444', fontSize: 'var(--text-xs)', marginTop: '0.25rem' }}>{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="contact-message" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginBottom: '0.35rem', display: 'block' }}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={inputFocusHandler as any}
                  onBlur={inputBlurHandler as any}
                  style={{ ...inputStyle, minHeight: '140px', resize: 'vertical' }}
                  aria-required="true"
                  required
                />
                {errors.message && <p style={{ color: '#ef4444', fontSize: 'var(--text-xs)', marginTop: '0.25rem' }}>{errors.message}</p>}
              </div>

              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                <Send size={16} />
                Open Email App
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
