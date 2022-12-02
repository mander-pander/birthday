import checkWin from "../../utils/checkWin";
import styles from "./Hangman.module.css";

const CheckStatus = ({correctLetters, wrongLetters, word, onEnd}) => {
    let finalMessage = '';

    if( checkWin(correctLetters, wrongLetters, word) === 'win' ) {
      finalMessage = 'You saved the candles!';
      onEnd();
    } else if( checkWin(correctLetters, wrongLetters, word) === 'lose' ) {
      finalMessage = 'No candles to blow out.';
      onEnd();
    }

    return (
      <div>
        <div>
          <h2 className={styles.title}>{finalMessage}</h2>

        </div>
      </div>
    )
}

export default CheckStatus;
