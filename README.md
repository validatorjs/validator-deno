# validator-deno

![CI](https://github.com/validatorjs/validator-deno/workflows/CI/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A library for validating and sanitizing strings, Official port of the popular [validator.js](https://github.com/validatorjs/validator.js)

## Strings only
**This library validates and sanitizes strings only.**

## Usage

```typescript
import validator from "https://deno.land/x/deno_validator/mod.ts";

validator.isEmail('foo@bar.com'); //=> true
```

## Validators

Here is a list of the validators currently available.

| Validator | Description |
| - | - |
| **contains(str, seed [, options])** | check if the string contains the seed.<br/><br/>`options` is an object which defaults to `{ ignoreCase: false }`. |
| **equals(str, comparison [, options])** | check if the string matches the comparison.<br/><br/>`options` is an object which defaults to `{ trim: false, ignoreCase: false }`. |
| **isAfter(str [, date])** | check if the string is a date that's after the specified date (defaults to `now`). |
| **isAlpha(str [, locale])** | check if the string contains only alphabets depending on the locale.<br/><br/>Locale is one of `['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fa-IR', 'fr-FR', 'he', 'hu-HU', 'it-IT', 'ku-IQ', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pl-Pl', 'pt-BR', 'pt-PT', 'ru-RU', 'sk-SK', 'sl-SI', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']` and defaults to `en-US`. Locale list can be accessed via `validator.isAlphaLocales` |
| **isAlphanumeric(str [, locale])** | check if the string contains only alphabets and digits depending on the locale.<br/><br/>Locale is one of `['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fa-IR', 'fr-FR', 'he', 'hu-HU', 'it-IT', 'ku-IQ', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pl-Pl', 'pt-BR', 'pt-PT', 'ru-RU', 'sk-SK', 'sl-SI', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']` and defaults to `en-US`. Locale list can be accessed via `validator.isAlphanumericLocales` |
| **isAscii(str)** | check if the string contains ASCII chars only. |
| **isBase32(str)** | check if a string is base32 encoded. |
| **isBase64(str [, options])** | check if a string is base64 encoded.<br/><br/>`options` is an object which defaults to `{ urlSafe: false }`. |
| **isBefore(str [, date])** | check if the string is a date that's before the specified date (defaults to `now`). |
| **isBIC(str)** | check if a string is a BIC (Bank Identification Code) or SWIFT code. |
| **isBoolean(str)** | check if a string is a boolean. |
| **isBtcAddress(str)** | check if the string is a valid BTC address. |
| **isByteLength(str [, options])** | check if the string's length (in UTF-8 bytes) falls in a range.<br/><br/>`options` is an object which defaults to `{ min: 0, max: undefined }`. |
| **isCreditCard(str)** | check if the string is a valid Credit Card number. |
| **isEmpty(str [, options])** | check if the string has a length of zero. <br/><br/>`options` is an object which defaults to `{ ignore_whitespace:false }`. |
| **isFullWidth(str)** | check if the string contains any full-width chars. |
| **isHalfWidth(str)** | check if the string contains any half-width chars. |
| **isInt(str [, options])** | check if the string is an integer.<br/><br/>`options` is an object which can contain the keys `min` and/or `max` to check the integer is within boundaries (e.g. `{ min: 1, max: 99 }`). `options` can also contain the key `allow_leading_zeroes`, which when set to false will not allow integer values with leading zeroes (e.g. { `allow_leading_zeroes: false` }). Finally, `options` can contain the keys `gt` and/or `lt` which will enforce integers being greater than or less than, respectively, the value provided (e.g. `{gt: 1, lt: 4}` for a number between 1 and 4). |
| **isLowerCase(str)** | check if the string is lowercase. |
| **isUpperCase(str)** | check if the string is uppercase. |




## Contributing

In general, we follow the "fork-and-pull" Git workflow.

1. Fork the repo on GitHub
2. Clone the project to your own machine
3. Work on your fork
    1. Make your changes and additions
        - Most of your changes should be focused on `src/` and `test/` folders and/or `README.md`.
    2. Change or add tests if needed
    3. Run tests and make sure they pass
    4. Add changes to README.md if needed
    5. Format files with  deno fmt
4. Commit changes to your own branch
5. **Make sure** you merge the latest from "upstream" and resolve conflicts if there is any
6. Repeat step 3(3) above
7. Push your work back up to your fork
8. Submit a Pull request so that we can review your changes

## Tests

Tests are using deno test, to run the tests use:

```sh
$ deno test
```
