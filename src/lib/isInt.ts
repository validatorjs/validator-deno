interface Options {
    max?: number;
    min?: number;
    gt?: number;
    lt?: number;
    allow_leading_zeroes: boolean;
}

const defaultOptions: Options = {
    allow_leading_zeroes: true
}

let int: RegExp = /^[-+]?(0|[1-9][0-9]*)$/;
let intLeadingZeros: RegExp = /^[-+]?[0-9]+$/;

export default function isInt(str: string, options: Options = defaultOptions): boolean {
    let regex: RegExp = options.allow_leading_zeroes ? intLeadingZeros : int;
    
    let regexTestPassed: boolean = regex.test(str);
    let minTestPassed: boolean = options.min ? parseInt(str, 10) >= options.min : true;
    let maxTestPassed: boolean = options.max ? parseInt(str, 10) <= options.max : true;
    let ltTestPassed: boolean = options.lt ? parseInt(str, 10) < options.lt : true;
    let gtTestPassed: boolean = options.gt ? parseInt(str, 10) > options.gt : true;

    return regexTestPassed && minTestPassed && maxTestPassed && ltTestPassed && gtTestPassed;
}