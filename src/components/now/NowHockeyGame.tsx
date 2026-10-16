
import { Link } from 'react-router-dom';
import { ArrowUpRight, Gamepad2 } from 'lucide-react';
import goaliePhoto from '../../assets/game/field_hockey-goalie.png';

export default function NowHockeyGame() {
  return (
    <section id="now-arcade" className="now-playground">
      <header className="now-playground-header">
        <span className="now-playground-eyebrow">
          SOMETHING A LITTLE DIFFERENT
        </span>

        <h2>The Playground</h2>

        <p>
          Because not everything I build has to be serious
        </p>
      </header>

      <div className="now-hockey-game">
        <div className="now-hockey-game-content">
          <span className="now-hockey-game-eyebrow">
            <Gamepad2 size={15} />
            GAME 001 / FIELD HOCKEY
          </span>

          <h3>Think you can score past me?</h3>

          <p>
            When I'm not writing code, you'll probably
            find me in goal. You've got five penalty
            strokes to beat me
          </p>

          <Link
            to="/game"
            className="now-hockey-game-link"
          >
            PLAY BEAT THE KEEPER
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="now-hockey-game-visual">
          <span className="now-hockey-game-number">
            WISCONSIN / 88
          </span>

          <img
            src={goaliePhoto}
            alt="Afif in his Wisconsin field hockey goalkeeper kit"
            loading="lazy"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
