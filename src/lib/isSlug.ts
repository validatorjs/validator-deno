import assertString from './util/assertString.ts';

let charsetRegex: RegExp = /^[^-_](?!.*?[-_]{2,})([a-z0-9\\-]{1,}).*[^-_]$/;

export default function isSlug(str: string): boolean {
  assertString(str);
  return (charsetRegex.test(str));
}
