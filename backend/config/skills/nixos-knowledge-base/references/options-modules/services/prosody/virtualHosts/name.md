---
module: services.prosody.virtualHosts.<name>
option_count: 4
source: options.html
---

# services.prosody.virtualHosts.<name>

## services.prosody.virtualHosts.<name>.enabled

Whether to enable the virtual host Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.virtualHosts.<name>.domain

Domain name Type: string Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.virtualHosts.<name>.extraConfig

Additional virtual host specific configuration Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.virtualHosts.<name>.ssl

Paths to SSL files Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>
