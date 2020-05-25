import assertString from './util/assertString.ts


export default function isByteLength(str: string, options: { min: number; max: any; }) {
  assertString(str);
  let min: number;
  let max: number;
  if (typeof (options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else { // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  const len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
