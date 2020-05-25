import assertString from './util/assertString';

let charsetRegex = /^[^-_](?!.*?[-_]{2,})([a-z0-9\\-]{1,}).*[^-_]$/;

export default function isSlug(str: string) {
  assertString(str);
  return (charsetRegex.test(str));
}
