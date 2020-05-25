let ascii = /^[\x00-\x7F]+$/;

export default function isAscii(str:string): boolean {
    return ascii.test(str);
}