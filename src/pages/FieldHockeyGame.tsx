
import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, MouseEvent, KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  RotateCcw,
  Trophy,
  Crosshair,
  Zap,
} from 'lucide-react';

import goaliePhoto from '../assets/game/field_hockey-goalie.png';
import '../components/game/FieldHockeyGame.css';

type Difficulty = 'rookie' | 'varsity' | 'all-american';
type Outcome = 'goal' | 'save' | 'miss';
type Phase = 'ready' | 'flying' | 'result';

type Point = {
  x: number;
  y: number;
};

type ShotRecord = {
  target: Point;
  keeper: Point;
  outcome: Outcome;
  power: number;
};

const MAX_SHOTS = 5;

const DIFFICULTIES = {
  rookie: {
    label: 'ROOKIE',
    error: 35,
    reachX: 13,
    reachY: 25,
    reaction: 240,
  },
  varsity: {
    label: 'VARSITY',
    error: 22,
    reachX: 18,
    reachY: 32,
    reaction: 140,
  },
  'all-american': {
    label: 'ALL-AMERICAN',
    error: 11,
    reachX: 24,
    reachY: 40,
    reaction: 60,
  },
} as const;

const clamp = (
  value: number,
  minimum: number,
  maximum: number
) => Math.max(minimum, Math.min(maximum, value));

