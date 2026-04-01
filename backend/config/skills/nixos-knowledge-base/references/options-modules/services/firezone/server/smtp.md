---
module: services.firezone.server.smtp
option_count: 7
source: options.html
---

# services.firezone.server.smtp

## services.firezone.server.smtp.configureManually

Outbound email configuration is mandatory for Firezone and supports many different delivery adapters. Yet, most users will only need an SMTP relay to send emails, so this configuration enforced by default. If you want to utilize an alternative way to send emails (e.g. via a supportd API-based service), enable this option and define OUTBOUND_EMAIL_FROM, OUTBOUND_EMAIL_ADAPTER and OUTBOUND_EMAIL_ADAPTER_OPTS manually via services.firezone.server.settings and/or services.firezone.server.settingsSecret. The Firezone documentation holds a list of supported Swoosh adapters. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.smtp.from

Outbound SMTP FROM address Type: string Example: "firezone@example.com" Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.smtp.host

Outbound SMTP host Type: string Example: "mail.example.com" Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.smtp.implicitTls

Whether to use implicit TLS instead of STARTTLS (usually port 465) Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.smtp.passwordFile

File containing the password for the given username. Beware that a file in the nix store will be world readable. Type: absolute path Example: "/run/secrets/smtp-password" Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.smtp.port

Outbound SMTP port Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Example: 465 Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.smtp.username

Username to authenticate against the SMTP relay Type: string Example: "firezone@example.com" Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>
