---
module: services.szurubooru.server.settings.smtp
option_count: 4
source: options.html
---

# services.szurubooru.server.settings.smtp

## services.szurubooru.server.settings.smtp.host

Host of the SMTP server used to send reset password. Type: null or string Default: null Example: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.server.settings.smtp.passFile

File containing the password associated to the given user for the SMTP server. Type: null or absolute path Default: null Example: "/run/secrets/szurubooru-smtp-pass" Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.server.settings.smtp.port

Port of the SMTP server. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Example: 25 Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.server.settings.smtp.user

User to connect to the SMTP server. Type: null or string Default: null Example: "bot" Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>
