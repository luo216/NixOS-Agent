---
module: services.kanidm
option_count: 7
source: options.html
---

# services.kanidm

## services.kanidm.enableClient

Whether to enable the Kanidm client. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.enablePam

Whether to enable the Kanidm PAM and NSS integration. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.enableServer

Whether to enable the Kanidm server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.package

The kanidm package to use. If not set will receive a specific version based on stateVersion. Set to pkgs.kanidm to always receive the latest version, with the understanding that this could introduce breaking changes. Type: package Default: pkgs.kanidm Example: kanidm_1_4 Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.clientSettings

Configure Kanidm clients, needed for the PAM daemon. See the documentation and example configuration for possible values. Type: open submodule of (TOML value) Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.serverSettings

Settings for Kanidm, see the documentation and example configuration for possible values. Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.unixSettings

Configure Kanidm unix daemon. See the documentation and example configuration for possible values. Type: open submodule of (TOML value) Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>
