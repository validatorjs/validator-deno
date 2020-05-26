export default function blacklist(str: string, chars: any): string {
  return str.replace(new RegExp(`[${chars}]+`, 'g'), '');
}
