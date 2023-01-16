import React from "react";
import { ThumbnailContainer } from "./Thumbnail.styles";

const Thumbnail = ({ children, backgroundColor }) => {
	return (
		<ThumbnailContainer backgroundColor={backgroundColor}>
			{children}
		</ThumbnailContainer>
	);
};

export default Thumbnail;
