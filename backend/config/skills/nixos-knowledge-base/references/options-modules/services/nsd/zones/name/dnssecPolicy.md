---
module: services.nsd.zones.<name>.dnssecPolicy
option_count: 5
source: options.html
---

# services.nsd.zones.<name>.dnssecPolicy

## services.nsd.zones.<name>.dnssecPolicy.algorithm

Which algorithm to use for DNSSEC Type: string Default: "RSASHA256" Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.dnssecPolicy.coverage

The length of time to ensure that keys will be correct; no action will be taken to create new keys to be activated after this time. Type: string Default: "1y" Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.dnssecPolicy.keyttl

TTL for dnssec records Type: string Default: "1h" Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.dnssecPolicy.ksk

Key policy for key signing keys Type: submodule Default: { keySize = 4096; postPublish = "1mo"; prePublish = "1mo"; rollPeriod = "0"; } Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.dnssecPolicy.zsk

Key policy for zone signing keys Type: submodule Default: { keySize = 2048; postPublish = "1w"; prePublish = "1w"; rollPeriod = "1mo"; } Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>
