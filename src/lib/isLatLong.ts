const lat: RegExp = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
const long: RegExp =
  /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;

export default function (str: string): boolean {
  if (!str.includes(",")) return false;
  const pair = str.split(",");
  if (
    (pair[0].startsWith("(") && !pair[1].endsWith(")")) ||
    (pair[1].endsWith(")") && !pair[0].startsWith("("))
  ) {
    return false;
  }
  return lat.test(pair[0]) && long.test(pair[1]);
}
