import equals from './src/lib/equals.ts';
import contains from './src/lib/contains.ts';
import blacklist from "./src/lib/blacklist.ts";
import escape from "./src/lib/escape.ts";

// validator version
const version = "1.0.0-beta";

// validators
import isAlpha, { locales as isAlphaLocales } from './src/lib/isAlpha.ts';
import isAlphanumeric, { locales as isAlphanumericLocales } from './src/lib/isAlphanumeric.ts';
import isAscii from "./src/lib/isAscii.ts";
import isBase32 from "./src/lib/isBase32.ts";
import isBase64 from "./src/lib/isBase64.ts";
import isBIC from "./src/lib/isBIC.ts";
import isBoolean from "./src/lib/isBoolean.ts";
import isBtcAddress from "./src/lib/isBtcAddress.ts";
import isDecimal from "./src/lib/isDecimal.ts";
import isEmpty from "./src/lib/isEmpty.ts";
import isEthereumAddress from "./src/lib/isEthereumAddress.ts";
import isHash from "./src/lib/isHash.ts";
import isHexColor from "./src/lib/isHexColor.ts";
import isHSL from "./src/lib/isHSL.ts";
import isFullWidth from "./src/lib/isFullWidth.ts";
import isHalfWidth from "./src/lib/isHalfWidth.ts";
import isInt from "./src/lib/isInt.ts";
import isJSON from "./src/lib/isJSON.ts";
import isJWT from "./src/lib/isJWT.ts";
import isLatLong from "./src/lib/isLatLong.ts";
import isLocale from "./src/lib/isLocale.ts";
import isLowerCase from "./src/lib/isLowerCase.ts";
import isUpperCase from "./src/lib/isUpperCase.ts";

// For testing (resolving keys as string)
interface ValidatorMap {
  [key: string]: any
}

const validator : ValidatorMap = {
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
  isDecimal,
  isEmpty,
  isEthereumAddress,
  isFullWidth,
  isHalfWidth,
  isHash,
  isHexColor,
  isHSL,
  isInt,
  isJSON,
  isJWT,
  isLatLong,
  isLocale,
  isLowerCase,
  isUpperCase,
  version
};

export default validator;
