import toFloat from "./toFloat.ts";

export default function isDivisibleBy(
  dividend: string,
  divisor: string,
): boolean {
  return toFloat(dividend) % toFloat(divisor) === 0;
}
