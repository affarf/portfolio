import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer 
      className="border-t-2 py-8 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: '#f5f1ea',
        borderTopColor: '#c4a856'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm font-mono" style={{ color: '#5a5047' }}>
            <span>© {currentYear} AFIF ARIFUDDIN</span>
            <span style={{ color: '#9d8f7f' }}>•</span>
            <span className="flex items-center gap-1">
              MADE WITH REACT & TAILWIND
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-mono font-medium tracking-wider transition-all duration-200 hover:opacity-70"
                style={{ color: '#8b4545' }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
