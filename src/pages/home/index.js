import React from "react";
import { Container } from "@mui/material";
import ClockPanel from "../../components/ClockPanel/";

function Home() {
    return (
        <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <ClockPanel />
        </Container>
    );
}

export default Home;
