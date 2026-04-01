---
module: services.grafana.settings.smtp
option_count: 11
source: options.html
---

# services.grafana.settings.smtp

## services.grafana.settings.smtp.enabled

Whether to enable SMTP. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.smtp.cert_file

File path to a cert file. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.smtp.ehlo_identity

Name to be used as client identity for EHLO in SMTP dialog. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.smtp.from_address

Address used when sending out emails. Type: string Default: "admin@grafana.localhost" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.smtp.from_name

Name to be used as client identity for EHLO in SMTP dialog. Type: string Default: "Grafana" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.smtp.host

Host to connect to. Type: string Default: "localhost:25" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.smtp.key_file

File path to a key file. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.smtp.password

Password used for authentication. Please note that the contents of this option will end up in a world-readable Nix store. Use the file provider pointing at a reasonably secured file in the local filesystem to work around that. Look at the documentation for details: https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#file-provider Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.smtp.skip_verify

Verify SSL for SMTP server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.smtp.startTLS_policy

StartTLS policy when connecting to server. Type: null or one of “OpportunisticStartTLS”, “MandatoryStartTLS”, “NoStartTLS” Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.smtp.user

User used for authentication. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
