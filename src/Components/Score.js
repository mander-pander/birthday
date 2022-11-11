import { useState, useEffect } from "react";
import confetti from 'canvas-confetti';

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
            <div>
                {`Score: ${value}`}
            </div>
        }
        {win &&
            <>
                <div>
                    {`Score: ${value}`}
                </div>
                <button>Hangman</button>
            </>
        }
        </>
    )
}

export default Score;
