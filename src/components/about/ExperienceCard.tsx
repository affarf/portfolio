import { useId, useState } from 'react';
import type { CSSProperties } from 'react';
import { Camera, ChevronDown, ChevronUp } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import type { Experience } from './experienceData';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

type Props = { experience: Experience; index: number };

export default function ExperienceCard({ experience, index }: Props) {
  const { ref, inView } = useInView();
  const [showPhotos, setShowPhotos] = useState(false);
  const galleryId = useId();
  const photos = experience.photos ?? [];

  return (
    <article
      ref={ref}
      className={`about-experience-card ${inView ? 'about-visible' : ''}`}
      style={{ '--card-delay': `${Math.min(index, 4) * 0.08}s` } as CSSProperties}
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
          <li key={highlight}>
            <span className="about-highlight-text">
              {highlight}

              {experience.id === 'education' &&
                highlight.includes('Wisconsin Club Field Hockey Team') && (
                  <Link
                    to="/game"
                    className="about-hockey-game-link"
                  >
                    🏑 PLAY BEAT THE KEEPER
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </Link>
                )}
            </span>
          </li>
        ))}
      </ul>



        {photos.length > 0 && (
          <div className="about-photo-archive">
            <button
              type="button"
              className="about-photo-toggle"
              onClick={() => setShowPhotos((previous) => !previous)}
              aria-expanded={showPhotos}
              aria-controls={galleryId}
            >
              <span className="about-photo-toggle-label">
                <Camera size={18} aria-hidden="true" />
                {showPhotos ? 'HIDE PHOTOS' : `BEHIND THE SCENES${photos.length > 1 ? ` (${photos.length})` : ''}`}
              </span>
              {showPhotos ? <ChevronUp size={19} aria-hidden="true" /> : <ChevronDown size={19} aria-hidden="true" />}
            </button>
            <div id={galleryId} className="about-photo-gallery" hidden={!showPhotos}>
              {showPhotos && photos.map((photo) => (
                <figure className="about-photo-frame" key={photo.src}>
                  <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full photo: ${photo.caption}`}>
                    <img src={photo.src} alt={photo.alt} loading="lazy" />
                  </a>
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
            {showPhotos && photos.length > 1 && (
              <p className="about-photo-hint">Swipe to explore the photos on mobile · Tap a photo to view it in full</p>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
