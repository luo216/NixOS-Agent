---
module: services.autorandr.profiles.<name>.config.<name>
option_count: 11
source: options.html
---

# services.autorandr.profiles.<name>.config.<name>

## services.autorandr.profiles.<name>.config.<name>.enable

Whether to enable the output. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.profiles.<name>.config.<name>.crtc

Output video display controller. Type: null or (unsigned integer, meaning >=0) Default: null Example: 0 Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.profiles.<name>.config.<name>.dpi

Output DPI configuration. Type: null or (positive integer, meaning >0) Default: null Example: 96 Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.profiles.<name>.config.<name>.gamma

Output gamma configuration. Type: string Default: "" Example: "1.0:0.909:0.833" Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.profiles.<name>.config.<name>.mode

Output resolution. Type: string Default: "" Example: "3840x2160" Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.profiles.<name>.config.<name>.position

Output position Type: string Default: "" Example: "5760x0" Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.profiles.<name>.config.<name>.primary

Whether output should be marked as primary Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.profiles.<name>.config.<name>.rate

Output framerate. Type: string Default: "" Example: "60.00" Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.profiles.<name>.config.<name>.rotate

Output rotate configuration. Type: null or one of “normal”, “left”, “right”, “inverted” Default: null Example: "left" Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.profiles.<name>.config.<name>.scale

Output scale configuration. Either configure by pixels or a scaling factor. When using pixel method the xrandr(1) option --scale-from will be used; when using factor method the option --scale will be used. This option is a shortcut version of the transform option and they are mutually exclusive. Type: null or (submodule) Default: null Example: { x = 1.25; y = 1.25; } Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.profiles.<name>.config.<name>.transform

Refer to xrandr(1) for the documentation of the transform matrix. Type: null or (3×3 matrix of floating point numbers) Default: null Example: [ [ 0.6 0.0 0.0 ] [ 0.0 0.6 0.0 ] [ 0.0 0.0 1.0 ] ] Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>
