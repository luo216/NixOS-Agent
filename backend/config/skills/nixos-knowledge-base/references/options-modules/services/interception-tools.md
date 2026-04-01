---
module: services.interception-tools
option_count: 3
source: options.html
---

# services.interception-tools

## services.interception-tools.enable

Whether to enable the interception tools service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/interception-tools.nix>

## services.interception-tools.plugins

A list of interception tools plugins that will be made available to use inside the udevmon configuration. Type: list of package Default: [ pkgs.interception-tools-plugins.caps2esc ] Declared by: <nixpkgs/nixos/modules/services/hardware/interception-tools.nix>

## services.interception-tools.udevmonConfig

String of udevmon YAML configuration, or path to a udevmon YAML configuration file. Type: string or absolute path Default: '' - JOB: "intercept -g $DEVNODE | caps2esc | uinput -d $DEVNODE" DEVICE: EVENTS: EV_KEY: [KEY_CAPSLOCK, KEY_ESC] '' Example: '' - JOB: "intercept -g $DEVNODE | y2z | x2y | uinput -d $DEVNODE" DEVICE: EVENTS: EV_KEY: [KEY_X, KEY_Y] '' Declared by: <nixpkgs/nixos/modules/services/hardware/interception-tools.nix>
