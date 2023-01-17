import React from 'react'
import { ImageThumbnailContainer, ImgThumbnail } from './ImageThumbnail.styles';
import Pic from "../../utils/images/solacePic.jpg"

const ImageThumbnail = () => {
  return (
		<ImageThumbnailContainer>
			<ImgThumbnail src={Pic} />
		</ImageThumbnailContainer>
	);
}

export default ImageThumbnail