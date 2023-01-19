import React from 'react'
import { ImageThumbnailContainer, ImgThumbnail } from './ImageThumbnail.styles';

const ImageThumbnail = ({pic}) => {
  return (
		<ImageThumbnailContainer>
			<ImgThumbnail src={pic} />
		</ImageThumbnailContainer>
	);
}

export default ImageThumbnail