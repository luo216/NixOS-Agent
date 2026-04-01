---
module: services.xserver.displayManager.lightdm.greeters.mini
option_count: 3
source: options.html
---

# services.xserver.displayManager.lightdm.greeters.mini

## services.xserver.displayManager.lightdm.greeters.mini.enable

Whether to enable lightdm-mini-greeter as the lightdm greeter. Note that this greeter starts only the default X session. You can configure the default X session using services.displayManager.defaultSession. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/lightdm-greeters/mini.nix>

## services.xserver.displayManager.lightdm.greeters.mini.extraConfig

Extra configuration that should be put in the lightdm-mini-greeter.conf configuration file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/lightdm-greeters/mini.nix>

## services.xserver.displayManager.lightdm.greeters.mini.user

The user to login as. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/lightdm-greeters/mini.nix>
