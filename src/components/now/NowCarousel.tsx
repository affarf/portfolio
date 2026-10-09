import { useState } from 'react';
import { carouselCards } from './nowData';

export default function NowCarousel() {
  const [current, setCurrent] = useState(0);
  const card = carouselCards[current];
  const previous = () => setCurrent((value) => (value - 1 + carouselCards.length) % carouselCards.length);
  const next = () => setCurrent((value) => (value + 1) % carouselCards.length);

  return (
    <section className="now-feature" aria-label="What I'm currently doing">
      <div className="now-feature-card">
        <div className="now-feature-media">
          <img src={card.image} alt={card.label} />
          <span className="now-feature-count">{current + 1} / {carouselCards.length}</span>
        </div>
        <div className="now-feature-copy" aria-live="polite">
          <p className="now-eyebrow">{card.label}</p>
          <p className="now-feature-statement">{card.content}</p>
        </div>
      </div>
      <div className="now-feature-controls">
        <div className="now-feature-arrows">
          <button type="button" onClick={previous} aria-label="Previous highlight">← PREV</button>
          <button type="button" onClick={next} aria-label="Next highlight">NEXT →</button>
        </div>
        <div className="now-feature-dots" aria-label="Choose a highlight">
          {carouselCards.map((item, index) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setCurrent(index)}
              className={index === current ? 'is-active' : ''}
              aria-label={`Show ${item.label}`}
              aria-current={index === current ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
