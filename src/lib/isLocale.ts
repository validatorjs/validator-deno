import assertString from './util/assertString.ts';

const localeReg: RegExp = /^[A-z]{2,4}([_-]([A-z]{4}|[\d]{3}))?([_-]([A-z]{2}|[\d]{3}))?$/;

export default function isLocale(str: string): boolean  {
  assertString(str);
  if (str === 'en_US_POSIX' || str === 'ca_ES_VALENCIA') {
    return true;
  }
  return localeReg.test(str);
}
