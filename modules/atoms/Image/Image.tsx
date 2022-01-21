import React from "react";
import { default as Img } from "next/image";

type Props = {
  src: string;
  alt: string;
};

const Image = ({ src, alt }: Props) => {
  return <Img layout="fill" src={src} alt={alt} />;
};

export default Image;
