---
module: services.spacecookie.settings.log
option_count: 4
source: options.html
---

# services.spacecookie.settings.log

## services.spacecookie.settings.log.enable

Whether to enable logging for spacecookie. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/networking/spacecookie.nix>

## services.spacecookie.settings.log.hide-ips

If enabled, spacecookie will hide personal information of users like IP addresses from log output. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/spacecookie.nix>

## services.spacecookie.settings.log.hide-time

If enabled, spacecookie will not print timestamps at the beginning of every log line. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/spacecookie.nix>

## services.spacecookie.settings.log.level

Log level for the spacecookie service. Type: one of “info”, “warn”, “error” Default: "info" Declared by: <nixpkgs/nixos/modules/services/networking/spacecookie.nix>
