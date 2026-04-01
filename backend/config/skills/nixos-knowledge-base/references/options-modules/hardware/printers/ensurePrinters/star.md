---
module: hardware.printers.ensurePrinters.*
option_count: 6
source: options.html
---

# hardware.printers.ensurePrinters.*

## hardware.printers.ensurePrinters.*.description

Optional human-readable description. Type: null or string Default: null Example: "Brother HL-5140" Declared by: <nixpkgs/nixos/modules/hardware/printers.nix>

## hardware.printers.ensurePrinters.*.deviceUri

How to reach the printer. lpinfo -v shows a list of supported device URIs and schemes. Type: string Example: "ipp://printserver.local/printers/BrotherHL_Workroom" "usb://HP/DESKJET%20940C?serial=CN16E6C364BH" Declared by: <nixpkgs/nixos/modules/hardware/printers.nix>

## hardware.printers.ensurePrinters.*.location

Optional human-readable location. Type: null or string Default: null Example: "Workroom" Declared by: <nixpkgs/nixos/modules/hardware/printers.nix>

## hardware.printers.ensurePrinters.*.model

Location of the ppd driver file for the printer. lpinfo -m shows a list of supported models. Type: string Example: "gutenprint.${lib.versions.majorMinor (lib.getVersion pkgs.gutenprint)}://brother-hl-5140/expert" Declared by: <nixpkgs/nixos/modules/hardware/printers.nix>

## hardware.printers.ensurePrinters.*.name

Name of the printer / printer queue. May contain any printable characters except “/”, “#”, and space. Type: printable string without spaces, # and / Example: "BrotherHL_Workroom" Declared by: <nixpkgs/nixos/modules/hardware/printers.nix>

## hardware.printers.ensurePrinters.*.ppdOptions

Sets PPD options for the printer. lpoptions [-p printername] -l shows supported PPD options for the given printer. Type: attribute set of string Default: { } Example: { Duplex = "DuplexNoTumble"; PageSize = "A4"; } Declared by: <nixpkgs/nixos/modules/hardware/printers.nix>
