---
module: services.flarum
option_count: 13
source: options.html
---

# services.flarum

## services.flarum.enable

Whether to enable Flarum discussion platform. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/flarum.nix>

## services.flarum.package

The flarum package to use. Type: package Default: pkgs.flarum Declared by: <nixpkgs/nixos/modules/services/web-apps/flarum.nix>

## services.flarum.adminEmail

Email for first web application administrator Type: string Default: "admin@example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/flarum.nix>

## services.flarum.adminUser

Username for first web application administrator Type: string Default: "flarum" Declared by: <nixpkgs/nixos/modules/services/web-apps/flarum.nix>

## services.flarum.baseUrl

Change domain instead. Type: string Default: "http://localhost" Example: "https://forum.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/flarum.nix>

## services.flarum.createDatabaseLocally

Create the database and database user locally, and run installation. WARNING: Due to https://github.com/flarum/framework/issues/4018, this option is set to false by default. The ‘flarum install’ command may delete existing database tables. Only set this to true if you are certain you are working with a fresh, empty database. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/flarum.nix>

## services.flarum.database

MySQL database parameters Type: attribute set of (string or boolean or signed integer) Default: { database = "flarum"; driver = "mysql"; host = "localhost"; password = ""; port = 3306; prefix = ""; strict = false; username = "flarum"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/flarum.nix>

## services.flarum.domain

Domain to serve on. Type: string Default: "localhost" Example: "forum.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/flarum.nix>

## services.flarum.forumTitle

Title of the forum. Type: string Default: "A Flarum Forum on NixOS" Declared by: <nixpkgs/nixos/modules/services/web-apps/flarum.nix>

## services.flarum.group

System group to run Flarum Type: string Default: "flarum" Declared by: <nixpkgs/nixos/modules/services/web-apps/flarum.nix>

## services.flarum.initialAdminPassword

Initial password for the adminUser Type: string Default: "flarum" Declared by: <nixpkgs/nixos/modules/services/web-apps/flarum.nix>

## services.flarum.stateDir

Home directory for writable storage Type: absolute path Default: "/var/lib/flarum" Declared by: <nixpkgs/nixos/modules/services/web-apps/flarum.nix>

## services.flarum.user

System user to run Flarum Type: string Default: "flarum" Declared by: <nixpkgs/nixos/modules/services/web-apps/flarum.nix>
