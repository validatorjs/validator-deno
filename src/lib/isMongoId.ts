import assertString from './util/assertString';

import isHexadecimal from './isHexadecimal';

export default function isMongoId(str: string | any[]) {
  assertString(str);
  return isHexadecimal(str) && str.length === 24;
}
