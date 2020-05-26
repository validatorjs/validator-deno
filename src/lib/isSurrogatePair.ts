const surrogatePair: RegExp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

export default function isSurrogatePair(str: string): boolean {
  return surrogatePair.test(str);
}
