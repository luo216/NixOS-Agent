---
module: services.prometheus.exporters.mail.configuration.servers.*
option_count: 8
source: options.html
---

# services.prometheus.exporters.mail.configuration.servers.*

## services.prometheus.exporters.mail.configuration.servers.*.detectionDir

Directory in which new mails for the exporter user are placed. Note that this needs to exist when the exporter starts. Type: absolute path Example: "/var/spool/mail/exporteruser/new" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mail.configuration.servers.*.from

Content of ‘From’ Header for probing mails. Type: string Example: "exporteruser@domain.tld" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mail.configuration.servers.*.login

Username to use for SMTP authentication. Type: null or string Default: null Example: "exporteruser@domain.tld" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mail.configuration.servers.*.name

Value for label ‘configname’ which will be added to all metrics. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mail.configuration.servers.*.passphrase

Password to use for SMTP authentication. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mail.configuration.servers.*.port

Port to use for SMTP. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Example: 587 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mail.configuration.servers.*.server

Hostname of the server that should be probed. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mail.configuration.servers.*.to

Content of ‘To’ Header for probing mails. Type: string Example: "exporteruser@domain.tld" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
