import './SkillBadge.css';
interface SkillBadgeProps {
  skill: string;
  color?: 'crimson' | 'mustard' | 'blue' | 'gray';
}

export default function SkillBadge({
  skill,
  color = 'crimson',
}: SkillBadgeProps) {
  return (
    <span className={`portfolio-skill-badge skill-${color}`}>
      {skill}
    </span>
  );
}
