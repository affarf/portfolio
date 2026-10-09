import { useInView } from '../../hooks/useInView';
import ProjectCard from '../ProjectCard';
import type { Project } from './projectData';

type ProjectItemProps = {
  project: Project;
  index: number;
};

export default function ProjectItem({ project, index }: ProjectItemProps) {
  // Hook is called at the top level of an individual component, not in a map callback
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="portfolio-project-item"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      <ProjectCard project={project} />
    </div>
  );
}
