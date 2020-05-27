const isBICReg: RegExp = /^[A-z]{4}[A-z]{2}\w{2}(\w{3})?$/;

export default function isBIC(str: string): boolean {
  return isBICReg.test(str);
}
