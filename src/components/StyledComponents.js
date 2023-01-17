import styled from "styled-components";

export const CustomButton = styled("button")`
	height: 2rem;
	width: 88%;
	border-radius: 0.3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	/* margin-top: .7rem; */
	background-color: ${({ backgroundColor, theme: { backgroundB } }) =>
		backgroundColor || backgroundB};
	/* font-weight: bold; */

	:hover {
		cursor: pointer;
		background-color: ${({ hoverColor, theme: { backgroundC } }) =>
			hoverColor || backgroundC};
	}

	:active {
		transform: scale(0.97);
    transition: ease .2s;
	}
`;