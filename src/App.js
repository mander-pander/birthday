import Welcome from './Components/Welcome';
import PopBalloons from './Components/Balloons/PopBalloons';
import Hangman from './Components/Hangman/Hangman';
import Celebrate from './Components/Celebrate/Celebrate';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';

function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [word, setWord] = useState('');

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome setAge={setAge} setName={setName} setWord={setWord} />} />
          <Route exact path="/Balloons" element={<PopBalloons age={age} />} />
          <Route path="/Hangman" element={<Hangman word={word}/>} />
          <Route path="/Celebrate" element={<Celebrate name={name} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
