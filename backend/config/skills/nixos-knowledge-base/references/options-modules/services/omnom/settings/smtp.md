---
module: services.omnom.settings.smtp
option_count: 7
source: options.html
---

# services.omnom.settings.smtp

## services.omnom.settings.smtp.connection_timeout

Connection timeout duration in seconds. Type: signed integer Default: 5 Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>

## services.omnom.settings.smtp.host

SMTP server hostname. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>

## services.omnom.settings.smtp.port

SMTP server port address. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 25 Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>

## services.omnom.settings.smtp.send_timeout

Send timeout duration in seconds. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>

## services.omnom.settings.smtp.sender

Omnom sender e-mail. Type: string Default: "Omnom <omnom@127.0.0.1>" Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>

## services.omnom.settings.smtp.tls

Whether to enable Whether TLS encryption should be used… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>

## services.omnom.settings.smtp.tls_allow_insecure

Whether to enable Whether to allow insecure TLS… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>
