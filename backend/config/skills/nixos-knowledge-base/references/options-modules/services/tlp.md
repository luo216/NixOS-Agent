---
module: services.tlp
option_count: 4
source: options.html
---

# services.tlp

## services.tlp.enable

Whether to enable the TLP power management daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/tlp.nix>

## services.tlp.package

The tlp package to use. Type: package Default: "pkgs.tlp.override { enableRDW = config.networking.networkmanager.enable; }" Declared by: <nixpkgs/nixos/modules/services/hardware/tlp.nix>

## services.tlp.extraConfig

Verbatim additional configuration variables for TLP. DEPRECATED: use services.tlp.settings instead. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/hardware/tlp.nix>

## services.tlp.settings

Options passed to TLP. See https://linrunner.de/tlp for all supported options… Type: attribute set of (boolean or signed integer or floating point number or string or list of string) Default: { } Example: { SATA_LINKPWR_ON_BAT = "med_power_with_dipm"; USB_BLACKLIST_PHONE = 1; } Declared by: <nixpkgs/nixos/modules/services/hardware/tlp.nix>
