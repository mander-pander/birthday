import PopBalloons from './Components/PopBalloons';
import Hangman from './Components/Hangman/Hangman';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<PopBalloons />} />
          <Route path="/Hangman" element={<Hangman />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
