import React from "react";
import { ThumbnailContainer } from "./Thumbnail.styles";

const Thumbnail = ({
	children,
	backgroundColor,
	thumbnailSize,
	iconSize,
	hoverColor,
}) => {
	return (
		<ThumbnailContainer
			backgroundColor={backgroundColor}
			thumbnailSize={thumbnailSize}
			iconSize={iconSize}
			hoverColor={hoverColor}
		>
			{children}
		</ThumbnailContainer>
	);
};

export default Thumbnail;
