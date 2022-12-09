import { Fragment, useState } from 'react';
import Timer from './Timer';
import Balloons from './Balloons';
import Balloon from './Balloon';
import Score from './Score';
import generateBalloons from '../utils/generateBalloons';
import styles from "./Balloon.module.css";

const PopBalloons = () => {
    const [playing, setPlaying] = useState(false);
    const [finished, setFinished] = useState(false);
    const [score, setScore] = useState(0);

    const [entryBalloons] = useState(generateBalloons(5));

    const [balloons] = useState(generateBalloons(16));

    const onPop = points => setScore(score + points);

    const endGame = () => {
        setPlaying(false);
        setFinished(true);
    };

    const startGame = () => {
        setScore(0)
        setPlaying(true)
        setFinished(false)
    };

    return (
        <Fragment>
            {!playing && !finished &&
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Pop the Balloons</h1>
                    <h4 className={styles.title}>Pop a balloon to get started!</h4>
                    <h5 className={styles.title}>Once you start, you'll have 31 seconds to pop 31 balloons!</h5>
                    <div className={styles.startContainer}>
                        {entryBalloons.map(()=> <button className={styles.start} onClick={startGame}></button>)}
                    </div>
                </div>
            }
            {playing && (
                <Fragment>
                    <button onClick={endGame} className={styles.endButton}>
                        End Game
                    </button>
                    <Score
                        value={score}
                        onEnd={endGame}
                    />
                    <Timer
                        time={31000}
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
                <div className={styles.scoreContainer}>
                    <Score value={score} onEnd={endGame} />
                    <button onClick={startGame} className={styles.again}>Play Again?</button>
                </div>
            }

        </Fragment>
    );
};

export default PopBalloons;
