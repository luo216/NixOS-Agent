---
module: system.nssDatabases
option_count: 6
source: options.html
---

# system.nssDatabases

## system.nssDatabases.group

List of group entries to configure in /etc/nsswitch.conf. Note that “files” is always prepended while “systemd” is appended if nscd is enabled. This option only takes effect if nscd is enabled. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/config/nsswitch.nix>

## system.nssDatabases.hosts

List of hosts entries to configure in /etc/nsswitch.conf. Note that “files” is always prepended, and “dns” and “myhostname” are always appended. This option only takes effect if nscd is enabled. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/config/nsswitch.nix>

## system.nssDatabases.passwd

List of passwd entries to configure in /etc/nsswitch.conf. Note that “files” is always prepended while “systemd” is appended if nscd is enabled. This option only takes effect if nscd is enabled. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/config/nsswitch.nix>

## system.nssDatabases.services

List of services entries to configure in /etc/nsswitch.conf. Note that “files” is always prepended. This option only takes effect if nscd is enabled. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/config/nsswitch.nix>

## system.nssDatabases.shadow

List of shadow entries to configure in /etc/nsswitch.conf. Note that “files” is always prepended. This option only takes effect if nscd is enabled. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/config/nsswitch.nix>

## system.nssDatabases.sudoers

List of sudoers entries to configure in /etc/nsswitch.conf. Note that “files” is always prepended. This option only takes effect if nscd is enabled. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/config/nsswitch.nix>
