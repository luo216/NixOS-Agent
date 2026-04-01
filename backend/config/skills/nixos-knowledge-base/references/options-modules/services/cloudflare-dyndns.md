---
module: services.cloudflare-dyndns
option_count: 9
source: options.html
---

# services.cloudflare-dyndns

## services.cloudflare-dyndns.enable

Whether to enable Cloudflare Dynamic DNS Client. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-dyndns.nix>

## services.cloudflare-dyndns.package

The cloudflare-dyndns package to use. Type: package Default: pkgs.cloudflare-dyndns Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-dyndns.nix>

## services.cloudflare-dyndns.apiTokenFile

The path to a file containing the CloudFlare API token. Type: absolute path not in the Nix store Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-dyndns.nix>

## services.cloudflare-dyndns.deleteMissing

Whether to delete the record when no IP address is found. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-dyndns.nix>

## services.cloudflare-dyndns.domains

List of domain names to update records for. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-dyndns.nix>

## services.cloudflare-dyndns.frequency

Run cloudflare-dyndns with the given frequency (see systemd.time(7) for the format). If null, do not run automatically. Type: null or string Default: "*:0/5" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-dyndns.nix>

## services.cloudflare-dyndns.ipv4

Whether to enable setting IPv4 A records. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-dyndns.nix>

## services.cloudflare-dyndns.ipv6

Whether to enable setting IPv6 AAAA records. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-dyndns.nix>

## services.cloudflare-dyndns.proxied

Whether this is a DNS-only record, or also being proxied through CloudFlare. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-dyndns.nix>
