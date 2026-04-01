---
module: services.agorakit.mail
option_count: 8
source: options.html
---

# services.agorakit.mail

## services.agorakit.mail.driver

Mail driver to use. Type: one of “smtp”, “sendmail” Default: "smtp" Declared by: <nixpkgs/nixos/modules/services/web-apps/agorakit.nix>

## services.agorakit.mail.encryption

SMTP encryption mechanism to use. Type: null or value “tls” (singular enum) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/agorakit.nix>

## services.agorakit.mail.from

Mail “from” email. Type: string Default: "mail@agorakit.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/agorakit.nix>

## services.agorakit.mail.fromName

Mail “from” name. Type: string Default: "agorakit" Declared by: <nixpkgs/nixos/modules/services/web-apps/agorakit.nix>

## services.agorakit.mail.host

Mail host address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/agorakit.nix>

## services.agorakit.mail.passwordFile

A file containing the password corresponding to <option>mail.user</option>. Type: null or absolute path Default: null Example: "/run/keys/agorakit-mailpassword" Declared by: <nixpkgs/nixos/modules/services/web-apps/agorakit.nix>

## services.agorakit.mail.port

Mail host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1025 Declared by: <nixpkgs/nixos/modules/services/web-apps/agorakit.nix>

## services.agorakit.mail.user

Mail username. Type: null or string Default: null Example: "agorakit" Declared by: <nixpkgs/nixos/modules/services/web-apps/agorakit.nix>
