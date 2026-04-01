---
module: services.sftpgo.settings.smtp
option_count: 6
source: options.html
---

# services.sftpgo.settings.smtp

## services.sftpgo.settings.smtp.auth_type

0: Plain 1: Login 2: CRAM-MD5 Type: one of 0, 1, 2 Default: 0 Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>

## services.sftpgo.settings.smtp.encryption

Encryption scheme: 0: No encryption 1: TLS 2: STARTTLS Type: one of 0, 1, 2 Default: 1 Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>

## services.sftpgo.settings.smtp.from

From address. Type: string Default: "SFTPGo <sftpgo@example.com>" Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>

## services.sftpgo.settings.smtp.host

Location of SMTP email server. Leave empty to disable email sending capabilities. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>

## services.sftpgo.settings.smtp.port

Port of the SMTP Server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 465 Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>

## services.sftpgo.settings.smtp.user

SMTP username. Type: string Default: "sftpgo" Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>
