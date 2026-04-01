---
module: services.ntpd-rs
option_count: 4
source: options.html
---

# services.ntpd-rs

## services.ntpd-rs.enable

Whether to enable Network Time Service (ntpd-rs). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ntp/ntpd-rs.nix>

## services.ntpd-rs.package

The ntpd-rs package to use. Type: package Default: pkgs.ntpd-rs Declared by: <nixpkgs/nixos/modules/services/networking/ntp/ntpd-rs.nix>

## services.ntpd-rs.settings

Settings to write to ntp.toml See https://docs.ntpd-rs.pendulum-project.org/man/ntp.toml.5 for more information about available options. Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/ntp/ntpd-rs.nix>

## services.ntpd-rs.useNetworkingTimeServers

Use source time servers from networking.timeServers in config. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/ntp/ntpd-rs.nix>
