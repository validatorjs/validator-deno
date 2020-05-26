const octal: RegExp = /^(0o)?[0-7]+$/i;

export default function isOctal(str: string): boolean {
  return octal.test(str);
}
