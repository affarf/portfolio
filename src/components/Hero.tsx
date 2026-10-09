
import HeroIntroduction from './hero/HeroIntroduction';
import HeroPolaroid from './hero/HeroPolaroid';
import HeroLiveLink from './hero/HeroLiveLink';
import './hero/Hero.css';

export default function Hero() {
  return (
    <section id="home" className="portfolio-hero">
      <div className="hero-grain" aria-hidden="true" />

      <div className="hero-layout">
        <HeroIntroduction />
        <HeroPolaroid />
        <HeroLiveLink />
      </div>
    </section>
  );
}
