import { useInView } from '../../hooks/useInView';
import type { Experience } from './experienceData';

type Props = { experience: Experience; index: number };

export default function ExperienceCard({ experience, index }: Props) {
  const { ref, inView } = useInView();

  return (
    <article
      ref={ref}
      className={`about-experience-card ${inView ? 'about-visible' : ''}`}
      style={{ '--card-delay': `${Math.min(index, 4) * 0.08}s` } as React.CSSProperties}
    >
      <div className="about-experience-logo">
        <img src={experience.logo} alt="" loading="lazy" />
      </div>
      <div className="about-experience-content">
        <div className="about-experience-title-row">
          <h4>{experience.title}</h4>
          <span className="about-experience-date">{experience.date}</span>
        </div>
        <p className="about-experience-organization">
          {experience.organization} <span aria-hidden="true">•</span> {experience.location}
        </p>
        {experience.description && (
          <p className="about-experience-description">{experience.description}</p>
        )}
        <ul className="about-experience-highlights">
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
