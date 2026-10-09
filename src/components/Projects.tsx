import { useInView } from '../hooks/useInView';
import ProjectItem from './projects/ProjectItem';
import { projects } from './projects/projectData';
import './projects/Projects.css';

export default function Projects() {
  const { ref: headerRef, inView: headerInView } = useInView();

  return (
    <section id="projects" className="portfolio-projects-section">
      <div className="portfolio-projects-inner">
        <header
          ref={headerRef}
          className="portfolio-projects-header"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <h2>Projects</h2>
          <p className="portfolio-projects-eyebrow">SELECTED WORK</p>
          <p className="portfolio-projects-intro">
            A selection of things I've designed and built, from tools for campus operations
            to mobile apps and personal projects
          </p>
        </header>

        <div className="portfolio-projects-grid">
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
