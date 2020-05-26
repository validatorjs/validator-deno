import assertString from './util/assertString.ts';

const md5: RegExp = /^[a-f0-9]{32}$/;

export default function isMD5(str: string): boolean {
  assertString(str);
  return md5.test(str);
}
