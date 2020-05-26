export default function toDate(date: string) {
  let parsedDate = Date.parse(date);
  return !isNaN(parsedDate) ? new Date(parsedDate) : null;
}
