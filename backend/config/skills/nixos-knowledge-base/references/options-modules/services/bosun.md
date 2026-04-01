---
module: services.bosun
option_count: 11
source: options.html
---

# services.bosun

## services.bosun.enable

Whether to enable bosun. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/bosun.nix>

## services.bosun.package

The bosun package to use. Type: package Default: pkgs.bosun Declared by: <nixpkgs/nixos/modules/services/monitoring/bosun.nix>

## services.bosun.checkFrequency

Bosun’s check frequency Type: string Default: "5m" Declared by: <nixpkgs/nixos/modules/services/monitoring/bosun.nix>

## services.bosun.extraConfig

Extra configuration options for Bosun. You should describe your desired templates, alerts, macros, etc through this configuration option. A detailed description of the supported syntax can be found at-spi2-atk https://bosun.org/configuration.html Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/bosun.nix>

## services.bosun.group

Group account under which bosun runs. Type: string Default: "bosun" Declared by: <nixpkgs/nixos/modules/services/monitoring/bosun.nix>

## services.bosun.influxHost

Host and port of the influxdb database. Type: null or string Default: null Example: "localhost:8086" Declared by: <nixpkgs/nixos/modules/services/monitoring/bosun.nix>

## services.bosun.ledisDir

Path to bosun’s ledis data dir Type: absolute path Default: "/var/lib/bosun/ledis_data" Declared by: <nixpkgs/nixos/modules/services/monitoring/bosun.nix>

## services.bosun.listenAddress

The host address and port that bosun’s web interface will listen on. Type: string Default: ":8070" Declared by: <nixpkgs/nixos/modules/services/monitoring/bosun.nix>

## services.bosun.opentsdbHost

Host and port of the OpenTSDB database that stores bosun data. To disable opentsdb you can pass null as parameter. Type: null or string Default: "localhost:4242" Declared by: <nixpkgs/nixos/modules/services/monitoring/bosun.nix>

## services.bosun.stateFile

Path to bosun’s state file. Type: absolute path Default: "/var/lib/bosun/bosun.state" Declared by: <nixpkgs/nixos/modules/services/monitoring/bosun.nix>

## services.bosun.user

User account under which bosun runs. Type: string Default: "bosun" Declared by: <nixpkgs/nixos/modules/services/monitoring/bosun.nix>
