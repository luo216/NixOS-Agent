---
module: services.mongodb
option_count: 13
source: options.html
---

# services.mongodb

## services.mongodb.enable

Whether to enable the MongoDB server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/mongodb.nix>

## services.mongodb.enableAuth

Enable client authentication. Creates a default superuser with username root! Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/mongodb.nix>

## services.mongodb.package

The mongodb package to use. Type: package Default: pkgs.mongodb Example: pkgs.mongodb-ce Declared by: <nixpkgs/nixos/modules/services/databases/mongodb.nix>

## services.mongodb.bind_ip

IP to bind to Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/databases/mongodb.nix>

## services.mongodb.dbpath

Location where MongoDB stores its files Type: string Default: "/var/db/mongodb" Declared by: <nixpkgs/nixos/modules/services/databases/mongodb.nix>

## services.mongodb.extraConfig

MongoDB extra configuration in YAML format Type: strings concatenated with “\n” Default: "" Example: '' storage.journal.enabled: false '' Declared by: <nixpkgs/nixos/modules/services/databases/mongodb.nix>

## services.mongodb.initialRootPasswordFile

Path to the file containing the password for the root user if auth is enabled. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/databases/mongodb.nix>

## services.mongodb.initialScript

A file containing MongoDB statements to execute on first startup. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/databases/mongodb.nix>

## services.mongodb.mongoshPackage

The mongosh package to use. Type: package Default: pkgs.mongosh Declared by: <nixpkgs/nixos/modules/services/databases/mongodb.nix>

## services.mongodb.pidFile

Location of MongoDB pid file Type: string Default: "/run/mongodb.pid" Declared by: <nixpkgs/nixos/modules/services/databases/mongodb.nix>

## services.mongodb.quiet

quieter output Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/mongodb.nix>

## services.mongodb.replSetName

If this instance is part of a replica set, set its name here. Otherwise, leave empty to run as single node. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/databases/mongodb.nix>

## services.mongodb.user

User account under which MongoDB runs Type: string Default: "mongodb" Declared by: <nixpkgs/nixos/modules/services/databases/mongodb.nix>
