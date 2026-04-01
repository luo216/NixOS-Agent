---
module: services.g810-led
option_count: 3
source: options.html
---

# services.g810-led

## services.g810-led.enable

Whether to enable g810-led, a Linux LED controller for some Logitech G Keyboards. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/g810-led.nix>

## services.g810-led.package

The g810-led package to use. Type: package Default: pkgs.g810-led Declared by: <nixpkgs/nixos/modules/services/hardware/g810-led.nix>

## services.g810-led.profile

Keyboard profile to apply at boot time. The upstream repository provides example configurations. Type: null or strings concatenated with “\n” Default: null Example: '' # G810-LED Profile (turn all keys on) # Set all keys on a ffffff # Commit changes c '' Declared by: <nixpkgs/nixos/modules/services/hardware/g810-led.nix>
