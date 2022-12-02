import { useState, useEffect } from "react";
import Word from "./Word";
import styles from "./Hangman.module.css";
import Cake from "./Cake";
import Wrong from "./Wrong";
import CheckStatus from "./CheckStatus";

const Hangman = () => {
	const word = "goddamn";

	const [correct, setCorrect] = useState([]);
    const [wrong, setWrong] = useState([]);
    const [playing, setPlaying] = useState(false);
    const [finished, setFinished] = useState(false);

    const startGame = () => {
        setPlaying(true);
        setFinished(false);
        setWrong([]);
        setCorrect([]);
    };

    const endGame = () => {
        setPlaying(false);
        setFinished(true);
    }

    useEffect(() => {
        const handleKeydown = event => {
          const { key, keyCode } = event;
          if (playing && keyCode >= 65 && keyCode <= 90) {
            const letter = key.toLowerCase();
            if (word.includes(letter)) {
              if (!correct.includes(letter)) {
                setCorrect(currentLetters => [...currentLetters, letter]);
              } else {
                console.log("wrong");
              }
            } else {
              if (!wrong.includes(letter)) {
                setWrong(currentLetters => [...currentLetters, letter]);
              } else {
                console.log("yes");
              }
            }
          }
        }
        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
      }, [correct, wrong, playing]);

	return 	(
        <div>
            {!playing && !finished &&
                <div className={styles.home}>
                    <h1 className={styles.title}>Save your cake!</h1>
                    <button className={styles.match} onClick={startGame}></button>
                </div>
            }

            {playing && (
                <div className={styles.container}>
                    <Wrong wrongLetters={wrong} />
                    <Word word={word} correctLetters={correct} />
                    <Cake wrongLetters={wrong}/>
                    <CheckStatus correctLetters={correct} wrongLetters={wrong} word={word} onEnd={endGame} />
                </div>
            )}

            {finished &&
                <>
                    <CheckStatus correctLetters={correct} wrongLetters={wrong} word={word} onEnd={endGame} />
                    <Cake wrongLetters={wrong}/>
                    <button className={styles.endButton} onClick={startGame}>Play Again</button>
                </>
            }

		</div>
    )
}

export default Hangman;
