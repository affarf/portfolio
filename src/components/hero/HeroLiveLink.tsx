
import { ArrowUpRight } from 'lucide-react';

export default function HeroLiveLink() {
  return (
    <div className="hero-live-container">
      <a
        href="#/now"
        className="hero-live-link"
        aria-label="See what Afif is up to right now"
      >
        <span className="hero-live-indicator" aria-hidden="true">
          <span className="hero-live-pulse" />
          <span className="hero-live-dot" />
        </span>

        <span className="hero-live-label">
          LIVE
        </span>

        <span className="hero-live-text">
          What I'm up to right now
        </span>

        <ArrowUpRight
          className="hero-live-arrow"
          size={22}
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
