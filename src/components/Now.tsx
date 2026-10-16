import NowCarousel from './now/NowCarousel';
import NowInterests from './now/NowInterests';
import './now/Now.css';
import NowHockeyGame from './now/NowHockeyGame';

export default function Now() {
  return (
    <main className="portfolio-now">
      <div className="now-shell">
        <header className="now-header">
          <p className="now-eyebrow">Last updated: October 2026</p>
          <h1>What I'm up to right now</h1>
          <p className="now-intro">A living snapshot of what I'm working on, learning, and enjoying lately</p>
        </header>

<button
  type="button"
  className="now-playground-shortcut"
  onClick={() => {
    document
      .getElementById('now-arcade')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  }}
>
  <span>🏑</span>
  SKIP TO THE PLAYGROUND
  <span aria-hidden="true">↓</span>
</button>

        <NowCarousel />
        <NowInterests />
        <NowHockeyGame />
      </div>
    </main>
  );
}
