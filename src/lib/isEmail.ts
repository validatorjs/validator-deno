import merge from "./util/merge.ts";

import isByteLength from "./isByteLength.ts";
import isFQDN from "./isFQDN.ts";
import isIP from "./isIP.ts";

/*
Options

allow_display_name - set to true, the validator will also match Display Name <email-address>
require_display_name - set to true, the validator will reject strings without the format Display Name <email-address>
allow_utf8_local_part - set to false, the validator will not allow any non-English UTF8 character in email address 'local part'
require_tld - set to false, e-mail addresses without having TLD in their domain will also be matched
allow_ip_domain - set to true, the validator will allow IP addresses in the host part
domain_specific_validation - set to true if want domain specific validation, currently only gmail is supported
ignore_max_length - set to true, the validator will not check for the standard max length of an email
*/

interface isEmailOptions {
  allow_display_name?: boolean;
  require_display_name?: boolean;
  allow_utf8_local_part?: boolean;
  require_tld?: boolean;
  allow_ip_domain?: boolean;
  domain_specific_validation?: boolean;
  ignore_max_length?: boolean;
}

const splitNameAddress: RegExp = /^([^\x00-\x1F\x7F-\x9F\cX]+)<(.+)>$/i;
const emailUserPart: RegExp = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
const gmailUserPart: RegExp = /^[a-z\d]+$/;
const quotedEmailUser: RegExp =
  /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
const emailUserUtf8Part: RegExp =
  /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
const quotedEmailUserUtf8: RegExp =
  /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
const defaultMaxEmailLength: number = 254;

const defaultEmailOptions: isEmailOptions = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true,
  allow_ip_domain: false,
  domain_specific_validation: false,
  ignore_max_length: false,
};

/*
 * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2
 */
function validateDisplayName(display_name: string) {
  const trim_quotes: string[] | null = display_name.match(/^"(.+)"$/i);
  const display_name_without_quotes: string = trim_quotes
    ? trim_quotes[1]
    : display_name;
  // display name with only spaces is not valid
  if (!display_name_without_quotes.trim()) {
    return false;
  }
  // check whether display name contains illegal character
  const contains_illegal: boolean = /[\.";<>]/.test(
    display_name_without_quotes,
  );
  if (contains_illegal) {
    // if contains illegal characters,
    // must to be enclosed in double-quotes, otherwise it's not a valid display name
    if (!trim_quotes) {
      return false;
    }
    // the quotes in display name must start with character symbol \
    const all_start_with_back_slash: boolean =
      display_name_without_quotes.split('"').length ===
        display_name_without_quotes.split('\\"').length;
    if (!all_start_with_back_slash) {
      return false;
    }
  }
  return true;
}

export default function isEmail(str: string, options: isEmailOptions): boolean {
  options = merge(options, defaultEmailOptions);

  if (options.require_display_name || options.allow_display_name) {
    const display_email: string[] | null = str.match(splitNameAddress);
    if (display_email) {
      let display_name: string;
      [, display_name, str] = display_email;
      // sometimes need to trim the last space to get the display name
      // because there may be a space between display name and email address
      // eg. myname <address@gmail.com>
      // the display name is `myname` instead of `myname `, so need to trim the last space
      if (display_name.endsWith(" ")) {
        display_name = display_name.substr(0, display_name.length - 1);
      }

      if (!validateDisplayName(display_name)) {
        return false;
      }
    } else if (options.require_display_name) {
      return false;
    }
  }
  if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
    return false;
  }

  const parts: string[] = str.split("@");
  const domain: string = parts.pop()!;
  let user: string = parts.join("@");

  const lower_domain: string = domain.toLowerCase();

  if (
    options.domain_specific_validation &&
    (lower_domain === "gmail.com" || lower_domain === "googlemail.com")
  ) {
    /*
      Previously we removed dots for gmail addresses before validating.
      This was removed because it allows `multiple..dots@gmail.com`
      to be reported as valid, but it is not.
      Gmail only normalizes single dots, removing them from here is pointless,
      should be done in normalizeEmail
    */
    user = user.toLowerCase();

    // Removing sub-address from username before gmail validation
    const username: string = user.split("+")[0];

    // Dots are not included in gmail length restriction
    if (!isByteLength(username.replace(".", ""), { min: 6, max: 30 })) {
      return false;
    }

    const user_parts: string[] = username.split(".");
    for (let i = 0; i < user_parts.length; i++) {
      if (!gmailUserPart.test(user_parts[i])) {
        return false;
      }
    }
  }

  if (
    !isByteLength(user, { max: 64 }) ||
    !isByteLength(domain, { max: 254 })
  ) {
    return false;
  }

  if (!isFQDN(domain, { require_tld: options.require_tld })) {
    if (!options.allow_ip_domain) {
      return false;
    }

    if (!isIP(domain)) {
      if (!domain.startsWith("[") || !domain.endsWith("]")) {
        return false;
      }

      let noBracketdomain: string = domain.substr(1, domain.length - 2);

      if (noBracketdomain.length === 0 || !isIP(noBracketdomain)) {
        return false;
      }
    }
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part
      ? quotedEmailUserUtf8.test(user)
      : quotedEmailUser.test(user);
  }

  const pattern: RegExp = options.allow_utf8_local_part
    ? emailUserUtf8Part
    : emailUserPart;

  const user_parts: string[] = user.split(".");
  for (let i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
