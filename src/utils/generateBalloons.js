import {gsap} from 'gsap';

const generateBalloons = (amount) =>
    new Array(amount).fill().map(() => ({
        speed: gsap.utils.random(0.5, 1),
        delay: gsap.utils.random(0.5, 4),
        points: 1,
}));

export default generateBalloons;
