---
module: hardware.deviceTree.overlays.*
option_count: 5
source: options.html
---

# hardware.deviceTree.overlays.*

## hardware.deviceTree.overlays.*.dtboFile

Path to .dtbo compiled overlay file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/hardware/device-tree.nix>

## hardware.deviceTree.overlays.*.dtsFile

Path to .dts overlay file, overlay is applied to each .dtb file matching “compatible” of the overlay. Type: null or absolute path Default: null Example: ./dts/overlays.dts Declared by: <nixpkgs/nixos/modules/hardware/device-tree.nix>

## hardware.deviceTree.overlays.*.dtsText

Literal DTS contents, overlay is applied to each .dtb file matching “compatible” of the overlay. Type: null or string Default: null Example: '' /dts-v1/; /plugin/; / { compatible = "raspberrypi"; }; &{/soc} { pps { compatible = "pps-gpio"; status = "okay"; }; }; '' Declared by: <nixpkgs/nixos/modules/hardware/device-tree.nix>

## hardware.deviceTree.overlays.*.filter

Only apply to .dtb files matching glob expression. Type: null or string Default: null Example: "*rpi*.dtb" Declared by: <nixpkgs/nixos/modules/hardware/device-tree.nix>

## hardware.deviceTree.overlays.*.name

Name of this overlay Type: string Declared by: <nixpkgs/nixos/modules/hardware/device-tree.nix>
