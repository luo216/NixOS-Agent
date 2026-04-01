---
module: services.ifm
option_count: 5
source: options.html
---

# services.ifm

## services.ifm.enable

Whether to enable Improved file manager, a single-file web-based filemanager Lightweight and minimal, served using PHP’s built-in server . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/ifm.nix>

## services.ifm.dataDir

Directory to serve throught the file managing service Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/ifm.nix>

## services.ifm.listenAddress

Address on which the service is listening Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/web-apps/ifm.nix>

## services.ifm.port

Port on which to serve the IFM service Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9090 Declared by: <nixpkgs/nixos/modules/services/web-apps/ifm.nix>

## services.ifm.settings

Configuration of the IFM service. See the documentation for available options and default values. Type: attribute set of anything Default: { } Example: { IFM_GUI_SHOWPATH = 0; } Declared by: <nixpkgs/nixos/modules/services/web-apps/ifm.nix>
