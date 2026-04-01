---
module: services.authelia.instances.<name>.settings
option_count: 2
source: options.html
---

# services.authelia.instances.<name>.settings

## services.authelia.instances.<name>.settings.default_2fa_method

Default 2FA method for new users and fallback for preferred but disabled methods. Type: one of “”, “totp”, “webauthn”, “mobile_push” Default: "" Example: "webauthn" Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>

## services.authelia.instances.<name>.settings.theme

The theme to display. Type: one of “light”, “dark”, “grey”, “auto” Default: "light" Example: "dark" Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>
