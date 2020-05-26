
import assertString from './util/assertString.ts';
let ascii: RegExp = /^[\x00-\x7F]+$/;

export default function isAscii(str:string): boolean {
    assertString(str);
    return ascii.test(str);
}
