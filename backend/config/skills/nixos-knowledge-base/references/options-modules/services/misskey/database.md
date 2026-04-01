---
module: services.misskey.database
option_count: 2
source: options.html
---

# services.misskey.database

## services.misskey.database.createLocally

Create the PostgreSQL database locally. Sets services.misskey.settings.db.{db,host,port,user,pass}. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.database.passwordFile

The path to a file containing the database password. Sets services.misskey.settings.db.pass. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>
