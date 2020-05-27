export default function isBoolean(str: string): boolean {
  return (["true", "false", "1", "0"].indexOf(str) >= 0);
}
