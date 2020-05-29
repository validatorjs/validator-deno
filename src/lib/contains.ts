import merge from "./util/merge.ts";

interface ContainsOptions {
  ignoreCase: boolean;
}

const defaultContainsOptions: ContainsOptions = {
  ignoreCase: false,
};

export default function contains(
  str: string,
  elem: string,
  options: ContainsOptions = defaultContainsOptions,
) {
  merge(options, defaultContainsOptions);
  return options.ignoreCase
    ? str.toLowerCase().indexOf(elem.toLowerCase()) >= 0
    : str.indexOf(elem) >= 0;
}
