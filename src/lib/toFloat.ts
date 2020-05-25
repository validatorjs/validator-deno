import isFloat from './isFloat.ts';

export default function toFloat(str: string) {
  if (!isFloat(str,{})) return NaN;

  return parseFloat(str);
}
