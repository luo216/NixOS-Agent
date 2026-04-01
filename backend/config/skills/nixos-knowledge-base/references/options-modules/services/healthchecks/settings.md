---
module: services.healthchecks.settings
option_count: 6
source: options.html
---

# services.healthchecks.settings

## services.healthchecks.settings.ALLOWED_HOSTS

The host/domain names that this site can serve. Type: list of string Default: [ "*" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/healthchecks.nix>

## services.healthchecks.settings.DB

Database engine to use. Type: one of “sqlite”, “postgres”, “mysql” Default: "sqlite" Declared by: <nixpkgs/nixos/modules/services/web-apps/healthchecks.nix>

## services.healthchecks.settings.DB_NAME

Database name. Type: string Default: if config.services.healthchecks.settings.DB == "sqlite" then "${config.services.healthchecks.dataDir}/healthchecks.sqlite" else "hc" Declared by: <nixpkgs/nixos/modules/services/web-apps/healthchecks.nix>

## services.healthchecks.settings.DEBUG

Enable debug mode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/healthchecks.nix>

## services.healthchecks.settings.REGISTRATION_OPEN

A boolean that controls whether site visitors can create new accounts. Set it to false if you are setting up a private Healthchecks instance, but it needs to be publicly accessible (so, for example, your cloud services can send pings to it). If you close new user registration, you can still selectively invite users to your team account. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/healthchecks.nix>

## services.healthchecks.settings.SECRET_KEY_FILE

Path to a file containing the secret key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/healthchecks.nix>
