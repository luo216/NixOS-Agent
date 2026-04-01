---
module: services.actkbd
option_count: 3
source: options.html
---

# services.actkbd

## services.actkbd.enable

Whether to enable the actkbd key mapping daemon. Turning this on will start an actkbd instance for every evdev input that has at least one key (which is okay even for systems with tiny memory footprint, since actkbd normally uses <100 bytes of memory per instance). This allows binding keys globally without the need for e.g. X11. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/actkbd.nix>

## services.actkbd.bindings

Key bindings for actkbd. See actkbd README for documentation. The example shows a piece of what sound.mediaKeys.enable does when enabled. Type: list of (submodule) Default: [ ] Example: [ { keys = [ 113 ]; events = [ "key" ]; command = "${pkgs.alsa-utils}/bin/amixer -q set Master toggle"; } ] Declared by: <nixpkgs/nixos/modules/services/hardware/actkbd.nix>

## services.actkbd.extraConfig

Literal contents to append to the end of actkbd configuration file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/hardware/actkbd.nix>
