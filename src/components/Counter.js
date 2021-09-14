import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import useStore from "../hooks/useStore";
import { printableTime } from "../utils";
import useSound from "use-sound";
import bellSound from "../sounds/bell.mp3";
import useInterval from "../hooks/useInterval";
import useSettings from "../hooks/useSettings";

const useStyles = makeStyles({
    clockText: {
        fontFamily: "'Dosis', sans-serif",
        textAlign: "center",
        marginBottom: "20px",
    },
});
function Counter() {
    const classes = useStyles();
    const [count, setCount] = useState(1500);
    const [initialTime, setInitialTime] = useState(0);
    const activeMode = useStore((state) => state.activeMode);
    const setActiveMode = useStore((state) => state.setActiveMode);
    const activeModeValue = useSettings((state) => state[activeMode]);
    const isCounting = useStore((state) => state.isCounting);
    const setIsCounting = useStore((state) => state.setIsCounting);
    const autoStart = useSettings((state) => state.autoStart);
    const [play] = useSound(bellSound);

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
        <Typography className={classes.clockText} variant="h1">
            {printableTime(count)}
        </Typography>
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
