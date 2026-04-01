---
module: services.umami
option_count: 4
source: options.html
---

# services.umami

## services.umami.enable

Whether to enable umami. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/umami.nix>

## services.umami.package

The umami package to use. Type: package Default: pkgs.umami Declared by: <nixpkgs/nixos/modules/services/web-apps/umami.nix>

## services.umami.createPostgresqlDatabase

Whether to automatically create the database for Umami using PostgreSQL. Both the database name and username will be umami, and the connection is made through unix sockets using peer authentication. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/web-apps/umami.nix>

## services.umami.settings

Additional configuration (environment variables) for Umami, see https://umami.is/docs/environment-variables for supported values. Type: open submodule of attribute set of (boolean or signed integer or string) Default: { } Example: { APP_SECRET_FILE = "/run/secrets/umamiAppSecret"; DISABLE_TELEMETRY = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/umami.nix>
