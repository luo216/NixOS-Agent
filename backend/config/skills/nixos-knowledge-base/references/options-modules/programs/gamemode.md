---
module: programs.gamemode
option_count: 3
source: options.html
---

# programs.gamemode

## programs.gamemode.enable

Whether to enable GameMode to optimise system performance on demand. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/gamemode.nix>

## programs.gamemode.enableRenice

Whether to enable CAP_SYS_NICE on gamemoded to support lowering process niceness. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/programs/gamemode.nix>

## programs.gamemode.settings

System-wide configuration for GameMode (/etc/gamemode.ini). See gamemoded(8) man page for available settings. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a list of them for duplicate keys) Default: { } Example: { general = { renice = 10; }; # Warning: GPU optimisations have the potential to damage hardware gpu = { apply_gpu_optimisations = "accept-responsibility"; gpu_device = 0; amd_performance_level = "high"; }; custom = { start = "${pkgs.libnotify}/bin/notify-send 'GameMode started'"; end = "${pkgs.libnotify}/bin/notify-send 'GameMode ended'"; }; } Declared by: <nixpkgs/nixos/modules/programs/gamemode.nix>
