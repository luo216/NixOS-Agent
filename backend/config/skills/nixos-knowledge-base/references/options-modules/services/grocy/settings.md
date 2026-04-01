---
module: services.grocy.settings
option_count: 2
source: options.html
---

# services.grocy.settings

## services.grocy.settings.culture

Display language of the frontend. Type: one of “de”, “en”, “da”, “en_GB”, “es”, “fr”, “hu”, “it”, “nl”, “no”, “pl”, “pt_BR”, “ru”, “sk_SK”, “sv_SE”, “tr” Default: "en" Declared by: <nixpkgs/nixos/modules/services/web-apps/grocy.nix>

## services.grocy.settings.currency

ISO 4217 code for the currency to display. Type: string Default: "USD" Example: "EUR" Declared by: <nixpkgs/nixos/modules/services/web-apps/grocy.nix>
