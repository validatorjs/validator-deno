import isInt from './isInt';

export default function isPort(str: string) {
  return isInt(str, { min: 0, max: 65535 });
}
