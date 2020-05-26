import assertString from './util/assertString.ts';

export default function isBoolean(str: string): boolean {
  assertString(str);
  return (['true', 'false', '1', '0'].indexOf(str) >= 0);
}
