import {
    assertEquals,
    assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
import validator from "../mod.ts";

interface Options {
    validator: string,
    valid?: string[],
    invalid?: string[],
    args?: (string | { [key: string]: any })[]
}

export default function test(options: Options): void {
    Deno.test(options.validator + (options.args ? ' ' + JSON.stringify(options.args) : ''), function (): void {
        let args = options.args || [];
        if (options.valid) {
            options.valid.forEach(valid => {
                assertEquals(validator[options.validator](valid, ...args), true)
            });
        }

        if (options.invalid) {
            options.invalid.forEach(invalid => {
                assertEquals(validator[options.validator](invalid, ...args), false)
            });
        }
    })
}