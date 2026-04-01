---
module: services.taler.exchange.settings.exchange
option_count: 5
source: options.html
---

# services.taler.exchange.settings.exchange

## services.taler.exchange.settings.exchange.CURRENCY

The currency which the exchange will operate with. This cannot be changed later. Type: non-empty string Declared by: <nixpkgs/nixos/modules/services/finance/taler/exchange.nix>

## services.taler.exchange.settings.exchange.CURRENCY_ROUND_UNIT

Smallest amount in this currency that can be transferred using the underlying RTGS. For example: “EUR:0.01” or “JPY:1” Type: string Default: "0.01 in {option}`CURRENCY`" Declared by: <nixpkgs/nixos/modules/services/finance/taler/exchange.nix>

## services.taler.exchange.settings.exchange.DB

Plugin to use for the database. Type: value “postgres” (singular enum) Default: "postgres" Declared by: <nixpkgs/nixos/modules/services/finance/taler/exchange.nix>

## services.taler.exchange.settings.exchange.MASTER_PUBLIC_KEY

Used by the exchange to verify information signed by the offline system. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/finance/taler/exchange.nix>

## services.taler.exchange.settings.exchange.PORT

Port on which the HTTP server listens. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8081 Declared by: <nixpkgs/nixos/modules/services/finance/taler/exchange.nix>
