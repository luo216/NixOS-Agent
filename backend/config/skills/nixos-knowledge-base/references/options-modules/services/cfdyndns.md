---
module: services.cfdyndns
option_count: 5
source: options.html
---

# services.cfdyndns

## services.cfdyndns.enable

Whether to enable Cloudflare Dynamic DNS Client. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/cfdyndns.nix>

## services.cfdyndns.apiTokenFile

The path to a file containing the API Token used to authenticate with CloudFlare. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/cfdyndns.nix>

## services.cfdyndns.apikeyFile

The path to a file containing the API Key used to authenticate with CloudFlare. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/cfdyndns.nix>

## services.cfdyndns.email

The email address to use to authenticate to CloudFlare. Type: string Declared by: <nixpkgs/nixos/modules/services/misc/cfdyndns.nix>

## services.cfdyndns.records

The records to update in CloudFlare. Type: list of string Default: [ ] Example: [ "host.tld" ] Declared by: <nixpkgs/nixos/modules/services/misc/cfdyndns.nix>
