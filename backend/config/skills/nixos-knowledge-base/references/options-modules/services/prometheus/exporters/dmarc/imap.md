---
module: services.prometheus.exporters.dmarc.imap
option_count: 4
source: options.html
---

# services.prometheus.exporters.dmarc.imap

## services.prometheus.exporters.dmarc.imap.host

Hostname of IMAP server to connect to. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dmarc.imap.passwordFile

File containing the login password for the IMAP connection. Type: string Example: "/run/secrets/dovecot_pw" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dmarc.imap.port

Port of the IMAP server to connect to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 993 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dmarc.imap.username

Login username for the IMAP connection. Type: string Example: "postmaster@example.org" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
