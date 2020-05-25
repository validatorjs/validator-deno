import rtrim from './rtrim.ts';
import ltrim from './ltrim.ts';

export default function trim(str: any, chars: any) {
  return rtrim(ltrim(str, chars), chars);
}
