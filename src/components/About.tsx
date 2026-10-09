import { useInView } from '../hooks/useInView';
import AboutBio from './about/AboutBio';
import TechnicalSkills from './about/TechnicalSkills';
import ExperienceCard from './about/ExperienceCard';
import { experiences } from './about/experienceData';
import './about/About.css';

export default function About() {
  const { ref: headerRef, inView: headerInView } = useInView();

  return (
    <section id="about" className="portfolio-about" aria-labelledby="about-heading">
      <div className="about-inner">
        <header
          ref={headerRef}
          className={`about-header ${headerInView ? 'about-visible' : ''}`}
        >
          <h2 id="about-heading" className="about-heading">About</h2>
          <p className="about-eyebrow">MY STORY &amp; EXPERIENCE</p>
        </header>

        <AboutBio />
        <TechnicalSkills />

        <section className="about-experience" aria-labelledby="experience-heading">
          <h3 id="experience-heading" className="about-subheading">Education &amp; Experience</h3>
          <div className="about-experience-list">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
