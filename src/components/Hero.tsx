import { ArrowRight, Download } from 'lucide-react';
import afifImage from '../assets/afif.jpg';
import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#f5f1ea' }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="inline-block font-mono text-sm tracking-widest" style={{ color: '#8b4545' }}>
              <span>Hello, I am...</span>
            </div>

            <h1
              className="text-7xl sm:text-8xl md:text-6xl lg:text-[7rem] xl:text-[8rem]"
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 900,
                color: '#2a2520',
                lineHeight: '1.05',
                letterSpacing: '0px',
                fontSize: 'clamp(2.5rem, 4vw, 8rem)'
              }}
            >
              Afif Arifuddin
            </h1>

            <h2 className="text-2xl mb-8 font-mono tracking-wide" style={{ color: '#5a5047' }}>
              Full-Stack Developer & Creative Technologist
            </h2>

            <p className="text-lg leading-relaxed mb-10 max-w-2xl font-mono" style={{ color: '#5a5047' }}>
              Building digital experiences that blend aesthetics with functionality. <br />
              Deeply interested in delving further into design systems, creative coding, <br /> and the intersection of art and technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 font-mono font-semibold transition-all duration-300 border-2 shadow-[4px_4px_0px_rgba(42,37,32,0.15)] hover:shadow-[6px_6px_0px_rgba(42,37,32,0.2)] hover:-translate-x-0.5 hover:-translate-y-0.5"
                style={{
                  backgroundColor: '#8b4545',
                  color: '#fdfcf9',
                  borderColor: '#8b4545',
                  padding: '1.25rem 3rem'
                }}
              >
                VIEW WORK <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-3 font-mono font-semibold transition-all duration-300 border-2 shadow-[4px_4px_0px_rgba(139,69,69,0.2)] hover:shadow-[6px_6px_0px_rgba(139,69,69,0.3)] hover:-translate-x-0.5 hover:-translate-y-0.5"
                style={{
                  backgroundColor: '#fdfcf9',
                  color: '#8b4545',
                  borderColor: '#8b4545',
                  padding: '1.25rem 2.5rem'
                }}
              >
                <Download className="h-4 w-4" />
                RESUME
              </a>
            </div>
          </div>

          {/* Profile Image - Polaroid Style */}
         <div className="flex-1 w-[140px] sm:w-[140px] md:w-[200px] mt-10 md:mt-0">
            <div
              className="relative"
              style={{
                background: '#fdfcf9',
                padding: '12px',
                border: '6px solid #fdfcf9',
                boxShadow: '8px 12px 30px rgba(42, 37, 32, 0.2)',
                transform: 'rotate(-2deg)'
              }}
            >
              <div className="w-full overflow-hidden bg-[#e8e4dd]" style={{ aspectRatio: '1/ 1' }}>
                <img
                  src={afifImage}
                  alt="Afif Hishamuddin"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 font-mono text-xs text-center" style={{ color: '#8b4545', letterSpacing: '1px' }}>
                <br />
                MADISON, WI
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
