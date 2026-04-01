---
module: services.redis.servers.<name>
option_count: 24
source: options.html
---

# services.redis.servers.<name>

## services.redis.servers.<name>.enable

Whether to enable Redis server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.appendFsync

How often to fsync the append-only log, options: no, always, everysec. Type: string Default: "everysec" Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.appendOnly

By default data is only periodically persisted to disk, enable this option to use an append-only file for improved persistence. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.bind

The IP interface to bind to. null means “all interfaces”. Type: null or string Default: "127.0.0.1" Example: "192.0.2.1" Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.databases

Set the number of databases. Type: signed integer Default: 16 Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.extraParams

Extra parameters to append to redis-server invocation Type: list of string Default: [ ] Example: [ "--sentinel" ] Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.group

Group account under which this instance of redis-server runs. Note If left as the default value this group will automatically be created on system activation, otherwise you are responsible for ensuring the group exists before the redis service starts. Type: string Default: config.user Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.logLevel

Specify the server verbosity level, options: debug, verbose, notice, warning. Type: string Default: "notice" Example: "debug" Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.logfile

Specify the log file name. Also ‘stdout’ can be used to force Redis to log on the standard output. Type: string Default: "/dev/null" Example: "/var/log/redis.log" Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.masterAuth

If the master is password protected (using the requirePass configuration) it is possible to tell the slave to authenticate before starting the replication synchronization process, otherwise the master will refuse the slave request. (STORED PLAIN TEXT, WORLD-READABLE IN NIX STORE) Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.maxclients

Set the max number of connected clients at the same time. Type: signed integer Default: 10000 Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.openFirewall

Whether to open ports in the firewall for the server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.port

The TCP port to accept connections. If port 0 is specified Redis will not listen on a TCP socket. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: if name == "" then 6379 else 0 Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.requirePass

Password for database (STORED PLAIN TEXT, WORLD-READABLE IN NIX STORE). Use requirePassFile to store it outside of the nix store in a dedicated file. Type: null or string Default: null Example: "letmein!" Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.requirePassFile

File with password for the database. Type: null or absolute path Default: null Example: "/run/keys/redis-password" Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.save

The schedule in which data is persisted to disk, represented as a list of lists where the first element represent the amount of seconds and the second the number of changes. If set to the empty list ([]) then RDB persistence will be disabled (useful if you are using AOF or don’t want any persistence). Type: list of list of signed integer Default: [ [ 900 1 ] [ 300 10 ] [ 60 10000 ] ] Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.settings

Redis configuration. Refer to https://redis.io/topics/config for details on supported values. Type: attribute set of (boolean or signed integer or string or list of string) Default: { } Example: { loadmodule = [ "/path/to/my_module.so" "/path/to/other_module.so" ]; } Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.slaveOf

IP and port to which this redis instance acts as a slave. Type: null or (submodule) Default: null Example: { ip = "192.168.1.100"; port = 6379; } Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.slowLogLogSlowerThan

Log queries whose execution take longer than X in milliseconds. Type: signed integer Default: 10000 Example: 1000 Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.slowLogMaxLen

Maximum number of items to keep in slow log. Type: signed integer Default: 128 Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.syslog

Enable logging to the system logger. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.unixSocket

The path to the socket to bind to. Type: null or absolute path Default: if name == "" then "/run/redis/redis.sock" else "/run/redis-${name}/redis.sock" Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.unixSocketPerm

Change permissions for the socket Type: signed integer Default: 660 Example: 600 Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>

## services.redis.servers.<name>.user

User account under which this instance of redis-server runs. Note If left as the default value this user will automatically be created on system activation, otherwise you are responsible for ensuring the user exists before the redis service starts. Type: string Default: if name == "" then "redis" else "redis-${name}" Declared by: <nixpkgs/nixos/modules/services/databases/redis.nix>
