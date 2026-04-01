---
module: services.engelsystem
option_count: 5
source: options.html
---

# services.engelsystem

## services.engelsystem.enable

Whether to enable engelsystem, an online tool for coordinating volunteers and shifts on large events. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/engelsystem.nix>

## services.engelsystem.package

The engelsystem package to use. Type: package Default: pkgs.engelsystem Declared by: <nixpkgs/nixos/modules/services/web-apps/engelsystem.nix>

## services.engelsystem.createDatabase

Whether to create a local database automatically. This will override every database setting in services.engelsystem.settings. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/engelsystem.nix>

## services.engelsystem.domain

Domain to serve on. Type: string Example: "engelsystem.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/engelsystem.nix>

## services.engelsystem.settings

Options to be added to config.php, as a nix attribute set. Options containing secret data should be set to an attribute set containing the attribute _secret - a string pointing to a file containing the value the option should be set to. See the example to get a better picture of this: in the resulting config.php file, the email.password key will be set to the contents of the /var/keys/engelsystem/mail file. See https://engelsystem.de/doc/admin/configuration/ for available options. Note that the admin user login credentials cannot be set here - they always default to admin:asdfasdf. Log in and change them immediately. Type: attribute set Default: { database = { database = "engelsystem"; host = "localhost"; username = "engelsystem"; }; } Example: { autoarrive = true; database = { database = "engelsystem"; host = "database.example.com"; password = { _secret = "/var/keys/engelsystem/database"; }; username = "engelsystem"; }; default_locale = "de_DE"; email = { driver = "smtp"; encryption = "tls"; from = { address = "engelsystem@example.com"; name = "example engelsystem"; }; host = "smtp.example.com"; password = { _secret = "/var/keys/engelsystem/mail"; }; port = 587; username = "engelsystem@example.com"; }; maintenance = false; min_password_length = 6; } Declared by: <nixpkgs/nixos/modules/services/web-apps/engelsystem.nix>
