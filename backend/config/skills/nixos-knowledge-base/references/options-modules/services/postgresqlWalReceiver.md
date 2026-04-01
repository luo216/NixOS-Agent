---
module: services.postgresqlWalReceiver
option_count: 1
source: options.html
---

# services.postgresqlWalReceiver

## services.postgresqlWalReceiver.receivers

PostgreSQL WAL receivers. Stream write-ahead logs from a PostgreSQL server using pg_receivewal (formerly pg_receivexlog). See the man page for more information. Type: attribute set of (submodule) Default: { } Example: { main = { postgresqlPackage = pkgs.postgresql_15; directory = /mnt/pg_wal/main/; slot = "main_wal_receiver"; connection = "postgresql://user@somehost"; }; } Declared by: <nixpkgs/nixos/modules/services/backup/postgresql-wal-receiver.nix>
