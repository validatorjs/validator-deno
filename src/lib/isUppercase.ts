import assertString from './util/assertString';

export default function isUppercase(str: string) {
  assertString(str);
  return str === str.toUpperCase();
}
