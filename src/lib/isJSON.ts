import assertString from './util/assertString.ts';

export default function isJSON(str: string): boolean {
  assertString(str);
  try {
    const obj = JSON.parse(str);
    return !!obj && typeof obj === 'object';
  } catch (e) { /* ignore */ }
  return false;
}
