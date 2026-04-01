---
module: services.calibre-web.options
option_count: 4
source: options.html
---

# services.calibre-web.options

## services.calibre-web.options.enableBookConversion

Configure path to the Calibre’s ebook-convert in the DB. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/calibre-web.nix>

## services.calibre-web.options.enableBookUploading

Allow books to be uploaded via Calibre-Web UI. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/calibre-web.nix>

## services.calibre-web.options.enableKepubify

Whether to enable kebup conversion support. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/calibre-web.nix>

## services.calibre-web.options.calibreLibrary

Path to Calibre library. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/calibre-web.nix>
