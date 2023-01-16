import styled from "styled-components";
import { dimensions } from "../../utils/dimensions";
import { theme } from "../../utils/theme";

export const ThumbnailContainer = styled("div")`
	height: ${({ thumbnailSize }) => thumbnailSize || dimensions.thumbnailA};
	width: ${({ thumbnailSize }) => thumbnailSize || dimensions.thumbnailA};
	border-radius: 100rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ backgroundColor }) =>
		backgroundColor || theme.backgroundB};
	font-size: ${({ iconSize }) => iconSize || dimensions.iconSizeA};

	:hover {
		cursor: pointer;
		background-color: ${({ hoverColor }) => hoverColor || theme.backgroundC};
	}
`;
