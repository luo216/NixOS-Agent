---
module: services.tinc.networks.<name>.hostSettings.<name>
option_count: 4
source: options.html
---

# services.tinc.networks.<name>.hostSettings.<name>

## services.tinc.networks.<name>.hostSettings.<name>.addresses

The external address where the host can be reached. This will set this host’s settings.Address option. This variable is only required if you want to connect to this host. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>

## services.tinc.networks.<name>.hostSettings.<name>.rsaPublicKey

Legacy RSA public key of the host in PEM format, including start and end markers. This will be appended as-is in the host’s configuration file. The ed25519 public key can be specified using the settings.Ed25519PublicKey option instead. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>

## services.tinc.networks.<name>.hostSettings.<name>.settings

Configuration for this host. See https://tinc-vpn.org/documentation-1.1/Host-configuration-variables.html for supported values. Type: open submodule of attribute set of (boolean or string or signed integer or list of (boolean or string or signed integer)) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>

## services.tinc.networks.<name>.hostSettings.<name>.subnets

The subnets which this tinc daemon will serve. This will set this host’s settings.Subnet option. Tinc tries to look up which other daemon it should send a packet to by searching the appropriate subnet. If the packet matches a subnet, it will be sent to the daemon who has this subnet in his host configuration file. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>
