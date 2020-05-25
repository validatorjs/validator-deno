import assertString from './util/assertString';

export default function isLowercase(str: string) {
  assertString(str);
  return str === str.toLowerCase();
}
