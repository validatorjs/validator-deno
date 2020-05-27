import { alphanumeric } from "./alpha.ts";

export default function isAlphanumeric(
  str: string,
  locale: string = "en-US",
): boolean {
  if (locale in alphanumeric) {
    return alphanumeric[locale].test(str);
  }
  throw new Error(`Invalid locale '${locale}'`);
}

export const locales = Object.keys(alphanumeric);
