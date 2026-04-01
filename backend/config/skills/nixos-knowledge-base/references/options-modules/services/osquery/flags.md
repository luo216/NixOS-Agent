---
module: services.osquery.flags
option_count: 3
source: options.html
---

# services.osquery.flags

## services.osquery.flags.database_path

Path used for the database file. Note If left as the default value, this directory will be automatically created before the service starts, otherwise you are responsible for ensuring the directory exists with the appropriate ownership and permissions. Type: absolute path (read only) Default: "/var/lib/osquery/osquery.db" Declared by: <nixpkgs/nixos/modules/services/monitoring/osquery.nix>

## services.osquery.flags.logger_path

Base directory used for logging. Note If left as the default value, this directory will be automatically created before the service starts, otherwise you are responsible for ensuring the directory exists with the appropriate ownership and permissions. Type: absolute path (read only) Default: "/var/log/osquery" Declared by: <nixpkgs/nixos/modules/services/monitoring/osquery.nix>

## services.osquery.flags.pidfile

Path used for pid file. Type: absolute path (read only) Default: "/run/osquery/osqueryd.pid" Declared by: <nixpkgs/nixos/modules/services/monitoring/osquery.nix>
