---
module: services.dawarich.smtp
option_count: 5
source: options.html
---

# services.dawarich.smtp

## services.dawarich.smtp.fromAddress

“From” address used when sending emails to users. Type: null or string Default: null Example: "dawarich@example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/dawarich.nix>

## services.dawarich.smtp.host

SMTP host used when sending emails to users. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/dawarich.nix>

## services.dawarich.smtp.passwordFile

Path to file containing the SMTP password. Type: null or absolute path Default: null Example: "/run/keys/dawarich-smtp-password" Declared by: <nixpkgs/nixos/modules/services/web-apps/dawarich.nix>

## services.dawarich.smtp.port

SMTP port used when sending emails to users. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 25 Declared by: <nixpkgs/nixos/modules/services/web-apps/dawarich.nix>

## services.dawarich.smtp.user

SMTP login name. Type: null or string Default: null Example: "dawarich@example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/dawarich.nix>
