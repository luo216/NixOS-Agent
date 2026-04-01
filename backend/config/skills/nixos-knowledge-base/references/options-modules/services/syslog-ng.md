---
module: services.syslog-ng
option_count: 5
source: options.html
---

# services.syslog-ng

## services.syslog-ng.enable

Whether to enable the syslog-ng daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/logging/syslog-ng.nix>

## services.syslog-ng.package

The syslogng package to use. Type: package Default: pkgs.syslogng Declared by: <nixpkgs/nixos/modules/services/logging/syslog-ng.nix>

## services.syslog-ng.configHeader

The very first lines of the configuration file. Should usually contain the syslog-ng version header. Type: strings concatenated with “\n” Default: '' @version: 4.4 @include "scl.conf" '' Declared by: <nixpkgs/nixos/modules/services/logging/syslog-ng.nix>

## services.syslog-ng.extraConfig

Configuration added to the end of syslog-ng.conf. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/logging/syslog-ng.nix>

## services.syslog-ng.extraModulePaths

A list of paths that should be included in syslog-ng’s --module-path option. They should usually end in /lib/syslog-ng Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/logging/syslog-ng.nix>
