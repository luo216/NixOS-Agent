---
module: services.timesyncd
option_count: 4
source: options.html
---

# services.timesyncd

## services.timesyncd.enable

Enables the systemd NTP client daemon. Type: boolean Default: !config.boot.isContainer Declared by: <nixpkgs/nixos/modules/system/boot/timesyncd.nix>

## services.timesyncd.extraConfig

Extra config options for systemd-timesyncd. See timesyncd.conf(5) for available options. Type: strings concatenated with “\n” Default: "" Example: '' PollIntervalMaxSec=180 '' Declared by: <nixpkgs/nixos/modules/system/boot/timesyncd.nix>

## services.timesyncd.fallbackServers

The set of fallback NTP servers from which to synchronise. Setting this option to an empty list will write FallbackNTP= to the timesyncd.conf file as opposed to setting this option to null which will remove FallbackNTP= entirely. See timesyncd.conf(5) for details. Type: null or (list of string) Default: config.networking.timeServers Declared by: <nixpkgs/nixos/modules/system/boot/timesyncd.nix>

## services.timesyncd.servers

The set of NTP servers from which to synchronise. Setting this option to an empty list will write NTP= to the timesyncd.conf file as opposed to setting this option to null which will remove NTP= entirely. See timesyncd.conf(5) for details. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/system/boot/timesyncd.nix>
