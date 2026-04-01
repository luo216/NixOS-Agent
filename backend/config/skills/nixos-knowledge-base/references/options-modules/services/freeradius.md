---
module: services.freeradius
option_count: 4
source: options.html
---

# services.freeradius

## services.freeradius.enable

Whether to enable the freeradius server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/freeradius.nix>

## services.freeradius.package

The freeradius package to use. Type: package Default: pkgs.freeradius Declared by: <nixpkgs/nixos/modules/services/networking/freeradius.nix>

## services.freeradius.configDir

The path of the freeradius server configuration directory. Type: absolute path Default: "/etc/raddb" Declared by: <nixpkgs/nixos/modules/services/networking/freeradius.nix>

## services.freeradius.debug

Whether to enable debug logging for freeradius (-xx option). This should not be left on, since it includes sensitive data such as passwords in the logs. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/freeradius.nix>
