interface Options {
    ignore_whitespace?: boolean;
}

const defaultOptions:Options = {
    ignore_whitespace: false
}

export default function isEmpty(str: string, options: Options = defaultOptions): boolean {
    str = options.ignore_whitespace ? str.trim() : str;
    return str.length === 0;
}