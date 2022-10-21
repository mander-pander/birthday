import {gsap} from 'gsap';

const generateBalloons = () =>
    new Array(5).fill().map(() => ({
        speed: gsap.utils.random(0.5, 1),
        delay: gsap.utils.random(0.5, 4),
        points: 1,
}));

export default generateBalloons;
