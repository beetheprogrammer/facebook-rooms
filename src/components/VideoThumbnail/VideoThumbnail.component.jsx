import React from "react";
import ImageThumbnail from "../ImageThumbnail/ImageThumbnail.component";
import {
	VideoDrawer,
	VideoReactions,
	VideoSound,
	VideoThumbnailContainer,
} from "./VideoThumbnail.styles";
import Pic from "../../utils/images/solacePic.jpg";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { FaMicrophoneSlash } from "react-icons/fa";
import Thumbnail from "../Thumbnail/Thumbnail.component";
import { dimensions } from "../../utils/dimensions";
import { Emoji } from "emoji-picker-react";

const VideoThumbnail = () => {
	return (
		<VideoThumbnailContainer>
			<VideoReactions>
				<Emoji unified="1f423" size="25" />
				<Emoji unified="1f91a" size="25" />
			</VideoReactions>
			<VideoDrawer>{!true ? <SlArrowLeft /> : <SlArrowRight />}</VideoDrawer>
			<ImageThumbnail pic={Pic} />
			{true ? (
				<VideoSound>
					<Thumbnail
						backgroundColor="transparent"
						iconSize={dimensions.iconSizeC}
					>
						<FaMicrophoneSlash />
					</Thumbnail>
				</VideoSound>
			) : null}
		</VideoThumbnailContainer>
	);
};

export default VideoThumbnail;
