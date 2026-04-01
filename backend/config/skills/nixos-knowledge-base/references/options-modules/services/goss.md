---
module: services.goss
option_count: 4
source: options.html
---

# services.goss

## services.goss.enable

Whether to enable Goss daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/goss.nix>

## services.goss.package

The goss package to use. Type: package Default: pkgs.goss Declared by: <nixpkgs/nixos/modules/services/monitoring/goss.nix>

## services.goss.environment

Environment variables to set for the goss service. See https://github.com/goss-org/goss/blob/master/docs/manual.md Type: attribute set of string Default: { } Example: { GOSS_FMT = "json"; GOSS_LISTEN = ":8080"; GOSS_LOGLEVEL = "FATAL"; } Declared by: <nixpkgs/nixos/modules/services/monitoring/goss.nix>

## services.goss.settings

The global options in config file in yaml format. Refer to https://github.com/goss-org/goss/blob/master/docs/goss-json-schema.yaml for schema. Type: open submodule of (YAML 1.1 value) Default: { } Example: { addr = { "tcp://localhost:8080" = { local-address = "127.0.0.1"; reachable = true; }; }; service = { goss = { enabled = true; running = true; }; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/goss.nix>
