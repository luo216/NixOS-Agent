---
module: services.postgresql
option_count: 16
source: options.html
---

# services.postgresql

## services.postgresql.enable

Whether to enable PostgreSQL Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.enableJIT

Whether to enable JIT support. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.enableTCPIP

Whether PostgreSQL should listen on all network interfaces. If disabled, the database can only be accessed via its Unix domain socket or via TCP connections to localhost. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.package

The package being used by postgresql. Type: package Default: if versionAtLeast config.system.stateVersion "25.11" then pkgs.postgresql_17 else if versionAtLeast config.system.stateVersion "24.11" then pkgs.postgresql_16 else if versionAtLeast config.system.stateVersion "23.11" then pkgs.postgresql_15 else pkgs.postgresql_14 Example: pkgs.postgresql_15 Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.authentication

Defines how users authenticate themselves to the server. See the PostgreSQL documentation for pg_hba.conf for details on the expected format of this option. By default, peer based authentication will be used for users connecting via the Unix socket, and md5 password authentication will be used for users connecting via TCP. Any added rules will be inserted above the default rules. If you’d like to replace the default rules entirely, you can use lib.mkForce in your module. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.checkConfig

Check the syntax of the configuration file at compile time Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.dataDir

The data directory for PostgreSQL. If left as the default value this directory will automatically be created before the PostgreSQL server starts, otherwise the sysadmin is responsible for ensuring the directory exists with appropriate ownership and permissions. Type: absolute path Default: "/var/lib/postgresql/${config.services.postgresql.package.psqlSchema}" Example: "/var/lib/postgresql/15" Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.ensureDatabases

Ensures that the specified databases exist. This option will never delete existing databases, especially not when the value of this option is changed. This means that databases created once through this option or otherwise have to be removed manually. Type: list of string Default: [ ] Example: [ "gitea" "nextcloud" ] Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.ensureUsers

Ensures that the specified users exist. The PostgreSQL users will be identified using peer authentication. This authenticates the Unix user with the same name only, and that without the need for a password. This option will never delete existing users or remove DB ownership of databases once granted with ensureDBOwnership = true;. This means that this must be cleaned up manually when changing after changing the config in here. Type: list of (submodule) Default: [ ] Example: [ { name = "nextcloud"; } { name = "superuser"; ensureDBOwnership = true; } ] Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.extensions

List of PostgreSQL extensions to install. Type: (function that evaluates to a(n) list of absolute path) or (list of absolute path) convertible to it Default: <function> Example: ps: with ps; [ postgis pg_repack ] Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.finalPackage

The postgresql package that will effectively be used in the system. It consists of the base package with plugins applied to it. Type: package (read only) Default: "with config.services.postgresql; package.withPackages extensions" Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.identMap

Defines the mapping from system users to database users. See the auth doc. There is a default map “postgres” which is used for local peer authentication as the postgres superuser role. For example, to allow the root user to login as the postgres superuser, add: postgres root postgres Type: strings concatenated with “\n” Default: "" Example: '' map-name-0 system-username-0 database-username-0 map-name-1 system-username-1 database-username-1 '' Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.initdbArgs

Additional arguments passed to initdb during data dir initialisation. Type: list of string Default: [ ] Example: [ "--data-checksums" "--allow-group-access" ] Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.initialScript

A file containing SQL statements to execute on first startup. Type: null or absolute path Default: null Example: pkgs.writeText "init-sql-script" '' alter user postgres with password 'myPassword'; ''; Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.settings

PostgreSQL configuration. Refer to https://www.postgresql.org/docs/current/config-setting.html#CONFIG-SETTING-CONFIGURATION-FILE for an overview of postgresql.conf. Note String values will automatically be enclosed in single quotes. Single quotes will be escaped with two single quotes as described by the upstream documentation linked above. Type: open submodule of attribute set of (boolean or floating point number or signed integer or string) Default: { } Example: { log_connections = true; log_statement = "all"; logging_collector = true; log_disconnections = true; log_destination = lib.mkForce "syslog"; } Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.systemCallFilter

Configures the syscall filter for postgresql.service. The keys are declarations for SystemCallFilter as described in systemd.exec(5). The value is a boolean: true adds the attribute name to the syscall filter-set, false doesn’t. This is done to allow downstream configurations to turn off restrictions made here. E.g. with { services.postgresql.systemCallFilter."~@resources" = false; } it’s possible to remove the restriction on @resources (keep in mind that @system-service implies @resources). As described in the section for services.postgresql.systemCallFilter.<name>.priority, the ordering matters. Hence, it’s also possible to specify customizations with { services.postgresql.systemCallFilter = { "foobar" = { enable = true; priority = 23; }; }; } services.postgresql.systemCallFilter.<name>.enable is the flag whether or not it will be added to the SystemCallFilter of postgresql.service. Settings with a higher priority are added after filter settings with a lower priority. Hence, syscall groups with a higher priority can discard declarations with a lower priority. By default, syscall groups (i.e. attribute names starting with @) are added before negated groups (i.e. ~@ as prefix) before syscall names and negations. Type: attribute set of ((submodule) or boolean convertible to it) Default: { "@system-service" = true; "~@privileged" = true; "~@resources" = true; } Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>
