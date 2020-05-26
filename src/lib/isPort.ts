import isInt from './isInt.ts';

export default function isPort(str: any): boolean {
  return isInt(str, { min: 0, max: 65535, allow_leading_zeroes: true });
}
