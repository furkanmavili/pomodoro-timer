import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ClockFooter from "./ClockFooter";
import ClockHeader from "./ClockHeader";
import useInterval from "../useInterval";
import ProgressBar from "./ProgressBar";
import { decideTime, printableTime } from "../utils";
import bellSound from "../sounds/bell.mp3";
import useSound from "use-sound";

const Container = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	border-radius: 8px;
	justify-content: center;
	align-items: center;
	background-color: #ec9b87;
	overflow: hidden;
`;

const Clock = styled.div`
	h1 {
		font-size: 5rem;
		font-family: "Dosis", sans-serif;
		color: #fff;
	}
`;

const ClockPanel = React.memo(function ClockPanel({ activeMode, changeMode }) {
	const [count, setCount] = useState(1500);
	const [initialTime, setInitialTime] = useState("");
	const [isRunning, setIsRunning] = useState(false);
	const [play] = useSound(bellSound);

	const modes = ["pomodoro", "short", "long"];
	useEffect(() => {
		const whichTime = decideTime(activeMode);
		setCount(whichTime);
		setInitialTime(whichTime);
		setIsRunning(false); // when user selects auto-play after sessions
	}, [activeMode]);

	useEffect(() => {
		document.title = isRunning ? printableTime(count) : "Pomodoro Timer";
	}, [isRunning, count]);

	useInterval(
		() => {
			if (count > 0) {
				setCount(count - 1);
			} else {
				play();
				const next = modes[modes.indexOf(activeMode) + 1];
				changeMode(next ? next : modes[0]);
				setCount(initialTime);
				setIsRunning(true);
			}
		},
		isRunning ? 50 : null
	);

	return (
		<Container>
			<ClockHeader changeMode={changeMode} currentMode={activeMode} />
			<ProgressBar count={count} initialTime={initialTime} />
			<Counter count={count} />
			<ClockFooter isRunning={isRunning} setIsRunning={setIsRunning} />
		</Container>
	);
});

function Counter({ count }) {
	return (
		<Clock>
			<h1>{printableTime(count)}</h1>
		</Clock>
	);
}
export default ClockPanel;
