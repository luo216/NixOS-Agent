---
module: services.ananicy
option_count: 7
source: options.html
---

# services.ananicy

## services.ananicy.enable

Whether to enable Ananicy, an auto nice daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/ananicy.nix>

## services.ananicy.package

The ananicy package to use. Type: package Default: pkgs.ananicy Example: ananicy-cpp Declared by: <nixpkgs/nixos/modules/services/misc/ananicy.nix>

## services.ananicy.extraCgroups

Cgroups to write in ‘nixCgroups.cgroups’. See: https://gitlab.com/ananicy-cpp/ananicy-cpp/#cgroups Type: list of (attribute set) Default: [ ] Example: [ { CPUQuota = 80; cgroup = "cpu80"; } ] Declared by: <nixpkgs/nixos/modules/services/misc/ananicy.nix>

## services.ananicy.extraRules

Rules to write in ‘nixRules.rules’. See: https://github.com/Nefelim4ag/Ananicy#configuration https://gitlab.com/ananicy-cpp/ananicy-cpp/#global-configuration Type: list of (attribute set) Default: [ ] Example: [ { name = "eog"; type = "Image-Viewer"; } { name = "fdupes"; type = "BG_CPUIO"; } ] Declared by: <nixpkgs/nixos/modules/services/misc/ananicy.nix>

## services.ananicy.extraTypes

Types to write in ‘nixTypes.types’. See: https://gitlab.com/ananicy-cpp/ananicy-cpp/#types Type: list of (attribute set) Default: [ ] Example: [ { nice = 19; other_parameter = "value"; type = "my_type"; } { ioclass = "idle"; nice = 19; sched = "batch"; type = "compiler"; } ] Declared by: <nixpkgs/nixos/modules/services/misc/ananicy.nix>

## services.ananicy.rulesProvider

Which package to copy default rules,types,cgroups from. Type: package Default: pkgs.ananicy Example: ananicy-cpp Declared by: <nixpkgs/nixos/modules/services/misc/ananicy.nix>

## services.ananicy.settings

See https://github.com/Nefelim4ag/Ananicy/blob/master/ananicy.d/ananicy.conf Type: attribute set of (signed integer or boolean or string) Default: { } Example: { apply_nice = false; } Declared by: <nixpkgs/nixos/modules/services/misc/ananicy.nix>
