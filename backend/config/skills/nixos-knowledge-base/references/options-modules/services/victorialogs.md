---
module: services.victorialogs
option_count: 7
source: options.html
---

# services.victorialogs

## services.victorialogs.enable

Whether to enable VictoriaLogs is an open source user-friendly database for logs from VictoriaMetrics. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/victorialogs.nix>

## services.victorialogs.package

The victorialogs package to use. Type: package Default: pkgs.victorialogs Declared by: <nixpkgs/nixos/modules/services/databases/victorialogs.nix>

## services.victorialogs.basicAuthPasswordFile

File that contains the Basic Auth password used to protect VictoriaLogs instance by authorization Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/victorialogs.nix>

## services.victorialogs.basicAuthUsername

Basic Auth username used to protect VictoriaLogs instance by authorization Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/victorialogs.nix>

## services.victorialogs.extraOptions

Extra options to pass to VictoriaLogs. See victoria-logs -help for possible options. Type: list of string Default: [ ] Example: [ "-loggerLevel=WARN" ] Declared by: <nixpkgs/nixos/modules/services/databases/victorialogs.nix>

## services.victorialogs.listenAddress

TCP address to listen for incoming http requests. Type: string Default: ":9428" Declared by: <nixpkgs/nixos/modules/services/databases/victorialogs.nix>

## services.victorialogs.stateDir

Directory below /var/lib to store VictoriaLogs data. This directory will be created automatically using systemd’s StateDirectory mechanism. Type: string Default: "victorialogs" Declared by: <nixpkgs/nixos/modules/services/databases/victorialogs.nix>
