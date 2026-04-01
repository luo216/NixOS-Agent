---
module: services.postgresql.ensureUsers.*
option_count: 3
source: options.html
---

# services.postgresql.ensureUsers.*

## services.postgresql.ensureUsers.*.ensureClauses

An attrset of clauses to grant to the user. Under the hood this uses the ALTER USER syntax for each attrName where the attrValue is true in the attrSet: ALTER USER user.name WITH attrName Type: submodule Default: The default, null, means that the user created will have the default permissions assigned by PostgreSQL. Subsequent server starts will not set or unset the clause, so imperative changes are preserved. Example: { superuser = true; createrole = true; createdb = true; } Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.ensureUsers.*.ensureDBOwnership

Grants the user ownership to a database with the same name. This database must be defined manually in services.postgresql.ensureDatabases. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.ensureUsers.*.name

Name of the user to ensure. Type: string Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>
