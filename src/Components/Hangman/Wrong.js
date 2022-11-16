const WrongLetters = ({ wrongLetters }) => {

    return (
        <div>
            {wrongLetters.length > 0 &&
                <p>Wrong</p>
            }
            {wrongLetters
                .map((letter, index) => <p key={index}>{letter}</p>)
                .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
        </div>
    )
}

export default WrongLetters;
