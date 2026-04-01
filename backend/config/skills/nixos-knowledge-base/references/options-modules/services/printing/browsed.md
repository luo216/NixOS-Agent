---
module: services.printing.browsed
option_count: 2
source: options.html
---

# services.printing.browsed

## services.printing.browsed.enable

Whether to enable the CUPS Remote Printer Discovery (browsed) daemon. Type: boolean Default: config.services.avahi.enable Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>

## services.printing.browsed.package

The cups-browsed package to use. Type: package Default: pkgs.cups-browsed Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>
