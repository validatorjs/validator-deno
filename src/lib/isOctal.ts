import assertString from './util/assertString';

const octal = /^(0o)?[0-7]+$/i;

export default function isOctal(str: string) {
  assertString(str);
  return octal.test(str);
}
