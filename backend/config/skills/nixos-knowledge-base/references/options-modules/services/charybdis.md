---
module: services.charybdis
option_count: 6
source: options.html
---

# services.charybdis

## services.charybdis.enable

Whether to enable Charybdis IRC daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/charybdis.nix>

## services.charybdis.config

Charybdis IRC daemon configuration file. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/charybdis.nix>

## services.charybdis.group

Charybdis IRC daemon group. Type: string Default: "ircd" Declared by: <nixpkgs/nixos/modules/services/networking/charybdis.nix>

## services.charybdis.motd

Charybdis MOTD text. Charybdis will read its MOTD from /etc/charybdis/ircd.motd . If set, the value of this option will be written to this path. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/charybdis.nix>

## services.charybdis.statedir

Location of the state directory of charybdis. Type: absolute path Default: "/var/lib/charybdis" Declared by: <nixpkgs/nixos/modules/services/networking/charybdis.nix>

## services.charybdis.user

Charybdis IRC daemon user. Type: string Default: "ircd" Declared by: <nixpkgs/nixos/modules/services/networking/charybdis.nix>
