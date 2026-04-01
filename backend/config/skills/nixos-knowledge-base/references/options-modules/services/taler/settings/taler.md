---
module: services.taler.settings.taler
option_count: 2
source: options.html
---

# services.taler.settings.taler

## services.taler.settings.taler.CURRENCY

The currency which taler services will operate with. This cannot be changed later. Type: non-empty string Declared by: <nixpkgs/nixos/modules/services/finance/taler/module.nix>

## services.taler.settings.taler.CURRENCY_ROUND_UNIT

Smallest amount in this currency that can be transferred using the underlying RTGS. You should probably not touch this. Type: string Default: "${config.services.taler.settings.taler.CURRENCY}:0.01" Declared by: <nixpkgs/nixos/modules/services/finance/taler/module.nix>
