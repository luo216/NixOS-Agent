---
module: services.telegraf
option_count: 4
source: options.html
---

# services.telegraf

## services.telegraf.enable

Whether to enable telegraf server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/telegraf.nix>

## services.telegraf.package

The telegraf package to use. Type: package Default: pkgs.telegraf Declared by: <nixpkgs/nixos/modules/services/monitoring/telegraf.nix>

## services.telegraf.environmentFiles

File to load as environment file. Environment variables from this file will be interpolated into the config file using envsubst with this syntax: $ENVIRONMENT or ${VARIABLE}. This is useful to avoid putting secrets into the nix store. Type: list of absolute path Default: [ ] Example: [ "/run/keys/telegraf.env" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/telegraf.nix>

## services.telegraf.extraConfig

Extra configuration options for telegraf Type: TOML value Default: { } Example: { inputs = { statsd = { delete_timings = true; service_address = ":8125"; }; }; outputs = { influxdb = { database = "telegraf"; urls = [ "http://localhost:8086" ]; }; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/telegraf.nix>
