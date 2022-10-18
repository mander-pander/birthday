import { Fragment, useState } from 'react';


const Balloons = ({ children }) => <div>{children}</div>
const Balloon = () => <button>Balloon</button>
const Timer = () => <div>Time: 00:00</div>
const Score = () => <div>Score: 0</div>

const PopBalloons = () => {
    const [playing, setPlaying] = useState(false);
    return (
    <Fragment>
        {!playing && <h1>Pop the Balloons</h1>}
        <button onClick={() => setPlaying(!playing)}>
            {playing ? "Stop" : "Start"}
        </button>
        {playing && (
            <Fragment>
                <Score/>
                <Timer/>
                <Balloons>
                    <Balloon/>
                    <Balloon/>
                    <Balloon/>
                    <Balloon/>
                    <Balloon/>
                </Balloons>
            </Fragment>
        )}
    </Fragment>
    );
};

export default PopBalloons;
