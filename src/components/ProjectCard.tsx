import { ExternalLink, Github } from 'lucide-react';
import type { Project } from './projects/projectData';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="portfolio-project-card">
      <div className="portfolio-project-image-wrap">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="portfolio-project-image indie-img-filter"
          loading="lazy"
        />
      </div>

      <div className="portfolio-project-content">
        <h3 className="portfolio-project-title">{project.title}</h3>
        <p className="portfolio-project-description">{project.description}</p>

        <div className="portfolio-project-stack" aria-label="Technologies used">
          {project.techStack.map((tech, index) => (
            <span
              key={tech}
              className={`portfolio-project-tech portfolio-project-tech-${index % 3}`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="portfolio-project-actions">
          {project.actionUrl && project.actionLabel && (
            <a
              className="portfolio-project-action portfolio-project-action-primary"
              href={project.actionUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.actionLabel} for ${project.title} (opens in a new tab)`}
            >
              <ExternalLink size={16} aria-hidden="true" />
              <span>{project.actionLabel}</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              className="portfolio-project-action portfolio-project-action-secondary"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
            >
              <Github size={16} aria-hidden="true" />
              <span>CODE</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
