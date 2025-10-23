import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
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
      color: 'var(--pastel-blue)',
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      href: 'https://github.com/affarf', 
      color: 'var(--pastel-lavender)',
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      href: 'mailto:afifarif07@gmail.com',
      color: 'var(--pastel-mint)',
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--pastel-mint)] to-[var(--pastel-peach)] mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        {/* Contact Info and Socials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h3 className="mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-4 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <a
                    href={info.href}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="p-3 rounded-xl"
                      style={{
                        backgroundColor:
                          index === 0 ? 'var(--pastel-blue)' : 'var(--pastel-mint)',
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="group-hover:text-primary transition-colors">
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
            <h3 className="mb-6">Connect With Me</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: social.color }}
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
