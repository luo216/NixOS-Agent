---
module: services.tp-auto-kbbl
option_count: 4
source: options.html
---

# services.tp-auto-kbbl

## services.tp-auto-kbbl.enable

Whether to enable auto toggle keyboard back-lighting on Thinkpads (and maybe other laptops) for Linux. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/tp-auto-kbbl.nix>

## services.tp-auto-kbbl.package

The tp-auto-kbbl package to use. Type: package Default: pkgs.tp-auto-kbbl Declared by: <nixpkgs/nixos/modules/services/misc/tp-auto-kbbl.nix>

## services.tp-auto-kbbl.arguments

List of arguments appended to ./tp-auto-kbbl --device [device] [arguments] Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/tp-auto-kbbl.nix>

## services.tp-auto-kbbl.device

Device watched for activities. Type: string Default: "/dev/input/event0" Declared by: <nixpkgs/nixos/modules/services/misc/tp-auto-kbbl.nix>
