import assertString from './util/assertString.ts';
import toFloat from './toFloat.ts';

export default function isDivisibleBy(str: any, num: string) {
  assertString(str);
  return toFloat(str) % parseInt(num, 10) === 0;
}
