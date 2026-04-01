---
module: services.headphones
option_count: 7
source: options.html
---

# services.headphones

## services.headphones.enable

Whether to enable the headphones server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/headphones.nix>

## services.headphones.configFile

Path to config file. Type: absolute path Default: "${config.services.headphones.dataDir}/config.ini" Declared by: <nixpkgs/nixos/modules/services/misc/headphones.nix>

## services.headphones.dataDir

Path where to store data files. Type: absolute path Default: "/var/lib/headphones" Declared by: <nixpkgs/nixos/modules/services/misc/headphones.nix>

## services.headphones.group

Group to run the service as Type: string Default: "headphones" Declared by: <nixpkgs/nixos/modules/services/misc/headphones.nix>

## services.headphones.host

Host to listen on. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/misc/headphones.nix>

## services.headphones.port

Port to bind to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8181 Declared by: <nixpkgs/nixos/modules/services/misc/headphones.nix>

## services.headphones.user

User to run the service as Type: string Default: "headphones" Declared by: <nixpkgs/nixos/modules/services/misc/headphones.nix>
