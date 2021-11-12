import React from "react";
import { useTheme } from "@emotion/react";

// only inline style gods can judge me 
function Footer() {
    const theme = useTheme()
    return (
        <div style={{position: "absolute", bottom: "75px"}}>
            Created by{" "}
            <a target="_blank" rel="noreferrer" style={{color: theme.palette.primary.main }} href="https://github.com/furkanmavili" >
                Furkan Mavili &#9996;
            </a>
        </div>
    );
}

export default Footer;
