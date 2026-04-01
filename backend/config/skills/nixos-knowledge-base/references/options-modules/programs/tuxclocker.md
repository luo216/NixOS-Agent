---
module: programs.tuxclocker
option_count: 3
source: options.html
---

# programs.tuxclocker

## programs.tuxclocker.enable

Whether to enable TuxClocker, a hardware control and monitoring program . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/tuxclocker.nix>

## programs.tuxclocker.enabledNVIDIADevices

Enable NVIDIA GPU controls for a device by index. Sets the Coolbits Xorg option to enable all TuxClocker controls. Type: list of signed integer Default: [ ] Example: [ 0 1 ] Declared by: <nixpkgs/nixos/modules/services/misc/tuxclocker.nix>

## programs.tuxclocker.useUnfree

Whether to use components requiring unfree dependencies. Disabling this allows you to get everything from the binary cache. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/tuxclocker.nix>
