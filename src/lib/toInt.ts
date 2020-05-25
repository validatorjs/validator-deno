import assertString from './util/assertString.ts';

export default function toInt(str: string, radix: any) {
  assertString(str);
  return parseInt(str, radix || 10);
}
