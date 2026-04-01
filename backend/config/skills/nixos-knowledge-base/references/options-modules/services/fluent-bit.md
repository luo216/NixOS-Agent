---
module: services.fluent-bit
option_count: 5
source: options.html
---

# services.fluent-bit

## services.fluent-bit.enable

Whether to enable Fluent Bit. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/fluent-bit.nix>

## services.fluent-bit.package

The fluent-bit package to use. Type: package Default: pkgs.fluent-bit Declared by: <nixpkgs/nixos/modules/services/monitoring/fluent-bit.nix>

## services.fluent-bit.configurationFile

Fluent Bit configuration. See https://docs.fluentbit.io/manual/administration/configuring-fluent-bit/yaml for supported values. configurationFile takes precedence over settings. Note: Restricted evaluation blocks access to paths outside the Nix store. This means detecting content changes for mutable paths (i.e. not input or content-addressed) can’t be done. As a result, nixos-rebuild won’t reload/restart the systemd unit when mutable path contents change. systemctl restart fluent-bit.service must be used instead. Type: absolute path Default: yamlFormat.generate "fluent-bit.yaml" cfg.settings Example: "/etc/fluent-bit/fluent-bit.yaml" Declared by: <nixpkgs/nixos/modules/services/monitoring/fluent-bit.nix>

## services.fluent-bit.graceLimit

The grace time limit. Sets the systemd unit’s TimeoutStopSec. The service.grace option in the Fluent Bit configuration should be ≤ this option. Type: null or positive integer, meaning >0, or string Default: null Example: 30 Declared by: <nixpkgs/nixos/modules/services/monitoring/fluent-bit.nix>

## services.fluent-bit.settings

See configurationFile. configurationFile takes precedence over settings. Type: YAML 1.1 value Default: { } Example: { pipeline = { inputs = [ { name = "systemd"; systemd_filter = "_SYSTEMD_UNIT=fluent-bit.service"; } ]; outputs = [ { file = "fluent-bit.out"; name = "file"; path = "/var/log/fluent-bit"; } ]; }; service = { grace = 30; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/fluent-bit.nix>