const randomBetween = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export default function FieldHockeyGame() {
  const [difficulty, setDifficulty] =
    useState<Difficulty>('varsity');

  const [power, setPower] = useState(65);

  const [aim, setAim] = useState<Point>({
    x: 75,
    y: 28,
  });

  const [phase, setPhase] = useState<Phase>('ready');

  const [shots, setShots] = useState<ShotRecord[]>([]);

  const [currentShot, setCurrentShot] =
    useState<ShotRecord | null>(null);

  const timerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const goals = shots.filter(
    (shot) => shot.outcome === 'goal'
  ).length;

  const saves = shots.filter(
    (shot) => shot.outcome === 'save'
  ).length;

  const misses = shots.filter(
    (shot) => shot.outcome === 'miss'
  ).length;

  const finished =
    shots.length === MAX_SHOTS && phase === 'result';

  const config = DIFFICULTIES[difficulty];

  function aimAt(event: MouseEvent<HTMLButtonElement>) {
    if (phase !== 'ready') return;

    // Keyboard-generated clicks have detail = 0.
    // Keep the existing target in that case.
    if (event.detail === 0) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 100;

    const y =
      ((event.clientY - rect.top) / rect.height) * 100;

    setAim({
      x: clamp(x, 3, 97),
      y: clamp(y, 3, 97),
    });
  }

  function keyboardAim(event: KeyboardEvent<HTMLButtonElement>) {
    if (phase !== 'ready') return;

    const adjustments: Record<string, Point> = {
      ArrowLeft: { x: -5, y: 0 },
      ArrowRight: { x: 5, y: 0 },
      ArrowUp: { x: 0, y: -5 },
      ArrowDown: { x: 0, y: 5 },
    };

    const adjustment = adjustments[event.key];

    if (!adjustment) return;

    event.preventDefault();

    setAim((previous) => ({
      x: clamp(previous.x + adjustment.x, 3, 97),
      y: clamp(previous.y + adjustment.y, 3, 97),
    }));
  }

  function takeShot() {
    if (phase !== 'ready' || shots.length >= MAX_SHOTS) {
      return;
    }

    // More power = more spread, particularly above 75.
    // Lower power is more accurate but easier to save.
    const spread =
      power <= 75
        ? 2 + (power / 75) * 4
        : 6 + (power - 75) * 0.48;

    const actualTarget: Point = {
      x: aim.x + randomBetween(-spread, spread),
      y: aim.y + randomBetween(-spread, spread),
    };

    const missedGoal =
      actualTarget.x < 0 ||
      actualTarget.x > 100 ||
      actualTarget.y < 0 ||
      actualTarget.y > 100;

    // Keeper attempts to predict where the ball is going.
    // Higher difficulties have smaller prediction errors.
    const keeperTarget: Point = {
      x: clamp(
        actualTarget.x +
          randomBetween(-config.error, config.error),
        12,
        88
      ),
      y: clamp(
        actualTarget.y +
          randomBetween(-config.error, config.error),
        0,
        100
      ),
    };

    const horizontalGap = Math.abs(
      actualTarget.x - keeperTarget.x
    );

    const verticalGap = Math.abs(
      actualTarget.y - keeperTarget.y
    );

    // Faster shots reduce the effective saving range.
    const speedFactor = 1.15 - (power / 100) * 0.45;

    const keeperSaved =
      !missedGoal &&
      horizontalGap <= config.reachX * speedFactor &&
      verticalGap <= config.reachY * speedFactor;

    const outcome: Outcome = missedGoal
      ? 'miss'
      : keeperSaved
        ? 'save'
        : 'goal';

    const shot: ShotRecord = {
      target: actualTarget,
      keeper: keeperTarget,
      outcome,
      power,
    };

    setCurrentShot(shot);
    setShots((previous) => [...previous, shot]);
    setPhase('flying');

    // Faster shots have shorter flight times.
    const duration = Math.round(950 - power * 4);

    timerRef.current = setTimeout(() => {
      setPhase('result');
      timerRef.current = null;
    }, duration);
  }

  function nextShot() {
    setCurrentShot(null);
    setPhase('ready');
  }

  function restart() {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setShots([]);
    setCurrentShot(null);
    setPhase('ready');
    setAim({ x: 75, y: 28 });
    setPower(65);
  }

  function finalMessage() {
    if (goals === 5) {
      return "Okay, you might actually be better than me";
    }

    if (goals >= 3) {
      return "Not bad. I'm demanding a rematch";
    }

    if (goals >= 1) {
      return "You got a few past me. I'll allow it";
    }

    return "CLEAN SHEET! This keeper isn't going anywhere";
  }

  const flightDuration = currentShot
    ? Math.round(950 - currentShot.power * 4)
    : 700;

  const ballStyle = currentShot
    ? ({
        '--ball-target-x': `${
          9 + currentShot.target.x * 0.82
        }%`,
        '--ball-target-y': `${
          9 + currentShot.target.y * 0.37
        }%`,
        '--flight-duration': `${flightDuration}ms`,
      } as CSSProperties)
    : undefined;

  const keeperStyle = ({
    '--keeper-x': `${
      currentShot?.keeper.x ?? 50
    }%`,
    '--keeper-delay': `${
      currentShot ? config.reaction : 0
    }ms`,
    '--keeper-duration': `${
      Math.max(200, flightDuration - config.reaction)
    }ms`,
  } as CSSProperties);

  const keeperPosition =
    currentShot === null
      ? 'center'
      : currentShot.keeper.x < 40
        ? 'left'
        : currentShot.keeper.x > 60
          ? 'right'
          : 'center';

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
            Five penalty strokes. One Wisconsin goalkeeper.
            Think you can score past me?
          </p>
        </header>

        <section className="hockey-game-card">

          {/* SCOREBOARD */}
          <div className="hockey-game-scoreboard">
            <div>
              <span>STROKES</span>
              <strong>
                {shots.length} / {MAX_SHOTS}
              </strong>
            </div>

            <div>
              <span>GOALS</span>
              <strong>{goals}</strong>
            </div>

            <div>
              <span>SAVES</span>
              <strong>{saves}</strong>
            </div>

            <div>
              <span>MISSES</span>
              <strong>{misses}</strong>
            </div>
          </div>

          {/* SETTINGS */}
          <div className="hockey-game-settings">
            <div className="hockey-game-setting">
              <label htmlFor="hockey-difficulty">
                DIFFICULTY
              </label>

              <select
                id="hockey-difficulty"
                value={difficulty}
                disabled={shots.length > 0}
                onChange={(event) =>
                  setDifficulty(
                    event.target.value as Difficulty
                  )
                }
              >
                <option value="rookie">
                  ROOKIE
                </option>

                <option value="varsity">
                  VARSITY
                </option>

                <option value="all-american">
                  ALL-AMERICAN
                </option>
              </select>
            </div>

            <div className="hockey-game-setting">
              <span>KEEPER LEVEL</span>
              <strong>{config.label}</strong>
            </div>
          </div>

          {/* PITCH */}
          <div className="hockey-game-pitch">

            {/* SHOOTING CIRCLE */}
            <div className="hockey-game-circle">
              <span>SHOOTING CIRCLE</span>
            </div>

            {/* GOAL */}
            <button
              type="button"
              className={[
                'hockey-game-goal',
                phase === 'ready'
                  ? 'hockey-game-goal--aiming'
                  : '',
              ].join(' ')}
              onClick={aimAt}
              onKeyDown={keyboardAim}
              disabled={phase !== 'ready'}
              aria-label={
                `Aim inside the goal. Current target: ` +
                `${Math.round(aim.x)} percent across, ` +
                `${Math.round(aim.y)} percent down. ` +
                `Use arrow keys to adjust.`
              }
            >
              <span className="hockey-game-net" />

              {/* AIMING RETICLE */}
              {phase === 'ready' && (
                <span
                  className="hockey-game-crosshair"
                  style={{
                    left: `${aim.x}%`,
                    top: `${aim.y}%`,
                  }}
                >
                  <Crosshair size={26} strokeWidth={2.5} />
                </span>
              )}

              {/* ACTUAL GOALKEEPER PHOTO */}
              <span
                className={[
                  'hockey-game-photo-keeper',
                  currentShot
                    ? 'hockey-game-photo-keeper--moving'
                    : '',
                  `hockey-game-photo-keeper--${keeperPosition}`,
                  currentShot?.keeper.y !== undefined &&
                  currentShot.keeper.y < 40
                    ? 'hockey-game-photo-keeper--high'
                    : '',
                ].join(' ')}
                style={keeperStyle}
              >
                <img
                  src={goaliePhoto}
                  alt=""
                  draggable={false}
                />
              </span>
            </button>

            {/* PENALTY STROKE SPOT */}
            <div className="hockey-game-stroke-mark" />

            {/* STATIONARY BALL */}
            {phase === 'ready' && (
              <div className="hockey-game-stationary-ball" />
            )}

            {/* FIELD HOCKEY STICK */}
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
            </svg>

            <span className="hockey-game-stroke-label">
              6.4 M / PENALTY STROKE
            </span>

            {/* MOVING BALL */}
            {currentShot && (
              <div
                key={shots.length}
                className={`hockey-game-flying-ball hockey-game-flying-ball--${currentShot.outcome}`}
                style={ballStyle}
              />
            )}

          </div>

          {/* POWER METER */}
          <div className="hockey-game-power">
            <div className="hockey-game-power-heading">
              <label htmlFor="hockey-power">
                <Zap size={16} />
                SHOT POWER
              </label>

              <strong>{power}%</strong>
            </div>

            <input
              id="hockey-power"
              type="range"
              min="20"
              max="100"
              step="1"
              value={power}
              disabled={phase !== 'ready'}
              onChange={(event) =>
                setPower(Number(event.target.value))
              }
              style={
                {
                  '--power-progress': `${
                    ((power - 20) / 80) * 100
                  }%`,
                } as CSSProperties
              }
            />

            <div className="hockey-game-power-labels">
              <span>CONTROL</span>
              <span>BALANCED</span>
              <span>POWER</span>
            </div>

            <p>
              More power makes your shot faster, but harder
              to aim accurately
            </p>
          </div>

          {/* RESULTS */}
          <div
            className="hockey-game-message"
            aria-live="polite"
          >
            {finished ? (
              <>
                <Trophy size={26} />

                <strong>
                  FINAL SCORE: {goals} / {MAX_SHOTS}
                </strong>

                <p>{finalMessage()}</p>
              </>
            ) : phase === 'flying' ? (
              <>
                <strong>HERE IT COMES! 🏑</strong>
                <p>Watch the keeper...</p>
              </>
            ) : phase === 'result' &&
              currentShot?.outcome === 'goal' ? (
              <>
                <strong>GOOOOAL! 🏑</strong>
                <p>You got one past me!</p>
              </>
            ) : phase === 'result' &&
              currentShot?.outcome === 'save' ? (
              <>
                <strong>WHAT A SAVE! 🧤</strong>
                <p>Not getting past this keeper</p>
              </>
            ) : phase === 'result' &&
              currentShot?.outcome === 'miss' ? (
              <>
                <strong>WIDE OF THE GOAL!</strong>
                <p>Maybe take a little power off next time</p>
              </>
            ) : (
              <>
                <Crosshair size={19} />

                <strong>PICK YOUR SPOT</strong>

                <p>
                  Click or tap inside the goal to aim.
                  Then take your shot
                </p>
              </>
            )}
          </div>

          {/* ACTIONS */}
          {phase === 'ready' && (
            <button
              type="button"
              className="hockey-game-next"
              onClick={takeShot}
            >
              <Zap size={18} />
              TAKE THE SHOT →
            </button>
          )}

          {phase === 'flying' && (
            <button
              type="button"
              className="hockey-game-next"
              disabled
            >
              BALL IN FLIGHT...
            </button>
          )}

          {phase === 'result' && !finished && (
            <button
              type="button"
              className="hockey-game-next"
              onClick={nextShot}
            >
              NEXT STROKE →
            </button>
          )}

          {finished && (
            <button
              type="button"
              className="hockey-game-next"
              onClick={restart}
            >
              <RotateCcw size={18} />
              PLAY AGAIN
            </button>
          )}

        </section>

        <p className="hockey-game-footnote">
          Made for fun, inspired by my time as a goalkeeper
          for the Wisconsin Club Field Hockey Team
        </p>

      </div>
    </main>
  );
}
