---
module: services.nvme-rs.settings.email
option_count: 7
source: options.html
---

# services.nvme-rs.settings.email

## services.nvme-rs.settings.email.from

Sender email address Type: string Example: "nvme-monitor@example.com" Declared by: <nixpkgs/nixos/modules/services/system/nvme-rs.nix>

## services.nvme-rs.settings.email.smtp_password_file

File containing SMTP password Type: absolute path Example: "/run/secrets/smtp-password" Declared by: <nixpkgs/nixos/modules/services/system/nvme-rs.nix>

## services.nvme-rs.settings.email.smtp_port

SMTP server port Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 587 Declared by: <nixpkgs/nixos/modules/services/system/nvme-rs.nix>

## services.nvme-rs.settings.email.smtp_server

SMTP server address Type: string Default: "smtp.gmail.com" Example: "mail.example.com" Declared by: <nixpkgs/nixos/modules/services/system/nvme-rs.nix>

## services.nvme-rs.settings.email.smtp_username

SMTP username Type: string Example: "your-email@gmail.com" Declared by: <nixpkgs/nixos/modules/services/system/nvme-rs.nix>

## services.nvme-rs.settings.email.to

Recipient email address Type: string Example: "admin@example.com" Declared by: <nixpkgs/nixos/modules/services/system/nvme-rs.nix>

## services.nvme-rs.settings.email.use_tls

Use TLS for SMTP connection Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/system/nvme-rs.nix>
