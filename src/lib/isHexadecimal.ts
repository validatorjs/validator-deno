import assertString from './util/assertString.ts';

const hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;

export default function isHexadecimal(str: string) {
  assertString(str);
  return hexadecimal.test(str);
}
