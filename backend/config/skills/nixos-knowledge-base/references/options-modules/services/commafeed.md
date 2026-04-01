---
module: services.commafeed
option_count: 7
source: options.html
---

# services.commafeed

## services.commafeed.enable

Whether to enable CommaFeed. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/commafeed.nix>

## services.commafeed.package

The commafeed package to use. Type: package Default: pkgs.commafeed Declared by: <nixpkgs/nixos/modules/services/web-apps/commafeed.nix>

## services.commafeed.environment

Extra environment variables passed to CommaFeed, refer to https://github.com/Athou/commafeed/blob/master/commafeed-server/config.yml.example for supported values. The default user is admin and the default password is admin. Correct configuration for H2 database is already provided. Type: attribute set of (boolean or signed integer or string) Default: { } Example: { CF_SERVER_APPLICATIONCONNECTORS_0_PORT = 9090; CF_SERVER_APPLICATIONCONNECTORS_0_TYPE = "http"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/commafeed.nix>

## services.commafeed.environmentFile

Environment file as defined in systemd.exec(5). Type: null or absolute path Default: null Example: "/var/lib/commafeed/commafeed.env" Declared by: <nixpkgs/nixos/modules/services/web-apps/commafeed.nix>

## services.commafeed.group

Group under which CommaFeed runs. Type: string Default: "commafeed" Declared by: <nixpkgs/nixos/modules/services/web-apps/commafeed.nix>

## services.commafeed.stateDir

Directory holding all state for CommaFeed to run. Type: absolute path Default: "/var/lib/commafeed" Declared by: <nixpkgs/nixos/modules/services/web-apps/commafeed.nix>

## services.commafeed.user

User under which CommaFeed runs. Type: string Default: "commafeed" Declared by: <nixpkgs/nixos/modules/services/web-apps/commafeed.nix>
