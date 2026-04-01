---
module: services.homed
option_count: 2
source: options.html
---

# services.homed

## services.homed.enable

Whether to enable systemd home area/user account manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/homed.nix>

## services.homed.promptOnFirstBoot

Whether to enable interactively prompting for user creation on first boot . Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/homed.nix>
