import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'binmohdhisha@wisc.edu',
      href: 'mailto:binmohdhisha@wisc.edu',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '608-867-9327',
      href: 'tel:608-867-9327',
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
      href: 'https://linkedin.com/in/afif-hishamuddin/',
      color: 'var(--pastel-blue)',
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      href: '#',
      color: 'var(--pastel-lavender)',
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      href: 'mailto:binmohdhisha@wisc.edu',
      color: 'var(--pastel-mint)',
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--pastel-mint)] to-[var(--pastel-peach)] mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="mb-6">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
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
                          index === 0 ? 'var(--pastel-blue)' :
                          index === 1 ? 'var(--pastel-lavender)' :
                          'var(--pastel-mint)',
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

            {/* Social Links */}
            <div>
              <h4 className="mb-4">Connect With Me</h4>
              <div className="flex gap-4">
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

          {/* Contact Form */}
          <div>
            <Card className="p-8 rounded-2xl shadow-lg">
              <h3 className="mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2 rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-2 rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="mt-2 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-xl bg-primary hover:bg-primary/90"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
