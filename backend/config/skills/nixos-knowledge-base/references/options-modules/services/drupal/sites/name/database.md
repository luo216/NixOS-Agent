---
module: services.drupal.sites.<name>.database
option_count: 8
source: options.html
---

# services.drupal.sites.<name>.database

## services.drupal.sites.<name>.database.createLocally

Create the database and database user locally. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.database.host

Database host address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.database.name

Database name. Type: string Default: "drupal" Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.database.passwordFile

A file containing the password corresponding to database.user. Type: null or absolute path Default: null Example: "/run/keys/database-dbpassword" Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.database.port

Database host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3306 Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.database.socket

Path to the unix socket file to use for authentication. Type: null or absolute path Default: /run/mysqld/mysqld.sock Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.database.tablePrefix

The $table_prefix is the value placed in the front of your database tables. Change the value if you want to use something other than dp_ for your database prefix. Typically this is changed if you are installing multiple Drupal sites in the same database. Type: string Default: "dp_" Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.database.user

Database user. Type: string Default: "drupal" Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>
