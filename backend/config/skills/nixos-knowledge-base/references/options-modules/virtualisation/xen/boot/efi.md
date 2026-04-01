---
module: virtualisation.xen.boot.efi
option_count: 1
source: options.html
---

# virtualisation.xen.boot.efi

## virtualisation.xen.boot.efi.path

Path to xen.efi. pkgs.xen is patched to install the xen.efi file on $boot/boot/xen.efi, but an unpatched Xen build may install it somewhere else, such as $out/boot/efi/efi/nixos/xen.efi. Unless you’re building your own Xen derivation, you should leave this option as the default value. Type: absolute path Default: ${config.virtualisation.xen.package.boot}/${config.virtualisation.xen.package.efi} Example: ${config.virtualisation.xen.package}/boot/efi/efi/nixos/xen-${config.virtualisation.xen.package.version}.efi Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>
