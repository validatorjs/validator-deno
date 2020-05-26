import assertString from './util/assertString.ts';

import isHexadecimal from './isHexadecimal.ts';

export default function isMongoId(str: string): boolean {
  assertString(str);
  return isHexadecimal(str) && str.length === 24;
}
