---
module: services.libeufin.bank.settings.libeufin-bank
option_count: 3
source: options.html
---

# services.libeufin.bank.settings.libeufin-bank

## services.libeufin.bank.settings.libeufin-bank.CURRENCY

The currency under which the libeufin-bank should operate. This defaults to the GNU taler module’s currency for convenience but if you run libeufin-bank separately from taler, you must set this yourself. Type: string Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/bank.nix>

## services.libeufin.bank.settings.libeufin-bank.PORT

The port on which libeufin-bank should listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8082 Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/bank.nix>

## services.libeufin.bank.settings.libeufin-bank.SUGGESTED_WITHDRAWAL_EXCHANGE

Exchange that is suggested to wallets when withdrawing. Note that, in order for withdrawals to work, your libeufin-bank must be able to communicate with and send money etc. to the bank at which the exchange used for withdrawals has its bank account. If you also have your own bank and taler exchange network, you probably want to set one of your exchange’s url here instead of the demo exchange. This setting must always be set in order for the Android app to not crash during the withdrawal process but the exchange to be used can always be changed in the app. Type: string Default: "https://exchange.demo.taler.net/" Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/bank.nix>
