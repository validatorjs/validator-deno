import assertString from './util/assertString.ts
import merge from './util/merge.ts';

const default_is_empty_options = {
  ignore_whitespace: false,
};

export default function isEmpty(str: string, options: { ignore_whitespace: any; }) {
  assertString(str);
  options = merge(options, default_is_empty_options);

  return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}
