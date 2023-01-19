import styled from "styled-components";

export const HeadingContainer = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
  padding: .97rem .9rem;

	> div {
		display: flex;
		gap: 1rem;
		align-items: center;
	}
`;

export const HeadingControlsContainer = styled("div")`
	gap: .5rem !important;
  top: 10rem;
  margin-top: -.6rem;
`;

export const ReactionsBox = styled("div")`
	position: absolute;
	width: 18rem;
	height: 6rem;
	background-color: ${({ theme: { backgroundD } }) => backgroundD};
	right: 3.4%;
	top: 4.8%;
	border-radius: 0.5rem;
	display: none;
	border: 0.2rem solid ${({ theme: { backgroundA } }) => backgroundA};
  padding: .3rem .4rem;

	&:hover {
		display: inline-block;
	}
`;

export const CallReactions = styled("div")`
	&:hover ${ReactionsBox} {
		display: inline-block;
	}
`;