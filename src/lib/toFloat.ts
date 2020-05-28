import assertString from "./util/assertString.ts";
import isFloat from "./isFloat.ts"

export default function (str: string): number{
	assertString(str);
	if(!isFloat(str,{})) return NaN;
	return parseFloat(str);
}