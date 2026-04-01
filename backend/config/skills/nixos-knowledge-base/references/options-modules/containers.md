---
module: containers
option_count: 1
source: options.html
---

# containers

## containers

A set of NixOS system configurations to be run as lightweight containers. Each container appears as a service container-«name» on the host system, allowing it to be started and stopped via systemctl. Type: attribute set of (submodule) Default: { } Example: { webserver = { path = "/nix/var/nix/profiles/webserver"; }; database = { config = { config, pkgs, ... }: { services.postgresql.enable = true; services.postgresql.package = pkgs.postgresql_14; system.stateVersion = "25.11"; }; }; } Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>
