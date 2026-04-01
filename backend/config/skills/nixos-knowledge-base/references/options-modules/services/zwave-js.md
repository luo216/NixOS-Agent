---
module: services.zwave-js
option_count: 7
source: options.html
---

# services.zwave-js

## services.zwave-js.enable

Whether to enable the zwave-js server on boot. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/home-automation/zwave-js.nix>

## services.zwave-js.package

The zwave-js-server package to use. Type: package Default: pkgs.zwave-js-server Declared by: <nixpkgs/nixos/modules/services/home-automation/zwave-js.nix>

## services.zwave-js.extraFlags

Extra flags to pass to command Type: list of string Default: [ ] Example: [ "--mock-driver" ] Declared by: <nixpkgs/nixos/modules/services/home-automation/zwave-js.nix>

## services.zwave-js.port

Port for the server to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/home-automation/zwave-js.nix>

## services.zwave-js.secretsConfigFile

JSON file containing secret keys. A dummy example: { "securityKeys": { "S0_Legacy": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "S2_Unauthenticated": "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", "S2_Authenticated": "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", "S2_AccessControl": "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD" } } See https://zwave-js.github.io/node-zwave-js/#/getting-started/security-s2 for details. This file will be merged with the module-generated config file (taking precedence). Z-Wave keys can be generated with: < /dev/urandom tr -dc A-F0-9 | head -c32 ;echo Warning A file in the nix store should not be used since it will be readable to all users. Type: absolute path Example: "/secrets/zwave-js-keys.json" Declared by: <nixpkgs/nixos/modules/services/home-automation/zwave-js.nix>

## services.zwave-js.serialPort

Serial port device path for Z-Wave controller. Type: absolute path Example: "/dev/ttyUSB0" Declared by: <nixpkgs/nixos/modules/services/home-automation/zwave-js.nix>

## services.zwave-js.settings

Configuration settings for the generated config file. This config is combined with the contents of secretsConfigFile and passed to zwave-js-server via --config. The project’s README 1 states that the config must follow the Z-Wave JS config format 2. Warning Secrets should go in secretsConfigFile. The contents of settings is written to the nix store, which is world-readable. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/home-automation/zwave-js.nix>
