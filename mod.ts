import toDate from './src/lib/toDate.ts';
import toFloat from './src/lib/toFloat.ts';
import toInt from './src/lib/toInt.ts';
import toBoolean from './src/lib/toBoolean.ts';
import equals from './src/lib/equals.ts';
import contains from './src/lib/contains.ts';
import matches from './src/lib/matches.ts';

import isEmail from './src/lib/isEmail.ts';
import isURL from './src/lib/isURL.ts';
import isMACAddress from './src/lib/isMACAddress.ts';
import isIP from './src/lib/isIP.ts';
import isIPRange from './src/lib/isIPRange.ts';
import isFQDN from './src/lib/isFQDN.ts';
import isDate from './src/lib/isDate.ts';

import isBoolean from './src/lib/isBoolean.ts';
import isLocale from './src/lib/isLocale.ts';

import isAlpha, { locales as isAlphaLocales } from './src/lib/isAlpha.ts';
import isAlphanumeric, { locales as isAlphanumericLocales } from './src/lib/isAlphanumeric.ts';
import isNumeric from './src/lib/isNumeric.ts';
import isPassportNumber from './src/lib/isPassportNumber.ts';
import isPort from './src/lib/isPort.ts';
import isLowercase from './src/lib/isLowercase.ts';
import isUppercase from './src/lib/isUppercase.ts';

import isAscii from './src/lib/isAscii.ts';
import isFullWidth from './src/lib/isFullWidth.ts';
import isHalfWidth from './src/lib/isHalfWidth.ts';
import isVariableWidth from './src/lib/isVariableWidth.ts';
import isMultibyte from './src/lib/isMultibyte.ts';
import isSemVer from './src/lib/isSemVer.ts';
import isSurrogatePair from './src/lib/isSurrogatePair.ts';

import isInt from './src/lib/isInt.ts';
import isFloat, { locales as isFloatLocales } from './src/lib/isFloat.ts';
import isDecimal from './src/lib/isDecimal.ts';
import isHexadecimal from './src/lib/isHexadecimal.ts';
import isOctal from './src/lib/isOctal.ts';
import isDivisibleBy from './src/lib/isDivisibleBy.ts';

import isHexColor from './src/lib/isHexColor.ts';
import isRgbColor from './src/lib/isRgbColor.ts';
import isHSL from './src/lib/isHSL.ts';

import isISRC from './src/lib/isISRC.ts';

import isIBAN from './src/lib/isIBAN.ts';
import isBIC from './src/lib/isBIC.ts';

import isMD5 from './src/lib/isMD5.ts';
import isHash from './src/lib/isHash.ts';
import isJWT from './src/lib/isJWT.ts';

import isJSON from './src/lib/isJSON.ts';
import isEmpty from './src/lib/isEmpty.ts';

import isLength from './src/lib/isLength.ts';
import isByteLength from './src/lib/isByteLength.ts';

import isUUID from './src/lib/isUUID.ts';
import isMongoId from './src/lib/isMongoId.ts';

import isAfter from './src/lib/isAfter.ts';
import isBefore from './src/lib/isBefore.ts';

import isIn from './src/lib/isIn.ts';

import isCreditCard from './src/lib/isCreditCard.ts';
import isIdentityCard from './src/lib/isIdentityCard.ts';

import isEAN from './src/lib/isEAN.ts';
import isISIN from './src/lib/isISIN.ts';
import isISBN from './src/lib/isISBN.ts';
import isISSN from './src/lib/isISSN.ts';

import isMobilePhone, { locales as isMobilePhoneLocales } from './src/lib/isMobilePhone.ts';

import isEthereumAddress from './src/lib/isEthereumAddress.ts';

import isCurrency from './src/lib/isCurrency.ts';

import isBtcAddress from './src/lib/isBtcAddress.ts';

import isISO8601 from './src/lib/isISO8601.ts';
import isRFC3339 from './src/lib/isRFC3339.ts';
import isISO31661Alpha2 from './src/lib/isISO31661Alpha2.ts';
import isISO31661Alpha3 from './src/lib/isISO31661Alpha3.ts';

import isBase32 from './src/lib/isBase32.ts';
import isBase64 from './src/lib/isBase64.ts';
import isDataURI from './src/lib/isDataURI.ts';
import isMagnetURI from './src/lib/isMagnetURI.ts';

import isMimeType from './src/lib/isMimeType.ts';

import isLatLong from './src/lib/isLatLong.ts';
import isPostalCode, { locales as isPostalCodeLocales } from './src/lib/isPostalCode.ts';

import ltrim from './src/lib/ltrim.ts';
import rtrim from './src/lib/rtrim.ts';
import trim from './src/lib/trim.ts';
import escape from './src/lib/escape.ts';
import unescape from './src/lib/unescape.ts';
import stripLow from './src/lib/stripLow.ts';
import whitelist from './src/lib/whitelist.ts';
import blacklist from './src/lib/blacklist.ts';
import isWhitelisted from './src/lib/isWhitelisted.ts';

import normalizeEmail from './src/lib/normalizeEmail.ts';

import isSlug from './src/lib/isSlug.ts';

const version = '1.0.0';

const validator = {
  version,
  toDate,
  toFloat,
  toInt,
  toBoolean,
  equals,
  contains,
  matches,
  isEmail,
  isURL,
  isMACAddress,
  isIP,
  isIPRange,
  isFQDN,
  isBoolean,
  isIBAN,
  isBIC,
  isAlpha,
  isAlphaLocales,
  isAlphanumeric,
  isAlphanumericLocales,
  isNumeric,
  isPassportNumber,
  isPort,
  isLowercase,
  isUppercase,
  isAscii,
  isFullWidth,
  isHalfWidth,
  isVariableWidth,
  isMultibyte,
  isSemVer,
  isSurrogatePair,
  isInt,
  isFloat,
  isFloatLocales,
  isDecimal,
  isHexadecimal,
  isOctal,
  isDivisibleBy,
  isHexColor,
  isRgbColor,
  isHSL,
  isISRC,
  isMD5,
  isHash,
  isJWT,
  isJSON,
  isEmpty,
  isLength,
  isLocale,
  isByteLength,
  isUUID,
  isMongoId,
  isAfter,
  isBefore,
  isIn,
  isCreditCard,
  isIdentityCard,
  isEAN,
  isISIN,
  isISBN,
  isISSN,
  isMobilePhone,
  isMobilePhoneLocales,
  isPostalCode,
  isPostalCodeLocales,
  isEthereumAddress,
  isCurrency,
  isBtcAddress,
  isISO8601,
  isRFC3339,
  isISO31661Alpha2,
  isISO31661Alpha3,
  isBase32,
  isBase64,
  isDataURI,
  isMagnetURI,
  isMimeType,
  isLatLong,
  ltrim,
  rtrim,
  trim,
  escape,
  unescape,
  stripLow,
  whitelist,
  blacklist,
  isWhitelisted,
  normalizeEmail,
  isSlug,
  isDate,
};

export default validator;