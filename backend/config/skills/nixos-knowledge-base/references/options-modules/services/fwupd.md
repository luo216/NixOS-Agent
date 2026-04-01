---
module: services.fwupd
option_count: 6
source: options.html
---

# services.fwupd

## services.fwupd.enable

Whether to enable fwupd, a DBus service that allows applications to update firmware. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/fwupd.nix>

## services.fwupd.package

The fwupd package to use. Type: package Default: pkgs.fwupd Declared by: <nixpkgs/nixos/modules/services/hardware/fwupd.nix>

## services.fwupd.daemonSettings

Configurations for the fwupd daemon. Type: open submodule of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a non-empty list of them) Default: { } Declared by: <nixpkgs/nixos/modules/services/hardware/fwupd.nix>

## services.fwupd.extraRemotes

Enables extra remotes in fwupd. See /etc/fwupd/remotes.d. Type: list of string Default: [ ] Example: [ "lvfs-testing" ] Declared by: <nixpkgs/nixos/modules/services/hardware/fwupd.nix>

## services.fwupd.extraTrustedKeys

Installing a public key allows firmware signed with a matching private key to be recognized as trusted, which may require less authentication to install than for untrusted files. By default trusted firmware can be upgraded (but not downgraded) without the user or administrator password. Only very few keys are installed by default. Type: list of absolute path Default: [ ] Example: [ /etc/nixos/fwupd/myfirmware.pem ] Declared by: <nixpkgs/nixos/modules/services/hardware/fwupd.nix>

## services.fwupd.uefiCapsuleSettings

UEFI capsule configurations for the fwupd daemon. Type: open submodule of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a non-empty list of them) Default: { } Declared by: <nixpkgs/nixos/modules/services/hardware/fwupd.nix>
