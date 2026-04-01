---
module: services.gotenberg.chromium
option_count: 5
source: options.html
---

# services.gotenberg.chromium

## services.gotenberg.chromium.package

The chromium package to use. Type: package Default: pkgs.chromium Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.chromium.autoStart

Automatically start Chromium when Gotenberg starts. If false, Chromium will start on the first conversion request that uses it. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.chromium.disableJavascript

Disable Javascript execution. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.chromium.disableRoutes

Disable all routes allowing Chromium-based conversion. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.chromium.maxQueueSize

Maximum queue size for chromium-based conversions. Setting to 0 disables the limit. Type: unsigned integer, meaning >=0 Default: 0 Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>
