---
module: services.hatsu.settings
option_count: 5
source: options.html
---

# services.hatsu.settings

## services.hatsu.settings.HATSU_DATABASE_URL

Database URL. Type: string Default: "sqlite:///var/lib/hatsu/hatsu.sqlite?mode=rwc" Example: "postgres://username:password@host/database" Declared by: <nixpkgs/nixos/modules/services/web-apps/hatsu.nix>

## services.hatsu.settings.HATSU_DOMAIN

The domain name of your instance (eg ‘hatsu.local’). Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/hatsu.nix>

## services.hatsu.settings.HATSU_LISTEN_HOST

Host where hatsu should listen for incoming requests. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/hatsu.nix>

## services.hatsu.settings.HATSU_LISTEN_PORT

Port where hatsu should listen for incoming requests. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3939 Declared by: <nixpkgs/nixos/modules/services/web-apps/hatsu.nix>

## services.hatsu.settings.HATSU_PRIMARY_ACCOUNT

The primary account of your instance (eg ‘example.com’). Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/hatsu.nix>
