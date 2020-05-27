import { fullWidth } from "./isFullWidth.ts";
import { halfWidth } from "./isHalfWidth.ts";

export default function isVariableWidth(str: string): boolean {
  return fullWidth.test(str) && halfWidth.test(str);
}
