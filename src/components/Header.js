import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    myTitle: {
        fontFamily: "Covered By Your Grace, cursive",
    },
});
const Header = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.myTitle} variant="h3">
            Work
        </Typography>
    );
};

export default Header;
