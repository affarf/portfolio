import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'UW-Housing Call in Sick App',
      description: 'A full-stack web application to automate sick leave notifications with data storage and email confirmation. Built with React.js, Node.js, Express.js, and MongoDB.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Nodemailer'],
      image: 'https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk5NTk0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Badger Buddies',
      description: 'An interactive web app for browsing and adopting cats from The Madison Cat Project. Features include routing, state management, and responsive design.',
      techStack: ['React.js', 'Java', 'React-Bootstrap', 'HTML', 'CSS'],
      image: 'https://images.unsplash.com/photo-1758582268054-d373f6cb24a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGFwcGxpY2F0aW9uJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1OTk1OTQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive personal portfolio website built with React and Tailwind CSS. Features smooth animations, pastel design, and mobile-first approach.',
      techStack: ['React.js', 'Tailwind CSS', 'TypeScript', 'Figma'],
      image: 'https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU5OTQ0OTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--pastel-lavender)] to-[var(--pastel-mint)] mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
