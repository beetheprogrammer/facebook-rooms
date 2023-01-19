import React from "react";
import { dimensions } from "../../utils/dimensions";
import { MdShield } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { TbDots } from "react-icons/tb";
import { HiFaceSmile } from "react-icons/hi2";
import { TbScribble } from "react-icons/tb";
import Thumbnail from "../Thumbnail/Thumbnail.component";
import {
  CallReactions,
	HeadingContainer,
	HeadingControlsContainer,
	ReactionsBox,
} from "./Heading.styles";
import HeadingTooltips from "./Heading.tooltips";
import Reactions from "../Reactions/Reactions.component";

const Heading = () => {
	return (
		<HeadingContainer>
			<div>
				<Thumbnail
					thumbnailSize={dimensions.thumbnailB}
					iconSize={dimensions.iconSizeB}
				>
					<MdShield />
				</Thumbnail>
				<p style={{ fontSize: dimensions.textSizeA }}>
					Learn how Messenger protects your privacy
				</p>
			</div>
			<HeadingControlsContainer>
				<span id="activities" data-tooltip-content="Activities">
					<Thumbnail backgroundColor="transparent" backgroundOnHover>
						<IoMdAddCircle />
					</Thumbnail>
				</span>
				<span id="whiteboard" data-tooltip-content="Whiteboard">
					<Thumbnail backgroundColor="transparent" backgroundOnHover>
						<TbScribble />
					</Thumbnail>
				</span>
				<CallReactions>
					<Thumbnail backgroundColor="transparent" backgroundOnHover>
						<HiFaceSmile />
					</Thumbnail>
					<ReactionsBox>
            <Reactions/>
          </ReactionsBox>
				</CallReactions>
				<span id="more" data-tooltip-content="More">
					<Thumbnail backgroundColor="transparent" backgroundOnHover>
						<TbDots />
					</Thumbnail>
				</span>
			</HeadingControlsContainer>
			<HeadingTooltips />
		</HeadingContainer>
	);
};

export default Heading;
