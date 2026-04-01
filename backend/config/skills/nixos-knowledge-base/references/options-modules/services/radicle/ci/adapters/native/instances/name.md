---
module: services.radicle.ci.adapters.native.instances.<name>
option_count: 5
source: options.html
---

# services.radicle.ci.adapters.native.instances.<name>

## services.radicle.ci.adapters.native.instances.<name>.enable

Whether to enable this radicle-native-ci instance. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/adapters/native.nix>

## services.radicle.ci.adapters.native.instances.<name>.package

The radicle-native-ci package to use. Type: package Default: pkgs.radicle-native-ci Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/adapters/native.nix>

## services.radicle.ci.adapters.native.instances.<name>.name

Adapter name that is used in the radicle-ci-broker configuration. Defaults to the attribute name. Type: string Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/adapters/native.nix>

## services.radicle.ci.adapters.native.instances.<name>.runtimePackages

Packages added to the adapter’s PATH. Type: list of package Default: with pkgs; [ bash coreutils curl gawk gitMinimal gnused wget ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/adapters/native.nix>

## services.radicle.ci.adapters.native.instances.<name>.settings

Configuration of radicle-native-ci. See https://app.radicle.xyz/nodes/seed.radicle.xyz/rad:z3qg5TKmN83afz2fj9z3fQjU8vaYE#configuration for more information. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/adapters/native.nix>
