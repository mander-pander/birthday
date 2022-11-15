const Word = ({ word, correctLetters }) => {

    return (
        <div>
            {word.split('').map((letter, index) => {
                return (
                    <p key={index}>
                        {correctLetters.includes(letter) ? letter : ''}
                    </p>
                )
            })}
        </div>
    )
}

export default Word;
