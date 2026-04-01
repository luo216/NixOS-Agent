---
module: services.cachix-agent
option_count: 7
source: options.html
---

# services.cachix-agent

## services.cachix-agent.enable

Whether to enable Cachix Deploy Agent: https://docs.cachix.org/deploy/. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/system/cachix-agent/default.nix>

## services.cachix-agent.package

The cachix package to use. Type: package Default: pkgs.cachix Declared by: <nixpkgs/nixos/modules/services/system/cachix-agent/default.nix>

## services.cachix-agent.credentialsFile

Required file that needs to contain CACHIX_AGENT_TOKEN=… Type: absolute path Default: "/etc/cachix-agent.token" Declared by: <nixpkgs/nixos/modules/services/system/cachix-agent/default.nix>

## services.cachix-agent.host

Cachix uri to use. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/system/cachix-agent/default.nix>

## services.cachix-agent.name

Agent name, usually same as the hostname Type: string Default: "config.networking.hostName" Declared by: <nixpkgs/nixos/modules/services/system/cachix-agent/default.nix>

## services.cachix-agent.profile

Profile name, defaults to ‘system’ (NixOS). Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/system/cachix-agent/default.nix>

## services.cachix-agent.verbose

Enable verbose output Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/system/cachix-agent/default.nix>
