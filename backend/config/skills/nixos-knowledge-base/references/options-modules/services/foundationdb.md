---
module: services.foundationdb
option_count: 23
source: options.html
---

# services.foundationdb

## services.foundationdb.enable

Whether to enable FoundationDB Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.package

The FoundationDB package to use for this server. This must be specified by the user in order to ensure migrations and upgrades are controlled appropriately. Type: package Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.backupProcesses

Number of backup_agent processes to run for snapshots. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.class

Process class Type: null or one of “storage”, “transaction”, “stateless” Default: null Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.dataDir

Data directory. All cluster data will be put under here. Type: absolute path Default: "/var/lib/foundationdb" Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.extraReadWritePaths

An extra set of filesystem paths that FoundationDB can read to and write from. By default, FoundationDB runs under a heavily namespaced systemd environment without write access to most of the filesystem outside of its data and log directories. By adding paths to this list, the set of writeable paths will be expanded. This is useful for allowing e.g. backups to local files, which must be performed on behalf of the foundationdb service. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.group

Group account under which FoundationDB runs. Type: string Default: "foundationdb" Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.listenAddress

Publicly visible IP address of the process. Port is determined by process ID Type: string Default: "public" Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.listenPortStart

Starting port number for database listening sockets. Every FDB process binds to a subsequent port, to this number reflects the start of the overall range. e.g. having 8 server processes will use all ports between 4500 and 4507. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4500 Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.locality

FoundationDB locality settings. Type: submodule Default: { dataHall = null; datacenterId = null; machineId = null; zoneId = null; } Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.logDir

Log directory. Type: absolute path Default: "/var/log/foundationdb" Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.logSize

Roll over to a new log file after the current log file reaches the specified size. Type: string Default: "10MiB" Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.maxLogSize

Delete the oldest log file when the total size of all log files exceeds the specified size. If set to 0, old log files will not be deleted. Type: string Default: "100MiB" Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.memory

Maximum memory used by the process. The default value is 8GiB. When specified without a unit, MiB is assumed. This parameter does not change the memory allocation of the program. Rather, it sets a hard limit beyond which the process will kill itself and be restarted. The default value of 8GiB is double the intended memory usage in the default configuration (providing an emergency buffer to deal with memory leaks or similar problems). It is not recommended to decrease the value of this parameter below its default value. It may be increased if you wish to allocate a very large amount of storage engine memory or cache. In particular, when the storageMemory parameter is increased, the memory parameter should be increased by an equal amount. Type: string Default: "8GiB" Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.openFirewall

Open the firewall ports corresponding to FoundationDB processes and coordinators using config.networking.firewall.*. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.pidfile

Path to pidfile for fdbmonitor. Type: absolute path Default: "/run/foundationdb.pid" Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.publicAddress

Publicly visible IP address of the process. Port is determined by process ID Type: string Default: "auto" Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.restartDelay

Number of seconds to wait before restarting servers. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.serverProcesses

Number of fdbserver processes to run. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.storageMemory

Maximum memory used for data storage. The default value is 1GiB. When specified without a unit, MB is assumed. Clusters using the memory storage engine will be restricted to using this amount of memory per process for purposes of data storage. Memory overhead associated with storing the data is counted against this total. If you increase the storageMemory, you should also increase the memory parameter by the same amount. Type: string Default: "1GiB" Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.tls

FoundationDB Transport Security Layer (TLS) settings. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.traceFormat

Trace logging format. Type: one of “xml”, “json” Default: "xml" Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.user

User account under which FoundationDB runs. Type: string Default: "foundationdb" Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>
