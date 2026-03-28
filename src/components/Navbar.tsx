import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-[0_4px_30px_rgba(42,37,32,0.08)]" style={{ backgroundColor: '#f5f1ea' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="transition-all duration-200 hover:opacity-60 font-black text-lg tracking-tight" style={{ color: '#8b4545', fontFamily: 'var(--font-serif)' }}>
              AFIF
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition-colors duration-200 font-mono text-sm tracking-wider hover:opacity-70"
                style={{ color: '#5a5047' }}
              >
                {item.name}
              </a>
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
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 transition-colors duration-200 font-mono text-sm hover:opacity-70"
                style={{ color: '#5a5047' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
