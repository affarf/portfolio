import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { Card } from './ui/card';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'afifarif07@gmail.com',
      href: 'mailto:afifarif07@gmail.com',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Madison, Wisconsin',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/afif-hishamuddin/', 
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      href: 'https://github.com/affarf', 
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      href: 'mailto:afifarif07@gmail.com',
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f1ea' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 pb-8">
          <h2 className="mb-4 font-black text-5xl tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: '#2a2520' }}>
            Get in Touch
          </h2>
          <p className="font-mono text-sm tracking-widest" style={{ color: '#8b4545' }}>▬ LET'S CONNECT</p>
          <p className="mt-6 max-w-2xl mx-auto font-mono text-sm leading-relaxed" style={{ color: '#5a5047' }}>
            I'm always open to new opportunities and collaborations. Feel free to reach out.
          </p>
        </div>

        {/* Contact Info and Socials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h3 className="mb-6 font-black text-2xl tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: '#2a2520' }}>
              Contact
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-4 border-2 transition-all duration-300"
                  style={{
                    backgroundColor: '#fdfcf9',
                    borderColor: '#e8e4dd',
                    boxShadow: '6px 8px 16px rgba(42, 37, 32, 0.08)'
                  }}
                >
                  <a
                    href={info.href}
                    className="flex items-center gap-4 group transition-all duration-300"
                  >
                    <div 
                      className="p-3 border-2"
                      style={{
                        borderColor: '#8b4545',
                        color: '#8b4545',
                        backgroundColor: '#fdfcf9'
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p 
                        className="text-sm font-mono font-semibold tracking-wider"
                        style={{ color: '#8b4545' }}
                      >
                        {info.label}
                      </p>
                      <p 
                        className="font-mono font-medium group-hover:opacity-70 transition-opacity"
                        style={{ color: '#5a5047' }}
                      >
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-6 font-black text-2xl tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: '#2a2520' }}>
              Connect
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border-2 transition-all duration-300 transform hover:-translate-y-1"
                  style={{
                    borderColor: '#8b4545',
                    backgroundColor: '#fdfcf9',
                    color: '#8b4545',
                    boxShadow: '4px 6px 12px rgba(42, 37, 32, 0.08)'
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget).style.backgroundColor = '#8b4545';
                    (e.currentTarget).style.color = '#fdfcf9';
                    (e.currentTarget).style.boxShadow = '6px 10px 20px rgba(139, 69, 69, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget).style.backgroundColor = '#fdfcf9';
                    (e.currentTarget).style.color = '#8b4545';
                    (e.currentTarget).style.boxShadow = '4px 6px 12px rgba(42, 37, 32, 0.08)';
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
