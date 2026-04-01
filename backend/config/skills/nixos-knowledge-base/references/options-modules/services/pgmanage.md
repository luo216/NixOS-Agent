---
module: services.pgmanage
option_count: 12
source: options.html
---

# services.pgmanage

## services.pgmanage.enable

Whether to enable PostgreSQL Administration for the web. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/pgmanage.nix>

## services.pgmanage.package

The pgmanage package to use. Type: package Default: pkgs.pgmanage Declared by: <nixpkgs/nixos/modules/services/databases/pgmanage.nix>

## services.pgmanage.allowCustomConnections

This tells pgmanage whether or not to allow anyone to use a custom connection from the login screen. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/pgmanage.nix>

## services.pgmanage.connections

pgmanage requires at least one PostgreSQL server be defined. Detailed information about PostgreSQL connection strings is available at: https://www.postgresql.org/docs/current/libpq-connect.html Note that you should not specify your user name or password. That information will be entered on the login screen. If you specify a username or password, it will be removed by pgmanage before attempting to connect to a database. Type: attribute set of string Default: { } Example: { mini-server = "hostaddr=127.0.0.1 port=5432 dbname=postgres sslmode=require"; nuc-server = "hostaddr=192.168.0.100 port=5432 dbname=postgres"; } Declared by: <nixpkgs/nixos/modules/services/databases/pgmanage.nix>

## services.pgmanage.localOnly

This tells pgmanage whether or not to set the listening socket to local addresses only. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/databases/pgmanage.nix>

## services.pgmanage.logLevel

Verbosity of logs Type: one of “error”, “warn”, “notice”, “info” Default: "error" Declared by: <nixpkgs/nixos/modules/services/databases/pgmanage.nix>

## services.pgmanage.loginGroup

This tells pgmanage to only allow users in a certain PostgreSQL group to login to pgmanage. Note that a connection will be made to PostgreSQL in order to test if the user is a member of the login group. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/pgmanage.nix>

## services.pgmanage.loginTimeout

Number of seconds of inactivity before user is automatically logged out. Type: signed integer Default: 3600 Declared by: <nixpkgs/nixos/modules/services/databases/pgmanage.nix>

## services.pgmanage.port

This tells pgmanage what port to listen on for browser requests. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/databases/pgmanage.nix>

## services.pgmanage.sqlRoot

This tells pgmanage where to put the SQL file history. All tabs are saved to this location so that if you get disconnected from pgmanage you don’t lose your work. Type: string Default: "/var/lib/pgmanage" Declared by: <nixpkgs/nixos/modules/services/databases/pgmanage.nix>

## services.pgmanage.superOnly

This tells pgmanage whether or not to only allow super users to login. The recommended value is true and will restrict users who are not super users from logging in to any PostgreSQL instance through pgmanage. Note that a connection will be made to PostgreSQL in order to test if the user is a superuser. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/databases/pgmanage.nix>

## services.pgmanage.tls

These options tell pgmanage where the TLS Certificate and Key files reside. If you use these options then you’ll only be able to access pgmanage through a secure TLS connection. These options are only necessary if you wish to connect directly to pgmanage using a secure TLS connection. As an alternative, you can set up pgmanage in a reverse proxy configuration. This allows your web server to terminate the secure connection and pass on the request to pgmanage. You can find help to set up this configuration in: https://github.com/pgManage/pgManage/blob/master/INSTALL_NGINX.md Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/databases/pgmanage.nix>
