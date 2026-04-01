---
module: services.shellhub-agent
option_count: 7
source: options.html
---

# services.shellhub-agent

## services.shellhub-agent.enable

Whether to enable ShellHub Agent daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/shellhub-agent.nix>

## services.shellhub-agent.package

The shellhub-agent package to use. Type: package Default: pkgs.shellhub-agent Declared by: <nixpkgs/nixos/modules/services/networking/shellhub-agent.nix>

## services.shellhub-agent.keepAliveInterval

Determine the interval to send the keep alive message to the server. This has a direct impact of the bandwidth used by the device. Type: signed integer Default: 30 Declared by: <nixpkgs/nixos/modules/services/networking/shellhub-agent.nix>

## services.shellhub-agent.preferredHostname

Set the device preferred hostname. This provides a hint to the server to use this as hostname if it is available. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/shellhub-agent.nix>

## services.shellhub-agent.privateKey

Location where to store the ShellHub Agent private key. Type: absolute path Default: "/var/lib/shellhub-agent/private.key" Declared by: <nixpkgs/nixos/modules/services/networking/shellhub-agent.nix>

## services.shellhub-agent.server

Server address of ShellHub Gateway to connect. Type: string Default: "https://cloud.shellhub.io" Declared by: <nixpkgs/nixos/modules/services/networking/shellhub-agent.nix>

## services.shellhub-agent.tenantId

The tenant ID to use when connecting to the ShellHub Gateway. Type: string Example: "ba0a880c-2ada-11eb-a35e-17266ef329d6" Declared by: <nixpkgs/nixos/modules/services/networking/shellhub-agent.nix>
