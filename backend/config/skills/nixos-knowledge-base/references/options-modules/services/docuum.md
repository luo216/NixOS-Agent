---
module: services.docuum
option_count: 5
source: options.html
---

# services.docuum

## services.docuum.enable

Whether to enable docuum daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/admin/docuum.nix>

## services.docuum.deletionChunkSize

Removes specified quantity of images at a time. Type: signed integer Default: 1 Example: 10 Declared by: <nixpkgs/nixos/modules/services/admin/docuum.nix>

## services.docuum.keep

Prevents deletion of images for which repository:tag matches the specified regex. Type: list of string Default: [ ] Example: [ "^my-image" ] Declared by: <nixpkgs/nixos/modules/services/admin/docuum.nix>

## services.docuum.minAge

Sets the minimum age of images to be considered for deletion. Type: null or string Default: null Example: "1d" Declared by: <nixpkgs/nixos/modules/services/admin/docuum.nix>

## services.docuum.threshold

Threshold for deletion in bytes, like 10 GB, 10 GiB, 10GB or percentage-based thresholds like 50% Type: string Default: "10 GB" Example: "50%" Declared by: <nixpkgs/nixos/modules/services/admin/docuum.nix>
