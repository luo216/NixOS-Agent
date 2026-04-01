---
module: services.vmagent
option_count: 6
source: options.html
---

# services.vmagent

## services.vmagent.enable

Whether to enable VictoriaMetrics’s vmagent. vmagent efficiently scrape metrics from Prometheus-compatible exporters Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/vmagent.nix>

## services.vmagent.package

The vmagent package to use. Type: package Default: pkgs.vmagent Declared by: <nixpkgs/nixos/modules/services/monitoring/vmagent.nix>

## services.vmagent.checkConfig

Check configuration. If you use credentials stored in external files (environmentFile, etc), they will not be visible and it will report errors, despite a correct configuration. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/vmagent.nix>

## services.vmagent.extraArgs

Extra args to pass to vmagent. See the docs: https://docs.victoriametrics.com/vmagent.html#advanced-usage or vmagent -help for more information. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/vmagent.nix>

## services.vmagent.openFirewall

Whether to open the firewall for the default ports. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/vmagent.nix>

## services.vmagent.prometheusConfig

Config for prometheus style metrics Type: open submodule of (YAML 1.1 value) Declared by: <nixpkgs/nixos/modules/services/monitoring/vmagent.nix>
