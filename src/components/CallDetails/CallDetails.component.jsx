import React from 'react'
import { CustomButton } from '../StyledComponents';
import { CallDetailsContainer } from './CallDetails.styles'
import { IoPersonAddSharp } from "react-icons/io5";
import { FaCopy } from "react-icons/fa";
import { useTheme } from 'styled-components'
import ImageThumbnail from '../ImageThumbnail/ImageThumbnail.component';
import Pic from "../../utils/images/solacePic.jpg"

const CallDetails = () => {
  const { facebookColor, facebookColorHover } = useTheme();

  return (
		<CallDetailsContainer>
			<ImageThumbnail pic={Pic} />
			<h2>Ebuka's video call</h2>
			<p style={{ marginBottom: ".8rem" }}>
				Wait for friends to join or call to let them know you're here.
			</p>
			<CustomButton
				backgroundColor={facebookColor}
				hoverColor={facebookColorHover}
			>
				<IoPersonAddSharp />
				Invite people
			</CustomButton>
			<CustomButton>
				<FaCopy />
				Copy link
			</CustomButton>
		</CallDetailsContainer>
	);
}

export default CallDetails