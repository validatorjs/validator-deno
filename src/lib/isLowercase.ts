import assertString from './util/assertString.ts';

export default function isLowercase(str: string) {
  assertString(str);
  return str === str.toLowerCase();
}
