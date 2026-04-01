---
module: services.cadvisor
option_count: 11
source: options.html
---

# services.cadvisor

## services.cadvisor.enable

Whether to enable Cadvisor service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/cadvisor.nix>

## services.cadvisor.extraOptions

Additional cadvisor options. See https://github.com/google/cadvisor/blob/master/docs/runtime_options.md for available options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/cadvisor.nix>

## services.cadvisor.listenAddress

Cadvisor listening host Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/monitoring/cadvisor.nix>

## services.cadvisor.port

Cadvisor listening port Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/monitoring/cadvisor.nix>

## services.cadvisor.storageDriver

Cadvisor storage driver. Type: null or string Default: null Example: "influxdb" Declared by: <nixpkgs/nixos/modules/services/monitoring/cadvisor.nix>

## services.cadvisor.storageDriverDb

Cadvisord storage driver database name. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/monitoring/cadvisor.nix>

## services.cadvisor.storageDriverHost

Cadvisor storage driver host. Type: string Default: "localhost:8086" Declared by: <nixpkgs/nixos/modules/services/monitoring/cadvisor.nix>

## services.cadvisor.storageDriverPassword

Cadvisor storage driver password. Warning: this password is stored in the world-readable Nix store. It’s recommended to use the storageDriverPasswordFile option since that gives you control over the security of the password. storageDriverPasswordFile also takes precedence over storageDriverPassword. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/monitoring/cadvisor.nix>

## services.cadvisor.storageDriverPasswordFile

File that contains the cadvisor storage driver password. storageDriverPasswordFile takes precedence over storageDriverPassword Warning: when storageDriverPassword is non-empty this defaults to a file in the world-readable Nix store that contains the value of storageDriverPassword. It’s recommended to override this with a path not in the Nix store. Tip: use nixops key management Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/cadvisor.nix>

## services.cadvisor.storageDriverSecure

Cadvisor storage driver, enable secure communication. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/cadvisor.nix>

## services.cadvisor.storageDriverUser

Cadvisor storage driver username. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/monitoring/cadvisor.nix>
