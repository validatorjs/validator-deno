// supports Bech32 addresses
const btc: RegExp = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/;

export default function isBtcAddress(str: string): boolean {
  return btc.test(str);
}
