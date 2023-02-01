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
    const [age, setAge] = useState(0);

    const [entryBalloons] = useState(generateBalloons(5));

    const [balloons] = useState(generateBalloons({age}));
    console.log(age)
    const time = age * 1000;

    const onPop = points => setScore(score + points);

    const endGame = () => {
        setPlaying(false);
        setFinished(true);
    };

    const startGame = () => {
        setScore(0);
        setPlaying(true);
        setFinished(false);
    };

    return (
        <Fragment>
            {!playing && !finished &&
                <div className={styles.titleContainer}>
                    <input type="number" placeholder='0' onChange={e => setAge(e.target.value)} />
                    <h1>Pop the Balloons</h1>
                    <h4>Pop a balloon to get started!</h4>
                    <h5>Once you start, you'll have {age} seconds to pop {age} balloons!</h5>
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
                        time={time}
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
