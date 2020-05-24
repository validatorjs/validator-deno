import assertString from './util/assertString.ts';
import { alphanumeric } from './alpha.ts';

export default function isAlphanumeric(str : string, locale = 'en-US') {
  assertString(str);
  if (locale in alphanumeric) {
    return alphanumeric[locale].test(str);
  }
  throw new Error(`Invalid locale '${locale}'`);
}

export const locales = Object.keys(alphanumeric);
