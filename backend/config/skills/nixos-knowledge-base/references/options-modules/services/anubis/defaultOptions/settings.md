---
module: services.anubis.defaultOptions.settings
option_count: 7
source: options.html
---

# services.anubis.defaultOptions.settings

## services.anubis.defaultOptions.settings.BIND_NETWORK

The network family that Anubis should bind to. Accepts anything supported by Go’s net.Listen. Common values are tcp and unix. Type: string Default: "unix" Example: "tcp" Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.defaultOptions.settings.DIFFICULTY

The difficulty required for clients to solve the challenge. Currently, this means the amount of leading zeros in a successful response. Type: signed integer Default: 4 Example: 5 Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.defaultOptions.settings.METRICS_BIND_NETWORK

The network family that the metrics server should bind to. Accepts anything supported by Go’s net.Listen. Common values are tcp and unix. Type: string Default: "unix" Example: "tcp" Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.defaultOptions.settings.OG_PASSTHROUGH

Whether to enable Open Graph tag passthrough. This enables social previews of resources protected by Anubis without having to exempt each scraper individually. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.defaultOptions.settings.POLICY_FNAME

The bot policy file to use. Leave this as null to respect the value set in services.anubis.instances.<name>.botPolicy. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.defaultOptions.settings.SERVE_ROBOTS_TXT

Whether to serve a default robots.txt that denies access to common AI bots by name and all other bots by wildcard. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.defaultOptions.settings.WEBMASTER_EMAIL

If set, shows a contact email address when rendering error pages. This email address will be how users can get in contact with administrators. Type: null or string Default: null Example: "alice@example.com" Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>
