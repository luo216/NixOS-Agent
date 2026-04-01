---
module: system
option_count: 14
source: options.html
---

# system

## system.activatable

Whether to add the activation script to the system profile. The default, to have the script available all the time, is what we normally do, but for image based systems, this may not be needed or not be desirable. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/activation/activatable-system.nix>

## system.activationScripts

A set of shell script fragments that are executed when a NixOS system configuration is activated. Examples are updating /etc, creating accounts, and so on. Since these are executed every time you boot the system or run nixos-rebuild, it’s important that they are idempotent and fast. Type: attribute set of (string or (submodule)) Default: { } Example: { stdio = { # Run after /dev has been mounted deps = [ "specialfs" ]; text = '' # Needed by some programs. ln -sfn /proc/self/fd /dev/fd ln -sfn /proc/self/fd/0 /dev/stdin ln -sfn /proc/self/fd/1 /dev/stdout ln -sfn /proc/self/fd/2 /dev/stderr ''; }; } Declared by: <nixpkgs/nixos/modules/system/activation/activation-script.nix>

## system.build

Attribute set of derivations used to set up the system. Type: open submodule of lazy attribute set of unspecified value Default: { } Declared by: <nixpkgs/nixos/modules/system/build.nix> <nixpkgs/nixos/modules/system/activation/top-level.nix> <nixpkgs/nixos/modules/system/activation/activation-script.nix> <nixpkgs/nixos/modules/system/activation/activatable-system.nix> <nixpkgs/nixos/modules/image/images.nix>

## system.checks

Packages that are added as dependencies of the system’s build, usually for the purpose of validating some part of the configuration. Unlike system.extraDependencies, these store paths do not become part of the built system configuration. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/system/activation/top-level.nix>

## system.configurationRevision

The Git revision of the top-level flake from which this configuration was built. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/misc/version.nix>

## system.copySystemConfiguration

If enabled, copies the NixOS configuration file (usually /etc/nixos/configuration.nix) and symlinks it from the resulting system (getting to /run/current-system/configuration.nix). Note that only this single file is copied, even if it imports others. Warning: This feature cannot be used when the system is configured by a flake Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/activation/top-level.nix>

## system.extraDependencies

A list of paths that should be included in the system closure but generally not visible to users. This option has also been used for build-time checks, but the system.checks option is more appropriate for that purpose as checks should not leave a trace in the built system configuration. Type: list of path in the Nix store Default: [ ] Declared by: <nixpkgs/nixos/modules/system/activation/top-level.nix>

## system.forbiddenDependenciesRegexes

POSIX Extended Regular Expressions that match store paths that should not appear in the system closure, with the exception of system.extraDependencies, which is not checked. Type: list of string Default: [ ] Example: [ "-dev$" ] Declared by: <nixpkgs/nixos/modules/system/activation/top-level.nix>

## system.includeBuildDependencies

Whether to include the build closure of the whole system in its runtime closure. This can be useful for making changes fully offline, as it includes all sources, patches, and intermediate outputs required to build all the derivations that the system depends on. Note that this includes all the derivations, down from the included applications to their sources, the compilers used to build them, and even the bootstrap compiler used to compile the compilers. This increases the size of the system and the time needed to download its dependencies drastically: a minimal configuration with no extra services enabled grows from ~670MiB in size to 13.5GiB, and takes proportionally longer to download. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/activation/top-level.nix>

## system.name

The name of the system used in the system.build.toplevel derivation. That derivation has the following name: "nixos-system-${config.system.name}-${config.system.nixos.label}" Type: string Default: if config.networking.hostName == "" then "unnamed" else config.networking.hostName; Declared by: <nixpkgs/nixos/modules/system/activation/top-level.nix>

## system.preSwitchChecks

A set of shell script fragments that are executed before the switch to a new NixOS system configuration. A failure in any of these fragments will cause the switch to fail and exit early. The scripts receive the new configuration path and the action verb passed to switch-to-configuration, as the first and second positional arguments (meaning that you can access them using $1 and $2, respectively). Type: attribute set of string Default: { } Example: { failsEveryTime = '' false ''; } Declared by: <nixpkgs/nixos/modules/system/activation/pre-switch-check.nix>

## system.services

A collection of NixOS modular services that are configured as systemd services. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/service/systemd/system.nix>

## system.stateVersion

This option defines the first version of NixOS you have installed on this particular machine, and is used to maintain compatibility with application data (e.g. databases) created on older NixOS versions. For example, if NixOS version XX.YY ships with AwesomeDB version N by default, and is then upgraded to version XX.YY+1, which ships AwesomeDB version N+1, the existing databases may no longer be compatible, causing applications to fail, or even leading to data loss. The stateVersion mechanism avoids this situation by making the default version of such packages conditional on the first version of NixOS you’ve installed (encoded in stateVersion), instead of simply always using the latest one. Note that this generally only affects applications that can’t upgrade their data automatically - applications and services supporting automatic migrations will remain on latest versions when you upgrade. Most users should never change this value after the initial install, for any reason, even if you’ve upgraded your system to a new NixOS release. This value does not affect the Nixpkgs version your packages and OS are pulled from, so changing it will not upgrade your system. This value being lower than the current NixOS release does not mean your system is out of date, out of support, or vulnerable. Do not change this value unless you have manually inspected all the changes it would make to your configuration, and migrated your data accordingly. Type: string Default: config.system.nixos.release Declared by: <nixpkgs/nixos/modules/misc/version.nix>

## system.userActivationScripts

A set of shell script fragments that are executed by a systemd user service when a NixOS system configuration is activated. Examples are rebuilding the .desktop file cache for showing applications in the menu. Since these are executed every time you run nixos-rebuild, it’s important that they are idempotent and fast. Type: attribute set of (string or (submodule)) Default: { } Example: { plasmaSetup = { text = '' ${pkgs.libsForQt5.kservice}/bin/kbuildsycoca5" ''; deps = []; }; } Declared by: <nixpkgs/nixos/modules/system/activation/activation-script.nix>
