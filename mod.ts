import equals from './src/lib/equals.ts';
import contains from './src/lib/contains.ts';
import blacklist from "./src/lib/blacklist.ts";
import escape from "./src/lib/escape.ts";

// validator version
const version = "1.0.0-beta";

// validators
import isAlpha, {
  locales as isAlphaLocales
} from './src/lib/isAlpha.ts';
import isAlphanumeric, {
  locales as isAlphanumericLocales
} from './src/lib/isAlphanumeric.ts';
import isAscii from "./src/lib/isAscii.ts";
import isAfter from "./src/lib/isAfter.ts";
import isBefore from "./src/lib/isBefore.ts";

import isBase32 from "./src/lib/isBase32.ts";
import isBase64 from "./src/lib/isBase64.ts";
import isBIC from "./src/lib/isBIC.ts";
import isBoolean from "./src/lib/isBoolean.ts";
import isBtcAddress from "./src/lib/isBtcAddress.ts";
import isByteLength from "./src/lib/isByteLength.ts";
import isCreditCard from "./src/lib/isCreditCard.ts";
import isDataURI from "./src/lib/isDataURI.ts";
import isDecimal from "./src/lib/isDecimal.ts";
import isEmpty from "./src/lib/isEmpty.ts";
import isEthereumAddress from "./src/lib/isEthereumAddress.ts";
import isHash from "./src/lib/isHash.ts";
import isHexColor from "./src/lib/isHexColor.ts";
import isHSL from "./src/lib/isHSL.ts";
import isFullWidth from "./src/lib/isFullWidth.ts";
import isFloat from "./src/lib/isFloat.ts";
import isFQDN from "./src/lib/isFQDN.ts";
import isHalfWidth from "./src/lib/isHalfWidth.ts";
import isHexadecimal from "./src/lib/isHexadecimal.ts";
import isIn from "./src/lib/isIn.ts";
import isInt from "./src/lib/isInt.ts";
import isIP from "./src/lib/isIP.ts";
import isISIN from "./src/lib/isISIN.ts";
import isIPRange from "./src/lib/isIPRange.ts";
import isISBN from "./src/lib/isISBN.ts";
import isISRC from "./src/lib/isISRC.ts";
import isISSN from "./src/lib/isISSN.ts";
import isJSON from "./src/lib/isJSON.ts";
import isJWT from "./src/lib/isJWT.ts";
import isLatLong from "./src/lib/isLatLong.ts";
import isLocale from "./src/lib/isLocale.ts";
import isLowerCase from "./src/lib/isLowerCase.ts";
import isMACAddress from "./src/lib/isMACAddress.ts";
import isMagnetURI from "./src/lib/isMagnetURI.ts";
import isMD5 from "./src/lib/isMD5.ts";
import isMimeType from "./src/lib/isMimeType.ts";
import isMongoId from "./src/lib/isMongoId.ts";
import isMultibyte from "./src/lib/isMultibyte.ts";
import isNumeric from "./src/lib/isNumeric.ts";
import isOctal from "./src/lib/isOctal.ts";
import isPort from "./src/lib/isPort.ts";
import isRFC3339 from "./src/lib/isRFC3339.ts";
import isRgbColor from "./src/lib/isRgbColor.ts";
import isSemVer from "./src/lib/isSemVer.ts";
import isSlug from "./src/lib/isSlug.ts";
import isSurrogatePair from "./src/lib/isSurrogatePair.ts";
import isUUID from "./src/lib/isUUID.ts";
import isUpperCase from "./src/lib/isUpperCase.ts";
import isVariableWidth from "./src/lib/isVariableWidth.ts";
import isWhitelisted from "./src/lib/isWhitelisted.ts";

// For testing (resolving keys as string)
interface ValidatorMap {
  [key: string]: any
}

const validator: ValidatorMap = {
  equals,
  contains,
  blacklist,
  escape,
  isAfter,
  isAlpha,
  isAlphaLocales,
  isAlphanumeric,
  isAlphanumericLocales,
  isAscii,
  isBase32,
  isBase64,
  isBefore,
  isBIC,
  isBoolean,
  isBtcAddress,
  isByteLength,
  isCreditCard,
  isDataURI,
  isDecimal,
  isEmpty,
  isEthereumAddress,
  isFloat,
  isFQDN,
  isFullWidth,
  isHalfWidth,
  isHash,
  isHexadecimal,
  isHexColor,
  isHSL,
  isIn,
  isInt,
  isISIN,
  isISBN,
  isISRC,
  isISSN,
  isJSON,
  isIP,
  isIPRange,
  isJWT,
  isLatLong,
  isLocale,
  isLowerCase,
  isMACAddress,
  isMagnetURI,
  isMD5,
  isMimeType,
  isMongoId,
  isMultibyte,
  isNumeric,
  isOctal,
  isPort,
  isRFC3339,
  isRgbColor,
  isSemVer,
  isSlug,
  isSurrogatePair,
  isUpperCase,
  isUUID,
  isVariableWidth,
  isWhitelisted,
  version
};

export default validator;