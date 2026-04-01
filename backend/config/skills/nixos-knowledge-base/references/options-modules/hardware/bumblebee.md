---
module: hardware.bumblebee
option_count: 5
source: options.html
---

# hardware.bumblebee

## hardware.bumblebee.enable

Enable the bumblebee daemon to manage Optimus hybrid video cards. This should power off secondary GPU until its use is requested by running an application with optirun. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/video/bumblebee.nix>

## hardware.bumblebee.connectDisplay

Set to true if you intend to connect your discrete card to a monitor. This option will set up your Nvidia card for EDID discovery and to turn on the monitor signal. Only nvidia driver is supported so far. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/video/bumblebee.nix>

## hardware.bumblebee.driver

Set driver used by bumblebeed. Supported are nouveau and nvidia. Type: one of “nvidia”, “nouveau” Default: "nvidia" Declared by: <nixpkgs/nixos/modules/hardware/video/bumblebee.nix>

## hardware.bumblebee.group

Group for bumblebee socket Type: string Default: "wheel" Example: "video" Declared by: <nixpkgs/nixos/modules/hardware/video/bumblebee.nix>

## hardware.bumblebee.pmMethod

Set preferred power management method for unused card. Type: one of “auto”, “bbswitch”, “switcheroo”, “none” Default: "auto" Declared by: <nixpkgs/nixos/modules/hardware/video/bumblebee.nix>
