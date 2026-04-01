---
module: services.couchdb
option_count: 16
source: options.html
---

# services.couchdb

## services.couchdb.enable

Whether to enable CouchDB Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/couchdb.nix>

## services.couchdb.package

The couchdb3 package to use. Type: package Default: pkgs.couchdb3 Declared by: <nixpkgs/nixos/modules/services/databases/couchdb.nix>

## services.couchdb.adminPass

Couchdb (i.e. fauxton) account with permission for all dbs and tasks. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/couchdb.nix>

## services.couchdb.adminUser

Couchdb (i.e. fauxton) account with permission for all dbs and tasks. Type: string Default: "admin" Declared by: <nixpkgs/nixos/modules/services/databases/couchdb.nix>

## services.couchdb.argsFile

vm.args configuration. Overrides Couchdb’s Erlang VM parameters file. Type: absolute path Default: "config.services.couchdb.package/etc/vm.args" Declared by: <nixpkgs/nixos/modules/services/databases/couchdb.nix>

## services.couchdb.bindAddress

Defines the IP address by which CouchDB will be accessible. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/databases/couchdb.nix>

## services.couchdb.configFile

Configuration file for persisting runtime changes. File needs to be readable and writable from couchdb user/group. Type: absolute path Default: "/var/lib/couchdb/local.ini" Declared by: <nixpkgs/nixos/modules/services/databases/couchdb.nix>

## services.couchdb.databaseDir

Specifies location of CouchDB database files (*.couch named). This location should be writable and readable for the user the CouchDB service runs as (couchdb by default). Type: absolute path Default: "/var/lib/couchdb" Declared by: <nixpkgs/nixos/modules/services/databases/couchdb.nix>

## services.couchdb.extraConfig

Extra configuration options for CouchDB Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/databases/couchdb.nix>

## services.couchdb.extraConfigFiles

Extra configuration files. Overrides any other configuration. You can use this to setup the Admin user without putting the password in your nix store. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/databases/couchdb.nix>

## services.couchdb.group

Group account under which couchdb runs. Type: string Default: "couchdb" Declared by: <nixpkgs/nixos/modules/services/databases/couchdb.nix>

## services.couchdb.logFile

Specifies the location of file for logging output. Type: absolute path Default: "/var/log/couchdb.log" Declared by: <nixpkgs/nixos/modules/services/databases/couchdb.nix>

## services.couchdb.port

Defined the port number to listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5984 Declared by: <nixpkgs/nixos/modules/services/databases/couchdb.nix>

## services.couchdb.uriFile

This file contains the full URI that can be used to access this instance of CouchDB. It is used to help discover the port CouchDB is running on (if it was set to 0 (e.g. automatically assigned any free one). This file should be writable and readable for the user that runs the CouchDB service (couchdb by default). Type: absolute path Default: "/run/couchdb/couchdb.uri" Declared by: <nixpkgs/nixos/modules/services/databases/couchdb.nix>

## services.couchdb.user

User account under which couchdb runs. Type: string Default: "couchdb" Declared by: <nixpkgs/nixos/modules/services/databases/couchdb.nix>

## services.couchdb.viewIndexDir

Specifies location of CouchDB view index files. This location should be writable and readable for the user that runs the CouchDB service (couchdb by default). Type: absolute path Default: "/var/lib/couchdb" Declared by: <nixpkgs/nixos/modules/services/databases/couchdb.nix>
