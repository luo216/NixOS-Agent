---
module: services.searx
option_count: 12
source: options.html
---

# services.searx

## services.searx.enable

Whether to enable Searx, the meta search engine. Type: boolean Default: false Related packages: pkgs.searx Declared by: <nixpkgs/nixos/modules/services/networking/searx.nix>

## services.searx.package

The searxng package to use. Type: package Default: pkgs.searxng Declared by: <nixpkgs/nixos/modules/services/networking/searx.nix>

## services.searx.configureNginx

Whether to configure nginx as an frontend to uwsgi. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/searx.nix>

## services.searx.configureUwsgi

Whether to run searx in uWSGI as a “vassal”, instead of using its built-in HTTP server. This is the recommended mode for public or large instances, but is unnecessary for LAN or local-only use. Warning The built-in HTTP server logs all queries by default. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/searx.nix>

## services.searx.domain

The domain under which searxng will be served. Right now this is only used with the configureNginx option. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/searx.nix>

## services.searx.environmentFile

Environment file (see systemd.exec(5) “EnvironmentFile=” section for the syntax) to define variables for Searx. This option can be used to safely include secret keys into the Searx configuration. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/searx.nix>

## services.searx.faviconsSettings

Favicons settings for SearXNG. Note For available settings, see the SearXNG schema file. Type: attribute set of (JSON value) Default: { } Example: { favicons = { cfg_schema = 1; cache = { db_url = "/var/cache/searx/faviconcache.db"; HOLD_TIME = 5184000; LIMIT_TOTAL_BYTES = 2147483648; BLOB_MAX_BYTES = 40960; MAINTENANCE_MODE = "auto"; MAINTENANCE_PERIOD = 600; }; }; } Declared by: <nixpkgs/nixos/modules/services/networking/searx.nix>

## services.searx.limiterSettings

Limiter settings for SearXNG. Note For available settings, see the SearXNG schema file. Type: attribute set of (JSON value) Default: { } Example: { real_ip = { x_for = 1; ipv4_prefix = 32; ipv6_prefix = 56; } botdetection.ip_lists.block_ip = [ # "93.184.216.34" # example.org ]; } Declared by: <nixpkgs/nixos/modules/services/networking/searx.nix>

## services.searx.redisCreateLocally

Configure a local Redis server for SearXNG. This is required if you want to enable the rate limiter and bot protection of SearXNG. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/searx.nix>

## services.searx.settings

Searx settings. These will be merged with (taking precedence over) the default configuration. It’s also possible to refer to environment variables (defined in services.searx.environmentFile) using the syntax $VARIABLE_NAME. Note For available settings, see the Searx docs. Type: open submodule of (JSON value) Default: { } Example: { server.port = 8080; server.bind_address = "0.0.0.0"; server.secret_key = "$SEARX_SECRET_KEY"; engines = [ { name = "wolframalpha"; shortcut = "wa"; api_key = "$WOLFRAM_API_KEY"; engine = "wolframalpha_api"; } ]; } Declared by: <nixpkgs/nixos/modules/services/networking/searx.nix>

## services.searx.settingsFile

The path of the Searx server settings.yml file. If no file is specified, a default file is used (default config file has debug mode enabled). Note Setting this options overrides services.searx.settings. Warning This file, along with any secret key it contains, will be copied into the world-readable Nix store. Type: absolute path Default: "/run/searx/settings.yml" Declared by: <nixpkgs/nixos/modules/services/networking/searx.nix>

## services.searx.uwsgiConfig

Additional configuration of the uWSGI vassal running searx. It should notably specify on which interfaces and ports the vassal should listen. Type: Json value or lambda Default: { http = ":8080"; } Example: { disable-logging = true; http = ":8080"; # serve via HTTP... socket = "/run/searx/searx.sock"; # ...or UNIX socket chmod-socket = "660"; # allow the searx group to read/write to the socket } Declared by: <nixpkgs/nixos/modules/services/networking/searx.nix>
