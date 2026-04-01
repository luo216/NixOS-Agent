---
module: services.journalbeat
option_count: 6
source: options.html
---

# services.journalbeat

## services.journalbeat.enable

Whether to enable journalbeat. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/logging/journalbeat.nix>

## services.journalbeat.package

The journalbeat package to use. Type: package Default: pkgs.journalbeat Declared by: <nixpkgs/nixos/modules/services/logging/journalbeat.nix>

## services.journalbeat.extraConfig

Any other configuration options you want to add Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/logging/journalbeat.nix>

## services.journalbeat.name

Name of the beat Type: string Default: "journalbeat" Declared by: <nixpkgs/nixos/modules/services/logging/journalbeat.nix>

## services.journalbeat.stateDir

Directory below /var/lib/ to store journalbeat’s own logs and other data. This directory will be created automatically using systemd’s StateDirectory mechanism. Type: string Default: "journalbeat" Declared by: <nixpkgs/nixos/modules/services/logging/journalbeat.nix>

## services.journalbeat.tags

Tags to place on the shipped log messages Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/logging/journalbeat.nix>
