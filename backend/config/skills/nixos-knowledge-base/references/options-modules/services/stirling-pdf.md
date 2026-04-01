---
module: services.stirling-pdf
option_count: 4
source: options.html
---

# services.stirling-pdf

## services.stirling-pdf.enable

Whether to enable the stirling-pdf service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/stirling-pdf.nix>

## services.stirling-pdf.package

The stirling-pdf package to use. Type: package Default: pkgs.stirling-pdf Declared by: <nixpkgs/nixos/modules/services/web-apps/stirling-pdf.nix>

## services.stirling-pdf.environment

Environment variables for the stirling-pdf app. See https://github.com/Stirling-Tools/Stirling-PDF#customisation for available options. Type: attribute set of (string or signed integer) Default: { } Example: { INSTALL_BOOK_AND_ADVANCED_HTML_OPS = "true"; SERVER_PORT = 8080; } Declared by: <nixpkgs/nixos/modules/services/web-apps/stirling-pdf.nix>

## services.stirling-pdf.environmentFiles

Files containing additional environment variables to pass to Stirling PDF. Secrets should be added in environmentFiles instead of environment. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/stirling-pdf.nix>
