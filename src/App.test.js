import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

test("clock header functionality", () => {
    act(() => {
        render(<App />);
    });
    expect(screen.getByText("25:00")).toBeInTheDocument();
    act(() => {
        userEvent.click(screen.getByRole("button", { name: /Short Break/ }));
    });
    expect(screen.getByText("05:00")).toBeInTheDocument();
    act(() => {
        userEvent.click(screen.getByRole("button", { name: /Long Break/ }));
    });
    expect(screen.getByText("15:00")).toBeInTheDocument();
});
