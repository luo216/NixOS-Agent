---
module: image.repart.verityStore.partitionIds
option_count: 3
source: options.html
---

# image.repart.verityStore.partitionIds

## image.repart.verityStore.partitionIds.esp

Specify the attribute name of the ESP. Type: string Default: "00-esp" Declared by: <nixpkgs/nixos/modules/image/repart-verity-store.nix>

## image.repart.verityStore.partitionIds.store

Specify the attribute name of the store partition. Type: string Default: "20-store" Declared by: <nixpkgs/nixos/modules/image/repart-verity-store.nix>

## image.repart.verityStore.partitionIds.store-verity

Specify the attribute name of the store’s dm-verity hash partition. Type: string Default: "10-store-verity" Declared by: <nixpkgs/nixos/modules/image/repart-verity-store.nix>
