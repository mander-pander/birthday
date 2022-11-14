import { useState } from "react";

const Hangman = () => {
	const word = "TEST";
    const alphabet = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"];
	const [correct, setCorrect] = useState([])

	const hidden = word.split('').map(letter =>
	correct.includes(letter) ? letter : "_").join(" ");

	return 	<div>
			<p>{hidden}</p>
			{alphabet
			.map((character, index) =>
			<button
                key={index} onClick={() => {
                    if (word.includes(character)) {
                        setCorrect([...correct, character])
                    }
                }}>
                    {character}
            </button>)}

			{!hidden.includes("_")}

			</div>
}

export default Hangman;
