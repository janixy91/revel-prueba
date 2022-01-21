import React from "react";
import Image from "../../../../atoms/Image/Image";

type Props = {
  src: string;
  alt: string;
};

const ImageBanner = ({ src, alt }: Props) => {
  return (
    <div className="image-banner">{src && <Image src={src} alt={alt} />}</div>
  );
};

export default ImageBanner;
