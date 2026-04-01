---
module: programs.gamescope
option_count: 5
source: options.html
---

# programs.gamescope

## programs.gamescope.enable

Whether to enable gamescope, the SteamOS session compositing window manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/gamescope.nix>

## programs.gamescope.package

The gamescope package to use. Type: package Default: pkgs.gamescope Declared by: <nixpkgs/nixos/modules/programs/gamescope.nix>

## programs.gamescope.args

Arguments passed to GameScope on startup. Type: list of string Default: [ ] Example: [ "--rt" "--prefer-vk-device 8086:9bc4" ] Declared by: <nixpkgs/nixos/modules/programs/gamescope.nix>

## programs.gamescope.capSysNice

Add cap_sys_nice capability to the GameScope binary so that it may renice itself. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/gamescope.nix>

## programs.gamescope.env

Default environment variables available to the GameScope process, overridable at runtime. Type: attribute set of string Default: { } Example: # for Prime render offload on Nvidia laptops. # Also requires `hardware.nvidia.prime.offload.enable`. { __NV_PRIME_RENDER_OFFLOAD = "1"; __VK_LAYER_NV_optimus = "NVIDIA_only"; __GLX_VENDOR_LIBRARY_NAME = "nvidia"; } Declared by: <nixpkgs/nixos/modules/programs/gamescope.nix>
