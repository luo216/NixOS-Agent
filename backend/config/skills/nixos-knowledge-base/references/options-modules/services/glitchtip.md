---
module: services.glitchtip
option_count: 9
source: options.html
---

# services.glitchtip

## services.glitchtip.enable

Whether to enable GlitchTip. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/glitchtip.nix>

## services.glitchtip.package

The glitchtip package to use. Type: package Default: pkgs.glitchtip Declared by: <nixpkgs/nixos/modules/services/web-apps/glitchtip.nix>

## services.glitchtip.environmentFiles

Files to load environment variables from in addition to services.glitchtip.settings. This is useful to avoid putting secrets into the nix store. See https://glitchtip.com/documentation/install#configuration for more information. Type: list of absolute path Default: [ ] Example: [ "/run/secrets/glitchtip.env" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/glitchtip.nix>

## services.glitchtip.group

The group under which GlitchTip runs. Type: string Default: "glitchtip" Declared by: <nixpkgs/nixos/modules/services/web-apps/glitchtip.nix>

## services.glitchtip.listenAddress

The address to listen on. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/web-apps/glitchtip.nix>

## services.glitchtip.port

The port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8000 Declared by: <nixpkgs/nixos/modules/services/web-apps/glitchtip.nix>

## services.glitchtip.settings

Configuration of GlitchTip. See https://glitchtip.com/documentation/install#configuration for more information. Type: open submodule of attribute set of (string or signed integer or boolean) Default: { DEBUG = 0; DEBUG_TOOLBAR = 0; DATABASE_URL = lib.mkIf config.services.glitchtip.database.createLocally "postgresql://@/glitchtip"; REDIS_URL = lib.mkIf config.services.glitchtip.redis.createLocally "unix://${config.services.redis.servers.glitchtip.unixSocket}"; CELERY_BROKER_URL = lib.mkIf config.services.glitchtip.redis.createLocally "redis+socket://${config.services.redis.servers.glitchtip.unixSocket}"; } Example: { DATABASE_URL = "postgres://postgres:postgres@postgres/postgres"; GLITCHTIP_DOMAIN = "https://glitchtip.example.com"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/glitchtip.nix>

## services.glitchtip.stateDir

State directory of glitchtip. Type: absolute path Default: "/var/lib/glitchtip" Declared by: <nixpkgs/nixos/modules/services/web-apps/glitchtip.nix>

## services.glitchtip.user

The user account under which GlitchTip runs. Type: string Default: "glitchtip" Declared by: <nixpkgs/nixos/modules/services/web-apps/glitchtip.nix>
