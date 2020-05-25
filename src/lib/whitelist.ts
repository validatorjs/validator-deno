import assertString from './util/assertString';

export default function whitelist(str: string, chars: any) {
  assertString(str);
  return str.replace(new RegExp(`[^${chars}]+`, 'g'), '');
}
