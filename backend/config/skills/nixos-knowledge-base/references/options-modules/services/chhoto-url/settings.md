---
module: services.chhoto-url.settings
option_count: 14
source: options.html
---

# services.chhoto-url.settings

## services.chhoto-url.settings.allow_capital_letters

Whether to allow capital letters in slugs. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/chhoto-url.nix>

## services.chhoto-url.settings.cache_control_header

The Cache-Control header to send. Type: null or string Default: null Example: "no-cache, private" Declared by: <nixpkgs/nixos/modules/services/web-apps/chhoto-url.nix>

## services.chhoto-url.settings.custom_landing_directory

The path of a directory which contains a custom landing page. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/chhoto-url.nix>

## services.chhoto-url.settings.db_url

The path of the sqlite database. Type: absolute path Default: "/var/lib/chhoto-url/urls.sqlite" Declared by: <nixpkgs/nixos/modules/services/web-apps/chhoto-url.nix>

## services.chhoto-url.settings.disable_frontend

Whether to disable the frontend. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/chhoto-url.nix>

## services.chhoto-url.settings.hash_algorithm

The hash algorithm to use for passwords and API keys. Set to null if you want to provide these secrets as plaintext. Type: null or value “Argon2” (singular enum) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/chhoto-url.nix>

## services.chhoto-url.settings.port

The port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Example: 4567 Declared by: <nixpkgs/nixos/modules/services/web-apps/chhoto-url.nix>

## services.chhoto-url.settings.public_mode

Whether to enable public mode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/chhoto-url.nix>

## services.chhoto-url.settings.public_mode_expiry_delay

The maximum expiry delay in seconds to force in public mode. Type: null or (unsigned integer, meaning >=0) Default: null Example: 3600 Declared by: <nixpkgs/nixos/modules/services/web-apps/chhoto-url.nix>

## services.chhoto-url.settings.redirect_method

The redirect method to use. Type: one of “TEMPORARY”, “PERMANENT” Default: "PERMANENT" Declared by: <nixpkgs/nixos/modules/services/web-apps/chhoto-url.nix>

## services.chhoto-url.settings.site_url

The URL under which Chhoto URL is externally reachable. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/chhoto-url.nix>

## services.chhoto-url.settings.slug_length

The length of auto-generated slugs. Type: signed integer Default: 8 Declared by: <nixpkgs/nixos/modules/services/web-apps/chhoto-url.nix>

## services.chhoto-url.settings.slug_style

The slug style to use for auto-generated URLs. Type: one of “Pair”, “UID” Default: "Pair" Declared by: <nixpkgs/nixos/modules/services/web-apps/chhoto-url.nix>

## services.chhoto-url.settings.try_longer_slugs

Whether to try a longer UID upon collision. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/chhoto-url.nix>
