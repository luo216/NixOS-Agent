---
module: services.pgbouncer.settings.pgbouncer
option_count: 8
source: options.html
---

# services.pgbouncer.settings.pgbouncer

## services.pgbouncer.settings.pgbouncer.default_pool_size

How many server connections to allow per user/database pair. Can be overridden in the per-database configuration. Type: signed integer Default: 20 Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>

## services.pgbouncer.settings.pgbouncer.ignore_startup_parameters

By default, PgBouncer allows only parameters it can keep track of in startup packets: client_encoding, datestyle, timezone and standard_conforming_strings. All others parameters will raise an error. To allow others parameters, they can be specified here, so that PgBouncer knows that they are handled by the admin and it can ignore them. If you need to specify multiple values, use a comma-separated list. IMPORTANT: When using prometheus-pgbouncer-exporter, you need: extra_float_digits https://github.com/prometheus-community/pgbouncer_exporter#pgbouncer-configuration Type: null or strings concatenated with “,” Default: null Example: "extra_float_digits" Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>

## services.pgbouncer.settings.pgbouncer.listen_addr

Specifies a list (comma-separated) of addresses where to listen for TCP connections. You may also use * meaning “listen on all addresses”. When not set, only Unix socket connections are accepted. Addresses can be specified numerically (IPv4/IPv6) or by name. Type: null or strings concatenated with “,” Default: null Example: "*" Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>

## services.pgbouncer.settings.pgbouncer.listen_port

Which port to listen on. Applies to both TCP and Unix sockets. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6432 Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>

## services.pgbouncer.settings.pgbouncer.max_client_conn

Maximum number of client connections allowed. When this setting is increased, then the file descriptor limits in the operating system might also have to be increased. Note that the number of file descriptors potentially used is more than maxClientConn. If each user connects under its own user name to the server, the theoretical maximum used is: maxClientConn + (max pool_size * total databases * total users) If a database user is specified in the connection string (all users connect under the same user name), the theoretical maximum is: maxClientConn + (max pool_size * total databases) The theoretical maximum should never be reached, unless somebody deliberately crafts a special load for it. Still, it means you should set the number of file descriptors to a safely high number. Type: signed integer Default: 100 Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>

## services.pgbouncer.settings.pgbouncer.max_db_connections

Do not allow more than this many server connections per database (regardless of user). This considers the PgBouncer database that the client has connected to, not the PostgreSQL database of the outgoing connection. This can also be set per database in the [databases] section. Note that when you hit the limit, closing a client connection to one pool will not immediately allow a server connection to be established for another pool, because the server connection for the first pool is still open. Once the server connection closes (due to idle timeout), a new server connection will immediately be opened for the waiting pool. 0 = unlimited Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>

## services.pgbouncer.settings.pgbouncer.max_user_connections

Do not allow more than this many server connections per user (regardless of database). This considers the PgBouncer user that is associated with a pool, which is either the user specified for the server connection or in absence of that the user the client has connected as. This can also be set per user in the [users] section. Note that when you hit the limit, closing a client connection to one pool will not immediately allow a server connection to be established for another pool, because the server connection for the first pool is still open. Once the server connection closes (due to idle timeout), a new server connection will immediately be opened for the waiting pool. 0 = unlimited Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>

## services.pgbouncer.settings.pgbouncer.pool_mode

Specifies when a server connection can be reused by other clients. session Server is released back to pool after client disconnects. Default. transaction Server is released back to pool after transaction finishes. statement Server is released back to pool after query finishes. Transactions spanning multiple statements are disallowed in this mode. Type: one of “session”, “transaction”, “statement” Default: "session" Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>
