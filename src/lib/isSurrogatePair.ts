import assertString from './util/assertString.ts';

const surrogatePair: RegExp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

export default function isSurrogatePair(str: string): boolean {
  assertString(str);
  return surrogatePair.test(str);
}
