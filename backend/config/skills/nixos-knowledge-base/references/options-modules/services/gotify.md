---
module: services.gotify
option_count: 5
source: options.html
---

# services.gotify

## services.gotify.enable

Whether to enable Gotify webserver. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/gotify-server.nix>

## services.gotify.package

The gotify-server package to use. Type: package Default: pkgs.gotify-server Declared by: <nixpkgs/nixos/modules/services/web-apps/gotify-server.nix>

## services.gotify.environment

Config environment variables for the gotify-server. See https://gotify.net/docs/config for more details. Type: attribute set of (string or signed integer) Default: { } Example: { GOTIFY_DATABASE_DIALECT = "sqlite3"; GOTIFY_SERVER_PORT = 8080; } Declared by: <nixpkgs/nixos/modules/services/web-apps/gotify-server.nix>

## services.gotify.environmentFiles

Files containing additional config environment variables for gotify-server. Secrets should be set in environmentFiles instead of environment. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/gotify-server.nix>

## services.gotify.stateDirectoryName

The name of the directory below /var/lib where gotify stores its runtime data. Type: string Default: "gotify-server" Declared by: <nixpkgs/nixos/modules/services/web-apps/gotify-server.nix>
