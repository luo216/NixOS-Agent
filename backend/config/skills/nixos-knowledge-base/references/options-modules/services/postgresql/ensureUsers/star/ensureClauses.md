---
module: services.postgresql.ensureUsers.*.ensureClauses
option_count: 7
source: options.html
---

# services.postgresql.ensureUsers.*.ensureClauses

## services.postgresql.ensureUsers.*.ensureClauses.bypassrls

Grants the user, created by the ensureUser attr, replication permissions. From the postgres docs: A role must be explicitly given permission to bypass every row-level security (RLS) policy (except for superusers, since those bypass all permission checks). To create such a role, use CREATE ROLE name BYPASSRLS as a superuser. More information on postgres roles can be found here Type: null or boolean Default: null: do not set. For newly created roles, use PostgreSQL’s default. For existing roles, do not touch this clause. Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.ensureUsers.*.ensureClauses.createdb

Grants the user, created by the ensureUser attr, createdb permissions. From the postgres docs: A role must be explicitly given permission to create databases (except for superusers, since those bypass all permission checks). To create such a role, use CREATE ROLE name CREATEDB. More information on postgres roles can be found here Type: null or boolean Default: null: do not set. For newly created roles, use PostgreSQL’s default. For existing roles, do not touch this clause. Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.ensureUsers.*.ensureClauses.createrole

Grants the user, created by the ensureUser attr, createrole permissions. From the postgres docs: A role must be explicitly given permission to create more roles (except for superusers, since those bypass all permission checks). To create such a role, use CREATE ROLE name CREATEROLE. A role with CREATEROLE privilege can alter and drop other roles, too, as well as grant or revoke membership in them. However, to create, alter, drop, or change membership of a superuser role, superuser status is required; CREATEROLE is insufficient for that. More information on postgres roles can be found here Type: null or boolean Default: null: do not set. For newly created roles, use PostgreSQL’s default. For existing roles, do not touch this clause. Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.ensureUsers.*.ensureClauses.inherit

Grants the user created inherit permissions. From the postgres docs: A role is given permission to inherit the privileges of roles it is a member of, by default. However, to create a role without the permission, use CREATE ROLE name NOINHERIT. More information on postgres roles can be found here Type: null or boolean Default: null: do not set. For newly created roles, use PostgreSQL’s default. For existing roles, do not touch this clause. Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.ensureUsers.*.ensureClauses.login

Grants the user, created by the ensureUser attr, login permissions. From the postgres docs: Only roles that have the LOGIN attribute can be used as the initial role name for a database connection. A role with the LOGIN attribute can be considered the same as a “database user”. To create a role with login privilege, use either: CREATE ROLE name LOGIN; CREATE USER name; (CREATE USER is equivalent to CREATE ROLE except that CREATE USER includes LOGIN by default, while CREATE ROLE does not.) More information on postgres roles can be found here Type: null or boolean Default: null: do not set. For newly created roles, use PostgreSQL’s default. For existing roles, do not touch this clause. Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.ensureUsers.*.ensureClauses.replication

Grants the user, created by the ensureUser attr, replication permissions. From the postgres docs: A role must explicitly be given permission to initiate streaming replication (except for superusers, since those bypass all permission checks). A role used for streaming replication must have LOGIN permission as well. To create such a role, use CREATE ROLE name REPLICATION LOGIN. More information on postgres roles can be found here Type: null or boolean Default: null: do not set. For newly created roles, use PostgreSQL’s default. For existing roles, do not touch this clause. Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.ensureUsers.*.ensureClauses.superuser

Grants the user, created by the ensureUser attr, superuser permissions. From the postgres docs: A database superuser bypasses all permission checks, except the right to log in. This is a dangerous privilege and should not be used carelessly; it is best to do most of your work as a role that is not a superuser. To create a new database superuser, use CREATE ROLE name SUPERUSER. You must do this as a role that is already a superuser. More information on postgres roles can be found here Type: null or boolean Default: null: do not set. For newly created roles, use PostgreSQL’s default. For existing roles, do not touch this clause. Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>
