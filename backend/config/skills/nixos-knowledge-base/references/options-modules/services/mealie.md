---
module: services.mealie
option_count: 7
source: options.html
---

# services.mealie

## services.mealie.enable

Whether to enable Mealie, a recipe manager and meal planner. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/mealie.nix>

## services.mealie.package

The mealie package to use. Type: package Default: pkgs.mealie Declared by: <nixpkgs/nixos/modules/services/web-apps/mealie.nix>

## services.mealie.credentialsFile

File containing credentials used in mealie such as POSTGRES_PASSWORD or sensitive LDAP options. Expects the format of an EnvironmentFile=, as described by systemd.exec(5). Type: null or absolute path Default: null Example: "/run/secrets/mealie-credentials.env" Declared by: <nixpkgs/nixos/modules/services/web-apps/mealie.nix>

## services.mealie.extraOptions

Specifies extra command line arguments to pass to mealie (Gunicorn). Type: list of string Default: [ ] Example: [ "--log-level" "debug" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/mealie.nix>

## services.mealie.listenAddress

Address on which the service should listen. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/web-apps/mealie.nix>

## services.mealie.port

Port on which to serve the Mealie service. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9000 Declared by: <nixpkgs/nixos/modules/services/web-apps/mealie.nix>

## services.mealie.settings

Configuration of the Mealie service. See the mealie documentation for available options and default values. Type: attribute set of anything Default: { } Example: { ALLOW_SIGNUP = "false"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/mealie.nix>
