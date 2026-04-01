---
module: services.canaille.settings
option_count: 5
source: options.html
---

# services.canaille.settings

## services.canaille.settings.CANAILLE_LDAP

Configuration for the LDAP backend. This storage backend is not yet supported by the module, so use at your own risk! Type: null or (open submodule of (TOML value)) Default: null Declared by: <nixpkgs/nixos/modules/services/security/canaille.nix>

## services.canaille.settings.CANAILLE_OIDC

OpenID Connect settings. See the documentation. Type: null or (open submodule of (TOML value)) Default: null Declared by: <nixpkgs/nixos/modules/services/security/canaille.nix>

## services.canaille.settings.PREFERRED_URL_SCHEME

The url scheme by which canaille will be served. Type: one of “http”, “https” Default: "https" Declared by: <nixpkgs/nixos/modules/services/security/canaille.nix>

## services.canaille.settings.SECRET_KEY

Flask Secret Key. Can’t be set and must be provided through services.canaille.settings.secretKeyFile. Type: null or string (read only) Default: null Declared by: <nixpkgs/nixos/modules/services/security/canaille.nix>

## services.canaille.settings.SERVER_NAME

The domain name on which canaille will be served. Type: string Example: "auth.example.org" Declared by: <nixpkgs/nixos/modules/services/security/canaille.nix>
