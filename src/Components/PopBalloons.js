import { Fragment, useState } from 'react';
import Timer from './Timer';

const Balloons = ({ children }) => <div>{children}</div>
const Balloon = () => <button>Balloon</button>

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
                <Timer
                    time={30000}
                    onEnd={() => setPlaying(false)}
                />
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
