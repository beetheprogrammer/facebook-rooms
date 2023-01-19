import styled from "styled-components";

export const VideoThumbnailContainer = styled("div")`
	height: 12.5rem;
	width: 22.2rem;
	position: absolute;
	right: .5%;
	bottom: 1.5%;
	background-color: grey;// ${({ theme: { backgroundA } }) => backgroundA};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .5rem;

  :hover{
    opacity: .8;
  }
`;

export const VideoDrawer = styled("div")`
	position: absolute;
  left: 2%;
`;

export const VideoReactions = styled("div")`
	position: absolute;
	right: 7%;
	top: 13%;
  display: flex;
  align-items: center;
  gap: .3rem;
`;

export const VideoSound = styled("div")`
	position: absolute;
	left: 2%;
	bottom: 2%;
	> * {
		cursor: none !important;
	}
`;