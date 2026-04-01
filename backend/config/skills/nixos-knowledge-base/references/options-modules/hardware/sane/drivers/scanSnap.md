---
module: hardware.sane.drivers.scanSnap
option_count: 2
source: options.html
---

# hardware.sane.drivers.scanSnap

## hardware.sane.drivers.scanSnap.enable

Whether to enable drivers for the Fujitsu ScanSnap scanners. The driver files are unfree and extracted from the Windows driver image. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/sane.nix>

## hardware.sane.drivers.scanSnap.package

The epjitsu package to use. Useful if you want to extract the driver files yourself. The process is described in the /etc/sane.d/epjitsu.conf file in the sane-backends package. Type: package Default: pkgs.sane-drivers.epjitsu Declared by: <nixpkgs/nixos/modules/services/hardware/sane.nix>
