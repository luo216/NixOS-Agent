---
module: services.lemmy.settings
option_count: 2
source: options.html
---

# services.lemmy.settings

## services.lemmy.settings.hostname

The domain name of your instance (eg ‘lemmy.ml’). Type: string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/lemmy.nix>

## services.lemmy.settings.port

Port where lemmy should listen for incoming requests. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8536 Declared by: <nixpkgs/nixos/modules/services/web-apps/lemmy.nix>
