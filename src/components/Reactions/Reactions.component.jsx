import { Emoji } from 'emoji-picker-react';
import React from 'react'
import Thumbnail from '../Thumbnail/Thumbnail.component';
import { EmojiReactions, RaiseHandButton, ReactionsContainer } from './Reactions.styles';
import { BiPlus } from "react-icons/bi";
import { theme } from '../../utils/theme';

const Reactions = () => {
  return (
		<ReactionsContainer>
			<EmojiReactions>
				<Emoji unified="2764-fe0f" size="32" />
				<Emoji unified="1f606" size="32" />
				<Emoji unified="1f62e" size="32" />
				<Emoji unified="1f972" size="32" />
				<Emoji unified="1f621" size="32" />
				<Emoji unified="1f44d" size="32" />
				<Thumbnail backgroundColor={theme.backgroundE}>
					<BiPlus />
				</Thumbnail>
			</EmojiReactions>
			<RaiseHandButton>
				<Emoji unified="1f91a" size="25" />
				Raise hand
			</RaiseHandButton>
		</ReactionsContainer>
	);
}

export default Reactions