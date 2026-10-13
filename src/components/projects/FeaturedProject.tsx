
import { ArrowUpRight, Layers, Smartphone, Users } from 'lucide-react';
import type { Project } from './projectData';

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({
  project,
}: FeaturedProjectProps) {
  return (
    <article className="portfolio-featured-card">
      {/* Project screenshot */}
      <div className="portfolio-featured-media">
        <img
          src={project.image}
          alt="Redesigned FP&M KnowledgeBase homepage"
          className="portfolio-featured-image"
          loading="lazy"
        />

        <span className="portfolio-featured-image-tag">
          UW–MADISON / FP&M
        </span>
      </div>

      {/* Project details */}
      <div className="portfolio-featured-content">
        <div className="portfolio-featured-topline">
          <span className="portfolio-featured-eyebrow">
            01 / FEATURED PROJECT
          </span>

          <span className="portfolio-featured-status">
            <span
              className="portfolio-featured-status-dot"
              aria-hidden="true"
            />
            ONGOING
          </span>
        </div>

        <h3 className="portfolio-featured-title">
          {project.title}
        </h3>

        <p className="portfolio-featured-meta">
          UW–Madison Facilities Planning &amp; Management
          <span aria-hidden="true"> / </span>
          2026–Present
        </p>

        <p className="portfolio-featured-description">
          {project.description}
        </p>

        <div className="portfolio-featured-contributions">
          <p className="portfolio-featured-small-heading">
            MY CONTRIBUTIONS
          </p>

          <div className="portfolio-featured-contribution">
            <Layers size={17} aria-hidden="true" />
            <span>
              Lead the overall layout and visual direction
            </span>
          </div>

          <div className="portfolio-featured-contribution">
            <Smartphone size={17} aria-hidden="true" />
            <span>
              Independently design and develop the mobile experience
            </span>
          </div>

          <div className="portfolio-featured-contribution">
            <Users size={17} aria-hidden="true" />
            <span>
              Guide a coworker through design and implementation
            </span>
          </div>
        </div>

        <div className="portfolio-featured-stack">
          {project.techStack.map((tech, index) => (
            <span
              key={tech}
              className={`portfolio-project-tech portfolio-project-tech-${
                index % 3
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="portfolio-featured-footer">
          <span className="portfolio-featured-role">
            UI/UX DESIGN LEAD
          </span>

          <span className="portfolio-featured-coming-soon">
            CASE STUDY IN PROGRESS
            <ArrowUpRight size={15} aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  );
}
