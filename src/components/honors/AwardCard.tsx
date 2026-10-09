import { Award, GraduationCap, Lightbulb, Landmark } from 'lucide-react';
import type { Award as AwardInfo } from './awardsData';

const awardIcons = {
  scholarship: GraduationCap,
  honor: Award,
  initiative: Lightbulb,
  government: Landmark,
};

type Props = { award: AwardInfo };

export default function AwardCard({ award }: Props) {
  const Icon = awardIcons[award.icon];
  return (
    <article className="honors-card">
      <div className="honors-card-top">
        <span className="honors-icon" aria-hidden="true"><Icon size={25} strokeWidth={1.7}/></span>
        <span className="honors-date">{award.date}</span>
      </div>
      <h3 className="honors-card-title">{award.title}</h3>
      <p className="honors-issuer">{award.issuer}</p>
      <p className="honors-description">{award.description}</p>
    </article>
  );
}
