---
module: programs.thunderbird
option_count: 5
source: options.html
---

# programs.thunderbird

## programs.thunderbird.enable

Whether to enable Thunderbird mail client. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/thunderbird.nix>

## programs.thunderbird.package

The thunderbird package to use. Type: package Default: pkgs.thunderbird Declared by: <nixpkgs/nixos/modules/programs/thunderbird.nix>

## programs.thunderbird.policies

Group policies to install. See Thunderbird’s documentation for a list of available options. This can be used to install extensions declaratively! Check out the documentation of the ExtensionSettings policy for details. Type: JSON value Default: { } Declared by: <nixpkgs/nixos/modules/programs/thunderbird.nix>

## programs.thunderbird.preferences

Preferences to set from about:config. Some of these might be able to be configured more ergonomically using policies. Type: attribute set of (boolean or signed integer or string) Default: { } Declared by: <nixpkgs/nixos/modules/programs/thunderbird.nix>

## programs.thunderbird.preferencesStatus

The status of thunderbird.preferences. status can assume the following values: "default": Preferences appear as default. "locked": Preferences appear as default and can’t be changed. "user": Preferences appear as changed. "clear": Value has no effect. Resets to factory defaults on each startup. Type: one of “default”, “locked”, “user”, “clear” Default: "locked" Declared by: <nixpkgs/nixos/modules/programs/thunderbird.nix>
