import equals from './src/lib/equals.ts';
import contains from './src/lib/contains.ts';
import blacklist from "./src/lib/blacklist.ts";
import escape from "./src/lib/escape.ts";

// validator version
const version = "1.0.0";

// validators
import isAlpha, { locales as isAlphaLocales } from './src/lib/isAlpha.ts';
import isAlphanumeric, { locales as isAlphanumericLocales} from './src/lib/isAlphanumeric.ts';
import isAscii from "./src/lib/isAscii.ts";

import isBase32 from "./src/lib/isBase32.ts";

const validator = {
  equals,
  contains,
  blacklist,
  escape,
  isAlpha,
  isAlphaLocales,
  isAlphanumeric,
  isAlphanumericLocales,
  isAscii,
  isBase32,
  version
};

export default validator;