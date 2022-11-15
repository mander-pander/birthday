import styles from "./Hangman.module.css";

const Word = ({ word, correctLetters }) => {

    return (
        <div className={styles.word}>
            {word.split('').map((letter, index) => {
                return (
                    <p className={styles.letters} key={index}>
                        {correctLetters.includes(letter) ? letter : '_'}
                    </p>
                )
            })}
        </div>
    )
}

export default Word;
