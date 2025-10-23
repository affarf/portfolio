import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    techStack: string[];
    image: string;
    liveUrl: string;
    githubUrl: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="mb-3">{project.title}</h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-lg"
              style={{
                backgroundColor:
                  index === 0
                    ? 'var(--pastel-blue)'
                    : index === 1
                    ? 'var(--pastel-lavender)'
                    : 'var(--pastel-mint)',
                color: '#2d3748',
              }}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-3 py-1 text-xs rounded-lg bg-muted text-muted-foreground">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.liveUrl && project.liveUrl !== '#' && (
            <Button
              asChild
              size="sm"
              className="flex-1 rounded-xl bg-primary hover:bg-primary/90"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}

          {project.githubUrl && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="flex-1 rounded-xl border-2"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
