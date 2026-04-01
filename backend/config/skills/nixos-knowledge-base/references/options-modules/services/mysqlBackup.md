---
module: services.mysqlBackup
option_count: 9
source: options.html
---

# services.mysqlBackup

## services.mysqlBackup.enable

Whether to enable MySQL backups. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/mysql-backup.nix>

## services.mysqlBackup.calendar

Configured when to run the backup service systemd unit (DayOfWeek Year-Month-Day Hour:Minute:Second). Type: string Default: "01:15:00" Declared by: <nixpkgs/nixos/modules/services/backup/mysql-backup.nix>

## services.mysqlBackup.compressionAlg

Compression algorithm to use for database dumps. Type: one of “gzip”, “xz”, “zstd” Default: "gzip" Declared by: <nixpkgs/nixos/modules/services/backup/mysql-backup.nix>

## services.mysqlBackup.compressionLevel

Compression level to use for gzip, xz or zstd. For gzip: 1-9 For xz: 0-9 For zstd: 1-19 Note If compression level is also specified in gzipOptions, the gzipOptions value will be overwritten Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/backup/mysql-backup.nix>

## services.mysqlBackup.databases

List of database names to dump. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/backup/mysql-backup.nix>

## services.mysqlBackup.gzipOptions

Command line options to use when invoking gzip. Only used when compression is set to “gzip”. If compression level is specified both here and in compressionLevel, the compressionLevel value will take precedence. Type: string Default: "--no-name --rsyncable" Declared by: <nixpkgs/nixos/modules/services/backup/mysql-backup.nix>

## services.mysqlBackup.location

Location to put the compressed MySQL database dumps. Type: absolute path Default: "/var/backup/mysql" Declared by: <nixpkgs/nixos/modules/services/backup/mysql-backup.nix>

## services.mysqlBackup.singleTransaction

Whether to create database dump in a single transaction. Can be either a boolean for all databases or a list of database names. Type: boolean or list of string Default: false Declared by: <nixpkgs/nixos/modules/services/backup/mysql-backup.nix>

## services.mysqlBackup.user

User to be used to perform backup. Type: string Default: "mysqlbackup" Declared by: <nixpkgs/nixos/modules/services/backup/mysql-backup.nix>
