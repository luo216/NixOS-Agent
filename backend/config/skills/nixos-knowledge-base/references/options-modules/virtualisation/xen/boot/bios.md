---
module: virtualisation.xen.boot.bios
option_count: 1
source: options.html
---

# virtualisation.xen.boot.bios

## virtualisation.xen.boot.bios.path

Path to the Xen multiboot binary used for BIOS booting. Unless you’re building your own Xen derivation, you should leave this option as the default value. Type: absolute path Default: ${config.virtualisation.xen.package.boot}/${config.virtualisation.xen.package.multiboot} Example: ${config.virtualisation.xen.package}/boot/xen-${config.virtualisation.xen.package.version} Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>
