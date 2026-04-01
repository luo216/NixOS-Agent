---
module: services.knot-resolver
option_count: 3
source: options.html
---

# services.knot-resolver

## services.knot-resolver.enable

Whether to enable knot-resolver (version 6) domain name server. DNSSEC validation is turned on by default. If you want to use knot-resolver 5, please use services.kresd. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/knot-resolver.nix>

## services.knot-resolver.managerPackage

The knot-resolver-manager_6 package to use. Type: package Default: pkgs.knot-resolver-manager_6 Example: pkgs.knot-resolver-manager_6.override { extraFeatures = true; } Declared by: <nixpkgs/nixos/modules/services/networking/knot-resolver.nix>

## services.knot-resolver.settings

Nix-based (RFC 42) configuration for Knot Resolver. For configuration reference (described as YAML) see https://www.knot-resolver.cz/documentation/latest/config-overview.html Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/knot-resolver.nix>
