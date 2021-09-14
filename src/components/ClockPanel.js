import React from "react";
import ClockFooter from "./ClockFooter";
import ClockHeader from "./ClockHeader";
import ProgressBar from "./ProgressBar";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Counter from "./Counter";

const useStyles = makeStyles({
    root: {
        padding: "2em",
        backgroundColor: "#f7c5a8",
    },
    button: {
        backgroundColor: "#679b9b",
    },
});

function ClockPanel() {
    const classes = useStyles();

    return (
        <Paper variant="outlined" className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <ClockHeader />
                </Grid>
                <Grid item xs={12}>
                    <Counter />
                </Grid>
                <Grid item xs={12} align="center">
                    <ClockFooter />
                </Grid>
                <Grid item xs={12}>
                    <ProgressBar count={0} />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default React.memo(ClockPanel);
