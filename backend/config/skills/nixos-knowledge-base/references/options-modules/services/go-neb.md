---
module: services.go-neb
option_count: 5
source: options.html
---

# services.go-neb

## services.go-neb.enable

Whether to enable an extensible matrix bot written in Go. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/go-neb.nix>

## services.go-neb.baseUrl

Public-facing endpoint that can receive webhooks. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/go-neb.nix>

## services.go-neb.bindAddress

Port (and optionally address) to listen on. Type: string Default: ":4050" Declared by: <nixpkgs/nixos/modules/services/networking/go-neb.nix>

## services.go-neb.config

Your config.yaml as a Nix attribute set. See config.sample.yaml for possible options. Type: YAML 1.1 value Declared by: <nixpkgs/nixos/modules/services/networking/go-neb.nix>

## services.go-neb.secretFile

Environment variables from this file will be interpolated into the final config file using envsubst with this syntax: $ENVIRONMENT or ${VARIABLE}. The file should contain lines formatted as SECRET_VAR=SECRET_VALUE. This is useful to avoid putting secrets into the nix store. Type: null or absolute path Default: null Example: "/run/keys/go-neb.env" Declared by: <nixpkgs/nixos/modules/services/networking/go-neb.nix>
