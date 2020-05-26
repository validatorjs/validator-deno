const hexadecimal: RegExp = /^(0x|0h)?[0-9A-F]+$/i;

export default function isHexadecimal(str: string): boolean {
  return hexadecimal.test(str);
}
