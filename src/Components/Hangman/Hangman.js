import { useState } from "react";

const Hangman = () => {
	const word = "TEST";
    const alphabet = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"];
	const [correct, setCorrect] = useState([])
    const [playing, setPlaying] = useState(false);
    const [finished, setFinished] = useState(false);

	const hidden = word.split('').map(letter =>
	correct.includes(letter) ? letter : "_").join(" ");

    const startGame = () => {
        setPlaying(true)
        setFinished(false)
    };

	return 	(
        <div>
            {!playing && !finished &&
                <>
                    <h1>Hangman</h1>
                    <button onClick={startGame}>Start</button>
                </>
            }

            {playing && (
                <div>
                    <p>{hidden}</p>

                    {alphabet.map((character, index) =>
                        <button
                            key={index} onClick={() => {
                                if (word.includes(character)) {
                                    setCorrect([...correct, character])
                                }
                            }}>
                                {character}
                        </button>
                    )}

                    {!hidden.includes("_")}
                </div>
            )}

		</div>
    )
}

export default Hangman;
