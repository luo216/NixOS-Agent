---
module: services.mysql.replication
option_count: 7
source: options.html
---

# services.mysql.replication

## services.mysql.replication.masterHost

Hostname of the MySQL master server. Type: string Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>

## services.mysql.replication.masterPassword

Password of the MySQL replication user. Type: string Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>

## services.mysql.replication.masterPort

Port number on which the MySQL master server runs. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3306 Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>

## services.mysql.replication.masterUser

Username of the MySQL replication user. Type: string Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>

## services.mysql.replication.role

Role of the MySQL server instance. Type: one of “master”, “slave”, “none” Default: "none" Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>

## services.mysql.replication.serverId

Id of the MySQL server instance. This number must be unique for each instance. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>

## services.mysql.replication.slaveHost

Hostname of the MySQL slave server. Type: string Declared by: <nixpkgs/nixos/modules/services/databases/mysql.nix>
