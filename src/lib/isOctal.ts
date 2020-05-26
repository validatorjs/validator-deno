import assertString from './util/assertString.ts';

const octal: RegExp = /^(0o)?[0-7]+$/i;

export default function isOctal(str: string): boolean {
  assertString(str);
  return octal.test(str);
}
