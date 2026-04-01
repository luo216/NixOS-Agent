---
module: services.keepalived
option_count: 9
source: options.html
---

# services.keepalived

## services.keepalived.enable

Whether to enable Keepalived. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.enableScriptSecurity

Don’t run scripts configured to be run as root if any part of the path is writable by a non-root user. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.package

The keepalived package to use. Type: package Default: pkgs.keepalived Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.extraConfig

Extra lines to be added verbatim to the configuration file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.extraGlobalDefs

Extra lines to be added verbatim to the ‘global_defs’ block of the configuration file Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.openFirewall

Whether to automatically allow VRRP and AH packets in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.secretFile

Environment variables from this file will be interpolated into the final config file using envsubst with this syntax: $ENVIRONMENT or ${VARIABLE}. The file should contain lines formatted as SECRET_VAR=SECRET_VALUE. This is useful to avoid putting secrets into the nix store. Type: null or absolute path Default: null Example: "/run/keys/keepalived.env" Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpInstances

Declarative vhost config Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpScripts

Declarative vrrp script config Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>
