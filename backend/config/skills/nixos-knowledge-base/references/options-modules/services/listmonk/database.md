---
module: services.listmonk.database
option_count: 3
source: options.html
---

# services.listmonk.database

## services.listmonk.database.createLocally

Create the PostgreSQL database and database user locally. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/listmonk.nix>

## services.listmonk.database.mutableSettings

Database settings will be reset to the value set in this module if this is not enabled. Enable this if you want to persist changes you have done in the application. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/listmonk.nix>

## services.listmonk.database.settings

Dynamic settings in the PostgreSQL database, set by a SQL script, see https://github.com/knadh/listmonk/blob/master/schema.sql#L177-L230 for details. Type: null or (open submodule of attribute set of ((list of string) or list of attribute set of anything or string or signed integer or boolean)) Default: null Declared by: <nixpkgs/nixos/modules/services/mail/listmonk.nix>
