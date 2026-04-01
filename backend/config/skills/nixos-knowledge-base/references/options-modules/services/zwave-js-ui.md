---
module: services.zwave-js-ui
option_count: 4
source: options.html
---

# services.zwave-js-ui

## services.zwave-js-ui.enable

Whether to enable zwave-js-ui. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/home-automation/zwave-js-ui.nix>

## services.zwave-js-ui.package

The zwave-js-ui package to use. Type: package Default: pkgs.zwave-js-ui Declared by: <nixpkgs/nixos/modules/services/home-automation/zwave-js-ui.nix>

## services.zwave-js-ui.serialPort

Serial port for the Z-Wave controller. Only used to grant permissions to the device; must be additionally configured in the application Type: absolute path Example: "/dev/serial/by-id/usb-example" Declared by: <nixpkgs/nixos/modules/services/home-automation/zwave-js-ui.nix>

## services.zwave-js-ui.settings

Extra environment variables passed to the zwave-js-ui process. Check https://zwave-js.github.io/zwave-js-ui/#/guide/env-vars for possible options Type: open submodule of attribute set of (null or string or absolute path or package) Example: { HOST = "::"; PORT = "8091"; } Declared by: <nixpkgs/nixos/modules/services/home-automation/zwave-js-ui.nix>
