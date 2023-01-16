import React from "react";
import { Tooltip } from "react-tooltip";

const HeadingTooltips = () => {
	return (
		<>
			<Tooltip anchorId="activities" />
			<Tooltip anchorId="whiteboard" />
			<Tooltip anchorId="reactions" />
			<Tooltip anchorId="more" />
		</>
	);
};

export default HeadingTooltips;
