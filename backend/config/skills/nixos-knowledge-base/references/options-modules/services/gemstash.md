---
module: services.gemstash
option_count: 3
source: options.html
---

# services.gemstash

## services.gemstash.enable

Whether to enable gemstash, a cache for rubygems.org and a private gem server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/development/gemstash.nix>

## services.gemstash.openFirewall

Whether to open the firewall for the port in services.gemstash.bind. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/development/gemstash.nix>

## services.gemstash.settings

Configuration for Gemstash. The details can be found at in gemstash documentation. Each key set here is automatically prefixed with “:” to match the gemstash expectations. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/development/gemstash.nix>
