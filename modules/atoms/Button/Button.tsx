import clsx from "clsx";
import React from "react";

type Props = {
  variant: "primary" | "secondary";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  children: React.ReactChild | React.ReactChild[];
};

const Button = ({ variant, onClick, disabled, children }: Props) => {
  return (
    <button
      className={clsx("button", `button--${variant}`)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  disabled: false,
};

export default Button;
