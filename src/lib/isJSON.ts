export default function isJSON(str: string): boolean {
  try {
    const obj = JSON.parse(str);
    return !!obj && typeof obj === "object";
  } catch (e) { /* ignore */ }
  return false;
}
