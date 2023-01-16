import React from 'react'
import { Tooltip } from 'react-tooltip';

const CallControlsTooltips = () => {
  return (
		<>
			<Tooltip anchorId="screen" />
			<Tooltip anchorId="participants" />
			<Tooltip anchorId="video" />
			<Tooltip anchorId="microphone" />
			<Tooltip anchorId="call" />
		</>
	);
}

export default CallControlsTooltips