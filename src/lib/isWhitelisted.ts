import assertString from './util/assertString.ts';

export default function isWhitelisted(str: string , chars: string ) {
  assertString(str);
  for (let i = str.length - 1; i >= 0; i--) {
    if (chars.indexOf(str[i]) === -1) {
      return false;
    }
  }
  return true;
}
