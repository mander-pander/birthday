import styles from "./Hangman.module.css";

const WrongLetters = ({ wrongLetters }) => {

    return (
        <div className={styles.wrongContainer}>
            <p className={styles.header}>Wrong</p>
            <div className={styles.wrong}>
            {wrongLetters
                .map((letter, index) => <p  key={index}>{letter}</p>)
                .reduce((prev, curr) => prev === null ? [curr] : [prev, curr], null)}
            </div>
        </div>
    )
}

export default WrongLetters;
