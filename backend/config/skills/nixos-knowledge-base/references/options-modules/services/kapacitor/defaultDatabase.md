---
module: services.kapacitor.defaultDatabase
option_count: 4
source: options.html
---

# services.kapacitor.defaultDatabase

## services.kapacitor.defaultDatabase.enable

Whether to enable kapacitor.defaultDatabase. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/kapacitor.nix>

## services.kapacitor.defaultDatabase.password

The password to connect to the remote InfluxDB server Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/kapacitor.nix>

## services.kapacitor.defaultDatabase.url

The URL to an InfluxDB server that serves as the default database Type: string Example: "http://localhost:8086" Declared by: <nixpkgs/nixos/modules/services/monitoring/kapacitor.nix>

## services.kapacitor.defaultDatabase.username

The username to connect to the remote InfluxDB server Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/kapacitor.nix>
