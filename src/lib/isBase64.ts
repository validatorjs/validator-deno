const notBase64: RegExp = /[^A-Z0-9+\/=]/i;
const notUrlSafeBase64: RegExp = /[^A-Z0-9_\-=]/i;

interface Options {
    urlsafe?: boolean;
}

const defaultOptions: Options = {
    urlsafe: false,
}

export default function isBase64(str: string, options: Options = defaultOptions): boolean {
    const len: number = str.length;

    if (options.urlsafe) {
        if (!len || notUrlSafeBase64.test(str)) {
            return false;
        }
    } else {
        if (!len || len % 4 !== 0 || notBase64.test(str)) {
            return false;
        }
    }

    const firstPaddingChar = str.indexOf('=');
    return firstPaddingChar === -1 ||
        firstPaddingChar === len - 1 ||
        (firstPaddingChar === len - 2 && str[len - 1] === '=');
}
