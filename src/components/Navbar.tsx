import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './navigation.css';

const navItems = [
  { label: 'HOME', section: 'home' },
  { label: 'ABOUT', section: 'about' },
  { label: 'PROJECTS', section: 'projects' },
  { label: 'HONORS', section: 'honors' },
  { label: 'CONTACT', section: 'contact' },
] as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const pendingSection = useRef<string | null>(null);

  useEffect(() => {
    setIsMenuOpen(false);
    if (location.pathname !== '/' || !pendingSection.current) return;
    const section = pendingSection.current;
    pendingSection.current = null;
    const frame = window.requestAnimationFrame(() => {
      if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname]);

  const goToSection = (section: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      pendingSection.current = section;
      navigate('/');
      return;
    }
    if (section === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    else document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="portfolio-navbar" aria-label="Main navigation">
      <div className="portfolio-navbar-inner">
        <Link to="/" className="portfolio-navbar-logo" onClick={() => goToSection('home')}>AFIF</Link>

        <div className="portfolio-navbar-desktop">
          {navItems.map((item) => (
            <button key={item.label} type="button" onClick={() => goToSection(item.section)}>
              {item.label}
            </button>
          ))}
          <Link to="/now" aria-current={location.pathname === '/now' ? 'page' : undefined}>NOW</Link>
        </div>

        <button
          type="button"
          className="portfolio-navbar-toggle"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="portfolio-mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div id="portfolio-mobile-menu" className={`portfolio-navbar-mobile ${isMenuOpen ? 'is-open' : ''}`} hidden={!isMenuOpen}>
        {navItems.map((item) => (
          <button type="button" key={item.label} onClick={() => goToSection(item.section)}>{item.label}</button>
        ))}
        <Link to="/now" onClick={() => setIsMenuOpen(false)} aria-current={location.pathname === '/now' ? 'page' : undefined}>NOW</Link>
      </div>
    </nav>
  );
}
