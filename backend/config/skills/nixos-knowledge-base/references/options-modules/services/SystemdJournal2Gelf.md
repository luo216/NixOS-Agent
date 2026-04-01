---
module: services.SystemdJournal2Gelf
option_count: 4
source: options.html
---

# services.SystemdJournal2Gelf

## services.SystemdJournal2Gelf.enable

Whether to enable SystemdJournal2Gelf. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/logging/SystemdJournal2Gelf.nix>

## services.SystemdJournal2Gelf.package

The systemd-journal2gelf package to use. Type: package Default: pkgs.systemd-journal2gelf Declared by: <nixpkgs/nixos/modules/services/logging/SystemdJournal2Gelf.nix>

## services.SystemdJournal2Gelf.extraOptions

Any extra flags to pass to SystemdJournal2Gelf. Note that these are basically journalctl flags. Type: strings concatenated with " " Default: "" Declared by: <nixpkgs/nixos/modules/services/logging/SystemdJournal2Gelf.nix>

## services.SystemdJournal2Gelf.graylogServer

Host and port of your graylog2 input. This should be a GELF UDP input. Type: string Example: "graylog2.example.com:11201" Declared by: <nixpkgs/nixos/modules/services/logging/SystemdJournal2Gelf.nix>
