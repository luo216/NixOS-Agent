---
module: services.uptime
option_count: 5
source: options.html
---

# services.uptime

## services.uptime.enableSeparateMonitoringService

Whether to enable the uptime monitoring service. Type: boolean Default: config.services.uptime.enableWebService Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/uptime.nix>

## services.uptime.enableWebService

Whether to enable the uptime monitoring program web service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/uptime.nix>

## services.uptime.configFile

The uptime configuration file If mongodb: server != localhost, please set usesRemoteMongo = true If you only want to run the monitor, please set enableWebService = false and enableSeparateMonitoringService = true If autoStartMonitor: false (recommended) and you want to run both services, please set enableSeparateMonitoringService = true Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/uptime.nix>

## services.uptime.nodeEnv

The node environment to run in (development, production, etc.) Type: string Default: "production" Declared by: <nixpkgs/nixos/modules/services/monitoring/uptime.nix>

## services.uptime.usesRemoteMongo

Whether the configuration file specifies a remote mongo instance Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/uptime.nix>
