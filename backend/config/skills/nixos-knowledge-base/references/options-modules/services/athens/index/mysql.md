---
module: services.athens.index.mysql
option_count: 6
source: options.html
---

# services.athens.index.mysql

## services.athens.index.mysql.database

Database name for the MySQL database. Type: string Default: "athens" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.index.mysql.host

Host for the MySQL database. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.index.mysql.password

Password for the MySQL database. Warning: this is stored in plain text in the config file. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.index.mysql.port

Port for the MySQL database. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3306 Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.index.mysql.protocol

Protocol for the MySQL database. Type: string Default: "tcp" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.index.mysql.user

User for the MySQL database. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>
