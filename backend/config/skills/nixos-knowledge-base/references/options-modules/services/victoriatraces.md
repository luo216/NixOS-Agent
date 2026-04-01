---
module: services.victoriatraces
option_count: 8
source: options.html
---

# services.victoriatraces

## services.victoriatraces.enable

Whether to enable VictoriaTraces is an open source distributed traces storage and query engine from VictoriaMetrics. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/victoriatraces.nix>

## services.victoriatraces.package

The victoriatraces package to use. Type: package Default: pkgs.victoriatraces Declared by: <nixpkgs/nixos/modules/services/databases/victoriatraces.nix>

## services.victoriatraces.basicAuthPasswordFile

File that contains the Basic Auth password used to protect VictoriaTraces instance by authorization Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/victoriatraces.nix>

## services.victoriatraces.basicAuthUsername

Basic Auth username used to protect VictoriaTraces instance by authorization Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/victoriatraces.nix>

## services.victoriatraces.extraOptions

Extra options to pass to VictoriaTraces. See victoria-traces -help for possible options. Type: list of string Default: [ ] Example: [ "-loggerLevel=WARN" "-retention.maxDiskSpaceUsageBytes=1073741824" ] Declared by: <nixpkgs/nixos/modules/services/databases/victoriatraces.nix>

## services.victoriatraces.listenAddress

TCP address to listen for incoming http requests. Type: string Default: ":10428" Declared by: <nixpkgs/nixos/modules/services/databases/victoriatraces.nix>

## services.victoriatraces.retentionPeriod

Retention period for trace data. Data older than retentionPeriod is automatically deleted. Type: string Default: "7d" Example: "30d" Declared by: <nixpkgs/nixos/modules/services/databases/victoriatraces.nix>

## services.victoriatraces.stateDir

Directory below /var/lib to store VictoriaTraces data. This directory will be created automatically using systemd’s StateDirectory mechanism. Type: string Default: "victoriatraces" Declared by: <nixpkgs/nixos/modules/services/databases/victoriatraces.nix>
