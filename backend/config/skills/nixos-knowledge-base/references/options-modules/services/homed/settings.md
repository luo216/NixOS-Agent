---
module: services.homed.settings
option_count: 1
source: options.html
---

# services.homed.settings

## services.homed.settings.Home

Options for systemd-homed. See homed.conf(5) man page for available options. Type: open submodule of attribute set of (systemd option) Default: { } Example: { DefaultFileSystemType = "btrfs"; DefaultStorage = "luks"; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/homed.nix>
