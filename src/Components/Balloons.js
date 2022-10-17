import { ReactFloatingBalloons } from "react-floating-balloons";

function Balloons() {
    return (
      <div className="App">
        <h1>Happy Birthday!</h1>
        <ReactFloatingBalloons
          count={20}
          msgText="Happy Birthday"
          colors={["yellow", "purple", "green", "blue", "red", "orange"]}
          popVolumeLevel={0.1}
        />
      </div>
    );
  }

  export default Balloons;
