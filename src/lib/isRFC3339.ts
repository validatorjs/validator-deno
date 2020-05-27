/* Based on https://tools.ietf.org/html/rfc3339#section-5.6 */

const dateFullYear: RegExp = /[0-9]{4}/;
const dateMonth: RegExp = /(0[1-9]|1[0-2])/;
const dateMDay: RegExp = /([12]\d|0[1-9]|3[01])/;

const timeHour: RegExp = /([01][0-9]|2[0-3])/;
const timeMinute: RegExp = /[0-5][0-9]/;
const timeSecond: RegExp = /([0-5][0-9]|60)/;

const timeSecFrac: RegExp = /(\.[0-9]+)?/;
const timeNumOffset = new RegExp(`[-+]${timeHour.source}:${timeMinute.source}`);
const timeOffset = new RegExp(`([zZ]|${timeNumOffset.source})`);

const partialTime = new RegExp(
  `${timeHour.source}:${timeMinute.source}:${timeSecond.source}${timeSecFrac.source}`,
);

const fullDate = new RegExp(
  `${dateFullYear.source}-${dateMonth.source}-${dateMDay.source}`,
);
const fullTime = new RegExp(`${partialTime.source}${timeOffset.source}`);

const rfc3339 = new RegExp(`${fullDate.source}[ tT]${fullTime.source}`);

export default function isRFC3339(str: string): boolean {
  return rfc3339.test(str);
}
