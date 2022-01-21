import React from "react";
import Title from "../../../atoms/Title/Title";
import Button from "./../../../atoms/Button/Button";
import ImageDouble from "./ImageDouble/ImageDouble";

type Props = {
  title: string;
  description: string;
  image: string;
  onStart: React.MouseEventHandler<HTMLButtonElement>;
};

const BannerDefault = ({ title, description, onStart, image }: Props) => {
  return (
    <div className="banner-default">
      <div className="banner-default__content">
        <div className="banner-default__top">
          <div className="banner-default__title">
            <Title title={title} />
          </div>
          <p className="banner-default__description">{description}</p>
          <Button onClick={onStart}>Start here</Button>
        </div>
        <div className="banner-default__bottom">
          <ImageDouble image={image} />
        </div>
      </div>
    </div>
  );
};

BannerDefault.defaultProps = {
  title: "Are you bored?",
  description:
    "CoolPics helps you to spend hours of your day scrolling down and sharing a big list of random images. ",
  image: "/perrete2.png",
  onStart: function () {},
};

export default BannerDefault;
