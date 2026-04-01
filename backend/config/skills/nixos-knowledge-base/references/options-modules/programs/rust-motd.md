---
module: programs.rust-motd
option_count: 5
source: options.html
---

# programs.rust-motd

## programs.rust-motd.enable

Whether to enable rust-motd, a Message Of The Day (MOTD) generator. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/rust-motd.nix>

## programs.rust-motd.enableMotdInSSHD

Whether to let openssh print the result when entering a new ssh-session. By default either nothing or a static file defined via users.motd is printed. Because of that, the latter option is incompatible with this module. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/programs/rust-motd.nix>

## programs.rust-motd.order

The order of the sections in programs.rust-motd.settings. By default they are ordered alphabetically. Context: since attribute sets in Nix are always ordered alphabetically internally this means that { uptime = { /* ... */ }; banner = { /* ... */ }; } will still have banner displayed before uptime. To work around that, this option can be used to define the order of all keys, i.e. { order = [ "uptime" "banner" ]; } makes sure that uptime is placed before banner in the motd. Type: list of string Default: attrNames cfg.settings Declared by: <nixpkgs/nixos/modules/programs/rust-motd.nix>

## programs.rust-motd.refreshInterval

Interval in which the motd(5) file is refreshed. For possible formats, please refer to systemd.time(7). Type: string Default: "*:0/5" Declared by: <nixpkgs/nixos/modules/programs/rust-motd.nix>

## programs.rust-motd.settings

Settings on what to generate. Please read the upstream documentation for further information. Type: attribute set of (TOML value) Declared by: <nixpkgs/nixos/modules/programs/rust-motd.nix>
