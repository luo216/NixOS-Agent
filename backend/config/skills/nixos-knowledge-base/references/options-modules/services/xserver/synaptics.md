---
module: services.xserver.synaptics
option_count: 19
source: options.html
---

# services.xserver.synaptics

## services.xserver.synaptics.enable

Whether to enable touchpad support. Deprecated: Consider services.libinput.enable. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>

## services.xserver.synaptics.accelFactor

Cursor acceleration (how fast speed increases from minSpeed to maxSpeed). Type: null or string Default: "0.001" Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>

## services.xserver.synaptics.additionalOptions

Additional options for synaptics touchpad driver. Type: string Default: "" Example: '' Option "RTCornerButton" "2" Option "RBCornerButton" "3" '' Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>

## services.xserver.synaptics.buttonsMap

Remap touchpad buttons. Type: list of signed integer Default: [ 1 2 3 ] Example: [ 1 3 2 ] Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>

## services.xserver.synaptics.dev

Path for touchpad device. Set to null to apply to any auto-detected touchpad. Type: null or string Default: null Example: "/dev/input/event0" Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>

## services.xserver.synaptics.fingersMap

Remap several-fingers taps. Type: list of signed integer Default: [ 1 2 3 ] Example: [ 1 3 2 ] Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>

## services.xserver.synaptics.horizEdgeScroll

Whether to enable horizontal edge drag-scrolling. Type: boolean Default: ! config.services.xserver.synaptics.horizTwoFingerScroll Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>

## services.xserver.synaptics.horizTwoFingerScroll

Whether to enable horizontal two-finger drag-scrolling. Type: boolean Default: config.services.xserver.synaptics.twoFingerScroll Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>

## services.xserver.synaptics.horizontalScroll

Whether to enable horizontal scrolling (on touchpad) Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>

## services.xserver.synaptics.maxSpeed

Cursor speed factor for highest-speed finger motion. Type: null or string Default: "1.0" Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>

## services.xserver.synaptics.minSpeed

Cursor speed factor for precision finger motion. Type: null or string Default: "0.6" Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>

## services.xserver.synaptics.palmDetect

Whether to enable palm detection (hardware support required) Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>

## services.xserver.synaptics.palmMinWidth

Minimum finger width at which touch is considered a palm Type: null or signed integer Default: null Example: 5 Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>

## services.xserver.synaptics.palmMinZ

Minimum finger pressure at which touch is considered a palm Type: null or signed integer Default: null Example: 20 Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>

## services.xserver.synaptics.scrollDelta

Move distance of the finger for a scroll event. Type: null or signed integer Default: null Example: 75 Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>

## services.xserver.synaptics.tapButtons

Whether to enable tap buttons. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>

## services.xserver.synaptics.twoFingerScroll

Whether to enable two-finger drag-scrolling. Overridden by horizTwoFingerScroll and vertTwoFingerScroll. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>

## services.xserver.synaptics.vertEdgeScroll

Whether to enable vertical edge drag-scrolling. Type: boolean Default: ! config.services.xserver.synaptics.vertTwoFingerScroll Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>

## services.xserver.synaptics.vertTwoFingerScroll

Whether to enable vertical two-finger drag-scrolling. Type: boolean Default: config.services.xserver.synaptics.twoFingerScroll Declared by: <nixpkgs/nixos/modules/services/x11/hardware/synaptics.nix>
