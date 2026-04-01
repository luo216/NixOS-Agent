---
module: services.firezone.server.provision.accounts.<name>.resources.<name>
option_count: 6
source: options.html
---

# services.firezone.server.provision.accounts.<name>.resources.<name>

## services.firezone.server.provision.accounts.<name>.resources.<name>.address

The address of this resource. Depending on the resource type, this should be an ip, ip with cidr mask or a domain. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.provision.accounts.<name>.resources.<name>.addressDescription

An optional description for resource address, usually a full link to the resource including a schema. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.provision.accounts.<name>.resources.<name>.filters

A list of filter to restrict traffic. If no filters are given, all traffic is allowed. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.provision.accounts.<name>.resources.<name>.gatewayGroups

A list of gateway groups (sites) which can reach the resource and may be used to connect to it. Type: non-empty (list of string) Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.provision.accounts.<name>.resources.<name>.name

The name of this resource Type: string Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.provision.accounts.<name>.resources.<name>.type

The resource type Type: one of “dns”, “cidr”, “ip” Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>
