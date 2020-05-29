import isFloat from "./isFloat.ts";

export default function (str: string): number {
  if (!isFloat(str, {})) return NaN;
  return parseFloat(str);
}
