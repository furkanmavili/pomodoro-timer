import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import { ButtonGroup, IconButton } from "@material-ui/core";

function Social() {
    return (
        <ButtonGroup>
            <IconButton>
                <a href="https://www.github.com/furkanmavili" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
            </IconButton>
            <IconButton>
                <a href="https://www.twitter.com/ffmavili" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                </a>
            </IconButton>
        </ButtonGroup>
    );
}

export default Social;
