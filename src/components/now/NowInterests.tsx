
import { Heart } from 'lucide-react';
import { interests } from './nowData';

export default function NowInterests() {
  return (
    <section
      className="now-interests"
      aria-labelledby="now-interests-title"
    >
      <div className="now-interests-heading">
        <p className="now-eyebrow">Currently Into</p>
        <h2 id="now-interests-title">
          What I'm consuming, obsessing over, and letting
          live rent-free in my head
        </h2>
      </div>

      <div className="now-interests-list">
        {interests.map((item, index) => {
          const isLife = item.label === 'Life Lately';
          const isMusic = item.label === 'Currently Listening';
          const isDune = item.label === 'Deep-Diving';
          const isStardew = item.label === 'Currently Playing';

          return (
            <article
              key={item.id}
              className={`now-interest ${
                index % 2 === 1 ? 'now-interest-reverse' : ''
              }`}
            >
              <div className="now-interest-image-wrap">
                <div
                  className={`now-polaroid now-polaroid-${index + 1} ${
                    isLife || isStardew
                      ? 'now-polaroid-landscape'
                      : ''
                  }`}
                >
                  <img
                    src={item.image}
                    alt={isLife ? 'A favorite memory together' : item.label}
                    loading="lazy"
                  />
                  <span className="now-photo-number">
                    No. {item.id}
                  </span>
                </div>
              </div>

              <div className="now-interest-copy">
                <h3 className="now-eyebrow">
                  {item.label}
                </h3>

                <p className="now-interest-statement">
                  {item.content}
                </p>

                {/* LIFE LATELY — POSTCARD */}
                {isLife && (
                  <div className="now-love-postcard">
                    <div className="now-postcard-top">
                      <span>POSTCARD NO. 001</span>

                      <Heart
                        className="now-postcard-heart"
                        size={22}
                        aria-hidden="true"
                      />
                    </div>

                    <h4>The good kind of ordinary ♡</h4>

                    <p className="now-postcard-message">
                      Little adventures, familiar laughs, and
                      moments I wish could last a little longer
                    </p>

                    <div className="now-postcard-bottom">
                      <span>MADISON ↔ PARIS</span>
                      <span className="now-postcard-typing">
                        TO BE CONTINUED
                      </span>
                    </div>
                  </div>
                )}

                {/* CURRENTLY LISTENING — SPOTIFY */}
                {isMusic && (
                  <div className="now-embeds now-spotify-embeds">
                    <iframe
                      title="Frank Ocean — Blonde"
                      src="https://open.spotify.com/embed/album/3mH6qwIy9crq0I9YQbOuDf?utm_source=generator&theme=0"
                      loading="lazy"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    />

                    <iframe
                      title="Alex Turner — Submarine"
                      src="https://open.spotify.com/embed/album/3OqRGywivnQ0IeClUeUa4n?utm_source=generator&theme=0"
                      loading="lazy"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    />
                  </div>
                )}

                {/* DEEP-DIVING — DUNE */}
                {isDune && (
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

                {/* STARDEW VALLEY — FARM JOURNAL */}
                {isStardew && (
                  <div className="stardew-journal">
                    <div className="stardew-journal-header">
                      <span className="stardew-journal-title">
                        🌱 FARM JOURNAL
                      </span>

                      <span className="stardew-journal-status">
                        <span
                          className="stardew-status-dot"
                          aria-hidden="true"
                        />
                        IN PROGRESS
                      </span>
                    </div>

                    <div className="stardew-journal-entries">
                      <div className="stardew-journal-entry">
                        <span className="stardew-entry-icon">
                          🌾
                        </span>
                        <span>A little farm, big ambitions</span>
                      </div>

                      <div className="stardew-journal-entry">
                        <span className="stardew-entry-icon">
                          🎣
                        </span>
                        <span>
                          Still figuring out the fishing mechanics
                        </span>
                      </div>

                      <div className="stardew-journal-entry">
                        <span className="stardew-entry-icon">
                          🌙
                        </span>
                        <span>
                          Just one more day... probably
                        </span>
                      </div>
                    </div>

                    <div className="stardew-journal-footer">
                      <span>CO-OP ADVENTURES</span>
                      <span className="stardew-save-status">
                        ● SAVE IN PROGRESS
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
