import assertString from './util/assertString.ts';

export default function whitelist(str: string, chars: any) {
  assertString(str);
  return str.replace(new RegExp(`[^${chars}]+`, 'g'), '');
}
