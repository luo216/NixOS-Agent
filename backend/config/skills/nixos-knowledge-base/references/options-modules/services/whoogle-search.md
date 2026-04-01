---
module: services.whoogle-search
option_count: 4
source: options.html
---

# services.whoogle-search

## services.whoogle-search.enable

Whether to enable Whoogle, a metasearch engine. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/whoogle-search.nix>

## services.whoogle-search.extraEnv

Extra environment variables to pass to Whoogle, see https://github.com/benbusby/whoogle-search?tab=readme-ov-file#environment-variables Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/whoogle-search.nix>

## services.whoogle-search.listenAddress

Address to listen on for the web interface. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/whoogle-search.nix>

## services.whoogle-search.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5000 Declared by: <nixpkgs/nixos/modules/services/networking/whoogle-search.nix>
