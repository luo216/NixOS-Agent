---
module: services.alps
option_count: 4
source: options.html
---

# services.alps

## services.alps.enable

Whether to enable alps. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/alps.nix>

## services.alps.bindIP

The IP the service should listen on. Type: string Default: "[::]" Declared by: <nixpkgs/nixos/modules/services/web-apps/alps.nix>

## services.alps.port

TCP port the service should listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1323 Declared by: <nixpkgs/nixos/modules/services/web-apps/alps.nix>

## services.alps.theme

The frontend’s theme to use. Type: one of “alps”, “sourcehut” Default: "sourcehut" Declared by: <nixpkgs/nixos/modules/services/web-apps/alps.nix>
