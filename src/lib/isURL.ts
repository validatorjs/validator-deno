import isFQDN from "./isFQDN.ts";
import isIP from "./isIP.ts";
import merge from "./util/merge.ts";

/*
options for isURL method

require_protocol - if set as true isURL will return false if protocol is not present in the URL
require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
protocols - valid protocols can be modified with this option
require_host - if set as false isURL will not check if host is present in the URL
allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed
disallow_auth - if set true wont allow auth data in urls
host_whiitelist - list of url allowed (can include both string and RegExp)
host_balcklist - list of url not allowed (can include both string and RegExp)

*/

interface isURLOptins {
  protocols?: string[];
  require_tld?: boolean;
  require_protocol?: boolean;
  require_host?: boolean;
  require_valid_protocol?: boolean;
  allow_underscores?: boolean;
  allow_trailing_dot?: boolean;
  allow_protocol_relative_urls?: boolean;
  host_whitelist?: string[];
  host_blacklist?: string[];
  disallow_auth?: boolean;
}

const default_url_options: isURLOptins = {
  protocols: ["http", "https", "ftp"],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false,
  host_whitelist: [],
  host_blacklist: [],
  disallow_auth: false,
};

const wrapped_ipv6: RegExp = /^\[([^\]]+)\](?::([0-9]+))?$/;

function checkHost(host: string, matches: (string | RegExp)[]): boolean {
  for (let i = 0; i < matches.length; i++) {
    let match: string | RegExp = matches[i];
    if (host === match || ((match instanceof RegExp) && match.test(host))) {
      return true;
    }
  }
  return false;
}

export default function isURL(url: string, options: isURLOptins): boolean {
  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }
  if (url.indexOf("mailto:") === 0) {
    return false;
  }
  options = merge(options, default_url_options);
  let protocol: string,
    auth: string,
    host: string,
    hostname: string,
    port: number,
    port_str: string | null,
    split: string[],
    ipv6: string | null;

  split = url.split("#");
  url = split.shift()!;

  split = url.split("?");
  url = split.shift()!;

  split = url.split("://");
  if (split.length > 1) {
    protocol = split.shift()!.toLowerCase();
    if (
      options.require_valid_protocol &&
      options.protocols!.indexOf(protocol) === -1
    ) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (url.substr(0, 2) === "//") {
    if (!options.allow_protocol_relative_urls) {
      return false;
    }
    split[0] = url.substr(2);
  }
  url = split.join("://");

  if (url === "") {
    return false;
  }

  split = url.split("/");
  url = split.shift()!;

  if (url === "" && !options.require_host) {
    return true;
  }

  split = url.split("@");
  if (split.length > 1) {
    if (options.disallow_auth) {
      return false;
    }
    auth = split.shift()!;
    if (auth.indexOf(":") >= 0 && auth.split(":").length > 2) {
      return false;
    }
  }
  hostname = split.join("@");

  port_str = null;
  ipv6 = null;
  const ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = "";
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(":");
    host = split.shift()!;
    if (split.length) {
      port_str = split.join(":");
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!isIP(host) && !isFQDN(host, options) && (!ipv6 || !isIP(ipv6, 6))) {
    return false;
  }

  host = (host || ipv6)!;

  if (
    options.host_whitelist!.length > 0 &&
    !checkHost(host, options.host_whitelist!)
  ) {
    return false;
  }
  if (
    options.host_blacklist!.length > 0 &&
    checkHost(host, options.host_blacklist!)
  ) {
    return false;
  }

  return true;
}
