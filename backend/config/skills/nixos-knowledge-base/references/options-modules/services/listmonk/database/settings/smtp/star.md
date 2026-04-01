---
module: services.listmonk.database.settings.smtp.*
option_count: 5
source: options.html
---

# services.listmonk.database.settings.smtp.*

## services.listmonk.database.settings.smtp.*.enabled

Whether to enable this SMTP server for listmonk. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/listmonk.nix>

## services.listmonk.database.settings.smtp.*.host

Hostname for the SMTP server Type: string Declared by: <nixpkgs/nixos/modules/services/mail/listmonk.nix>

## services.listmonk.database.settings.smtp.*.max_conns

Maximum number of simultaneous connections, defaults to 1 Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/mail/listmonk.nix>

## services.listmonk.database.settings.smtp.*.port

Port for the SMTP server Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Declared by: <nixpkgs/nixos/modules/services/mail/listmonk.nix>

## services.listmonk.database.settings.smtp.*.tls_type

Type of TLS authentication with the SMTP server Type: one of “none”, “STARTTLS”, “TLS” Declared by: <nixpkgs/nixos/modules/services/mail/listmonk.nix>
