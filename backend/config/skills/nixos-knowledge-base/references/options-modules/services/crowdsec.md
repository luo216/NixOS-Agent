---
module: services.crowdsec
option_count: 10
source: options.html
---

# services.crowdsec

## services.crowdsec.enable

Whether to enable CrowdSec Security Engine. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.package

The crowdsec package to use. Type: package Default: pkgs.crowdsec Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.autoUpdateService

Whether to enable if true cscli hub update will be executed daily. See https://docs.crowdsec.net/docs/cscli/cscli_hub_update/ for more information. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.group

The group to run crowdsec as Type: string Default: "crowdsec" Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.hub

Hub collections, parsers, AppSec rules, etc. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.localConfig

The configuration for a crowdsec security engine. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.name

Name of the machine when registering it at the central or local api. Type: string Default: config.networking.hostName Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.openFirewall

Whether to automatically open firewall ports for crowdsec. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.settings

Set of various configuration attributes Type: submodule Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.user

The user to run crowdsec as Type: string Default: "crowdsec" Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>
