---
module: services.crowdsec.hub
option_count: 7
source: options.html
---

# services.crowdsec.hub

## services.crowdsec.hub.appSecConfigs

List of hub appsec configurations to install Type: list of string Default: [ ] Example: [ "crowdsecurity/appsec-default" ] Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.hub.appSecRules

List of hub appsec rules to install Type: list of string Default: [ ] Example: [ "crowdsecurity/base-config" ] Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.hub.branch

The git branch on which cscli is going to fetch configurations. See https://docs.crowdsec.net/docs/configuration/crowdsec_configuration/#hub_branch for more information. Type: string Default: "master" Example: [ "master" "v1.4.3" "v1.4.2" ] Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.hub.collections

List of hub collections to install Type: list of string Default: [ ] Example: [ "crowdsecurity/linux" ] Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.hub.parsers

List of hub parsers to install Type: list of string Default: [ ] Example: [ "crowdsecurity/sshd-logs" ] Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.hub.postOverflows

List of hub postoverflows to install Type: list of string Default: [ ] Example: [ "crowdsecurity/auditd-nix-wrappers-whitelist-process" ] Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.hub.scenarios

List of hub scenarios to install Type: list of string Default: [ ] Example: [ "crowdsecurity/ssh-bf" ] Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>
