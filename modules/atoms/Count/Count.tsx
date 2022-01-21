import React from "react";
import { useCount } from "./useCount";

type Props = {
  number: number;
};

const Count = ({ number }: Props) => {
  const numberState = useCount(number);

  return (
    <div className="count">
      <span className="count__number">{numberState}</span>
    </div>
  );
};

Count.defaultProps = {
  number: 1,
};

export default Count;
