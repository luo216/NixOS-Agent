---
module: services.parsedmarc.settings.smtp
option_count: 7
source: options.html
---

# services.parsedmarc.settings.smtp

## services.parsedmarc.settings.smtp.from

The From address to use for the outgoing mail. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.settings.smtp.host

The SMTP server hostname or IP address. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.settings.smtp.password

The SMTP server password. Always handled as a secret whether the value is wrapped in a { _secret = ...; } attrset or not (refer to services.parsedmarc.settings for details). Type: null or absolute path or attribute set of absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.settings.smtp.port

The SMTP server port. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.settings.smtp.ssl

Use an encrypted SSL/TLS connection. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.settings.smtp.to

The addresses to send outgoing mail to. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.settings.smtp.user

The SMTP server username. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>
