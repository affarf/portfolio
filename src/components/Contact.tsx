import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import './navigation.css';

export default function Contact() {
  const { ref: headerRef, inView: headerInView } = useInView();
  const { ref: contentRef, inView: contentInView } = useInView();

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/afif-arifuddin/', Icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/affarf', Icon: Github },
    { label: 'Email', href: 'mailto:afifarif07@gmail.com', Icon: Mail },
  ];

  return (
    <section id="contact" className="portfolio-contact">
      <div className="portfolio-contact-shell">
        <header ref={headerRef} className="portfolio-contact-header" style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'none' : 'translateY(20px)' }}>
          <h2>Get in Touch</h2>
          <p className="portfolio-contact-eyebrow">LET'S CONNECT</p>
          <p className="portfolio-contact-intro">I'm open to opportunities, collaborations, and conversations about software, data, and creative projects</p>
        </header>

        <div ref={contentRef} className="portfolio-contact-grid" style={{ opacity: contentInView ? 1 : 0, transform: contentInView ? 'none' : 'translateY(20px)' }}>
          <div className="portfolio-contact-column">
            <h3>Contact</h3>
            <a className="portfolio-contact-card" href="mailto:afifarif07@gmail.com">
              <span className="portfolio-contact-icon"><Mail size={21} /></span>
              <span className="portfolio-contact-card-body"><strong>EMAIL</strong><span>afifarif07@gmail.com</span></span>
              <ArrowUpRight className="portfolio-contact-external" size={19} aria-hidden="true" />
            </a>
            <div className="portfolio-contact-card portfolio-contact-location">
              <span className="portfolio-contact-icon"><MapPin size={21} /></span>
              <span className="portfolio-contact-card-body"><strong>LOCATION</strong><span>Madison, Wisconsin</span></span>
            </div>
          </div>

          <div className="portfolio-contact-column">
            <h3>Connect</h3>
            <p className="portfolio-contact-social-intro">Find my work, follow what I'm building, or say hello</p>
            <div className="portfolio-contact-socials">
              {socialLinks.map(({ label, href, Icon }) => (
                <a key={label} className="portfolio-contact-social" href={href}
                   aria-label={label} title={label}
                   {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  <Icon size={23} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
