import useSound from "use-sound";
import useInterval from "./useInterval";
import useStore from "./useStore";
import bellSound from "../assets/sounds/bell.mp3";
import { useEffect, useState } from "react";
import useSettings from "./useSettings";

// Calculates current session and returns session count
function usePomodoroCycle() {
    const { queue, isCounting, setIsCounting, shiftQueue, resetQueue, setCompleted } = useStore((state) => state);
    const settings = useSettings((state) => state);
    const [count, setCount] = useState(0);
    const [play] = useSound(bellSound, {volume: 0.2})

    useEffect(() => {
        if (isCounting) {
            play()
        }
    }, [queue, play, isCounting])

    useEffect(() => {
        if (queue.length > 0) {
            setCount(settings[queue[0]] * 60);
        } else {
            resetQueue();
            setCompleted(true);
            setIsCounting(false);
        }
    }, [queue, settings, setCompleted, setIsCounting, resetQueue]);

    useInterval(
        () => {
            if (count > 0) {
                setCount(count - 1);
            } else {
                shiftQueue(); // remove finished session from queue
            }
        },
        isCounting ? 1000 : null
    );
    return count;
}

export default usePomodoroCycle;
