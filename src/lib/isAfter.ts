import assertString from './util/assertString.ts';
import toDate from './toDate.ts';

export default function isAfter(str: string, date = String(new Date())): boolean {
  assertString(str);
  const comparison = toDate(date);
  const original = toDate(str);
  return !!(original && comparison && original > comparison);
}
