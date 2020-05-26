import assertString from './util/assertString.ts';
let base32: RegExp = /^[A-Z2-7]+=*$/;

export default function isBase32(str:string): boolean {
    assertString(str);
    return str.length>0 && str.length % 8 === 0 && base32.test(str);
}