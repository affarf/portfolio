import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'UW-Housing Call in Sick App',
      description:
        'A full-stack web application to automate sick leave notifications with data storage and email confirmation. Built with React.js, Node.js, Express.js, and MongoDB.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Nodemailer'],
      image:
        'https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      liveUrl: '#',
      githubUrl: 'https://github.com/affarf/call_in_sick',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive personal portfolio website built with React and Tailwind CSS. Features sharp design, high contrast, and mobile-first approach.',
      techStack: ['React.js', 'Tailwind CSS', 'TypeScript', 'Figma'],
      image:
        'https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      liveUrl: 'https://affarf.github.io/portfolio/',
      githubUrl: 'https://github.com/affarf/portfolio',
    },
    {
      title: 'Festify',
      description:
        'A mobile app that simplifies event creation, management, and participation. Currently in development. Features include event scheduling, RSVPs, venue layouts, QR code check-in, and in-app group chat.',
      techStack: ['Kotlin', 'Firebase', 'QR Code API'],
      image:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340', 
      liveUrl: '#',
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
          className="text-center mb-16 pb-8"
        >
          <h2 
            className="mb-4 font-black text-5xl tracking-tight"
            style={{ fontFamily: 'var(--font-serif)', color: '#2a2520' }}
          >
            Projects
          </h2>
          <p className="font-mono text-sm tracking-widest" style={{ color: '#8b4545' }}>▬ SELECTED WORK</p>
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
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
