import assertString from './util/assertString.ts';

export default function matches(str: any, pattern: any, modifiers: string) {
  assertString(str);
  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    pattern = new RegExp(pattern, modifiers);
  }
  return pattern.test(str);
}
