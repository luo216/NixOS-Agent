---
module: services.xserver.displayManager.lightdm.greeters.tiny
option_count: 2
source: options.html
---

# services.xserver.displayManager.lightdm.greeters.tiny

## services.xserver.displayManager.lightdm.greeters.tiny.enable

Whether to enable lightdm-tiny-greeter as the lightdm greeter. Note that this greeter starts only the default X session. You can configure the default X session using services.displayManager.defaultSession. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/lightdm-greeters/tiny.nix>

## services.xserver.displayManager.lightdm.greeters.tiny.extraConfig

Section to describe style and ui. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/lightdm-greeters/tiny.nix>
