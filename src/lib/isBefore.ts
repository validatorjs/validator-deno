import toDate from "./toDate.ts";

export default function isBefore(
  str: string,
  date: string = `${new Date()}`,
): boolean {
  const comparison = toDate(date);
  const original = toDate(str);
  return !!(original && comparison && original < comparison);
}
