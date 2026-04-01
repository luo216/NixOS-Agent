---
module: services.tremor-rs
option_count: 6
source: options.html
---

# services.tremor-rs

## services.tremor-rs.enable

Whether to enable Tremor event- or stream-processing system. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/tremor-rs.nix>

## services.tremor-rs.host

The host tremor should be listening on Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/monitoring/tremor-rs.nix>

## services.tremor-rs.loggerSettings

Tremor logger configuration Type: YAML 1.1 value Default: { refresh_rate = "30 seconds"; appenders.stdout.kind = "console"; root = { level = "warn"; appenders = [ "stdout" ]; }; loggers = { tremor_runtime = { level = "debug"; appenders = [ "stdout" ]; additive = false; }; tremor = { level = "debug"; appenders = [ "stdout" ]; additive = false; }; }; } Example: { appenders = { stdout = { kind = "console"; }; }; loggers = { tremor = { additive = false; appenders = [ "stdout" ]; level = "debug"; }; tremor_runtime = { additive = false; appenders = [ "stdout" ]; level = "debug"; }; }; refresh_rate = "30 seconds"; root = { appenders = [ "stdout" ]; level = "warn"; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/tremor-rs.nix>

## services.tremor-rs.port

the port tremor should be listening on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9898 Declared by: <nixpkgs/nixos/modules/services/monitoring/tremor-rs.nix>

## services.tremor-rs.tremorLibDir

Directory where to find /lib containing tremor script files Type: absolute path Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/tremor-rs.nix>

## services.tremor-rs.troyFileList

List of troy files to load. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/tremor-rs.nix>
