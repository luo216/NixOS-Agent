---
module: services.sillytavern
option_count: 10
source: options.html
---

# services.sillytavern

## services.sillytavern.enable

Whether to enable sillytavern. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/sillytavern.nix>

## services.sillytavern.package

The sillytavern package to use. Type: package Default: pkgs.sillytavern Declared by: <nixpkgs/nixos/modules/services/web-apps/sillytavern.nix>

## services.sillytavern.configFile

Path to the SillyTavern configuration file. Type: absolute path Default: ${pkgs.sillytavern}/lib/node_modules/sillytavern/config.yaml Declared by: <nixpkgs/nixos/modules/services/web-apps/sillytavern.nix>

## services.sillytavern.group

Group account under which the web-application run. Type: string Default: "sillytavern" Declared by: <nixpkgs/nixos/modules/services/web-apps/sillytavern.nix>

## services.sillytavern.listen

Whether to listen on all network interfaces. Type: null or boolean Default: null Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/sillytavern.nix>

## services.sillytavern.listenAddressIPv4

Specific IPv4 address to listen to. Type: null or string Default: null Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/sillytavern.nix>

## services.sillytavern.listenAddressIPv6

Specific IPv6 address to listen to. Type: null or string Default: null Example: "::1" Declared by: <nixpkgs/nixos/modules/services/web-apps/sillytavern.nix>

## services.sillytavern.port

Port on which SillyTavern will listen. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Example: 8045 Declared by: <nixpkgs/nixos/modules/services/web-apps/sillytavern.nix>

## services.sillytavern.user

User account under which the web-application run. Type: string Default: "sillytavern" Declared by: <nixpkgs/nixos/modules/services/web-apps/sillytavern.nix>

## services.sillytavern.whitelist

Enables whitelist mode. Type: null or boolean Default: null Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/sillytavern.nix>
