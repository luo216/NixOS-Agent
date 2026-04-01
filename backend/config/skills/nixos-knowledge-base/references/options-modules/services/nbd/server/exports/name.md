---
module: services.nbd.server.exports.<name>
option_count: 3
source: options.html
---

# services.nbd.server.exports.<name>

## services.nbd.server.exports.<name>.allowAddresses

IPs and subnets that are authorized to connect for this device. If not specified, the server will allow all connections. Type: null or (list of string) Default: null Example: [ "10.10.0.0/24" "127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/nbd.nix>

## services.nbd.server.exports.<name>.extraOptions

Extra options for this export. See nbd-server(5). Type: attribute set of (boolean or signed integer or floating point number or string) Default: { flush = true; fua = true; } Declared by: <nixpkgs/nixos/modules/services/networking/nbd.nix>

## services.nbd.server.exports.<name>.path

File or block device to export. Type: string Example: "/dev/sdb1" Declared by: <nixpkgs/nixos/modules/services/networking/nbd.nix>
