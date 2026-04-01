---
module: services.lirc
option_count: 4
source: options.html
---

# services.lirc

## services.lirc.enable

Whether to enable the LIRC daemon, to receive and send infrared signals. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/lirc.nix>

## services.lirc.configs

Configurations for lircd to load, see man:lircd.conf(5) for details (lircd.conf) Type: list of strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/hardware/lirc.nix>

## services.lirc.extraArguments

Extra arguments to lircd. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/hardware/lirc.nix>

## services.lirc.options

LIRC default options described in man:lircd(8) (lirc_options.conf) Type: strings concatenated with “\n” Example: '' [lircd] nodaemon = False '' Declared by: <nixpkgs/nixos/modules/services/hardware/lirc.nix>
