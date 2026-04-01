---
module: services.taler.merchant
option_count: 5
source: options.html
---

# services.taler.merchant

## services.taler.merchant.enable

Whether to enable the GNU Taler merchant. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/finance/taler/merchant.nix>

## services.taler.merchant.package

The taler-merchant package to use. Type: package Default: pkgs.taler-merchant Declared by: <nixpkgs/nixos/modules/services/finance/taler/merchant.nix>

## services.taler.merchant.debug

Whether to enable debug logging. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/finance/taler/merchant.nix>

## services.taler.merchant.openFirewall

Whether to open ports in the firewall Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/finance/taler/merchant.nix>

## services.taler.merchant.settings

Configuration options for the taler merchant config file. For a list of all possible options, please see the man page taler-merchant.conf(5) Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/finance/taler/merchant.nix>
