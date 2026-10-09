
import { useEffect, useState } from 'react';
import afifImage from '../../assets/afif.jpg';

export default function HeroPolaroid() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setReady(true), 100);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className="hero-photo-container">
      <figure
        className={`hero-polaroid ${ready ? 'hero-polaroid-ready' : ''}`}
      >
        <div className="hero-photo-frame">
          <img
            src={afifImage}
            alt="Afif standing outdoors in Madison, Wisconsin"
            className="hero-photo"
            fetchPriority="high"
          />
        </div>

        <figcaption className="hero-photo-caption">
          MADISON, WI
        </figcaption>
      </figure>
    </div>
  );
}
