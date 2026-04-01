---
module: services.nominatim.database
option_count: 7
source: options.html
---

# services.nominatim.database

## services.nominatim.database.apiUser

Postgresql database user with read-only permissions used for Nominatim web API service. Type: string Default: "nominatim-api" Declared by: <nixpkgs/nixos/modules/services/search/nominatim.nix>

## services.nominatim.database.dbname

Name of the postgresql database. Type: string Default: "nominatim" Declared by: <nixpkgs/nixos/modules/services/search/nominatim.nix>

## services.nominatim.database.extraConnectionParams

Extra Nominatim database connection parameters. Format: <param1>=<value1>;<param2>=<value2> See https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-PARAMKEYWORDS. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/search/nominatim.nix>

## services.nominatim.database.host

Host of the postgresql server. If not set to localhost, Nominatim database and postgresql superuser with appropriate permissions must exist on target host. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/search/nominatim.nix>

## services.nominatim.database.passwordFile

Password file used for Nominatim database connection. Must be readable only for the Nominatim web API user. The file must be a valid .pgpass file as described in: https://www.postgresql.org/docs/current/libpq-pgpass.html In most cases, the following will be enough: *:*:*:*:<password> Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/search/nominatim.nix>

## services.nominatim.database.port

Port of the postgresql database. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5432 Declared by: <nixpkgs/nixos/modules/services/search/nominatim.nix>

## services.nominatim.database.superUser

Postgresql database superuser used to create Nominatim database and import data. If database.host is set to localhost, a unix user and group of the same name will be automatically created. Type: string Default: "nominatim" Declared by: <nixpkgs/nixos/modules/services/search/nominatim.nix>
