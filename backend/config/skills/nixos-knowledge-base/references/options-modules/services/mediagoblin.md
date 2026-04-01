---
module: services.mediagoblin
option_count: 6
source: options.html
---

# services.mediagoblin

## services.mediagoblin.enable

Whether to enable MediaGoblin. After the initial deployment, make sure to add an admin account: mediagoblin-gmg adduser --username admin --email admin@example.com mediagoblin-gmg makeadmin admin Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/mediagoblin.nix>

## services.mediagoblin.package

The mediagoblin package to use. Type: package Default: pkgs.mediagoblin Declared by: <nixpkgs/nixos/modules/services/web-apps/mediagoblin.nix>

## services.mediagoblin.createDatabaseLocally

Whether to configure a local postgres database and connect to it. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/web-apps/mediagoblin.nix>

## services.mediagoblin.domain

Domain under which mediagoblin will be served. Type: string Example: "mediagoblin.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/mediagoblin.nix>

## services.mediagoblin.pluginPackages

Plugins to add to the environment of MediaGoblin. They still need to be enabled in the config. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/mediagoblin.nix>

## services.mediagoblin.settings

Settings which are written into mediagoblin.ini. Type: open submodule of anything Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/mediagoblin.nix>
