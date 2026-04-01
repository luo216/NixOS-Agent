---
module: services.nezha-agent
option_count: 6
source: options.html
---

# services.nezha-agent

## services.nezha-agent.enable

Whether to enable Agent of Nezha Monitoring. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/nezha-agent.nix>

## services.nezha-agent.package

The nezha-agent package to use. Type: package Default: pkgs.nezha-agent Declared by: <nixpkgs/nixos/modules/services/monitoring/nezha-agent.nix>

## services.nezha-agent.clientSecretFile

Path to the file contained the client_secret of the dashboard. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/nezha-agent.nix>

## services.nezha-agent.debug

Whether to enable verbose log. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/nezha-agent.nix>

## services.nezha-agent.genUuid

Whether to generate uuid from fqdn automatically. Please note that changes in hostname/domain will result in different uuid. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/nezha-agent.nix>

## services.nezha-agent.settings

Generate to config.json as a Nix attribute set. Check the guide for possible options. Type: open submodule of (JSON value) Declared by: <nixpkgs/nixos/modules/services/monitoring/nezha-agent.nix>
