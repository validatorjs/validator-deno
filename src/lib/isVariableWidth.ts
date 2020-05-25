import assertString from './util/assertString.ts';

import { fullWidth } from './isFullWidth';
import { halfWidth } from './isHalfWidth';

export default function isVariableWidth(str: string) {
  assertString(str);
  return fullWidth.test(str) && halfWidth.test(str);
}
