
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, RotateCcw, Trophy } from 'lucide-react';
import goaliePhoto from '../assets/game/field_hockey-goalie.png';
import '../components/game/FieldHockeyGame.css';

type Direction = 'left' | 'center' | 'right';
type Result = 'goal' | 'save' | null;

const DIRECTIONS: Direction[] = ['left', 'center', 'right'];
const MAX_SHOTS = 5;

export default function FieldHockeyGame() {
  const [shots, setShots] = useState(0);
  const [goals, setGoals] = useState(0);
  const [shotDirection, setShotDirection] =
    useState<Direction | null>(null);
  const [keeperDirection, setKeeperDirection] =
    useState<Direction>('center');
  const [result, setResult] = useState<Result>(null);

  const finished = shots >= MAX_SHOTS;
  const showingResult = result !== null;

  function shoot(direction: Direction) {
    if (showingResult || finished) return;

    const keeper =
      DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];

    const scored = keeper !== direction;

    setShotDirection(direction);
    setKeeperDirection(keeper);
    setResult(scored ? 'goal' : 'save');
    setShots((previous) => previous + 1);

    if (scored) {
      setGoals((previous) => previous + 1);
    }
  }

  function nextShot() {
    setShotDirection(null);
    setKeeperDirection('center');
    setResult(null);
  }

  function restart() {
    setShots(0);
    setGoals(0);
    setShotDirection(null);
    setKeeperDirection('center');
    setResult(null);
  }

  function getFinalMessage() {
    if (goals === 5) {
      return "Okay, you're actually unstoppable!";
    }

    if (goals >= 3) {
      return "Not bad, but I'm demanding a rematch!";
    }

    if (goals >= 1) {
      return "You got a few past me. I'll allow it";
    }

    return "CLEAN SHEET! The keeper wins this one";
  }

  return (
    <main className="hockey-game-page">
      <div className="hockey-game-container">
        <Link to="/" className="hockey-game-back">
          <ArrowLeft size={16} />
          BACK TO PORTFOLIO
        </Link>

        <header className="hockey-game-header">
          <p className="hockey-game-eyebrow">
            AFIF'S MINI ARCADE / 001
          </p>

          <h1>Beat the Keeper</h1>

          <p>
            One keeper. Five penalty strokes.
            Think you can score past me?
          </p>
        </header>

        <section
          className="hockey-game-card"
          aria-label="Field hockey penalty stroke game"
        >
          {/* SCOREBOARD */}
          <div className="hockey-game-scoreboard">
            <div>
              <span>SHOTS</span>
              <strong>{shots} / {MAX_SHOTS}</strong>
            </div>

            <div>
              <span>GOALS</span>
              <strong>{goals}</strong>
            </div>

            <div>
              <span>SAVES</span>
              <strong>{shots - goals}</strong>
            </div>
          </div>

          {/* FIELD HOCKEY PITCH */}
          <div className="hockey-game-pitch">
            {/* Shooting circle / D */}
            <div
              className="hockey-game-circle"
              aria-hidden="true"
            >
              <span>SHOOTING CIRCLE</span>
            </div>

            {/* Goal and net */}
            <div className="hockey-game-goal">
              <div className="hockey-game-net" />

              {/* Goalkeeper photo */}
              <div
                key={`keeper-${shots}-${keeperDirection}`}
                className={[
                  'hockey-game-photo-keeper',
                  showingResult
                    ? `hockey-game-photo-keeper--${keeperDirection}`
                    : '',
                ].join(' ')}
              >
                <img
                  src={goaliePhoto}
                  alt="Afif in his red Wisconsin field hockey goalkeeper jersey"
                  draggable={false}
                />
              </div>
            </div>

            {/* Penalty stroke mark and ball */}
            <div className="hockey-game-stroke-mark">
              <span className="hockey-game-mark-dot" />
            </div>

            {!showingResult && (
              <div
                className="hockey-game-stationary-ball"
                aria-label="Ball on the penalty stroke mark"
              />
            )}

            {/* Proper curved field hockey stick */}
            <svg
              className="hockey-game-stick"
              viewBox="0 0 90 125"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M19 9 L64 91 Q73 105 61 112 Q51 118 39 111 L33 106"
                stroke="#251f20"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 9 L48 62"
                stroke="#cfaa67"
                strokeWidth="9"
                strokeLinecap="round"
              />
              <path
                d="M64 91 Q73 105 61 112 Q51 118 39 111 L33 106"
                stroke="#e8cf9d"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 10 L28 26"
                stroke="#f0e5d5"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            <span className="hockey-game-stroke-label">
              6.4 M / PENALTY STROKE
            </span>

            {/* Animated shot */}
            {shotDirection && (
              <div
                key={`ball-${shots}`}
                className={`hockey-game-flying-ball hockey-game-flying-ball--${shotDirection}`}
                aria-hidden="true"
              />
            )}
          </div>

          {/* MESSAGES */}
          <div
            className="hockey-game-message"
            aria-live="polite"
          >
            {finished ? (
              <>
                <Trophy size={24} />
                <strong>
                  FINAL SCORE: {goals} / {MAX_SHOTS}
                </strong>
                <p>{getFinalMessage()}</p>
              </>
            ) : result === 'goal' ? (
              <>
                <strong>GOOOOAL! 🏑</strong>
                <p>You got one past me!</p>
              </>
            ) : result === 'save' ? (
              <>
                <strong>WHAT A SAVE! 🧤</strong>
                <p>Not getting past this keeper</p>
              </>
            ) : (
              <>
                <strong>YOUR MOVE</strong>
                <p>Pick a corner and take your shot</p>
              </>
            )}
          </div>

          {/* CONTROLS */}
          {!showingResult && (
            <div className="hockey-game-actions">
              <button
                type="button"
                onClick={() => shoot('left')}
              >
                ↖ LEFT
              </button>

              <button
                type="button"
                onClick={() => shoot('center')}
              >
                ↑ CENTER
              </button>

              <button
                type="button"
                onClick={() => shoot('right')}
              >
                RIGHT ↗
              </button>
            </div>
          )}

          {showingResult && !finished && (
            <button
              type="button"
              className="hockey-game-next"
              onClick={nextShot}
            >
              NEXT SHOT →
            </button>
          )}

          {finished && (
            <button
              type="button"
              className="hockey-game-next"
              onClick={restart}
            >
              <RotateCcw size={17} />
              PLAY AGAIN
            </button>
          )}
        </section>

        <p className="hockey-game-footnote">
          Inspired by my time as a goalkeeper for the
          Wisconsin Club Field Hockey Team
        </p>
      </div>
    </main>
  );
}
