---
module: services.prometheus.exporters.imap-mailstat.accounts.<name>
option_count: 6
source: options.html
---

# services.prometheus.exporters.imap-mailstat.accounts.<name>

## services.prometheus.exporters.imap-mailstat.accounts.<name>.mailaddress

Your email address (at the moment used as login name) Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.imap-mailstat.accounts.<name>.password

Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.imap-mailstat.accounts.<name>.serveraddress

mailserver name or address Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.imap-mailstat.accounts.<name>.serverport

imap port number (at the moment only tls connection is supported) Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.imap-mailstat.accounts.<name>.starttls

set to true for using STARTTLS to start a TLS connection Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.imap-mailstat.accounts.<name>.username

If empty string mailaddress value is used Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
