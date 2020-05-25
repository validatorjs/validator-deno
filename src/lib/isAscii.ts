import assertString from './util/assertString.ts'

const ascii = /^[\x00-\x7F]+$/;


export default function isAscii(str: string) {
  assertString(str);
  return ascii.test(str);
}
