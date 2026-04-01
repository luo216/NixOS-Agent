---
module: services.plausible.mail.smtp
option_count: 6
source: options.html
---

# services.plausible.mail.smtp

## services.plausible.mail.smtp.enableSSL

Whether to enable SSL when connecting to the SMTP server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/plausible.nix>

## services.plausible.mail.smtp.hostAddr

The host address of your smtp server. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/plausible.nix>

## services.plausible.mail.smtp.hostPort

The port of your smtp server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 25 Declared by: <nixpkgs/nixos/modules/services/web-apps/plausible.nix>

## services.plausible.mail.smtp.passwordFile

The path to the file with the password in case SMTP auth is enabled. Type: null or string or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/plausible.nix>

## services.plausible.mail.smtp.retries

Number of retries to make until mailer gives up. Type: unsigned integer, meaning >=0 Default: 2 Declared by: <nixpkgs/nixos/modules/services/web-apps/plausible.nix>

## services.plausible.mail.smtp.user

The username/email in case SMTP auth is enabled. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/plausible.nix>
