---
module: services.inadyn.settings
option_count: 4
source: options.html
---

# services.inadyn.settings

## services.inadyn.settings.allow-ipv6

Whether to get IPv6 addresses from interfaces. Type: boolean Default: config.networking.enableIPv6 Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.settings.custom

Settings for custom DNS providers. Type: attribute set of (open submodule of (attribute set)) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.settings.forced-update

Duration (in seconds) after which an update is forced. Type: positive integer, meaning >0 Default: 2592000 Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.settings.provider

Settings for DDNS providers built-in to inadyn. For a list of built-in providers, see inadyn.conf (5). Type: attribute set of (open submodule of (attribute set)) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>
