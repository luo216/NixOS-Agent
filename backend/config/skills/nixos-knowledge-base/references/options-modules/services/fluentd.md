---
module: services.fluentd
option_count: 4
source: options.html
---

# services.fluentd

## services.fluentd.enable

Whether to enable fluentd, a data/log collector. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/logging/fluentd.nix>

## services.fluentd.package

The fluentd package to use. Type: package Default: pkgs.fluentd Declared by: <nixpkgs/nixos/modules/services/logging/fluentd.nix>

## services.fluentd.config

Fluentd config. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/logging/fluentd.nix>

## services.fluentd.plugins

A list of plugin paths to pass into fluentd. It will make plugins defined in ruby files there available in your config. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/logging/fluentd.nix>
