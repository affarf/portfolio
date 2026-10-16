
import { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import resumePdf from '../../assets/Resume_Afif_Arifuddin.pdf';


const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&';
const FINAL_NAME = 'Afif Arifuddin';

function useScramble(text: string) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(text);
      return;
    }

    let iteration = 0;

    const interval = window.setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return char;

            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      iteration += 0.4;

      if (iteration >= text.length) {
        window.clearInterval(interval);
        setDisplay(text);
      }
    }, 30);

    return () => window.clearInterval(interval);
  }, [text]);

  return display;
}

export default function HeroIntroduction() {
  const scrambledName = useScramble(FINAL_NAME);
  const [firstName, ...lastName] = scrambledName.split(' ');

  const scrollToProjects = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    document.getElementById('projects')?.scrollIntoView({
      behavior: window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches ? 'auto' : 'smooth',
    });
  };

  return (
    <div className="hero-introduction">
      <p className="hero-greeting">
        Hello, I am...
      </p>

      <h1 className="hero-name" aria-label={FINAL_NAME}>
        <span aria-hidden="true" className="hero-first-name">
          {firstName || '\u00A0'}
        </span>
        {' '}
        <span aria-hidden="true" className="hero-last-name">
          {lastName.join(' ') || '\u00A0'}
        </span>
      </h1>

      <h2 className="hero-role">
        Full-Stack Developer &amp; Creative Technologist
      </h2>

      <p className="hero-description">
        Building digital experiences that blend aesthetics with
        functionality. Deeply interested in delving further into
        design systems, creative coding, and the intersection
        of art and technology
      </p>

      <div className="hero-actions">
        <a
          href="#projects"
          onClick={scrollToProjects}
          className="hero-button hero-button-primary"
        >
          VIEW WORK
          <ArrowRight size={18} aria-hidden="true" />
        </a>

        <a
          href={resumePdf}
          download
          className="hero-button hero-button-secondary"
        >
          <Download size={18} aria-hidden="true" />
          RESUME
        </a>
      </div>
    </div>
  );
}
