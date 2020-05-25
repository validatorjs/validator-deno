import assertString from './util/assertString.ts';

const jwt = /^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/;

export default function isJWT(str: string) {
  assertString(str);
  return jwt.test(str);
}
