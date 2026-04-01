---
module: services.mtr-exporter
option_count: 7
source: options.html
---

# services.mtr-exporter

## services.mtr-exporter.enable

Whether to enable a Prometheus exporter for MTR. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/mtr-exporter.nix>

## services.mtr-exporter.package

The mtr-exporter package to use. Type: package Default: pkgs.mtr-exporter Declared by: <nixpkgs/nixos/modules/services/networking/mtr-exporter.nix>

## services.mtr-exporter.address

Listen address for MTR exporter. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/mtr-exporter.nix>

## services.mtr-exporter.extraFlags

Extra command line options to pass to MTR exporter. Type: list of string Default: [ ] Example: [ "-flag.deprecatedMetrics" ] Declared by: <nixpkgs/nixos/modules/services/networking/mtr-exporter.nix>

## services.mtr-exporter.jobs

List of MTR jobs. Will be added to /etc/mtr-exporter.conf Type: non-empty (list of (submodule)) Declared by: <nixpkgs/nixos/modules/services/networking/mtr-exporter.nix>

## services.mtr-exporter.mtrPackage

The mtr package to use. Type: package Default: pkgs.mtr Declared by: <nixpkgs/nixos/modules/services/networking/mtr-exporter.nix>

## services.mtr-exporter.port

Listen port for MTR exporter. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/networking/mtr-exporter.nix>
