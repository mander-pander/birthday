import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

const Balloon = ({ onPop, points, delay, speed, pointsMin = 1 }) => {
    const [popped, setPopped] = useState(false);
    const buttonRef = useRef(null);
    const bobRef = useRef(null);
    const pointsRef = useRef(points);

    useEffect(() => {
        gsap.set(buttonRef.current, {yPercent: 100});
        bobRef.current = gsap.to(buttonRef.current, {
            yPercent: 0,
            duration: speed,
            yoyo: true,
            repeat: -1,
            delay: delay,
            repeatDelay: delay,
            onRepeat: () => {
                pointsRef.current = Math.floor(
                    Math.max(pointsRef.current * .9, pointsMin)
                  )
            },
        })
        return () => {
            if (bobRef.current) bobRef.current.kill()
          }
    }, [pointsMin, delay, speed]);

    useEffect(() => {
        if (popped) {
            pointsRef.current = points;

            bobRef.current.pause();

            gsap.to(buttonRef.current, {
                yPercent: 100,
                duration: 0.1,
                onComplete: () => {
                    gsap.delayedCall(gsap.utils.random(1, 3), () => {
                        setPopped(false);
                        bobRef.current.restart()
                        .timeScale(bobRef.current.timeScale() * 1.25)
                    })
                },
            })
        }
    }, [popped])

    const pop = () => {
        setPopped(true)
        onPop(pointsRef.current)
    }

    return (
        <button
            ref={buttonRef}
            onClick={pop}
        >
            Balloon
        </button>
    )
}

export default Balloon;
