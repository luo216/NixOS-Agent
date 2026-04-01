---
module: services.strongswan-swanctl.swanctl
option_count: 3
source: options.html
---

# services.strongswan-swanctl.swanctl

## services.strongswan-swanctl.swanctl.authorities

Section defining complementary attributes of certification authorities, each in its own subsection with an arbitrary yet unique name Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections

Section defining IKE connection configurations, each in its own subsection with an arbitrary yet unique name Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.pools

Section defining named pools. Named pools may be referenced by connections with the pools option to assign virtual IPs and other configuration attributes. Each pool must have a unique name (denoted <name> below). Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>
