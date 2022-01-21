import React from "react";

type Props = {
  title: string;
};

const HeaderDefault = ({ title }: Props) => {
  return (
    <header className="header-default">
      <h1 className="header-default__title">{title}</h1>
    </header>
  );
};

HeaderDefault.defaultProps = {
  title: "CoolPics",
};

export default HeaderDefault;
