import React from "react";
import clsx from "clsx";

type Props = {
  title: string;
  color: "white" | "black";
};

const Title = ({ title, color }: Props) => {
  return <h2 className={clsx(`title title--${color}`)}>{title}</h2>;
};

Title.defaultProps = {
  color: "white",
};

export default Title;
