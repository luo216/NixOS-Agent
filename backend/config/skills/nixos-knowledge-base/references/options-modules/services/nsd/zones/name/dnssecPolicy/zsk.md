---
module: services.nsd.zones.<name>.dnssecPolicy.zsk
option_count: 4
source: options.html
---

# services.nsd.zones.<name>.dnssecPolicy.zsk

## services.nsd.zones.<name>.dnssecPolicy.zsk.keySize

Key size in bits Type: signed integer Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.dnssecPolicy.zsk.postPublish

How long after deactivation to keep a key in the zone Type: string Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.dnssecPolicy.zsk.prePublish

How long in advance to publish new keys Type: string Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.dnssecPolicy.zsk.rollPeriod

How frequently to change keys Type: string Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>
