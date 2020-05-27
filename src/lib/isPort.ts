import isInt from "./isInt.ts";

export default function isPort(str: string): boolean {
  return isInt(str, { min: 0, max: 65535 });
}
