import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import useStore from "../hooks/useStore";
import { printableTime } from "../utils";
import bellSound from "../sounds/bell.mp3";
import useInterval from "../hooks/useInterval";
import useSettings from "../hooks/useSettings";
import Progress from "./Progress";


function Counter() {
    const [initialTime, setInitialTime] = useState(0);
    const activeMode = useStore((state) => state.activeMode);
    const setActiveMode = useStore((state) => state.setActiveMode);
    const activeModeValue = useSettings((state) => state[activeMode]);
    const [count, setCount] = useState(activeModeValue);
    const isCounting = useStore((state) => state.isCounting);
    const setIsCounting = useStore((state) => state.setIsCounting);
    const autoStart = useSettings((state) => state.autoStart);
    const [play] = useSound(bellSound);
    const percent = ((initialTime - count) *  100) / initialTime

    useEffect(() => {
        setCount(activeModeValue * 60);
        setInitialTime(activeModeValue * 60);
        setIsCounting(false);
    }, [activeModeValue, setIsCounting]);

    useEffect(() => {
        document.title = isCounting ? printableTime(count) : "Pomodoro Timer";
    }, [isCounting, count]);

    useInterval(
        () => {
            if (count > 0) {
                setCount(count - 1);
            } else {
                play();
                const next = calculateNextMode(activeMode);
                setActiveMode(next);
                setCount(initialTime);
                if (autoStart) {
                    setIsCounting(true);
                }
            }
        },
        isCounting ? 1000 : null
    );

    return (
        <Progress value={percent} print={printableTime(count)}/>
    );
}

function calculateNextMode(activeMode) {
    if (activeMode === "long") {
        return "pomodoro";
    } else if (activeMode === "pomodoro") {
        return "short";
    } else {
        return "long";
    }
}

export default Counter;
