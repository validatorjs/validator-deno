interface Options {
  ignoreWhitespace?: boolean;
}

const defaultOptions: Options = {
  ignoreWhitespace: false,
};

export default function isEmpty(
  str: string,
  options: Options = defaultOptions,
): boolean {
  str = options.ignoreWhitespace ? str.trim() : str;
  return str.length === 0;
}
