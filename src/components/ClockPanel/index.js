import React from "react";
import ClockFooter from "./ClockFooter";
// import ClockHeader from "./ClockHeader";
import Counter from "./Counter";

function ClockPanel() {
    return (
        <>
            {/* <ClockHeader /> */}
            <Counter />
            <ClockFooter />
        </>
    );
}

export default ClockPanel;
