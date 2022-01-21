import React from "react";
import { ImageType } from "../../../../../models/ImageType";
import Count from "../../../../atoms/Count/Count";
import Image from "../../../../atoms/Image/Image";

type Props = {
  image: ImageType;
  countNumber: number;
};

const ImageItem = ({ image, countNumber }: Props) => {
  return (
    <div className="image-item">
      <div className="image-item__count">
        <Count number={countNumber} />
      </div>

      <div className="image-item__image">
        <Image src={image.download_url} alt={image.author} />
      </div>

      <div className="image-item__author">
        <span>{image.author}</span>
      </div>
    </div>
  );
};

export default ImageItem;
