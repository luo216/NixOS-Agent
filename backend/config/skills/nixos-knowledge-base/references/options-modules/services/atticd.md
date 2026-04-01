---
module: services.atticd
option_count: 7
source: options.html
---

# services.atticd

## services.atticd.enable

Whether to enable the atticd, the Nix Binary Cache server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/atticd.nix>

## services.atticd.package

The attic-server package to use. Type: package Default: pkgs.attic-server Declared by: <nixpkgs/nixos/modules/services/networking/atticd.nix>

## services.atticd.environmentFile

Path to an EnvironmentFile containing required environment variables: ATTIC_SERVER_TOKEN_RS256_SECRET_BASE64: The base64-encoded RSA PEM PKCS1 of the RS256 JWT secret. Generate it with openssl genrsa -traditional 4096 | base64 -w0. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/atticd.nix>

## services.atticd.group

The group under which attic runs. Type: string Default: "atticd" Declared by: <nixpkgs/nixos/modules/services/networking/atticd.nix>

## services.atticd.mode

Mode in which to run the server. ‘monolithic’ runs all components, and is suitable for single-node deployments. ‘api-server’ runs only the API server, and is suitable for clustering. ‘garbage-collector’ only runs the garbage collector periodically. A simple NixOS-based Attic deployment will typically have one ‘monolithic’ and any number of ‘api-server’ nodes. There are several other supported modes that perform one-off operations, but these are the only ones that make sense to run via the NixOS module. Type: one of “monolithic”, “api-server”, “garbage-collector” Default: "monolithic" Declared by: <nixpkgs/nixos/modules/services/networking/atticd.nix>

## services.atticd.settings

Structured configurations of atticd. See https://github.com/zhaofengli/attic/blob/main/server/src/config-template.toml Type: TOML value Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/atticd.nix>

## services.atticd.user

The user under which attic runs. Type: string Default: "atticd" Declared by: <nixpkgs/nixos/modules/services/networking/atticd.nix>
