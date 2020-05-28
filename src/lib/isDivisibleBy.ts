import assertString from "./util/assertString.ts";
import toFloat from "./toFloat.ts";

export default function isDivisibleBy(
  dividend: string,
  divisor: string,
): boolean {
  assertString(dividend);
  assertString(divisor);
  return toFloat(dividend) % toFloat(divisor) === 0;
}
