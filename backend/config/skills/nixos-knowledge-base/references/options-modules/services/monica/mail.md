---
module: services.monica.mail
option_count: 8
source: options.html
---

# services.monica.mail

## services.monica.mail.driver

Mail driver to use. Type: one of “smtp”, “sendmail” Default: "smtp" Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.mail.encryption

SMTP encryption mechanism to use. Type: null or value “tls” (singular enum) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.mail.from

Mail “from” email. Type: string Default: "mail@monica.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.mail.fromName

Mail “from” name. Type: string Default: "monica" Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.mail.host

Mail host address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.mail.passwordFile

A file containing the password corresponding to <option>mail.user</option>. Type: null or absolute path Default: null Example: "/run/keys/monica-mailpassword" Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.mail.port

Mail host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1025 Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.mail.user

Mail username. Type: null or string Default: null Example: "monica" Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>
