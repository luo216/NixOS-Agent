---
module: services.dwm-status
option_count: 3
source: options.html
---

# services.dwm-status

## services.dwm-status.enable

Whether to enable dwm-status user service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/dwm-status.nix>

## services.dwm-status.package

The dwm-status package to use. Type: package Default: pkgs.dwm-status Example: dwm-status.override { enableAlsaUtils = false; } Declared by: <nixpkgs/nixos/modules/services/misc/dwm-status.nix>

## services.dwm-status.settings

Config options for dwm-status, see https://github.com/Gerschtli/dwm-status#configuration for available options. Type: open submodule of (TOML value) Default: { } Example: { order = [ "battery" "cpu_load" "time" ]; time = { format = "%F %a %r"; update_seconds = true; }; } Declared by: <nixpkgs/nixos/modules/services/misc/dwm-status.nix>
