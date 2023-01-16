import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail.component";
import { CallControlsContainer } from "./CallControls.styles";
import { FaVideo, FaMicrophone } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { MdScreenShare } from "react-icons/md";
import { ImPhoneHangUp } from "react-icons/im";
import { theme } from "../../utils/theme";
import CallControlsTooltips from "./CallControls.tooltips";

const CallControls = () => {
	return (
		<CallControlsContainer>
			<span id="screen" data-tooltip-content="Share your screen">
				<Thumbnail>
					<MdScreenShare />
				</Thumbnail>
			</span>
			<span id="participants" data-tooltip-content="See call participants">
				<Thumbnail>
					<BsPeopleFill />
				</Thumbnail>
			</span>
			<span id="video" data-tooltip-content="Turn on video">
				<Thumbnail>
					<FaVideo />
				</Thumbnail>
			</span>
			<span id="microphone" data-tooltip-content="Unmute microphone">
				<Thumbnail>
					<FaMicrophone />
				</Thumbnail>
			</span>
			<span id="call" data-tooltip-content="Leave call">
				<Thumbnail
					backgroundColor={theme.dropCallColor}
					hoverColor={theme.dropCallHoverColor}
				>
					<ImPhoneHangUp />
				</Thumbnail>
			</span>
			<CallControlsTooltips />
		</CallControlsContainer>
	);
};

export default CallControls;
