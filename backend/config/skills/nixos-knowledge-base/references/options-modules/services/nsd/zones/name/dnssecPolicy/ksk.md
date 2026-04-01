---
module: services.nsd.zones.<name>.dnssecPolicy.ksk
option_count: 4
source: options.html
---

# services.nsd.zones.<name>.dnssecPolicy.ksk

## services.nsd.zones.<name>.dnssecPolicy.ksk.keySize

Key size in bits Type: signed integer Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.dnssecPolicy.ksk.postPublish

How long after deactivation to keep a key in the zone Type: string Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.dnssecPolicy.ksk.prePublish

How long in advance to publish new keys Type: string Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.dnssecPolicy.ksk.rollPeriod

How frequently to change keys Type: string Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>
