import { minTwoDigits } from "../../../utils/number";
import { useMemo } from "react";

function fillNumber(number) {
  return `#${minTwoDigits(number)}`;
}

export function useCount(number) {
  return useMemo(() => fillNumber(number), [number]);
}
