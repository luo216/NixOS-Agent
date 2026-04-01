---
module: services.mysql.ensureUsers.*
option_count: 2
source: options.html
---

# services.mysql.ensureUsers.*

## services.mysql.ensureUsers.*.ensurePermissions

Permissions to ensure for the user, specified as attribute set. The attribute names specify the database and tables to grant the permissions for, separated by a dot. You may use wildcards here. The attribute values specfiy the permissions to grant. You may specify one or multiple comma-separated SQL privileges here. For more information on how to specify the target and on which privileges exist, see the GRANT syntax. The attributes are used as GRANT ${attrName} ON ${attrValue}. Type: attribute set of string Default: { } Example: { "database.*" = "ALL PRIVILEGES"; "*.*" = "SELECT, LOCK TABLES"; } Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>

## services.mysql.ensureUsers.*.name

Name of the user to ensure. Type: string Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>
