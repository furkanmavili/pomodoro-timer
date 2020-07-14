import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 60%;
	height: 3px;
	background-color: gray;
	margin-top: 1em;
`;

function ProgressBar({ count, initialTime }) {
	const [percent, setPercent] = useState(0);
	useEffect(() => {
		const result = ((initialTime - count) * 100) / initialTime;
		setPercent(result);
	}, [count, initialTime]);

	const r = `${percent}%`;
	return (
		<Container>
			<div
				style={{
					width: r,
					backgroundColor: "white",
					height: "3px",
					transition: "width .1s linear",
				}}
			/>
		</Container>
	);
}

export default ProgressBar;
