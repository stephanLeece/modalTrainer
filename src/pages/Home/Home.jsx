import React from 'react';
import * as Tone from 'tone';

import { Wrap } from './styled';

const synth = new Tone.Synth().toDestination();

const Home = () => {
    const beep = () => {
        synth.triggerAttackRelease('C4', '8n');
    };
    return (
        <Wrap>
            welcome to the home page!<button onClick={beep}>beep</button>
        </Wrap>
    );
};

export default Home;
