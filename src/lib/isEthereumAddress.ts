import assertString from './util/assertString.ts';

const eth: RegExp = /^(0x)[0-9a-f]{40}$/i;

export default function isEthereumAddress(str: string): boolean {
  assertString(str);
  return eth.test(str);
}
