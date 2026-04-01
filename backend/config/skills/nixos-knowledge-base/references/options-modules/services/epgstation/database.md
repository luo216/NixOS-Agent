---
module: services.epgstation.database
option_count: 2
source: options.html
---

# services.epgstation.database

## services.epgstation.database.name

Name of the MySQL database that holds EPGStation’s data. Type: string Default: "epgstation" Declared by: <nixpkgs/nixos/modules/services/video/epgstation/default.nix>

## services.epgstation.database.passwordFile

A file containing the password for the database named database.name. Type: absolute path Example: "/run/keys/epgstation-db-password" Declared by: <nixpkgs/nixos/modules/services/video/epgstation/default.nix>
