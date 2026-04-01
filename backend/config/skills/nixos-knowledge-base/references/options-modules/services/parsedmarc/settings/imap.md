---
module: services.parsedmarc.settings.imap
option_count: 5
source: options.html
---

# services.parsedmarc.settings.imap

## services.parsedmarc.settings.imap.host

The IMAP server hostname or IP address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.settings.imap.password

The IMAP server password. Always handled as a secret whether the value is wrapped in a { _secret = ...; } attrset or not (refer to services.parsedmarc.settings for details). Type: null or absolute path or attribute set of absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.settings.imap.port

The IMAP server port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 993 Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.settings.imap.ssl

Use an encrypted SSL/TLS connection. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.settings.imap.user

The IMAP server username. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>
