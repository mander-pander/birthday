import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';


const Welcome = ({ setName, setAge, setWord }) => {

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('Balloons');
      }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <h1>Let's get started on the birthday celebration!</h1>
                <h4>What's the name of the birthday person?</h4>
                <input type="text" placeholder='name' onChange={e => setName(e.target.value)} />
                <h4>How old will they be?</h4>
                <input type="number" placeholder='0' onChange={e => setAge(e.target.value)} />
                <h4>Do they have a favorite word? You can pick any word for the hangman game!</h4>
                <input type="text" placeholder='birthday word' onChange={e => setWord(e.target.value)} />
                <button type="submit">Submit Info</button>
            </form>
        </Fragment>
    )
}

export default Welcome;
