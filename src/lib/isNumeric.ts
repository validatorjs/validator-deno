import assertString from './util/assertString.ts';

const numeric: RegExp = /^[+-]?([0-9]*[.])?[0-9]+$/;
const numericNoSymbols: RegExp = /^[0-9]+$/;

interface isNumericOptions { 
  no_symbols?: boolean;
}


export default function isNumeric(str: string, options: isNumericOptions ):boolean {
  assertString(str);
  if (options && options.no_symbols) {
    return numericNoSymbols.test(str);
  }
  return numeric.test(str);
}
