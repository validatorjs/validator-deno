export default function toBoolean(str: string, strict: boolean) {
  if (strict) {
    return str === "1" || /^true$/i.test(str);
  }
  return str !== "0" && !/^false$/i.test(str) && str !== "";
}
