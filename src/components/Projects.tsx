import ProjectCard from './ProjectCard';
import callInImage from '../assets/call_in.png';
import portfolioImage from '../assets/portfolio.png';
import festifyImage from '../assets/festify.jpg';
import { useInView } from '../hooks/useInView';

export default function Projects() {
  const { ref: headerRef, inView: headerInView } = useInView();
  const projects = [
    {
      title: 'UW-Housing Call in Sick App',
      description:
        'A full-stack web application to automate sick leave notifications with data storage and email confirmation. Built with React.js, Node.js, Express.js, and MongoDB.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Nodemailer'],
      image: callInImage,
      actionUrl: 'https://mediaspace.wisc.edu/media/Leave+Request+Demo/1_kx6ll9ml',
      actionLabel: 'WATCH DEMO',
      githubUrl: 'https://github.com/affarf/call_in_sick',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive personal portfolio website built with React and Tailwind CSS. Features sharp design, high contrast, and mobile-first approach.',
      techStack: ['React.js', 'Tailwind CSS', 'TypeScript', 'Figma'],
      image: portfolioImage,
      actionUrl: 'https://affarf.github.io/portfolio/',
      actionLabel: 'VIEW LIVE',
      githubUrl: 'https://github.com/affarf/portfolio',
    },
    {
      title: 'Festify',
      description:
        'A mobile app that simplifies event creation, management, and participation. Currently in development. Features include event scheduling, RSVPs, venue layouts, QR code check-in, and in-app group chat.',
      techStack: ['Kotlin', 'Firebase', 'QR Code API'],
      image: festifyImage,
      actionUrl: 'https://drive.google.com/file/d/1ThF1y1mo6VM7RaeGLkcgR-STT6ZoobHF/view',
      actionLabel: 'WATCH DEMO',
      githubUrl: 'https://github.com/ipanropi/festify', 
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#f5f1ea' }}
    >
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-16 pb-8"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <h2 
            className="mb-4 font-black text-5xl tracking-tight"
            style={{ fontFamily: 'var(--font-serif)', color: '#2a2520' }}
          >
            Projects
          </h2>
          <p className="font-mono text-sm tracking-widest" style={{ color: '#8b4545' }}>SELECTED WORK</p>
          <p 
            className="mt-6 max-w-2xl mx-auto font-mono text-sm leading-relaxed"
            style={{ color: '#5a5047' }}
          >
            Here are some of my recent projects showcasing my skills in full-stack development,
            UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Centered Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const { ref, inView } = useInView();
              return (
                <div
                  key={index}
                  ref={ref}
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(24px)',
                    transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
                  }}
                >
                  <ProjectCard project={project} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}