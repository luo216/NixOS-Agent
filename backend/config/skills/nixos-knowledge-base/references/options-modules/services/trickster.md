---
module: services.trickster
option_count: 10
source: options.html
---

# services.trickster

## services.trickster.enable

Enable Trickster. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/trickster.nix>

## services.trickster.package

The trickster package to use. Type: package Default: pkgs.trickster Declared by: <nixpkgs/nixos/modules/services/networking/trickster.nix>

## services.trickster.configFile

Path to configuration file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/trickster.nix>

## services.trickster.instance-id

Instance ID for when running multiple processes (default null). Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/trickster.nix>

## services.trickster.log-level

Level of Logging to use (debug, info, warn, error) (default “info”). Type: string Default: "info" Declared by: <nixpkgs/nixos/modules/services/networking/trickster.nix>

## services.trickster.metrics-port

Port that the /metrics endpoint will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8082 Declared by: <nixpkgs/nixos/modules/services/networking/trickster.nix>

## services.trickster.origin-type

Type of origin (prometheus, influxdb) Type: one of “prometheus”, “influxdb” Default: "prometheus" Declared by: <nixpkgs/nixos/modules/services/networking/trickster.nix>

## services.trickster.origin-url

URL to the Origin. Enter it like you would in grafana, e.g., http://prometheus:9090 (default http://prometheus:9090). Type: string Default: "http://prometheus:9090" Declared by: <nixpkgs/nixos/modules/services/networking/trickster.nix>

## services.trickster.profiler-port

Port that the /debug/pprof endpoint will listen on. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/trickster.nix>

## services.trickster.proxy-port

Port that the Proxy server will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9090 Declared by: <nixpkgs/nixos/modules/services/networking/trickster.nix>
