import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: 60%;
	margin: 0 auto 2em auto;
	aling-items: center;
	div {
		display: flex;
		align-items: center;
	}
	h1 {
		font-size: 2.5rem;
		font-family: "Covered By Your Grace", cursive;
		color: #fff;
		pointer-events: none;
	}
	button {
		background-color: #ec9b87;
		border: 1px solid #fff;
		cursor: pointer;
		color: #fff;
		padding: 5px 10px;
		border-radius: 4px;
		font-size: 1rem;
		&:hover {
			background-color: #ea907a;
		}
	}
`;
function Header() {
	return (
		<Container>
			<div>
				<h1>Pom Time</h1>
			</div>
			<div>
				<button>Settings</button>
			</div>
		</Container>
	);
}

export default Header;
