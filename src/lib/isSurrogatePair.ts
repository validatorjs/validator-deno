import assertString from './util/assertString.ts';

const surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

export default function isSurrogatePair(str: string) {
  assertString(str);
  return surrogatePair.test(str);
}
