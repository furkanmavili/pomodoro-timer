import React from "react";
import useSound from "use-sound";
import buttonSound from "../sounds/button.mp3";
import { Button } from "@material-ui/core";
import useStore from "../hooks/useStore";

function ClockFooter() {
    const isCounting = useStore((state) => state.isCounting);
    const setIsCounting = useStore((state) => state.setIsCounting);
    const [play] = useSound(buttonSound, { volume: 0.2 });
    const handleClick = () => {
        setIsCounting(isCounting ? false : true);
        play();
    };
    return (
        <Button variant="contained" color="primary" onClick={handleClick}>
            {isCounting ? "Stop" : "Start"}
        </Button>
    );
}

export default React.memo(ClockFooter);
