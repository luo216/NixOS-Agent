---
module: services.matrix-conduit.settings.global
option_count: 11
source: options.html
---

# services.matrix-conduit.settings.global

## services.matrix-conduit.settings.global.address

Address to listen on for connections by the reverse proxy/tls terminator. Type: string Default: "::1" Declared by: <nixpkgs/nixos/modules/services/matrix/conduit.nix>

## services.matrix-conduit.settings.global.allow_check_for_updates

Whether to allow Conduit to automatically contact https://conduit.rs hourly to check for important Conduit news. Disabled by default because nixpkgs handles updates. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/matrix/conduit.nix>

## services.matrix-conduit.settings.global.allow_encryption

Whether new encrypted rooms can be created. Note: existing rooms will continue to work. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/matrix/conduit.nix>

## services.matrix-conduit.settings.global.allow_federation

Whether this server federates with other servers. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/matrix/conduit.nix>

## services.matrix-conduit.settings.global.allow_registration

Whether new users can register on this server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/matrix/conduit.nix>

## services.matrix-conduit.settings.global.database_backend

The database backend for the service. Switching it on an existing instance will require manual migration of data. Type: one of “sqlite”, “rocksdb” Default: "sqlite" Example: "rocksdb" Declared by: <nixpkgs/nixos/modules/services/matrix/conduit.nix>

## services.matrix-conduit.settings.global.database_path

Path to the conduit database, the directory where conduit will save its data. Note that due to using the DynamicUser feature of systemd, this value should not be changed and is set to be read only. Type: string (read only) Default: "/var/lib/matrix-conduit/" Declared by: <nixpkgs/nixos/modules/services/matrix/conduit.nix>

## services.matrix-conduit.settings.global.max_request_size

Max request size in bytes. Don’t forget to also change it in the proxy. Type: positive integer, meaning >0 Default: 20000000 Declared by: <nixpkgs/nixos/modules/services/matrix/conduit.nix>

## services.matrix-conduit.settings.global.port

The port Conduit will be running on. You need to set up a reverse proxy in your web server (e.g. apache or nginx), so all requests to /_matrix on port 443 and 8448 will be forwarded to the Conduit instance running on this port Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6167 Declared by: <nixpkgs/nixos/modules/services/matrix/conduit.nix>

## services.matrix-conduit.settings.global.server_name

The server_name is the name of this server. It is used as a suffix for user # and room ids. Type: string Example: "example.com" Declared by: <nixpkgs/nixos/modules/services/matrix/conduit.nix>

## services.matrix-conduit.settings.global.trusted_servers

Servers trusted with signing server keys. Type: list of string Default: [ "matrix.org" ] Declared by: <nixpkgs/nixos/modules/services/matrix/conduit.nix>
