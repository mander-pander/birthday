import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import styles from "./Balloon.module.css";

const Balloon = ({
    onPop,
    points,
    delay,
    speed,
    pointsMin = 1,
}) => {
    const [popped, setPopped] = useState(false);
    const setButton = useRef(null);
    const setPoints = useRef(points);
    const setPops = useRef(null);

    useEffect(() => {
        gsap.set(setButton.current, {yPercent: 100, display: "block"});

        setPops.current = gsap.to(setButton.current, {
            yPercent: 0,
            duration: speed,
            yoyo: true,
            repeat: -1,
            delay: delay,
            repeatDelay: delay,
            onRepeat: () => {
                setPoints.current = Math.floor(
                    Math.max(setPoints.current * .9, pointsMin)
                  )
            },
        });

        return () => {
            if (setPops.current) setPops.current.kill()
          }
    }, [pointsMin, delay, speed]);

    const pop = () => {
        setPopped(true)
        onPop(setPoints.current)
    };

    useEffect(() => {
        if (popped) {
            setPoints.current = points;
            setPops.current.pause();

            gsap.to(setButton.current, {
                yPercent: 100,
                duration: 0.1,
                onComplete: () => {
                    gsap.delayedCall(gsap.utils.random(1, 3), () => {
                        setPopped(false);
                        setPops.current.restart()
                        .timeScale(setPops.current.timeScale() * 1.25)
                    })
                },
            })
        }
    }, [popped])

    return (
        <div className={styles.inflator}>
            <button className={styles.balloon}
                ref={setButton}
                onClick={pop}
            >
            </button>
        </div>
    )
}

export default Balloon;
