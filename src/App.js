import React from "react";
import Header from "./components/Header";
import ClockPanel from "./components/ClockPanel";
import Social from "./components/Social";
import Settings from "./components/Settings";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#ff9a76",
        minHeight: "100vh",
    },
    image: {
        width: "350px",
        display: "block",
        margin: "0 auto",
        transition: "opacity .4s ease-in-out",
    },
    passive: {
        opacity: ".3",
    },
    header: {
        marginTop: "4em",
    },
    clock: {
        paddingTop: "5em",
    },
    settings: {
        marginTop: "4em",
    },
    social: {
        position: "absolute",
        bottom: 10,
        right: 10,
    },
});

function App() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} alignContent="flex-start" justify="center">
            <Grid xs={12} item align="center" className={classes.header}>
                <Header />
            </Grid>
            <Grid className={classes.clock} item container sm={12} justify="center">
                <Grid item xs={10} sm={8} md={4}>
                    <ClockPanel />
                </Grid>
            </Grid>
            <div className={classes.settings}>
                <Settings />
            </div>
            <div className={classes.social}>
                <Social />
            </div>
        </Grid>
    );
}

export default App;
