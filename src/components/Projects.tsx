
import { useInView } from '../hooks/useInView';
import ProjectItem from './projects/ProjectItem';
import FeaturedProject from './projects/FeaturedProject';
import { projects } from './projects/projectData';
import './projects/Projects.css';

export default function Projects() {
  const {
    ref: headerRef,
    inView: headerInView,
  } = useInView();

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="portfolio-projects-section"
      aria-labelledby="portfolio-projects-heading"
    >
      <div className="portfolio-projects-inner">
        {/* Header */}
        <header
          ref={headerRef}
          className="portfolio-projects-header"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView
              ? 'translateY(0)'
              : 'translateY(32px)',
            transition:
              'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <h2 id="portfolio-projects-heading">
            Projects
          </h2>

          <p className="portfolio-projects-eyebrow">
            SELECTED WORK
          </p>

          <p className="portfolio-projects-intro">
            A selection of things I've designed and built,
            from tools for campus operations to mobile apps
            and personal projects
          </p>
        </header>

        {/* Featured project */}
        {featuredProject && (
          <div className="portfolio-featured-section">
            <FeaturedProject project={featuredProject} />
          </div>
        )}

        {/* Remaining projects */}
        {otherProjects.length > 0 && (
          <div className="portfolio-more-projects">
            <div className="portfolio-more-projects-heading">
              <span>MORE SELECTED WORK</span>
              <span>
                {String(otherProjects.length).padStart(2, '0')}
                {' '}PROJECTS
              </span>
            </div>

            <div className="portfolio-projects-grid">
              {otherProjects.map((project, index) => (
                <ProjectItem
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
