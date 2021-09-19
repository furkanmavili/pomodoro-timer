import React, { useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";
import useTheme from "./hooks/useTheme";
import { getDesignTokens } from "./theme";
import { styled } from "@mui/system";
import MobileNavigation from "./components/MobileNavigation";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Tasks from "./pages/tasks";
import Stats from "./pages/stats";
import Profile from "./pages/profile";
import NotFound from "./pages/error";

const Wrapper = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

function App() {
    const activeTheme = useTheme((state) => state.theme);
    const theme = useMemo(() => createTheme(getDesignTokens(activeTheme)), [activeTheme]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Wrapper>
                <Router>
                    <Switch>
                        <Route path="/home" exact>
                            <Home />
                        </Route>
                        <Route path="/tasks" exact>
                            <Tasks />
                        </Route>
                        <Route path="/stats" exact>
                            <Stats />
                        </Route>
                        <Route path="/profile" exact>
                            <Profile />
                        </Route>
                        <Route path="/" exact render={() => <Redirect to="/home" />} />
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <MobileNavigation />
                </Router>
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;
