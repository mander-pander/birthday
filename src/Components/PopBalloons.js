import { Fragment, useState } from 'react';
import Timer from './Timer';
import Balloons from './Balloons';
import Balloon from './Balloon';
import Score from './Score';
import generateBalloons from '../utils/generateBalloons';

const PopBalloons = () => {
    const [playing, setPlaying] = useState(false);
    const [finished, setFinished] = useState(false);
    const [score, setScore] = useState(0);

    const [balloons] = useState(generateBalloons(31));

    const onPop = points => setScore(score + points);

    const endGame = () => {
        setPlaying(false)
        setFinished(true)
    };

      const startGame = () => {
        setScore(0)
        setPlaying(true)
        setFinished(false)
    };


    return (
        <Fragment>
            {!playing && !finished &&
                <Fragment>
                    <h1>Pop the Balloons</h1>
                    <button onClick={startGame}>Start</button>
                </Fragment>
            }
            {playing && (
                <Fragment>
                    <button onClick={endGame}>
                        End Game
                    </button>
                    <Score
                        value={score}
                    />
                    <Timer
                        time={30000}
                        onEnd={endGame}
                    />
                    <Balloons>
                    {balloons.map(({delay, speed, points}, index) => (
                        <Balloon
                            key={index}
                            onPop={onPop}
                            points={points}
                            delay={delay}
                            speed={speed}
                        />
                        ))}
                    </Balloons>
                </Fragment>
            )}
            {finished &&
                <Fragment>
                    <Score value={score} />
                    <button onClick={startGame}>Play Again</button>
                </Fragment>
            }
        </Fragment>
    );
};

export default PopBalloons;
