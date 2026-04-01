---
module: services.anubis.instances.<name>.settings
option_count: 10
source: options.html
---

# services.anubis.instances.<name>.settings

## services.anubis.instances.<name>.settings.BIND

The address that Anubis listens to. See Go’s net.Listen for syntax. Use the prefix “/run/anubis/anubis-<name>/”. The prefix “/run/anubis” is deprecated. Defaults to Unix domain sockets. To use TCP sockets, set this to a TCP address and BIND_NETWORK to "tcp". Type: string Default: "/run/anubis/anubis-‹name›.sock" Example: ":8080" Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.instances.<name>.settings.BIND_NETWORK

The network family that Anubis should bind to. Accepts anything supported by Go’s net.Listen. Common values are tcp and unix. Type: string Default: config.services.anubis.defaultOptions.settings.BIND_NETWORK Example: "tcp" Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.instances.<name>.settings.DIFFICULTY

The difficulty required for clients to solve the challenge. Currently, this means the amount of leading zeros in a successful response. Type: signed integer Default: config.services.anubis.defaultOptions.settings.DIFFICULTY Example: 5 Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.instances.<name>.settings.METRICS_BIND

The address Anubis’ metrics server listens to. See Go’s net.Listen for syntax. Use the prefix “/run/anubis/anubis-<name>/”. The prefix “/run/anubis” is deprecated. The metrics server is enabled by default and may be disabled. However, due to implementation details, this is only possible by setting a command line flag. See services.anubis.defaultOptions.extraFlags for an example. Defaults to Unix domain sockets. To use TCP sockets, set this to a TCP address and METRICS_BIND_NETWORK to "tcp". Type: string Default: "/run/anubis/anubis-‹name›-metrics.sock" Example: "127.0.0.1:8081" Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.instances.<name>.settings.METRICS_BIND_NETWORK

The network family that the metrics server should bind to. Accepts anything supported by Go’s net.Listen. Common values are tcp and unix. Type: string Default: config.services.anubis.defaultOptions.settings.METRICS_BIND_NETWORK Example: "tcp" Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.instances.<name>.settings.OG_PASSTHROUGH

Whether to enable Open Graph tag passthrough. This enables social previews of resources protected by Anubis without having to exempt each scraper individually. Type: boolean Default: config.services.anubis.defaultOptions.settings.OG_PASSTHROUGH Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.instances.<name>.settings.POLICY_FNAME

The bot policy file to use. Leave this as null to respect the value set in services.anubis.instances.<name>.botPolicy. Type: null or absolute path Default: config.services.anubis.defaultOptions.settings.POLICY_FNAME Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.instances.<name>.settings.SERVE_ROBOTS_TXT

Whether to serve a default robots.txt that denies access to common AI bots by name and all other bots by wildcard. Type: boolean Default: config.services.anubis.defaultOptions.settings.SERVE_ROBOTS_TXT Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.instances.<name>.settings.TARGET

The reverse proxy target that Anubis is protecting. This is a required option. The usage of Unix domain sockets is supported by the following syntax: unix:///path/to/socket.sock. Type: string Example: "http://127.0.0.1:8000" Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.instances.<name>.settings.WEBMASTER_EMAIL

If set, shows a contact email address when rendering error pages. This email address will be how users can get in contact with administrators. Type: null or string Default: config.services.anubis.defaultOptions.settings.WEBMASTER_EMAIL Example: "alice@example.com" Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>
