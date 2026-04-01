---
module: hardware.printers
option_count: 2
source: options.html
---

# hardware.printers

## hardware.printers.ensureDefaultPrinter

Ensures the named printer is the default CUPS printer / printer queue. Type: null or printable string without spaces, # and / Default: null Declared by: <nixpkgs/nixos/modules/hardware/printers.nix>

## hardware.printers.ensurePrinters

Will regularly ensure that the given CUPS printers are configured as declared here. If a printer’s options are manually changed afterwards, they will be overwritten eventually. This option will never delete any printer, even if removed from this list. You can check existing printers with lpstat -s and remove printers with lpadmin -x <printer-name>. Printers not listed here can still be manually configured. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/hardware/printers.nix>
