import React, { useMemo } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";
import { Login } from "@mui/icons-material";
import { styled } from "@mui/system";
import Home from "./pages/home";
import Tasks from "./pages/tasks";
import Stats from "./pages/stats";
import Profile from "./pages/profile";
import NotFound from "./pages/error";
import useTheme from "./hooks/useTheme";
import { getDesignTokens } from "./theme";
import MobileNavigation from "./components/MobileNavigation";
import Footer from "./components/Footer";
import Settings from "./components/Settings";

const Wrapper = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
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
                        <Route path="/login" exact>
                            <Login />
                        </Route>
                        <Route path="/" exact render={() => <Redirect to="/home" />} />
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <MobileNavigation />
                </Router>
                <Settings />
                <Footer />
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;
