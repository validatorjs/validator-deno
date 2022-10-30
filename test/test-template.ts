import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
import validator from "../mod.ts";

interface Options {
  validator: string;
  valid?: string[];
  invalid?: string[];
  error?: string[];
  args?: (number | string | RegExp | Array<unknown> | { [key: string]: unknown })[];
}

export default function test(options: Options): void {
  Deno.test(
    options.validator +
      (options.args ? " " + JSON.stringify(options.args) : ""),
    function (): void {
      const args = options.args || [];
      if (options.valid) {
        options.valid.forEach((valid) => {
          assertEquals(validator[options.validator](valid, ...args), true);
        });
      }

      if (options.invalid) {
        options.invalid.forEach((invalid) => {
          assertEquals(validator[options.validator](invalid, ...args), false);
        });
      }

      if (options.error) {
        options.error.forEach((error) => {
          assertThrows((): void =>
            validator[options.validator](error, ...args)
          );
        });
      }
    },
  );
}
