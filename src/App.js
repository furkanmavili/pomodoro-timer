import React, { useRef, useState } from "react";
import Header from "./components/Header";
import ClockPanel from "./components/ClockPanel";
import Social from "./components/Social";
import Settings from "./components/Settings";
import DancingDoodle from "./images/DancingDoodle.svg";
import Reading from "./images/ReadingDoodle.svg";
import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import classnames from "classnames";
import { useEffect } from "react";

const initialSettings = {
  sound: true,
  autoStart: false,
  pomodoro: 25,
  short: 5,
  long: 15,
};

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
  const [activeMode, setActiveMode] = useState("pomodoro");
  const [settings, setSettings] = useState(initialSettings);
  const classes = useStyles();
  const addBtn = useRef();
  addBtn.current.style.display = "none";

  useEffect(() => {
    let deferredPrompt;
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
      addBtn.current.style.display = "block";

      addBtn.current.addEventListener("click", (e) => {
        // hide our user interface that shows our A2HS button
        addBtn.current.style.display = "none";
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the A2HS prompt");
          } else {
            console.log("User dismissed the A2HS prompt");
          }
          deferredPrompt = null;
        });
      });
    });
    return () => window.removeEventListener("beforeinstallprompt");
  }, []);

  return (
    <Grid
      container
      className={classes.root}
      alignContent="flex-start"
      justify="center"
    >
      <Grid xs={12} item align="center" className={classes.header}>
        <Header settings={settings} setSettings={setSettings} />
      </Grid>
      <Grid className={classes.clock} item container sm={12} justify="center">
        <Hidden smDown>
          <Grid item md={4}>
            <img
              className={classnames(
                classes.image,
                activeMode === "pomodoro" ? "" : classes.passive
              )}
              src={Reading}
              alt="reading doogle"
            />
          </Grid>
        </Hidden>
        <Grid item xs={10} sm={8} md={4}>
          <ClockPanel
            settings={settings}
            activeMode={activeMode}
            changeMode={setActiveMode}
          />
        </Grid>
        <Hidden smDown>
          <Grid item sm={0} md={4}>
            <img
              className={classnames(
                classes.image,
                activeMode === "pomodoro" ? classes.passive : ""
              )}
              src={DancingDoodle}
              alt="dancing doogle"
            />
          </Grid>
        </Hidden>
      </Grid>
      <div className={classes.settings}>
        <Settings settings={settings} setSettings={setSettings} />
      </div>
      <div className={classes.social}>
        <Social />
      </div>
      <button ref={addBtn} className=".add-button">
        Add to home screen
      </button>
    </Grid>
  );
}

export default App;
