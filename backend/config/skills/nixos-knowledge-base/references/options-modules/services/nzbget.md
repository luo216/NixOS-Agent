---
module: services.nzbget
option_count: 5
source: options.html
---

# services.nzbget

## services.nzbget.enable

Whether to enable NZBGet, for downloading files from news servers. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/nzbget.nix>

## services.nzbget.package

The nzbget package to use. Type: package Default: pkgs.nzbget Declared by: <nixpkgs/nixos/modules/services/misc/nzbget.nix>

## services.nzbget.group

Group under which NZBGet runs Type: string Default: "nzbget" Declared by: <nixpkgs/nixos/modules/services/misc/nzbget.nix>

## services.nzbget.settings

NZBGet configuration, passed via command line using switch -o. Refer to https://github.com/nzbgetcom/nzbget/blob/develop/nzbget.conf for details on supported values. Type: attribute set of (boolean or signed integer or string) Default: { } Example: { MainDir = "/data"; } Declared by: <nixpkgs/nixos/modules/services/misc/nzbget.nix>

## services.nzbget.user

User account under which NZBGet runs Type: string Default: "nzbget" Declared by: <nixpkgs/nixos/modules/services/misc/nzbget.nix>
