---
module: services.nebula-lighthouse-service
option_count: 3
source: options.html
---

# services.nebula-lighthouse-service

## services.nebula-lighthouse-service.enable

Whether to enable nebula-lighthouse-service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nebula-lighthouse-service.nix>

## services.nebula-lighthouse-service.settings

Configuration for nebula-lighthouse-service. Type: YAML 1.1 value Default: { } Example: { max-port = 65535; min-port = 49152; "webserver.ip" = "127.0.0.1"; "webserver.port" = 8080; } Declared by: <nixpkgs/nixos/modules/services/networking/nebula-lighthouse-service.nix>

## services.nebula-lighthouse-service.user

The user and group to run nebula-lighthouse-service as. Type: string Default: "nebula-lighthouse" Example: "nebula-lighthouse" Declared by: <nixpkgs/nixos/modules/services/networking/nebula-lighthouse-service.nix>
