# validator.js

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A library for validating and sanitizing strings, inspired by the popular [validator.js](https://github.com/validatorjs/validator.js)

## Strings only
**This library validates and sanitizes strings only.**

## Usage

```typescript
import validator from "https://deno.land/x/validatorjs/mod.ts";

validator.isEmail('foo@bar.com'); //=> true
```

## Validators

Here is a list of the validators currently available.

| Validator | Description |
| - | - |
| **equals(str, comparison [, options])** | check if the string matches the comparison.<br/><br/>`options` is an object which defaults to `{ trim: false, ignore_case: false }`. |
| **isAscii(str)** | check if the string contains ASCII chars only. |
| **isBase32(str)** | check if a string is base32 encoded. |
| **isEmpty(str [, options])** | check if the string has a length of zero. <br/><br/>`options` is an object which defaults to `{ ignore_whitespace:false }`. |
| **isFullWidth(str)** | check if the string contains any full-width chars. |
| **isHalfWidth(str)** | check if the string contains any half-width chars. |
| **isInt(str [, options])** | check if the string is an integer.<br/><br/>`options` is an object which can contain the keys `min` and/or `max` to check the integer is within boundaries (e.g. `{ min: 1, max: 99 }`). `options` can also contain the key `allow_leading_zeroes`, which when set to false will not allow integer values with leading zeroes (e.g. { `allow_leading_zeroes: false` }). Finally, `options` can contain the keys `gt` and/or `lt` which will enforce integers being greater than or less than, respectively, the value provided (e.g. `{gt: 1, lt: 4}` for a number between 1 and 4). |
| **isLowerCase(str)** | check if the string is lowercase. |
| **isUpperCase(str)** | check if the string is uppercase. |
