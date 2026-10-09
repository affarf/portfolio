import SkillBadge from '../SkillBadge';
import { useInView } from '../../hooks/useInView';

const skillGroups = [
  {
    title: 'PROGRAMMING LANGUAGES',
    color: 'crimson' as const,
    skills: ['Java', 'JavaScript', 'Python', 'C', 'C++', 'R', 'Kotlin'],
  },
  {
    title: 'WEB DEVELOPMENT',
    color: 'mustard' as const,
    skills: ['React.js', 'React Native', 'Node.js', 'Express.js', 'HTML', 'CSS'],
  },
  {
    title: 'TOOLS & TECHNOLOGIES',
    color: 'blue' as const,
    skills: ['Figma', 'Canva', 'Microsoft Suite', 'Git', 'MongoDB'],
  },
];

export default function TechnicalSkills() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className={`about-skills ${inView ? 'about-visible' : ''}`} aria-labelledby="skills-heading">
      <h3 id="skills-heading" className="about-subheading">Technical Skills</h3>
      <div className="about-skill-groups">
        {skillGroups.map(({ title, color, skills }) => (
          <div key={title} className="about-skill-group">
            <h4 className="about-skill-label">{title}</h4>
            <div className="about-skill-badges">
              {skills.map((skill) => <SkillBadge key={skill} skill={skill} color={color} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
