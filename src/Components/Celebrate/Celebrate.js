import Confetti from "react-confetti";
import { ReactFloatingBalloons } from "react-floating-balloons";

const Celebrate = () => {
    return (
        <div>
            <Confetti
                numberOfPieces={100}
            />
            <h1>Happy Birthday, Tommy!</h1>
            <ReactFloatingBalloons
                popVolumeLevel={0.2}
                count={8}
            />
        </div>
    )
}

export default Celebrate;
