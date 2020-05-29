import merge from "./util/merge.ts";

interface EqualsOptions {
  trim?: boolean;
  ignoreCase?: boolean;
}

const defaultEqualsOptions: EqualsOptions = {
  trim: false,
  ignoreCase: false,
};

export default function equals(
  str1: string,
  str2: string,
  options: EqualsOptions = defaultEqualsOptions,
): boolean {
  merge(options, defaultEqualsOptions);
  if (options.trim) {
    str1 = str1.trim();
    str2 = str2.trim();
  }
  return options.ignoreCase
    ? str1.toLowerCase() === str2.toLowerCase()
    : str1 === str2;
}
