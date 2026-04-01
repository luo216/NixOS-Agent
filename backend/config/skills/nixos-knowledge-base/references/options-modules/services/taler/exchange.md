---
module: services.taler.exchange
option_count: 6
source: options.html
---

# services.taler.exchange

## services.taler.exchange.enable

Whether to enable the GNU Taler exchange. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/finance/taler/exchange.nix>

## services.taler.exchange.package

The taler-exchange package to use. Type: package Default: pkgs.taler-exchange Declared by: <nixpkgs/nixos/modules/services/finance/taler/exchange.nix>

## services.taler.exchange.debug

Whether to enable debug logging. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/finance/taler/exchange.nix>

## services.taler.exchange.denominationConfig

This option configures the cash denomination for the coins that the exchange offers. For more information, consult the upstream docs. You can either write these manually or you can use the taler-harness deployment gen-coin-config command to generate it. Warning: Do not modify existing denominations after deployment. Please see the upstream docs for how to safely do that. Type: strings concatenated with “\n” Default: "None, you must set this yourself." Example: '' [COIN-KUDOS-n1-t1718140083] VALUE = KUDOS:0.1 DURATION_WITHDRAW = 7 days DURATION_SPEND = 2 years DURATION_LEGAL = 6 years FEE_WITHDRAW = KUDOS:0 FEE_DEPOSIT = KUDOS:0.1 FEE_REFRESH = KUDOS:0 FEE_REFUND = KUDOS:0 RSA_KEYSIZE = 2048 CIPHER = RSA '' Declared by: <nixpkgs/nixos/modules/services/finance/taler/exchange.nix>

## services.taler.exchange.openFirewall

Whether to open ports in the firewall Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/finance/taler/exchange.nix>

## services.taler.exchange.settings

Configuration options for the taler exchange config file. For a list of all possible options, please see the man page taler-exchange.conf(5) Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/finance/taler/exchange.nix>
