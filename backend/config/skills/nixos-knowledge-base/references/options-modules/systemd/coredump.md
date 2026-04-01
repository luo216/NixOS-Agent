---
module: systemd.coredump
option_count: 2
source: options.html
---

# systemd.coredump

## systemd.coredump.enable

Whether core dumps should be processed by systemd-coredump. If disabled, core dumps appear in the current directory of the crashing process. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/coredump.nix>

## systemd.coredump.extraConfig

Extra config options for systemd-coredump. See coredump.conf(5) man page for available options. Type: strings concatenated with “\n” Default: "" Example: "Storage=journal" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/coredump.nix>
