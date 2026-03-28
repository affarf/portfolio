import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './ImageWithFallback';

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
    <Card 
      className="w-full max-w-sm overflow-hidden border-2 transition-all duration-300"
      style={{
        backgroundColor: '#fdfcf9',
        borderColor: '#e8e4dd',
        boxShadow: '8px 12px 24px rgba(42, 37, 32, 0.12), -2px 2px 8px rgba(0, 0, 0, 0.05)'
      }}
    >
      {/* Project Image - Polaroid Style */}
      <div 
        className="relative h-48 overflow-hidden border-b-2 p-3"
        style={{
          backgroundColor: '#fdfcf9',
          borderColor: '#e8e4dd',
          transform: 'rotate(-1deg)'
        }}
      >
        <div
          style={{
            transform: 'rotate(1deg)',
            boxShadow: 'inset 0 0 8px rgba(42, 37, 32, 0.05)'
          }}
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover block"
          />
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 
          className="mb-3 font-black text-lg tracking-tight"
          style={{ fontFamily: 'var(--font-serif)', color: '#2a2520' }}
        >
          {project.title}
        </h3>

        <p 
          className="text-sm mb-4 line-clamp-3 font-mono leading-relaxed"
          style={{ color: '#5a5047' }}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs border-2 font-mono font-semibold tracking-wider"
              style={{
                borderColor: ['#8b4545', '#c4a856', '#4a6fa5'][index % 3],
                color: ['#8b4545', '#c4a856', '#4a6fa5'][index % 3],
                backgroundColor: '#fdfcf9'
              }}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span 
              className="px-2 py-1 text-xs border-2 font-mono font-semibold"
              style={{
                borderColor: '#9d8f7f',
                color: '#9d8f7f'
              }}
            >
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.liveUrl && project.liveUrl !== '#' && (
            <Button
              asChild
              size="sm"
              className="flex-1 font-mono font-semibold border-2 transition-all duration-200 transform hover:-translate-y-0.5"
              style={{
                backgroundColor: '#8b4545',
                borderColor: '#8b4545',
                color: '#fdfcf9'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.boxShadow = '4px 8px 16px rgba(139, 69, 69, 0.3)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.boxShadow = '2px 4px 8px rgba(42, 37, 32, 0.1)';
              }}
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                LIVE
              </a>
            </Button>
          )}

          {project.githubUrl && (
            <Button
              asChild
              size="sm"
              className="flex-1 font-mono font-semibold border-2 transition-all duration-200 transform hover:-translate-y-0.5"
              style={{
                backgroundColor: 'transparent',
                borderColor: '#8b4545',
                color: '#8b4545'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.boxShadow = '4px 8px 16px rgba(139, 69, 69, 0.2)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.boxShadow = '2px 4px 8px rgba(42, 37, 32, 0.1)';
              }}
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                CODE
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
