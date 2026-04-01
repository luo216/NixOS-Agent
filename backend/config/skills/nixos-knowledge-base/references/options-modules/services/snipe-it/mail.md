---
module: services.snipe-it.mail
option_count: 7
source: options.html
---

# services.snipe-it.mail

## services.snipe-it.mail.backupNotificationAddress

Email Address to send Backup Notifications to. Type: string Default: "backup@example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.mail.driver

Mail driver to use. Type: one of “smtp”, “sendmail” Default: "smtp" Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.mail.encryption

SMTP encryption mechanism to use. Type: null or one of “tls”, “ssl” Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.mail.host

Mail host address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.mail.passwordFile

A file containing the password corresponding to mail.user. Type: null or absolute path Default: null Example: "/run/keys/snipe-it/mailpassword" Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.mail.port

Mail host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1025 Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.mail.user

Mail username. Type: null or string Default: null Example: "snipeit" Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>
