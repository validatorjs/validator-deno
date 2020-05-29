# validator.js

![CI](https://github.com/validatorjs/validator-deno/workflows/CI/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A library for validating and sanitizing strings, inspired by the popular [validator.js](https://github.com/validatorjs/validator.js)

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
| **equals(str, comparison [, options])** | check if the string matches the comparison.<br/><br/>`options` is an object which defaults to `{ trim: false, ignore_case: false }`. |
**isAfter(str ,[date])**| check if the string is a date that's after the specified date (defaults to now).|
|**isAlpha(str ,[locale])**| check if the string contains only letters (a-zA-Z).<br/><br/>Locale is one of `['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'fa-IR', 'he', 'hu-HU', 'it-IT', 'ku-IQ', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']`) and defaults to `en-US`.|
|**isAlphanumeric(str ,[locale])** | check if the string contains only letters and numbers.<br/><br/>Locale is one of `['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'fa-IR', 'he', 'hu-HU', 'it-IT', 'ku-IQ', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']`) and defaults to `en-US`.|
| **isAscii(str)** | check if the string contains ASCII chars only. |
| **isBase32(str)** | check if a string is base32 encoded. |
| **isBase64(str, [options])** | check if a string is base64 encoded.<br><br>`Options` `{urlSafe: false}` Checks whether str in url safe or not.|
|**isBefore(str ,[date])**| check if the string is a date that's before the specified date.|
|**isBIC(str)**| check if a string is a BIC (Bank Identification Code) or SWIFT code.|
|**isBoolean(str)**| check if a string is a boolean.|
|**isBtcAddress(str)**| check if the string is a valid BTC address.|
|**isByteLength(str ,[options])**| check if the string's length (in UTF-8 bytes) falls in a range. <br><br>`Options` `{min: optional, max: madatory}`|<br/><br/>`options` is an object which defaults to `{min:0, max: undefined}`.|
|**isCreditCard(str)**| check if the string is a credit card.|
|**isCurrency(str ,[options])**| check if the string is a valid currency amount.<br/><br/>`options` is an object which defaults to `{symbol: '$', require_symbol: false, allow_space_after_symbol: false, symbol_after_digits: false, allow_negatives: true, parens_for_negatives: false, negative_sign_before_digits: false, negative_sign_after_digits: false, allow_negative_sign_placeholder: false, thousands_separator: ',', decimal_separator: '.', allow_decimal: true, require_decimal: false, digits_after_decimal: [2], allow_space_after_digits: false}`.<br/>**Note:**  The array `digits_after_decimal` is filled with the exact number of digits allowed not a range, for example a range 1 to 3 will be given as [1, 2, 3].|
|**isDataURI(str)**| check if the string is a [data uri format](https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs).|
**isDate(input,[ format])**| Check if the input is a valid date. e.g. [`2002-07-15`, new Date()].<br/><br/>`format` is a string and defaults to `YYYY/MM/DD`|
|**isDecimal(str [, options])**| check if the string represents a decimal number, such as 0.1, .3, 1.1, 1.00003, 4.0, etc.<br/><br/>`options` is an object which defaults to `{force_decimal: false, decimal_digits: '1,', locale: 'en-US'}`<br/>`locale` determine the decimal separator and is one of `['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'ku-IQ', nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']`.<br/>**Note:** `decimal_digits` is given as a range like '1,3', a specific value like '3' or min like '1,'.|
| **isDivisivleBy(dividend , divisor)**| Check if the dividend is a number that's divisible by another.|
|**isEmail(str, [options])**| check if the string is an email.<br/><br/>`options` is an object which defaults to `{ allow_display_name: false, require_display_name: false, allow_utf8_local_part: true, require_tld: true, allow_ip_domain: false, domain_specific_validation: false }`.<br> `allow_display_name`: If set to true, the validator will also match `Display Name <email-address>`.<br>`require_display_name`: If set to true, the validator will reject strings without the format `Display Name <email-address>`.<br>`allow_utf8_local_part`: If set to false, the validator will not allow any non-English UTF8 character in email address' local part.<br>`require_tld`: If set to false, e-mail addresses without having TLD in their domain will also be matched.<br>`ignore_max_length`: If set to true, the validator will not check for the standard max length of an email.<br>`allow_ip_domain`: If set to true, the validator will allow IP addresses in the host part. <br>`domain_specific_validation` If true, some additional validation will be enabled, e.g. disallowing certain syntactically valid email addresses that are rejected by GMail.|
| **isEmpty(str, [options])** | check if the string has a length of zero. <br/><br/>`options` is an object which defaults to `{ ignore_whitespace:false }`. |
| **isFullWidth(str)** | check if the string contains any full-width chars. |
| **isHalfWidth(str)** | check if the string contains any half-width chars. |
| **isInt(str [, options])** | check if the string is an integer.<br/><br/>`options` is an object which can contain the keys `min` and/or `max` to check the integer is within boundaries (e.g. `{ min: 1, max: 99 }`). `options` can also contain the key `allow_leading_zeroes`, which when set to false will not allow integer values with leading zeroes (e.g. { `allow_leading_zeroes: false` }). Finally, `options` can contain the keys `gt` and/or `lt` which will enforce integers being greater than or less than, respectively, the value provided (e.g. `{gt: 1, lt: 4}` for a number between 1 and 4). |
| **isLowerCase(str)** | check if the string is lowercase. |
|**isURL(str, [options])**| check if the string is an URL.<br/><br/>`options` is an object which defaults to `{ protocols: ['http','https','ftp'], require_tld: true, require_protocol: false, require_host: true, require_valid_protocol: true, allow_underscores: false, host_whitelist: [], host_blacklist: [], allow_trailing_dot: false, allow_protocol_relative_urls: false, disallow_auth: false }`.<br/><br/>`require_protocol`: If set as true isURL will return false if protocol is not present in the URL.<br/>`require_valid_protocol`: isURL will check if the URL's protocol is present in the protocols option.<br/>`protocols`:  valid protocols can be modified with this option.<br/>`require_host`: if set as false isURL will not check if host is present in the URL.<br/>`allow_protocol_relative_urls`: if set as true protocol relative URLs will be allowed.<br>`host_whitelist`: List of allowed urls. Only those matching perfectly will be valid.<br>`host_blacklist`: List of urls that are not allowed. All other valid url will return true.|
| **isUpperCase(str)** | check if the string is uppercase.|




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
