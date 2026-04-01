---
module: boot.loader.limine.secureBoot
option_count: 2
source: options.html
---

# boot.loader.limine.secureBoot

## boot.loader.limine.secureBoot.enable

Whether to use sign the limine binary with sbctl. Note This requires you to already have generated the keys and enrolled them with sbctl. To create keys use sbctl create-keys. To enroll them first reset secure boot to “Setup Mode”. This is device specific. Then enroll them using sbctl enroll-keys -m -f. You can now rebuild your system with this option enabled. Afterwards turn setup mode off and enable secure boot. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>

## boot.loader.limine.secureBoot.sbctl

The sbctl package to use. Type: package Default: pkgs.sbctl Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>
