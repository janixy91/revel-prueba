import React from "react";
import ImageBanner from "../ImageBanner/ImageBanner";

type Props = {
  image: string;
};

const ImageDouble = ({ image }: Props) => {
  return (
    <div className="image-double">
      <div className="banner-default__image banner-default__image--empty">
        <ImageBanner src={""} alt="" />
      </div>
      <div className="banner-default__image-wrap">
        <div className="banner-default__image banner-default__image--fill">
          <ImageBanner src={image} alt="image banner" />
        </div>
      </div>
    </div>
  );
};

ImageDouble.defaultProps = {
  image: "/perrete2.png",
};

export default ImageDouble;
