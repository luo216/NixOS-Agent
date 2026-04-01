---
module: services.radicle.ci.broker
option_count: 7
source: options.html
---

# services.radicle.ci.broker

## services.radicle.ci.broker.enable

Whether to enable radicle-ci-broker. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/ci-broker.nix>

## services.radicle.ci.broker.enableHardening

Whether to enable systemd hardening. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/ci-broker.nix>

## services.radicle.ci.broker.package

The radicle-ci-broker package to use. Type: package Default: pkgs.radicle-ci-broker Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/ci-broker.nix>

## services.radicle.ci.broker.checkConfig

Whether to enable checking the ci-broker.yaml file resulting from services.radicle.ci.broker.settings. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/ci-broker.nix>

## services.radicle.ci.broker.logDir

Log directory of radicle-ci-broker. Type: absolute path Default: "/var/log/radicle-ci" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/ci-broker.nix>

## services.radicle.ci.broker.settings

Configuration of radicle-ci-broker. See https://app.radicle.xyz/nodes/seed.radicle.xyz/rad:zwTxygwuz5LDGBq255RA2CbNGrz8/tree/doc/userguide.md#configuration for more information. Type: open submodule of (JSON value) Default: { } Example: { adapters.native = { command = lib.getExe pkgs.radicle-native-ci; config = { }; config_env = "RADICLE_NATIVE_CI"; env.PATH = lib.makeBinPath (with pkgs; [ bash coreutils ]); }; triggers = [ { adapter = "native"; filters = [ { And = [ { HasFile = ".radicle/native.yaml"; } { Node = "z6MkgEMYod7Hxfy9qCvDv5hYHkZ4ciWmLFgfvm3Wn1b2w2FV"; } { Or = [ "DefaultBranch" "PatchCreated" "PatchUpdated" ]; } ]; } ]; } ]; } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/ci-broker.nix>

## services.radicle.ci.broker.stateDir

State directory of radicle-ci-broker. Type: absolute path Default: "/var/lib/radicle-ci" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/ci-broker.nix>
