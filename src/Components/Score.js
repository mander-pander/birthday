import { useState, useEffect } from "react";
import confetti from 'canvas-confetti';
import { Link } from "react-router-dom";
import styles from "./Balloon.module.css";

const Score = ({ value, onEnd}) => {
    const [win, setWin] = useState(false);

    useEffect(() => {
        if(value === 2) {
            onEnd();
            confetti({
                particleCount: 300,
                spread: 100,
                origin: { y: .9 }
            });
            setWin(true);
        }
    })
    return (
        <>
        {!win &&
            <div className={styles.header}>
                {`Score: ${value}`}
            </div>
        }
        {win &&
            <div className={styles.winningScore}>
                <div className={styles.header}>
                    {`Score: ${value}`}
                </div>
                <button>
                    <Link to="./Hangman">Phase 2</Link>
                </button>
            </div>
        }
        </>
    )
}

export default Score;
