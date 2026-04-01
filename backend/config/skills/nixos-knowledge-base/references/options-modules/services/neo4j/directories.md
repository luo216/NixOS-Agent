---
module: services.neo4j.directories
option_count: 5
source: options.html
---

# services.neo4j.directories

## services.neo4j.directories.certificates

Directory for storing certificates to be used by Neo4j for TLS connections. When setting this directory to something other than its default, ensure the directory’s existence, and that read/write permissions are given to the Neo4j daemon user neo4j. Note that changing this directory from its default will prevent the directory structure required for each SSL policy from being automatically generated. A policy’s directory structure as defined by its baseDirectory,revokedDir and trustedDir must then be setup manually. The existence of these directories is mandatory, as well as the presence of the certificate file and the private key. Ensure the correct permissions are set on these directories and files. Type: absolute path Default: "${config.services.neo4j.directories.home}/certificates" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.directories.data

Path of the data directory. You must not configure more than one Neo4j installation to use the same data directory. When setting this directory to something other than its default, ensure the directory’s existence, and that read/write permissions are given to the Neo4j daemon user neo4j. Type: absolute path Default: "${config.services.neo4j.directories.home}/data" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.directories.home

Path of the Neo4j home directory. Other default directories are subdirectories of this path. This directory will be created if non-existent, and its ownership will be chown to the Neo4j daemon user neo4j. Type: absolute path Default: "/var/lib/neo4j" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.directories.imports

The root directory for file URLs used with the Cypher LOAD CSV clause. Only meaningful when constrainLoadCvs is set to true. When setting this directory to something other than its default, ensure the directory’s existence, and that read permission is given to the Neo4j daemon user neo4j. Type: absolute path Default: "${config.services.neo4j.directories.home}/import" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.directories.plugins

Path of the database plugin directory. Compiled Java JAR files that contain database procedures will be loaded if they are placed in this directory. When setting this directory to something other than its default, ensure the directory’s existence, and that read permission is given to the Neo4j daemon user neo4j. Type: absolute path Default: "${config.services.neo4j.directories.home}/plugins" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>
