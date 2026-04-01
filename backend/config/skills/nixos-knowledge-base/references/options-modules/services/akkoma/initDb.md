---
module: services.akkoma.initDb
option_count: 3
source: options.html
---

# services.akkoma.initDb

## services.akkoma.initDb.enable

Whether to automatically initialise the database on startup. This will create a database role and database if they do not already exist, and (re)set the role password and the ownership of the database. This setting can be used safely even if the database already exists and contains data. The database settings are configured through config.services.akkoma.config.":pleroma"."Pleroma.Repo". If disabled, the database has to be set up manually: CREATE ROLE akkoma LOGIN; CREATE DATABASE akkoma OWNER akkoma TEMPLATE template0 ENCODING 'utf8' LOCALE 'C'; \connect akkoma CREATE EXTENSION IF NOT EXISTS citext; CREATE EXTENSION IF NOT EXISTS pg_trgm; CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>

## services.akkoma.initDb.password

Password of the database user to initialise the database with. If set to null, no password will be used. The attribute _secret should point to a file containing the secret. Type: null or secret value Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>

## services.akkoma.initDb.username

Name of the database user to initialise the database with. This user is required to have the CREATEROLE and CREATEDB capabilities. Type: non-empty string Default: config.services.postgresql.superUser Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>
