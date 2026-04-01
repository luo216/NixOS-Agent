---
module: services.weblate.smtp
option_count: 6
source: options.html
---

# services.weblate.smtp

## services.weblate.smtp.enable

Whether to enable Weblate SMTP support. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/weblate.nix>

## services.weblate.smtp.from

The from address being used in sent emails. Type: string Default: "config.services.weblate.smtp.user" Example: "weblate@example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/weblate.nix>

## services.weblate.smtp.host

SMTP host used when sending emails to users. Type: string Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/weblate.nix>

## services.weblate.smtp.passwordFile

Location of a file containing the SMTP password. This should be a path pointing to a file with secure permissions (not /nix/store). Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/weblate.nix>

## services.weblate.smtp.port

SMTP port used when sending emails to users. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 587 Example: 25 Declared by: <nixpkgs/nixos/modules/services/web-apps/weblate.nix>

## services.weblate.smtp.user

SMTP login name. Type: null or string Default: null Example: "weblate@example.org" Declared by: <nixpkgs/nixos/modules/services/web-apps/weblate.nix>
