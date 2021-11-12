import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import useSound from "use-sound";
import buttonSound from "../../assets/sounds/button.mp3";
import useStore from "../../hooks/useStore";

function ClockFooter() {
    const isCounting = useStore((state) => state.isCounting);
    const {setIsCounting, resetQueue} = useStore((state) => state);
    const [play] = useSound(buttonSound, { volume: 0.2 });

    const handleClick = () => {
        setIsCounting(isCounting ? false : true);
        play();
    };

    const handleRestart = () => {
        setIsCounting(false)
        resetQueue()
    }
    return (
        <ButtonGroup sx={{ marginTop: 4 }} aria-label="timer buttons">
            <Button sx={{ width: 75 }} onClick={handleRestart}>Restart</Button>
            <Button sx={{ width: 75 }} variant="contained" color="primary" onClick={handleClick}>
                {isCounting ? "Stop" : "Start"}
            </Button>
        </ButtonGroup>
    );
}

export default React.memo(ClockFooter);
