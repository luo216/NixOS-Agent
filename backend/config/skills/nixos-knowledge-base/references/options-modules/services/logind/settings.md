---
module: services.logind.settings
option_count: 1
source: options.html
---

# services.logind.settings

## services.logind.settings.Login

Settings option for systemd-logind. See logind.conf(5) for available options. Type: open submodule of attribute set of (systemd option) Default: { } Example: { HandleLidSwitch = "ignore"; KillUserProcesses = false; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/logind.nix>
