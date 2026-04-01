---
module: services.gemstash.settings
option_count: 4
source: options.html
---

# services.gemstash.settings

## services.gemstash.settings.base_path

Path to store the gem files and the sqlite database. If left unchanged, the directory will be created. Type: absolute path Default: "/var/lib/gemstash" Declared by: <nixpkgs/nixos/modules/services/development/gemstash.nix>

## services.gemstash.settings.bind

Host and port combination for the server to listen on. Type: string Default: "tcp://0.0.0.0:9292" Declared by: <nixpkgs/nixos/modules/services/development/gemstash.nix>

## services.gemstash.settings.db_adapter

Which database type to use. For choices other than sqlite3, the dbUrl has to be specified as well. Type: null or one of “sqlite3”, “postgres”, “mysql”, “mysql2” Default: null Declared by: <nixpkgs/nixos/modules/services/development/gemstash.nix>

## services.gemstash.settings.db_url

The database to connect to when using postgres, mysql, or mysql2. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/development/gemstash.nix>
