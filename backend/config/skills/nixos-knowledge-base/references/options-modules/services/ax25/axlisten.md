---
module: services.ax25.axlisten
option_count: 3
source: options.html
---

# services.ax25.axlisten

## services.ax25.axlisten.enable

Whether to enable AX.25 axlisten daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ax25/axlisten.nix>

## services.ax25.axlisten.package

The ax25-apps package to use. Type: package Default: pkgs.ax25-apps Declared by: <nixpkgs/nixos/modules/services/networking/ax25/axlisten.nix>

## services.ax25.axlisten.config

Options that will be passed to the axlisten daemon. Type: string Default: "-art" Declared by: <nixpkgs/nixos/modules/services/networking/ax25/axlisten.nix>
