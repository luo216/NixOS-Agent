---
module: services.node-red
option_count: 11
source: options.html
---

# services.node-red

## services.node-red.enable

Whether to enable the Node-RED service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/node-red.nix>

## services.node-red.package

The node-red package to use. Type: package Default: pkgs.node-red Declared by: <nixpkgs/nixos/modules/services/web-apps/node-red.nix>

## services.node-red.configFile

Path to the JavaScript configuration file. See https://github.com/node-red/node-red/blob/master/packages/node_modules/node-red/settings.js for a configuration example. Type: absolute path Default: "${package}/lib/node_modules/node-red/packages/node_modules/node-red/settings.js" Declared by: <nixpkgs/nixos/modules/services/web-apps/node-red.nix>

## services.node-red.define

List of settings.js overrides to pass via -D to Node-RED. Type: attribute set Default: { } Example: { "logging.console.level" = "trace"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/node-red.nix>

## services.node-red.group

Group under which Node-RED runs.If left as the default value this group will automatically be created on system activation, otherwise the sysadmin is responsible for ensuring the group exists. Type: string Default: "node-red" Declared by: <nixpkgs/nixos/modules/services/web-apps/node-red.nix>

## services.node-red.openFirewall

Open ports in the firewall for the server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/node-red.nix>

## services.node-red.port

Listening port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1880 Declared by: <nixpkgs/nixos/modules/services/web-apps/node-red.nix>

## services.node-red.safe

Whether to launch Node-RED in --safe mode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/node-red.nix>

## services.node-red.user

User under which Node-RED runs.If left as the default value this user will automatically be created on system activation, otherwise the sysadmin is responsible for ensuring the user exists. Type: string Default: "node-red" Declared by: <nixpkgs/nixos/modules/services/web-apps/node-red.nix>

## services.node-red.userDir

The directory to store all user data, such as flow and credential files and all library data. If left as the default value this directory will automatically be created before the node-red service starts, otherwise the sysadmin is responsible for ensuring the directory exists with appropriate ownership and permissions. Type: absolute path Default: "/var/lib/node-red" Declared by: <nixpkgs/nixos/modules/services/web-apps/node-red.nix>

## services.node-red.withNpmAndGcc

Give Node-RED access to NPM and GCC at runtime, so ‘Nodes’ can be downloaded and managed imperatively via the ‘Palette Manager’. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/node-red.nix>
