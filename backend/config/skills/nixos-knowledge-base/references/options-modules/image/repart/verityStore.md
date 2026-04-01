---
module: image.repart.verityStore
option_count: 2
source: options.html
---

# image.repart.verityStore

## image.repart.verityStore.enable

Whether to enable building images with a dm-verity protected nix store. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/image/repart-verity-store.nix>

## image.repart.verityStore.ukiPath

Specify the location on the ESP where the UKI is placed. Type: string Default: "/EFI/Linux/\${config.system.boot.loader.ukiFile}" Declared by: <nixpkgs/nixos/modules/image/repart-verity-store.nix>
