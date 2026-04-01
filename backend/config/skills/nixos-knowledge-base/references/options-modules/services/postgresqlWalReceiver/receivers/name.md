---
module: services.postgresqlWalReceiver.receivers.<name>
option_count: 9
source: options.html
---

# services.postgresqlWalReceiver.receivers.<name>

## services.postgresqlWalReceiver.receivers.<name>.compress

Enables gzip compression of write-ahead logs, and specifies the compression level (0 through 9, 0 being no compression and 9 being best compression). The suffix .gz will automatically be added to all filenames. This option requires PostgreSQL >= 10. Type: integer between 0 and 9 (both inclusive) Default: 0 Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-wal-receiver.nix>

## services.postgresqlWalReceiver.receivers.<name>.connection

Specifies parameters used to connect to the server, as a connection string. See Section 34.1.1 of the PostgreSQL manual for more information. Because pg_receivewal doesn’t connect to any particular database in the cluster, database name in the connection string will be ignored. Type: string Example: "postgresql://user@somehost" Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-wal-receiver.nix>

## services.postgresqlWalReceiver.receivers.<name>.directory

Directory to write the output to. Type: absolute path Example: /mnt/pg_wal/main/ Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-wal-receiver.nix>

## services.postgresqlWalReceiver.receivers.<name>.environment

Environment variables passed to the service. Usable parameters are listed in Section 34.14 of the PostgreSQL manual. Type: attribute set of string Default: { } Example: { PGPASSFILE = "/private/passfile"; PGSSLMODE = "require"; } Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-wal-receiver.nix>

## services.postgresqlWalReceiver.receivers.<name>.extraArgs

A list of extra arguments to pass to the pg_receivewal command. Type: list of string Default: [ ] Example: [ "--no-sync" ] Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-wal-receiver.nix>

## services.postgresqlWalReceiver.receivers.<name>.postgresqlPackage

The postgresql package to use. Type: package Default: pkgs.postgresql Example: postgresql_15 Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-wal-receiver.nix>

## services.postgresqlWalReceiver.receivers.<name>.slot

Require pg_receivewal to use an existing replication slot (see Section 26.2.6 of the PostgreSQL manual). When this option is used, pg_receivewal will report a flush position to the server, indicating when each segment has been synchronized to disk so that the server can remove that segment if it is not otherwise needed. When the replication client of pg_receivewal is configured on the server as a synchronous standby, then using a replication slot will report the flush position to the server, but only when a WAL file is closed. Therefore, that configuration will cause transactions on the primary to wait for a long time and effectively not work satisfactorily. The option synchronous must be specified in addition to make this work correctly. Type: string Default: "" Example: "some_slot_name" Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-wal-receiver.nix>

## services.postgresqlWalReceiver.receivers.<name>.statusInterval

Specifies the number of seconds between status packets sent back to the server. This allows for easier monitoring of the progress from server. A value of zero disables the periodic status updates completely, although an update will still be sent when requested by the server, to avoid timeout disconnect. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-wal-receiver.nix>

## services.postgresqlWalReceiver.receivers.<name>.synchronous

Flush the WAL data to disk immediately after it has been received. Also send a status packet back to the server immediately after flushing, regardless of statusInterval. This option should be specified if the replication client of pg_receivewal is configured on the server as a synchronous standby, to ensure that timely feedback is sent to the server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-wal-receiver.nix>
