---
module: services.autotierfs
option_count: 3
source: options.html
---

# services.autotierfs

## services.autotierfs.enable

Whether to enable the autotier passthrough tiering filesystem. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/autotierfs.nix>

## services.autotierfs.package

The autotier package to use. Type: package Default: pkgs.autotier Declared by: <nixpkgs/nixos/modules/services/autotierfs.nix>

## services.autotierfs.settings

The contents of the configuration file for autotier. See the autotier repo for supported values. Type: open submodule of attribute set of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { "/mnt/autotier" = { Global = { "Log Level" = 1; "Tier Period" = 1000; "Copy Buffer Size" = "1 MiB"; }; "Tier 1" = { Path = "/mnt/tier1"; Quota = "30GiB"; }; "Tier 2" = { Path = "/mnt/tier2"; Quota = "200GiB"; }; }; } Declared by: <nixpkgs/nixos/modules/services/autotierfs.nix>
