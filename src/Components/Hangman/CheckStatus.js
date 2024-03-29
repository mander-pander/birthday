import checkWin from "../../utils/checkWin";
import styles from "./Hangman.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CheckStatus = ({correctLetters, wrongLetters, word, onEnd}) => {
    const [win, setWin] = useState(false);
    const [lost, setLose] = useState(false);

    useEffect(() => {
      if(checkWin(correctLetters, wrongLetters, word) === 'win' ) {
        onEnd();
        setWin(true);
      }
    })

    useEffect(() => {
      if(checkWin(correctLetters, wrongLetters, word) === 'lose' ) {
        onEnd();
        setLose(true);
      }
    })

    return (
      <>
      {win &&
        <div className={styles.win}>
            <h2 className={styles.title}>
              You saved the candles!
            </h2>
            <button className={styles.winButton}>
              <Link to="../Celebrate">Ready to celebrate?</Link>
            </button>
        </div>
      }

      {lost &&
        <div>
          <h2 className={styles.title}>
            No more candles to blow out!
          </h2>
        </div>
      }
      </>
    )
}

export default CheckStatus;
