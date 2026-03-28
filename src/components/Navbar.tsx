import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId: string) => {
    // Close mobile menu if open
    setIsMenuOpen(false);

    // Special case for the HOME button: scroll to the very top
    if (sectionId === 'home') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
      }
      return;
    }

    // For About, Projects, Contact
    if (location.pathname === '/') {
      // On home page - scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Not on home page - navigate first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navItems = [
    // Changed HOME to a scroll type so it smoothly goes to the top
    { name: 'HOME', type: 'scroll', sectionId: 'home' },
    { name: 'ABOUT', type: 'scroll', sectionId: 'about' },
    { name: 'PROJECTS', type: 'scroll', sectionId: 'projects' },
    { name: 'CONTACT', type: 'scroll', sectionId: 'contact' },
    // FIXED: Added the forward slash so it acts as an absolute path
    { name: 'NOW', type: 'link', to: '/now' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-[0_4px_30px_rgba(42,37,32,0.08)]" style={{ backgroundColor: '#f5f1ea' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="transition-all duration-200 hover:opacity-60 font-black text-lg tracking-tight" style={{ color: '#8b4545', fontFamily: 'var(--font-serif)' }}>
              AFIF
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.name}
                  to={item.to as string}
                  className="transition-colors duration-200 font-mono text-sm tracking-wider hover:opacity-70"
                  style={{ color: '#5a5047' }}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.sectionId as string)}
                  className="transition-colors duration-200 font-mono text-sm tracking-wider hover:opacity-70 uppercase"
                  style={{ color: '#5a5047' }}
                >
                  {item.name}
                </button>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="transition-colors hover:opacity-70"
              style={{ color: '#5a5047' }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#f5f1ea' }}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.name}
                  to={item.to as string}
                  className="block px-3 py-2 transition-colors duration-200 font-mono text-sm hover:opacity-70 uppercase"
                  style={{ color: '#5a5047' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.sectionId as string)}
                  className="block w-full text-left px-3 py-2 transition-colors duration-200 font-mono text-sm hover:opacity-70 uppercase"
                  style={{ color: '#5a5047' }}
                >
                  {item.name}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}