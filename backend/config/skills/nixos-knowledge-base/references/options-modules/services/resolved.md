---
module: services.resolved
option_count: 7
source: options.html
---

# services.resolved

## services.resolved.enable

Whether to enable the systemd DNS resolver daemon, systemd-resolved. Search for services.resolved to see all options. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/resolved.nix>

## services.resolved.dnsovertls

If set to "true": all DNS lookups will be encrypted. This requires that the DNS server supports DNS-over-TLS and has a valid certificate. If the hostname was specified via the address#hostname format in services.resolved.domains then the specified hostname is used to validate its certificate. "opportunistic": all DNS lookups will attempt to be encrypted, but will fallback to unecrypted requests if the server does not support DNS-over-TLS. Note that this mode does allow for a malicious party to conduct a downgrade attack by immitating the DNS server and pretending to not support encryption. "false": all DNS lookups are done unencrypted. Type: one of “true”, “opportunistic”, “false” Default: "false" Example: "true" Declared by: <nixpkgs/nixos/modules/system/boot/resolved.nix>

## services.resolved.dnssec

If set to "true": all DNS lookups are DNSSEC-validated locally (excluding LLMNR and Multicast DNS). Note that this mode requires a DNS server that supports DNSSEC. If the DNS server does not properly support DNSSEC all validations will fail. "allow-downgrade": DNSSEC validation is attempted, but if the server does not support DNSSEC properly, DNSSEC mode is automatically disabled. Note that this mode makes DNSSEC validation vulnerable to “downgrade” attacks, where an attacker might be able to trigger a downgrade to non-DNSSEC mode by synthesizing a DNS response that suggests DNSSEC was not supported. "false": DNS lookups are not DNSSEC validated. At the time of September 2023, systemd upstream advise to disable DNSSEC by default as the current code is not robust enough to deal with “in the wild” non-compliant servers, which will usually give you a broken bad experience in addition of insecure. Type: one of “true”, “allow-downgrade”, “false” Default: "false" Example: "true" Declared by: <nixpkgs/nixos/modules/system/boot/resolved.nix>

## services.resolved.domains

A list of domains. These domains are used as search suffixes when resolving single-label host names (domain names which contain no dot), in order to qualify them into fully-qualified domain names (FQDNs). For compatibility reasons, if this setting is not specified, the search domains listed in /etc/resolv.conf are used instead, if that file exists and any domains are configured in it. Type: list of string Default: config.networking.search Example: [ "example.com" ] Declared by: <nixpkgs/nixos/modules/system/boot/resolved.nix>

## services.resolved.extraConfig

Extra config to append to resolved.conf. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/system/boot/resolved.nix>

## services.resolved.fallbackDns

A list of IPv4 and IPv6 addresses to use as the fallback DNS servers. If this option is null, a compiled-in list of DNS servers is used instead. Setting this option to an empty list will override the built-in list to an empty list, disabling fallback. Type: null or (list of string) Default: null Example: [ "8.8.8.8" "2001:4860:4860::8844" ] Declared by: <nixpkgs/nixos/modules/system/boot/resolved.nix>

## services.resolved.llmnr

Controls Link-Local Multicast Name Resolution support (RFC 4795) on the local host. If set to "true": Enables full LLMNR responder and resolver support. "false": Disables both. "resolve": Only resolution support is enabled, but responding is disabled. Type: one of “true”, “resolve”, “false” Default: "true" Example: "false" Declared by: <nixpkgs/nixos/modules/system/boot/resolved.nix>
