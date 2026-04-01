---
module: services.maubot.settings.plugin_databases
option_count: 4
source: options.html
---

# services.maubot.settings.plugin_databases

## services.maubot.settings.plugin_databases.postgres

The connection URL for plugin database. See example config for exact format. Type: null or string Default: if isPostgresql config.services.maubot.settings.database then "default" else null Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.plugin_databases.postgres_max_conns_per_plugin

Maximum number of connections per plugin instance. Type: null or signed integer Default: 3 Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.plugin_databases.postgres_opts

Overrides for the default database_opts when using a non-default postgres connection URL. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.plugin_databases.sqlite

The directory where SQLite plugin databases should be stored. Type: string Default: "${config.services.maubot.dataDir}/plugins" Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>
