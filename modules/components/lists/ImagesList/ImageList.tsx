import React from "react";
import { ImageType } from "../../../../models/ImageType";
import ImageItem from "./ImageItem/ImageItem";

type Props = {
  images: ImageType[];
};

const ImageList = ({ images }: Props) => {
  return (
    <div className="image-list">
      {images.map((image: ImageType, index: number) => (
        <div key={image.id} className="image-list__item">
          <ImageItem image={image} countNumber={index + 1} />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
