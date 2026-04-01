---
module: services.wastebin.settings
option_count: 8
source: options.html
---

# services.wastebin.settings

## services.wastebin.settings.RUST_LOG

Influences logging. Besides the typical trace, debug, info etc. keys, you can also set the tower_http key to some log level to get additional information request and response logs. Type: string Default: "info" Declared by: <nixpkgs/nixos/modules/services/misc/wastebin.nix>

## services.wastebin.settings.WASTEBIN_ADDRESS_PORT

Address and port to bind to Type: string Default: "0.0.0.0:8088" Declared by: <nixpkgs/nixos/modules/services/misc/wastebin.nix>

## services.wastebin.settings.WASTEBIN_BASE_URL

Base URL for the QR code display. If not set, the user agent’s Host header field is used as an approximation. Type: string Default: "http://localhost" Example: "https://myhost.tld" Declared by: <nixpkgs/nixos/modules/services/misc/wastebin.nix>

## services.wastebin.settings.WASTEBIN_CACHE_SIZE

Number of rendered syntax highlight items to cache. Can be disabled by setting to 0. Type: signed integer Default: 128 Declared by: <nixpkgs/nixos/modules/services/misc/wastebin.nix>

## services.wastebin.settings.WASTEBIN_DATABASE_PATH

Path to the sqlite3 database file. If not set, an in-memory database is used. Type: string Default: "/var/lib/wastebin/sqlite3.db" Declared by: <nixpkgs/nixos/modules/services/misc/wastebin.nix>

## services.wastebin.settings.WASTEBIN_HTTP_TIMEOUT

Maximum number of seconds a request can be processed until wastebin responds with 408 Type: signed integer Default: 5 Declared by: <nixpkgs/nixos/modules/services/misc/wastebin.nix>

## services.wastebin.settings.WASTEBIN_MAX_BODY_SIZE

Number of bytes to accept for POST requests Type: signed integer Default: 1048576 Declared by: <nixpkgs/nixos/modules/services/misc/wastebin.nix>

## services.wastebin.settings.WASTEBIN_TITLE

Overrides the HTML page title Type: string Default: "wastebin" Declared by: <nixpkgs/nixos/modules/services/misc/wastebin.nix>
