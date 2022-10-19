import { Fragment, useState } from 'react';
import Timer from './Timer';
import Balloons from './Balloons';
import Balloon from './Balloon';
import Score from './Score';

const PopBalloons = () => {
    const [playing, setPlaying] = useState(false);
    const [score, setScore] = useState(0);

    const onPop = points => setScore(score + points);

    return (
    <Fragment>
        {!playing && <h1>Pop the Balloons</h1>}
        <button onClick={() => setPlaying(!playing)}>
            {playing ? "Stop" : "Start"}
        </button>
        {playing && (
            <Fragment>
                <Score
                    value={score}
                />
                <Timer
                    time={30000}
                    onEnd={() => setPlaying(false)}
                />
                <Balloons>
                    <Balloon onPop={onPop}/>
                    <Balloon onPop={onPop}/>
                    <Balloon onPop={onPop}/>
                    <Balloon onPop={onPop}/>
                    <Balloon onPop={onPop}/>
                </Balloons>
            </Fragment>
        )}
    </Fragment>
    );
};

export default PopBalloons;
