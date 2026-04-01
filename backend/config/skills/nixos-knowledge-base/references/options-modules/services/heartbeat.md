---
module: services.heartbeat
option_count: 6
source: options.html
---

# services.heartbeat

## services.heartbeat.enable

Whether to enable heartbeat, uptime monitoring. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/logging/heartbeat.nix>

## services.heartbeat.package

The heartbeat package to use. Type: package Default: pkgs.heartbeat Example: heartbeat7 Declared by: <nixpkgs/nixos/modules/services/logging/heartbeat.nix>

## services.heartbeat.extraConfig

Any other configuration options you want to add Type: strings concatenated with “\n” Default: '' heartbeat.monitors: - type: http urls: ["http://localhost:9200"] schedule: '@every 10s' '' Declared by: <nixpkgs/nixos/modules/services/logging/heartbeat.nix>

## services.heartbeat.name

Name of the beat Type: string Default: "heartbeat" Declared by: <nixpkgs/nixos/modules/services/logging/heartbeat.nix>

## services.heartbeat.stateDir

The state directory. heartbeat’s own logs and other data are stored here. Type: string Default: "/var/lib/heartbeat" Declared by: <nixpkgs/nixos/modules/services/logging/heartbeat.nix>

## services.heartbeat.tags

Tags to place on the shipped log messages Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/logging/heartbeat.nix>
