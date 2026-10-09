import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './navigation.css';

const footerLinks = [
  { label: 'HOME', section: 'home' },
  { label: 'ABOUT', section: 'about' },
  { label: 'PROJECTS', section: 'projects' },
  { label: 'CONTACT', section: 'contact' },
] as const;

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const pendingSection = useRef<string | null>(null);

  useEffect(() => {
    if (location.pathname !== '/' || !pendingSection.current) return;
    const section = pendingSection.current;
    pendingSection.current = null;
    const frame = window.requestAnimationFrame(() => {
      if (section === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
      else document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname]);

  const navigateToSection = (section: string) => {
    if (location.pathname !== '/') {
      pendingSection.current = section;
      navigate('/');
      return;
    }
    if (section === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    else document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="portfolio-footer-inner">
        <div className="portfolio-footer-brand">
          <span>© {new Date().getFullYear()} AFIF ARIFUDDIN</span>
          <span className="portfolio-footer-separator" aria-hidden="true">·</span>
          <span>MADE WITH REACT & TAILWIND</span>
        </div>
        <nav className="portfolio-footer-links" aria-label="Footer navigation">
          {footerLinks.map((item) => (
            <button key={item.label} type="button" onClick={() => navigateToSection(item.section)}>{item.label}</button>
          ))}
          <Link to="/now">NOW</Link>
        </nav>
      </div>
    </footer>
  );
}
