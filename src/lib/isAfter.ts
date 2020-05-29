import toDate from "./toDate.ts";

export default function isAfter(
  str: string,
  date: string = `${new Date()}`,
): boolean {
  const comparison = toDate(date);
  const original = toDate(str);
  return !!(original && comparison && original > comparison);
}
