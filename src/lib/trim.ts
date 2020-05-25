import rtrim from './rtrim';
import ltrim from './ltrim';

export default function trim(str: any, chars: any) {
  return rtrim(ltrim(str, chars), chars);
}
