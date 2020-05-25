import assertString from './util/assertString.ts';

export default function isUppercase(str: string) {
  assertString(str);
  return str === str.toUpperCase();
}
