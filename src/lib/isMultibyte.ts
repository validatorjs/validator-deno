const multibyte: RegExp = /[^\x00-\x7F]/;

export default function isMultibyte(str: string): boolean {
  return multibyte.test(str);
}
