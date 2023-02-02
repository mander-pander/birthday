import { useState, useEffect } from "react";
import confetti from 'canvas-confetti';
import { Link } from "react-router-dom";
import styles from "./Balloon.module.css";

const Score = ({ value, onEnd, age}) => {
    const [win, setWin] = useState(false);

    useEffect(() => {
        if(value === +age) {
            onEnd();
            confetti({
                particleCount: 300,
                spread: 100,
                origin: { y: .9 }
            });
            setWin(true);
        }
    }, [value, age, onEnd]);

    return (
        <>
        {!win &&
            <div className={styles.score}>
                {`Score: ${value}`}
            </div>
        }
        {win &&
            <div className={styles.winningScore}>
                <div className={styles.score}>
                    <h3>{`Score: ${value}`}</h3>
                </div>
                <button className={styles.nextPhase}>
                    <Link to="/Hangman">Go to Phase 2 ➟</Link>
                </button>
            </div>
        }
        </>
    )
}

export default Score;
