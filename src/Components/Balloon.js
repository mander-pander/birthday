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
        gsap.set(setButton.current, { yPercent: 100, display: "block" });

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
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 500.267 500.267">
                    <g>
                        <g>
                            <path d="M390.934,140.8C390.934,62.934,328,0,250.134,0s-140.8,62.933-140.8,140.8c0,67.2,48,164.267,117.333,183.467L227.734,336
			c1.067,6.4,2.133,19.2-1.067,23.467c-1.067,1.067-2.133,2.133-4.267,4.267c-2.133,1.067-3.2,3.2-5.333,5.333
			c-18.133,19.2-20.267,46.933-21.333,65.067l-3.2,43.733c-1.067,11.733,7.467,21.333,19.2,22.4c1.067,0,1.067,0,2.133,0
			c10.667,0,19.2-8.533,20.267-18.133l3.2-43.733c1.067-17.067,3.2-32,10.667-40.533c1.067-1.067,2.133-2.133,3.2-3.2
			c3.2-3.2,6.4-6.4,9.6-10.667c12.8-18.133,10.667-40.533,8.533-53.333l-1.067-5.333C340.8,310.4,390.934,210.133,390.934,140.8z
			 M250.134,284.8c-49.067,0-99.2-84.267-99.2-145.067c0-54.4,44.8-99.2,99.2-99.2c54.4,0,99.2,44.8,99.2,99.2
			C349.333,200.534,299.2,284.8,250.134,284.8z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M284.267,86.4c-6.4-8.534-20.267-10.667-28.8-3.2c-8.533,6.4-10.667,20.267-3.2,28.8c1.067,0,24.533,32,12.8,62.933
			c-4.267,10.667,1.067,22.4,11.733,26.667c2.133,1.067,5.333,1.067,7.467,1.067c8.533,0,16-5.333,18.133-11.733
			C323.734,136.534,286.401,88.534,284.267,86.4z"/>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
    )
}

export default Balloon;
