import { ArrowRight, Download } from 'lucide-react';
import afifImage from '@/afif.jpg';
import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-6 inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-[var(--pastel-lavender)] to-[var(--pastel-blue)] rounded-full text-sm">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="mb-4">
              Hi, I'm{' '}
              <span className="text-blue-600 font-extrabold">
                Afif Bin Mohd Hishamuddin
              </span>
            </h1>



            <h2 className="text-muted-foreground mb-6">
              Computer Science Student & Full-Stack Developer
            </h2>

            <p className="text-muted-foreground mb-8 max-w-2xl">
              Passionate about building elegant web applications with React, Node.js, and modern technologies.
              Currently studying at the University of Wisconsin-Madison with a focus on creating impactful user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3 shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300"
              >
                View My Work <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-6 py-3 hover:bg-accent transition-all duration-300"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--pastel-blue)] via-[var(--pastel-lavender)] to-[var(--pastel-mint)] rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={afifImage}
                  alt="Afif Hishamuddin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
