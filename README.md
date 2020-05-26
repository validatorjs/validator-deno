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
