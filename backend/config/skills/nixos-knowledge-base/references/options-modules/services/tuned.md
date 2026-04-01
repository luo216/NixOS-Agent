---
module: services.tuned
option_count: 6
source: options.html
---

# services.tuned

## services.tuned.enable

Whether to enable TuneD. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/tuned.nix>

## services.tuned.package

The tuned package to use. Type: package Default: pkgs.tuned Declared by: <nixpkgs/nixos/modules/services/hardware/tuned.nix>

## services.tuned.ppdSettings

Settings for TuneD’s power-profiles-daemon compatibility service. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/hardware/tuned.nix>

## services.tuned.ppdSupport

Whether to enable translation of power-profiles-daemon API calls to TuneD. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/tuned.nix>

## services.tuned.profiles

Profiles for TuneD. See tuned.conf(5). Type: attribute set of (open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string))) Default: { } Example: { my-cool-profile = { main = { include = "my-other-cool-profile"; }; my_sysctl = { "net.core.rmem_default" = 262144; "net.core.wmem_default" = 262144; replace = true; type = "sysctl"; }; }; } Declared by: <nixpkgs/nixos/modules/services/hardware/tuned.nix>

## services.tuned.settings

Configuration for TuneD. See tuned-main.conf(5). Type: open submodule of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/hardware/tuned.nix>
