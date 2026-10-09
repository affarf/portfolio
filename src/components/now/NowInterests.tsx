import { interests } from './nowData';

export default function NowInterests() {
  return (
    <section className="now-interests" aria-labelledby="now-interests-title">
      <div className="now-interests-heading">
        <p className="now-eyebrow">Currently Into</p>
        <h2 id="now-interests-title">What I'm consuming, obsessing over, and letting live rent-free in my head</h2>
      </div>
      <div className="now-interests-list">
        {interests.map((item, index) => (
          <article key={item.id} className={`now-interest ${index % 2 === 1 ? 'now-interest-reverse' : ''}`}>
            <div className="now-interest-image-wrap">
              <div className={`now-polaroid now-polaroid-${index + 1}`}>
                <img src={item.image} alt={item.label} />
                <span className="now-photo-number">No. {item.id}</span>
              </div>
            </div>
            <div className="now-interest-copy">
              <h3 className="now-eyebrow">{item.label}</h3>
              <p className="now-interest-statement">{item.content}</p>
              {item.id === '01' && (
                <div className="now-embeds now-spotify-embeds">
                  <iframe
                    title="Frank Ocean — Blonde Spotify album"
                    src="https://open.spotify.com/embed/album/3mH6qwIy9crq0I9YQbOuDf?utm_source=generator&theme=0"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  />
                  <iframe
                    title="Second Spotify album"
                    src="https://open.spotify.com/embed/album/3OqRGywivnQ0IeClUeUa4n?utm_source=generator&theme=0"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  />
                </div>
              )}
              {item.id === '02' && (
                <div className="now-video-wrap">
                  <iframe
                    title="Dune trailer"
                    src="https://www.youtube.com/embed/nLyxSDHjbHY?si=t_E_9Xy7F_nLly4v"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              {item.id === '03' && (
                <div className="now-play-logs">
                  <p>LOG 01 — DROVE AROUND AIMLESSLY</p>
                  <p>LOG 02 — CAUSED MINOR CHAOS</p>
                  <p>LOG 03 — NO REGRETS</p>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
