---
module: services.outline.smtp
option_count: 8
source: options.html
---

# services.outline.smtp

## services.outline.smtp.fromEmail

Sender email in outgoing mail. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.smtp.host

Host name or IP address of the SMTP server. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.smtp.passwordFile

File path containing the password to authenticate with. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.smtp.port

TCP port of the SMTP server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.smtp.replyEmail

Reply address in outgoing mail. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.smtp.secure

Use a secure SMTP connection. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.smtp.tlsCiphers

Override SMTP cipher configuration. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.smtp.username

Username to authenticate with. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>
