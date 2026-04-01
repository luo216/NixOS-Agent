---
module: services.alice-lg
option_count: 3
source: options.html
---

# services.alice-lg

## services.alice-lg.enable

Whether to enable Alice Looking Glass. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/alice-lg.nix>

## services.alice-lg.package

The alice-lg package to use. Type: package Default: pkgs.alice-lg Declared by: <nixpkgs/nixos/modules/services/networking/alice-lg.nix>

## services.alice-lg.settings

alice-lg configuration, for configuration options see the example on github Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { server = { # configures the built-in webserver and provides global application settings listen_http = "127.0.0.1:7340"; enable_prefix_lookup = true; asn = 9033; store_backend = postgres; routes_store_refresh_parallelism = 5; neighbors_store_refresh_parallelism = 10000; routes_store_refresh_interval = 5; neighbors_store_refresh_interval = 5; }; postgres = { url = "postgres://postgres:postgres@localhost:5432/alice"; min_connections = 2; max_connections = 128; }; pagination = { routes_filtered_page_size = 250; routes_accepted_page_size = 250; routes_not_exported_page_size = 250; }; } Declared by: <nixpkgs/nixos/modules/services/networking/alice-lg.nix>
