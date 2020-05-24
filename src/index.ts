import equals from './lib/equals.ts';
import contains from './lib/contains.ts';

import blacklist from "./lib/blacklist.ts";

const version = '1.0.0';

const validator = {
  equals,
  contains,
  blacklist,
  version
};

export default validator;