const isbn10Maybe: RegExp = /^(?:[0-9]{9}X|[0-9]{10})$/;
const isbn13Maybe: RegExp = /^(?:[0-9]{13})$/;
const factor = [1, 3];

export default function isISBN(
  str: string,
  version: string | number = "",
): boolean {
  version = String(version);
  if (!version) {
    return isISBN(str, 10) || isISBN(str, 13);
  }
  const sanitized: any = str.replace(/[\s-]+/g, "");
  let checksum = 0;
  let i: number;
  if (version === "10") {
    if (!isbn10Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 9; i++) {
      checksum += (i + 1) * sanitized.charAt(i);
    }
    if (sanitized.charAt(9) === "X") {
      checksum += 10 * 10;
    } else {
      checksum += 10 * sanitized.charAt(9);
    }
    if ((checksum % 11) === 0) {
      return !!sanitized;
    }
  } else if (version === "13") {
    if (!isbn13Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 12; i++) {
      checksum += factor[i % 2] * sanitized.charAt(i);
    }
    if (sanitized.charAt(12) - ((10 - (checksum % 10)) % 10) === 0) {
      return !!sanitized;
    }
  }
  return false;
}
