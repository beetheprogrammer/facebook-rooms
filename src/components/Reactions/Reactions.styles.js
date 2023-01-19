import styled from "styled-components";
import { CustomButton } from "../StyledComponents";

export const RaiseHandButton = styled(CustomButton)`
	width: 100%;
	height: 2.7rem;
	background-color: ${({ theme: { backgroundE } }) => backgroundE};
`;

export const EmojiReactions = styled("div")`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	> * {
		:hover {
			transform: scale(1.2);
			transition: ease 0.2s;
      cursor: pointer;
		}
	}
`;

export const ReactionsContainer = styled("div")`
	display: flex;
  flex-direction: column;
  gap: .5rem;
`;