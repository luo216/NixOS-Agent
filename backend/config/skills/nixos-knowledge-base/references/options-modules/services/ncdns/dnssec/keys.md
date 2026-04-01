---
module: services.ncdns.dnssec.keys
option_count: 4
source: options.html
---

# services.ncdns.dnssec.keys

## services.ncdns.dnssec.keys.private

Path to the file containing the KSK private key. Type: absolute path Default: "/var/lib/ncdns/bit.private" Declared by: <nixpkgs/nixos/modules/services/networking/ncdns.nix>

## services.ncdns.dnssec.keys.public

Path to the file containing the KSK public key. The key can be generated using the dnssec-keygen command, provided by the package bind as follows: $ dnssec-keygen -a RSASHA256 -3 -b 2048 -f KSK bit Type: absolute path Default: "/var/lib/ncdns/bit.key" Declared by: <nixpkgs/nixos/modules/services/networking/ncdns.nix>

## services.ncdns.dnssec.keys.zonePrivate

Path to the file containing the ZSK private key. Type: absolute path Default: "/var/lib/ncdns/bit-zone.private" Declared by: <nixpkgs/nixos/modules/services/networking/ncdns.nix>

## services.ncdns.dnssec.keys.zonePublic

Path to the file containing the ZSK public key. The key can be generated using the dnssec-keygen command, provided by the package bind as follows: $ dnssec-keygen -a RSASHA256 -3 -b 2048 bit Type: absolute path Default: "/var/lib/ncdns/bit-zone.key" Declared by: <nixpkgs/nixos/modules/services/networking/ncdns.nix>
