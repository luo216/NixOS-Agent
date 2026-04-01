---
module: services.tayga
option_count: 9
source: options.html
---

# services.tayga

## services.tayga.enable

Whether to enable Tayga. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/tayga.nix>

## services.tayga.package

The tayga package to use. Type: package Default: pkgs.tayga Declared by: <nixpkgs/nixos/modules/services/networking/tayga.nix>

## services.tayga.dataDir

Directory for persistent data. Type: absolute path Default: "/var/lib/tayga" Declared by: <nixpkgs/nixos/modules/services/networking/tayga.nix>

## services.tayga.ipv4

IPv4-specific configuration. Type: submodule Example: { address = "192.0.2.0"; router = { address = "192.0.2.1"; }; pool = { address = "192.0.2.1"; prefixLength = 24; }; } Declared by: <nixpkgs/nixos/modules/services/networking/tayga.nix>

## services.tayga.ipv6

IPv6-specific configuration. Type: submodule Example: { address = "2001:db8::1"; router = { address = "64:ff9b::1"; }; pool = { address = "64:ff9b::"; prefixLength = 96; }; } Declared by: <nixpkgs/nixos/modules/services/networking/tayga.nix>

## services.tayga.log

Packet errors to log (drop, reject, icmp, self) Type: list of string Default: [ ] Example: [ "drop" "reject" "icmp" "self" ] Declared by: <nixpkgs/nixos/modules/services/networking/tayga.nix>

## services.tayga.mappings

Static IPv4 -> IPv6 host mappings. Type: attribute set of string Default: { } Example: { "192.168.5.42" = "2001:db8:1:4444::1"; "192.168.5.43" = "2001:db8:1:4444::2"; "192.168.255.2" = "2001:db8:1:569::143"; } Declared by: <nixpkgs/nixos/modules/services/networking/tayga.nix>

## services.tayga.tunDevice

Name of the nat64 tun device. Type: string Default: "nat64" Declared by: <nixpkgs/nixos/modules/services/networking/tayga.nix>

## services.tayga.wkpfStrict

Enable restrictions on the use of the well-known prefix (64:ff9b::/96) - prevents translation of non-global IPv4 ranges when using the well-known prefix. Must be enabled for RFC 6052 compatibility. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/tayga.nix>
