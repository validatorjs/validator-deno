import assertString from './util/assertString.ts';

const eth = /^(0x)[0-9a-f]{40}$/i;

export default function isEthereumAddress(str: string) {
  assertString(str);
  return eth.test(str);
}
