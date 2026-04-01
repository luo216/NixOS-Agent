---
module: services.beszel.agent
option_count: 6
source: options.html
---

# services.beszel.agent

## services.beszel.agent.enable

Whether to enable beszel agent. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/beszel-agent.nix>

## services.beszel.agent.package

The beszel package to use. Type: package Default: pkgs.beszel Declared by: <nixpkgs/nixos/modules/services/monitoring/beszel-agent.nix>

## services.beszel.agent.environment

Environment variables for configuring the beszel-agent service. This field will end up public in /nix/store, for secret values (such as KEY) use environmentFile. See https://www.beszel.dev/guide/environment-variables#agent for available options. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/beszel-agent.nix>

## services.beszel.agent.environmentFile

File path containing environment variables for configuring the beszel-agent service in the format of an EnvironmentFile. See systemd.exec(5). Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/beszel-agent.nix>

## services.beszel.agent.extraPath

Extra packages to add to beszel path (such as nvidia-smi or rocm-smi). Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/beszel-agent.nix>

## services.beszel.agent.openFirewall

Whether to open the firewall port (default 45876). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/beszel-agent.nix>
