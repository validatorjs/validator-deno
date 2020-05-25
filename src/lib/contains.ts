import assertString from './util/assertString.ts
import toString from './util/toString.ts';

export default function contains(str: string, elem: string) {
  assertString(str);
  return str.indexOf(toString(elem)) >= 0;
}
