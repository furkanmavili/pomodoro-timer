import React from "react";
import { Container } from "@mui/material";
// import Header from "../../components/Header";
import ClockPanel from "../../components/ClockPanel";
import Social from "../../components/Social";
import Settings from "../../components/Settings";

function Home() {
    return (
        <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* <Header /> */}
            <Settings />
            <ClockPanel />
            <Social />
        </Container>
    );
}

export default Home;
