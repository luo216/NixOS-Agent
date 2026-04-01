---
module: services.youtrack
option_count: 8
source: options.html
---

# services.youtrack

## services.youtrack.enable

Whether to enable YouTrack service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/youtrack.nix>

## services.youtrack.package

The youtrack package to use. Type: package Default: pkgs.youtrack Declared by: <nixpkgs/nixos/modules/services/web-apps/youtrack.nix>

## services.youtrack.address

The interface youtrack will listen on. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/youtrack.nix>

## services.youtrack.autoUpgrade

Whether YouTrack should auto upgrade it without showing the upgrade dialog. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/youtrack.nix>

## services.youtrack.environmentalParameters

Environmental configuration parameters, set imperatively. The values doesn’t get removed, when removed in Nix. See https://www.jetbrains.com/help/youtrack/server/2023.3/youtrack-java-start-parameters.html#environmental-parameters for more information. Type: open submodule of attribute set of (signed integer or string or 16 bit unsigned integer; between 0 and 65535 (both inclusive)) Default: { } Example: { secure-mode = "tls"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/youtrack.nix>

## services.youtrack.generalParameters

General configuration parameters and other JVM options. See https://www.jetbrains.com/help/youtrack/server/2023.3/youtrack-java-start-parameters.html#general-parameters for more information. Type: list of string Default: [ ] Example: [ "-Djetbrains.youtrack.admin.restore=true" "-Xmx1024m" ]; Declared by: <nixpkgs/nixos/modules/services/web-apps/youtrack.nix>

## services.youtrack.statePath

Path were the YouTrack state is stored. To this path the base version (e.g. 2023_1) of the used package will be appended. Type: absolute path Default: "/var/lib/youtrack" Declared by: <nixpkgs/nixos/modules/services/web-apps/youtrack.nix>

## services.youtrack.virtualHost

Name of the nginx virtual host to use and setup. If null, do not setup anything. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/youtrack.nix>
