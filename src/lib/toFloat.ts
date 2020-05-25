import isFloat from './isFloat';

export default function toFloat(str: string) {
  if (!isFloat(str,{})) return NaN;

  return parseFloat(str);
}
