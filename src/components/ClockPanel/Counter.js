import React, {useEffect} from "react";
import { capitalizeFirstLetter, printableTime } from "../../utils";
import Progress from "../Progress";
import usePomodoroCycle from "../../hooks/usePomodoroCycle";
import useSettings from "../../hooks/useSettings"
import useStore from "../../hooks/useStore"

function Counter() {   
    const count = usePomodoroCycle()
    const settings = useSettings(state => state)
    const queue = useStore(state => state.queue)

    useEffect(() => {
        if (queue.length === 0) return;
        document.title = `${capitalizeFirstLetter(queue[0])} : ${printableTime(count)}`
    }, [count,queue])
    
    if (queue.length === 0) return null;

    const initialTime = settings[queue[0]] * 60
    const percentage = ((initialTime - count) *  100) / initialTime  

    return (
        <Progress value={percentage} print={printableTime(count)}/>
    );
}



export default Counter;
