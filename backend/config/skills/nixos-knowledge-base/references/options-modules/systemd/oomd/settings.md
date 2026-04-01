---
module: systemd.oomd.settings
option_count: 1
source: options.html
---

# systemd.oomd.settings

## systemd.oomd.settings.OOM

Settings option for systemd-oomd. See oomd.conf(5) for available options. Type: open submodule of attribute set of (systemd option) Default: { } Example: { DefaultMemoryPressureLimit = "60%"; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/oomd.nix>
