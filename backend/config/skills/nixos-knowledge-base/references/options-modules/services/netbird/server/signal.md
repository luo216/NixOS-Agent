---
module: services.netbird.server.signal
option_count: 8
source: options.html
---

# services.netbird.server.signal

## services.netbird.server.signal.enable

Whether to enable Netbird’s Signal Service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/netbird/signal.nix>

## services.netbird.server.signal.enableNginx

Whether to enable Nginx reverse-proxy for the netbird signal service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/netbird/signal.nix>

## services.netbird.server.signal.package

The netbird-signal package to use. Type: package Default: pkgs.netbird-signal Declared by: <nixpkgs/nixos/modules/services/networking/netbird/signal.nix>

## services.netbird.server.signal.domain

The domain name for the signal service. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/netbird/signal.nix>

## services.netbird.server.signal.extraOptions

Additional options given to netbird-signal as commandline arguments. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/netbird/signal.nix>

## services.netbird.server.signal.logLevel

Log level of the netbird signal service. Type: one of “ERROR”, “WARN”, “INFO”, “DEBUG” Default: "INFO" Declared by: <nixpkgs/nixos/modules/services/networking/netbird/signal.nix>

## services.netbird.server.signal.metricsPort

Internal port of the metrics server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9091 Declared by: <nixpkgs/nixos/modules/services/networking/netbird/signal.nix>

## services.netbird.server.signal.port

Internal port of the signal server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8012 Declared by: <nixpkgs/nixos/modules/services/networking/netbird/signal.nix>
