---
module: services.shiori
option_count: 7
source: options.html
---

# services.shiori

## services.shiori.enable

Whether to enable Shiori simple bookmarks manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/shiori.nix>

## services.shiori.package

The shiori package to use. Type: package Default: pkgs.shiori Declared by: <nixpkgs/nixos/modules/services/web-apps/shiori.nix>

## services.shiori.address

The IP address on which Shiori will listen. If empty, listens on all interfaces. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/shiori.nix>

## services.shiori.databaseUrl

The connection URL to connect to MySQL or PostgreSQL Type: null or string Default: null Example: "postgres:///shiori?host=/run/postgresql" Declared by: <nixpkgs/nixos/modules/services/web-apps/shiori.nix>

## services.shiori.environmentFile

Path to file containing environment variables. Useful for passing down secrets. https://github.com/go-shiori/shiori/blob/master/docs/Configuration.md#overall-configuration Type: null or absolute path Default: null Example: "/path/to/environmentFile" Declared by: <nixpkgs/nixos/modules/services/web-apps/shiori.nix>

## services.shiori.port

The port of the Shiori web application Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/web-apps/shiori.nix>

## services.shiori.webRoot

The root of the Shiori web application Type: string Default: "/" Example: "/shiori" Declared by: <nixpkgs/nixos/modules/services/web-apps/shiori.nix>
