---
module: services.gotenberg.libreoffice
option_count: 5
source: options.html
---

# services.gotenberg.libreoffice

## services.gotenberg.libreoffice.package

The libreoffice package to use. Type: package Default: pkgs.libreoffice Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.libreoffice.autoStart

Automatically start LibreOffice when Gotenberg starts. If false, LibreOffice will start on the first conversion request that uses it. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.libreoffice.disableRoutes

Disable all routes allowing LibreOffice-based conversion. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.libreoffice.maxQueueSize

Maximum queue size for LibreOffice-based conversions. Setting to 0 disables the limit. Type: unsigned integer, meaning >=0 Default: 0 Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.libreoffice.restartAfter

Restart LibreOffice after this many conversions. Setting to 0 disables this feature. Type: unsigned integer, meaning >=0 Default: 10 Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>
