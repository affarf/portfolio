import { Badge } from './ui/badge';

interface SkillBadgeProps {
  skill: string;
  color?: 'crimson' | 'mustard' | 'blue' | 'gray';
}

export default function SkillBadge({ skill, color = 'crimson' }: SkillBadgeProps) {
  const colorMap = {
    crimson: {
      borderColor: '#8b4545',
      textColor: '#8b4545',
      hoverBgColor: '#8b4545',
      hoverTextColor: '#fdfcf9'
    },
    mustard: {
      borderColor: '#c4a856',
      textColor: '#c4a856',
      hoverBgColor: '#c4a856',
      hoverTextColor: '#2a2520'
    },
    blue: {
      borderColor: '#4a6fa5',
      textColor: '#4a6fa5',
      hoverBgColor: '#4a6fa5',
      hoverTextColor: '#fdfcf9'
    },
    gray: {
      borderColor: '#9d8f7f',
      textColor: '#9d8f7f',
      hoverBgColor: '#9d8f7f',
      hoverTextColor: '#fdfcf9'
    }
  };

  const colors = colorMap[color];

  return (
    <Badge 
      className="px-4 py-2 border-2 text-xs font-mono font-semibold tracking-wider transition-all duration-200 hover:shadow-md"
      style={{
        backgroundColor: 'transparent',
        color: colors.textColor,
        borderColor: colors.borderColor,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = colors.hoverBgColor;
        (e.currentTarget as HTMLElement).style.color = colors.hoverTextColor;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
        (e.currentTarget as HTMLElement).style.color = colors.textColor;
      }}
    >
      {skill}
    </Badge>
  );
}
