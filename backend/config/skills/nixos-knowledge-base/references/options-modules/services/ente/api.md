---
module: services.ente.api
option_count: 7
source: options.html
---

# services.ente.api

## services.ente.api.enable

Whether to enable Museum (API server for ente.io). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/ente.nix>

## services.ente.api.enableLocalDB

Whether to enable the automatic creation of a local postgres database for museum… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/ente.nix>

## services.ente.api.package

The museum package to use. Type: package Default: pkgs.museum Declared by: <nixpkgs/nixos/modules/services/web-apps/ente.nix>

## services.ente.api.domain

The domain under which the api will be served. Type: string Example: "api.ente.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/ente.nix>

## services.ente.api.group

Group under which museum runs. If you set this option you must make sure the group exists. Type: string Default: "ente" Declared by: <nixpkgs/nixos/modules/services/web-apps/ente.nix>

## services.ente.api.settings

Museum yaml configuration. Refer to upstream local.yaml for more information. You can specify secret values in this configuration by setting somevalue._secret = "/path/to/file" instead of setting somevalue directly. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/ente.nix>

## services.ente.api.user

User under which museum runs. If you set this option you must make sure the user exists. Type: string Default: "ente" Declared by: <nixpkgs/nixos/modules/services/web-apps/ente.nix>
