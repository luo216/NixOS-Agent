---
module: services.tuned.settings
option_count: 10
source: options.html
---

# services.tuned.settings

## services.tuned.settings.daemon

Whether to enable the use of a daemon for TuneD. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/tuned.nix>

## services.tuned.settings.default_instance_priority

Default instance (unit) priority. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/hardware/tuned.nix>

## services.tuned.settings.dynamic_tuning

Whether to enable dynamic tuning. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/tuned.nix>

## services.tuned.settings.globalSection

global section of an INI file (attrs of INI atom (null, bool, int, float or string)) Type: section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { }

## services.tuned.settings.profile_dirs

Directories to search for profiles, separated by , or ;. Type: string Default: "/etc/tuned/profiles" Declared by: <nixpkgs/nixos/modules/services/hardware/tuned.nix>

## services.tuned.settings.reapply_sysctl

Whether to enable the reapplying of global sysctls after TuneD sysctls are applied. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/tuned.nix>

## services.tuned.settings.recommend_command

Whether to enable recommend functionality. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/tuned.nix>

## services.tuned.settings.sections

attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { }

## services.tuned.settings.sleep_interval

Interval in which the TuneD daemon is waken up and checks for events (in seconds). Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/hardware/tuned.nix>

## services.tuned.settings.update_interval

Update interval for dynamic tuning (in seconds). Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/services/hardware/tuned.nix>
