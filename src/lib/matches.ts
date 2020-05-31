export default function matches(
  str: string,
  pattern: RegExp,
  modifiers: undefined | string,
) {
  if (Object.prototype.toString.call(pattern) !== "[object RegExp]") {
    pattern = new RegExp(pattern, modifiers);
  }
  return pattern.test(str);
}
