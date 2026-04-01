---
module: services.lact
option_count: 3
source: options.html
---

# services.lact

## services.lact.enable

Whether to enable LACT, a tool for monitoring, configuring and overclocking GPUs. Note If you are on an AMD GPU, it is recommended to enable overdrive mode by using hardware.amdgpu.overdrive.enable = true; in your configuration. See LACT wiki for more information. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/lact.nix>

## services.lact.package

The lact package to use. Type: package Default: pkgs.lact Declared by: <nixpkgs/nixos/modules/services/hardware/lact.nix>

## services.lact.settings

Settings for LACT. The easiest method of acquiring the settings is to delete /etc/lact/config.yaml, enter your settings and look at the file. Note When settings is populated, the config file will be a symbolic link and thus LACT daemon will not be able to modify it through the GUI. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/hardware/lact.nix>
