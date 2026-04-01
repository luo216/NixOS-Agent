---
module: services.clickhouse
option_count: 6
source: options.html
---

# services.clickhouse

## services.clickhouse.enable

Whether to enable ClickHouse database server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/clickhouse.nix>

## services.clickhouse.package

The clickhouse package to use. Type: package Default: pkgs.clickhouse Example: pkgs.clickhouse-lts Declared by: <nixpkgs/nixos/modules/services/databases/clickhouse.nix>

## services.clickhouse.extraServerConfig

Additional raw XML configuration for ClickHouse server. Type: strings concatenated with “\n” Default: "" Example: '' <clickhouse> <max_connections>500</max_connections> <keep_alive_timeout>3</keep_alive_timeout> </clickhouse> '' Declared by: <nixpkgs/nixos/modules/services/databases/clickhouse.nix>

## services.clickhouse.extraUsersConfig

Additional raw XML configuration for ClickHouse server. Type: strings concatenated with “\n” Default: "" Example: '' <clickhouse> <users> <readonly> <profile>readonly</profile> </readonly> </users> </clickhouse> '' Declared by: <nixpkgs/nixos/modules/services/databases/clickhouse.nix>

## services.clickhouse.serverConfig

Your config.yaml as a Nix attribute set. Check the documentation for possible options. Type: YAML 1.1 value Default: { } Example: { http_port = 8123; tcp_port = 9000; remote_servers = { default = { shard = { replica = [ { host = "::"; port = "9000"; } { host = "::"; port = "9001"; } { host = "::"; port = "9002"; } ]; }; }; }; } Declared by: <nixpkgs/nixos/modules/services/databases/clickhouse.nix>

## services.clickhouse.usersConfig

Your users.yaml as a Nix attribute set. Check the documentation for possible options. Type: YAML 1.1 value Default: { } Example: { profiles = {}; users = { default = { profile = "default"; password_sha256_hex = "36dd292533174299fb0c34665df468bb881756ca9eaf9757d0cfde38f9ededa1"; # `echo -n verysecret | sha256sum` }; }; } Declared by: <nixpkgs/nixos/modules/services/databases/clickhouse.nix>
