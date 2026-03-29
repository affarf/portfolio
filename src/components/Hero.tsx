import resumePdf from '../assets/resume.pdf';
import { ArrowRight, Download } from 'lucide-react';
import afifImage from '../assets/afif.jpg';
import { FC, useEffect, useState, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&';
const FINAL_NAME = 'Afif Arifuddin';

function useScramble(text: string, trigger: boolean) {
  const [display, setDisplay] = useState('');
  const frame = useRef(0);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!trigger) return;
    let iteration = 0;
    clearInterval(interval.current!);
    interval.current = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < iteration) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      iteration += 0.4;
      if (iteration >= text.length) {
        clearInterval(interval.current!);
        setDisplay(text);
      }
    }, 30);
    return () => clearInterval(interval.current!);
  }, [trigger]);

  return display;
}

const Hero: FC = () => {
  const [started, setStarted] = useState(false);
  const [polaroidReady, setPolaroidReady] = useState(false);
  const scrambled = useScramble(FINAL_NAME, started);

  useEffect(() => {
    // Small delay so it fires after mount, feels intentional
    const t1 = setTimeout(() => setStarted(true), 300);
    const t2 = setTimeout(() => setPolaroidReady(true), 100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#f5f1ea', position: 'relative', overflow: 'hidden' }}
    >
      {/* Grain/noise overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        opacity: 0.04,
        mixBlendMode: 'multiply',
      }} />

      <div className="max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">

          {/* Text Content */}
                    <br />
            <br />
            <br />
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="inline-block font-mono text-sm tracking-widest" style={{ color: '#8b4545' }}>
              <span>Hello, I am...</span>
            </div>

            {/* Scramble name */}
  
            <h1
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 900,
                color: '#2a2520',
                lineHeight: '1.05',
                letterSpacing: '0px',
                fontSize: 'clamp(2.5rem, 4vw, 8rem)',
                minHeight: '1.1em',
              }}
            >
              {scrambled || '\u00A0'}
            </h1>

            <h2 className="text-2xl mb-8 font-mono tracking-wide" style={{ color: '#5a5047' }}>
              Full-Stack Developer & Creative Technologist
            </h2>

            <p className="text-lg leading-relaxed mb-10 max-w-2xl font-mono" style={{ color: '#5a5047' }}>
              Building digital experiences that blend aesthetics with functionality. <br />
              Deeply interested in delving further into design systems, creative coding, <br /> and the intersection of art and technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-3 font-mono font-semibold transition-all duration-300 border-2 shadow-[4px_4px_0px_rgba(42,37,32,0.15)] hover:shadow-[6px_6px_0px_rgba(42,37,32,0.2)] hover:-translate-x-0.5 hover:-translate-y-0.5"
                style={{ backgroundColor: '#8b4545', color: '#fdfcf9', borderColor: '#8b4545', padding: '1.25rem 3rem' }}
              >
                VIEW WORK <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={resumePdf}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 font-mono font-semibold transition-all duration-300 border-2 shadow-[4px_4px_0px_rgba(139,69,69,0.2)] hover:shadow-[6px_6px_0px_rgba(139,69,69,0.3)] hover:-translate-x-0.5 hover:-translate-y-0.5"
                style={{ backgroundColor: '#fdfcf9', color: '#8b4545', borderColor: '#8b4545', padding: '1.25rem 2.5rem' }}
              >
                <Download className="h-4 w-4" /> RESUME
              </a>
            </div>
            <a
              href="#/now"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '1rem',
                marginTop: '1rem', borderTop: '1px solid #e8e4dd', paddingTop: '1.5rem',
                textDecoration: 'none', opacity: 0.8, transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
            >
              <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '12px', height: '12px' }}>
                <span style={{ position: 'absolute', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#8b4545', opacity: 0.4, animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#8b4545', flexShrink: 0 }} />
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', letterSpacing: '3px', color: '#8b4545', textTransform: 'uppercase' }}>LIVE</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', color: '#2a2520', fontWeight: 700 }}>What I'm up to right now →</span>
            </a>
          </div>

          <br />

          {/* Profile Image - Polaroid with load animation */}
          <div className="flex-1 w-[140px] sm:w-[140px] md:w-[200px] mt-10 md:mt-0">
            <div
              style={{
                background: '#fdfcf9',
                padding: '12px',
                border: '6px solid #fdfcf9',
                boxShadow: '8px 12px 30px rgba(42, 37, 32, 0.2)',
                transform: polaroidReady ? 'rotate(-2deg)' : 'rotate(-5deg)',
                transition: 'transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <br/>
              <div className="w-full overflow-hidden bg-[#e8e4dd]" style={{ aspectRatio: '1 / 1' }}>
                <img
                  src={afifImage}
                  alt="Afif Arifuddin"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 font-mono text-xs text-center" style={{ color: '#8b4545', letterSpacing: '1px' }}>
                <br />MADISON, WI
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;