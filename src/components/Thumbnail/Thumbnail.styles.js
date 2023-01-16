import styled from "styled-components";
import { dimensions } from "../../utils/dimensions";
import { theme } from "../../utils/theme";

export const ThumbnailContainer = styled("div")`
	height: ${dimensions.thumbnailA};
	width: ${dimensions.thumbnailA};
	border-radius: 100rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ backgroundColor }) => backgroundColor || theme.backgroundB};
	font-size: 1.4rem;
`;

