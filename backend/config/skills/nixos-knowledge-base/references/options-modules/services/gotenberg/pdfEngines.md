---
module: services.gotenberg.pdfEngines
option_count: 5
source: options.html
---

# services.gotenberg.pdfEngines

## services.gotenberg.pdfEngines.convert

PDF Engines to use for converting files. Type: list of value “libreoffice-pdfengine” (singular enum) Default: [ "libreoffice-pdfengine" ] Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.pdfEngines.disableRoutes

Disable routes related to PDF engines. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.pdfEngines.merge

PDF Engines to use for merging files. Type: list of (one of “qpdf”, “pdfcpu”, “pdftk”) Default: [ "qpdf" "pdfcpu" "pdftk" ] Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.pdfEngines.readMetadata

PDF Engines to use for reading metadata from files. Type: list of value “exiftool” (singular enum) Default: [ "exiftool" ] Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.pdfEngines.writeMetadata

PDF Engines to use for writing metadata to files. Type: list of value “exiftool” (singular enum) Default: [ "exiftool" ] Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>
