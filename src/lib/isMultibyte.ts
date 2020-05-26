import assertString from './util/assertString.ts';

const multibyte: RegExp = /[^\x00-\x7F]/;


export default function isMultibyte(str: string): boolean {
  assertString(str);
  return multibyte.test(str);
}
