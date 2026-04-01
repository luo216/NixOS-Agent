---
module: services.hardware.pommed
option_count: 2
source: options.html
---

# services.hardware.pommed

## services.hardware.pommed.enable

Whether to use the pommed tool to handle Apple laptop keyboard hotkeys. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/pommed.nix>

## services.hardware.pommed.configFile

The path to the pommed.conf file. Leave to null to use the default config file (/etc/pommed.conf.mactel). See the files /etc/pommed.conf.mactel and /etc/pommed.conf.pmac for examples to build on. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/pommed.nix>
