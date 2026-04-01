---
module: services.postgresqlBackup
option_count: 9
source: options.html
---

# services.postgresqlBackup

## services.postgresqlBackup.enable

Whether to enable PostgreSQL dumps. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-backup.nix>

## services.postgresqlBackup.backupAll

Backup all databases using pg_dumpall. This option is mutual exclusive to services.postgresqlBackup.databases. The resulting backup dump will have the name all.sql.gz. This option is the default if no databases are specified. Type: boolean Default: services.postgresqlBackup.databases == [] Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-backup.nix>

## services.postgresqlBackup.compression

The type of compression to use on the generated database dump. Type: one of “none”, “gzip”, “zstd” Default: "gzip" Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-backup.nix>

## services.postgresqlBackup.compressionLevel

The compression level used when compression is enabled. gzip accepts levels 1 to 9. zstd accepts levels 1 to 19. Type: integer between 1 and 19 (both inclusive) Default: 6 Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-backup.nix>

## services.postgresqlBackup.databases

List of database names to dump. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-backup.nix>

## services.postgresqlBackup.location

Path of directory where the PostgreSQL database dumps will be placed. Type: absolute path Default: "/var/backup/postgresql" Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-backup.nix>

## services.postgresqlBackup.pgdumpAllOptions

Command line options for pg_dumpall. This options is not used if config.services.postgresqlBackup.backupAll is disabled. Type: strings concatenated with " " Default: "" Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-backup.nix>

## services.postgresqlBackup.pgdumpOptions

Command line options for pg_dump. This options is not used if config.services.postgresqlBackup.backupAll is enabled. Note that config.services.postgresqlBackup.backupAll is also active, when no databases where specified. Type: strings concatenated with " " Default: "-C" Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-backup.nix>

## services.postgresqlBackup.startAt

This option defines (see systemd.time for format) when the databases should be dumped. The default is to update at 01:15 (at night) every day. Type: (list of string) or string Default: "*-*-* 01:15:00" Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-backup.nix>
