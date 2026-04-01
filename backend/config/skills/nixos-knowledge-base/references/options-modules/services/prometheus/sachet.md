---
module: services.prometheus.sachet
option_count: 4
source: options.html
---

# services.prometheus.sachet

## services.prometheus.sachet.enable

Whether to enable Sachet, an SMS alerting tool for the Prometheus Alertmanager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/sachet.nix>

## services.prometheus.sachet.address

The address Sachet will listen to. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/sachet.nix>

## services.prometheus.sachet.configuration

Sachet’s configuration as a nix attribute set. Type: null or (attribute set) Default: null Example: { providers = { twilio = { # environment variables gets expanded at runtime account_sid = "$TWILIO_ACCOUNT"; auth_token = "$TWILIO_TOKEN"; }; }; templates = [ ./some-template.tmpl ]; receivers = [{ name = "pager"; provider = "twilio"; to = [ "+33123456789" ]; text = "{{ template \"message\" . }}"; }]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/sachet.nix>

## services.prometheus.sachet.port

The port Sachet will listen to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9876 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/sachet.nix>
