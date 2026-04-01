---
module: services.libeufin.nexus.settings.nexus-ebics
option_count: 11
source: options.html
---

# services.libeufin.nexus.settings.nexus-ebics

## services.libeufin.nexus.settings.nexus-ebics.BANK_DIALECT

Name of the following combination: EBICS version and ISO20022 recommendations that Nexus would honor in the communication with the bank. Currently only the “postfinance” or “gls” value is supported. Type: one of “postfinance”, “gls” Example: "postfinance" Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/nexus.nix>

## services.libeufin.nexus.settings.nexus-ebics.BANK_PUBLIC_KEYS_FILE

Filesystem location where Nexus should store the bank public keys. Type: absolute path Default: "/var/lib/libeufin-nexus/bank-ebics-keys.json" Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/nexus.nix>

## services.libeufin.nexus.settings.nexus-ebics.BIC

BIC of the bank account that is associated with the EBICS subscriber. Type: non-empty string Example: "POFICHBEXXX" Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/nexus.nix>

## services.libeufin.nexus.settings.nexus-ebics.CLIENT_PRIVATE_KEYS_FILE

Filesystem location where Nexus should store the subscriber private keys. Type: absolute path Default: "/var/lib/libeufin-nexus/client-ebics-keys.json" Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/nexus.nix>

## services.libeufin.nexus.settings.nexus-ebics.CURRENCY

Name of the fiat currency. Type: non-empty string Example: "CHF" Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/nexus.nix>

## services.libeufin.nexus.settings.nexus-ebics.HOST_BASE_URL

URL of the EBICS server. Type: non-empty string Example: "https://ebics.postfinance.ch/ebics/ebics.aspx" Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/nexus.nix>

## services.libeufin.nexus.settings.nexus-ebics.HOST_ID

Name of the EBICS host. Type: non-empty string Example: "PFEBICS" Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/nexus.nix>

## services.libeufin.nexus.settings.nexus-ebics.IBAN

IBAN of the bank account that is associated with the EBICS subscriber. Type: non-empty string Example: "CH7789144474425692816" Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/nexus.nix>

## services.libeufin.nexus.settings.nexus-ebics.NAME

Legal entity that is associated with the EBICS subscriber. Type: non-empty string Example: "John Smith S.A." Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/nexus.nix>

## services.libeufin.nexus.settings.nexus-ebics.PARTNER_ID

Partner ID of the EBICS subscriber. This value must be assigned by the bank after having activated a new EBICS subscriber. Type: non-empty string Example: "PFC00563" Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/nexus.nix>

## services.libeufin.nexus.settings.nexus-ebics.USER_ID

User ID of the EBICS subscriber. This value must be assigned by the bank after having activated a new EBICS subscriber. Type: non-empty string Example: "PFC00563" Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/nexus.nix>
