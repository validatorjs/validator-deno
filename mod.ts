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

import isBase64 from "./src/lib/isBase64.ts";
import isBIC from "./src/lib/isBIC.ts";

import isBoolean from "./src/lib/isBoolean.ts";
import isBtcAddress from "./src/lib/isBtcAddress.ts";
import isByteLength from "./src/lib/isByteLength.ts";
import isCreditCard from "./src/lib/isCreditCard.ts";

import isCurrency from "./src/lib/isCurrency.ts";

import isDataURI from "./src/lib/isDataURI.ts";
import isDate from "./src/lib/isDate.ts";
import isDecimal from "./src/lib/isDecimal.ts";


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
  isBase64,
  isBIC,
  isBoolean,
  isBtcAddress,
  isByteLength,
  isCreditCard,
  isCurrency,
  isDataURI,
  isDate,
  isDecimal,
  version
};

export default validator;