import assertString from './util/assertString.ts';

export default function isBoolean(str: string) {
  assertString(str);
  return (['true', 'false', '1', '0'].indexOf(str) >= 0);
}
