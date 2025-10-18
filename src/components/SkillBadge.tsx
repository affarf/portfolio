import { Badge } from './ui/badge';

interface SkillBadgeProps {
  skill: string;
  color: 'blue' | 'lavender' | 'mint' | 'peach';
}

export default function SkillBadge({ skill, color }: SkillBadgeProps) {
  const colorMap = {
    blue: 'var(--pastel-blue)',
    lavender: 'var(--pastel-lavender)',
    mint: 'var(--pastel-mint)',
    peach: 'var(--pastel-peach)',
  };

  return (
    <Badge 
      className="px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 cursor-default border-0"
      style={{
        backgroundColor: colorMap[color],
        color: '#2d3748',
      }}
    >
      {skill}
    </Badge>
  );
}
