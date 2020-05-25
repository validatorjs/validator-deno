import assertString from './util/assertString.ts';

const isBICReg = /^[A-z]{4}[A-z]{2}\w{2}(\w{3})?$/;

export default function isBIC(str: string) {
  assertString(str);
  return isBICReg.test(str);
}
