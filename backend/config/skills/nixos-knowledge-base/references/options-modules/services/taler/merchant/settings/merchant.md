---
module: services.taler.merchant.settings.merchant
option_count: 4
source: options.html
---

# services.taler.merchant.settings.merchant

## services.taler.merchant.settings.merchant.DB

Plugin to use for the database. Type: value “postgres” (singular enum) Default: "postgres" Declared by: <nixpkgs/nixos/modules/services/finance/taler/merchant.nix>

## services.taler.merchant.settings.merchant.LEGAL_PRESERVATION

How long to keep data in the database for tax audits after the transaction has completed. Type: string Default: "10 years" Declared by: <nixpkgs/nixos/modules/services/finance/taler/merchant.nix>

## services.taler.merchant.settings.merchant.PORT

Port on which the HTTP server listens. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8083 Declared by: <nixpkgs/nixos/modules/services/finance/taler/merchant.nix>

## services.taler.merchant.settings.merchant.SERVE

Whether the HTTP server should listen on a UNIX domain socket (“unix”) or on a TCP socket (“tcp”). Type: one of “tcp”, “unix” Default: "tcp" Declared by: <nixpkgs/nixos/modules/services/finance/taler/merchant.nix>
