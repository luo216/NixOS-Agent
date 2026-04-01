---
module: services.saslauthd
option_count: 4
source: options.html
---

# services.saslauthd

## services.saslauthd.enable

Whether to enable saslauthd, the Cyrus SASL authentication daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/system/saslauthd.nix>

## services.saslauthd.package

The bin package to use. Type: package Default: pkgs.cyrus_sasl.bin Declared by: <nixpkgs/nixos/modules/services/system/saslauthd.nix>

## services.saslauthd.config

Configuration to use for Cyrus SASL authentication daemon. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/system/saslauthd.nix>

## services.saslauthd.mechanism

Auth mechanism to use Type: string Default: "pam" Declared by: <nixpkgs/nixos/modules/services/system/saslauthd.nix>
