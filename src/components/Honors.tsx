import AwardCard from './honors/AwardCard';
import { awards } from './honors/awardsData';
import './honors/Honors.css';

export default function Honors() {
  return (
    <section id="honors" className="portfolio-honors" aria-labelledby="honors-title">
      <div className="honors-inner">
        <header className="honors-header">
          <h2 id="honors-title">Honors &amp; Awards</h2>
          <p>RECOGNITION &amp; ACHIEVEMENT</p>
        </header>
        <div className="honors-grid">
          {awards.map(award => <AwardCard key={award.id} award={award} />)}
        </div>
      </div>
    </section>
  );
}
