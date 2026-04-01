---
module: services.toxBootstrapd
option_count: 4
source: options.html
---

# services.toxBootstrapd

## services.toxBootstrapd.enable

Whether to enable the Tox DHT bootstrap daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/tox-bootstrapd.nix>

## services.toxBootstrapd.extraConfig

Configuration for bootstrap daemon. See https://github.com/irungentoo/toxcore/blob/master/other/bootstrap_daemon/tox-bootstrapd.conf and https://wiki.tox.chat/users/nodes. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/tox-bootstrapd.nix>

## services.toxBootstrapd.keysFile

Node key file. Type: string Default: "/var/lib/tox-bootstrapd/keys" Declared by: <nixpkgs/nixos/modules/services/networking/tox-bootstrapd.nix>

## services.toxBootstrapd.port

Listening port (UDP). Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 33445 Declared by: <nixpkgs/nixos/modules/services/networking/tox-bootstrapd.nix>
