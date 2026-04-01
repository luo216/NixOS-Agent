---
module: services.vlagent
option_count: 4
source: options.html
---

# services.vlagent

## services.vlagent.enable

Whether to enable VictoriaMetrics’s vlagent. vlagent is a tiny agent which helps you collect logs from various sources and store them in VictoriaLogs . Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/vlagent.nix>

## services.vlagent.package

The vlagent package to use. Type: package Default: pkgs.vlagent Declared by: <nixpkgs/nixos/modules/services/monitoring/vlagent.nix>

## services.vlagent.extraArgs

Extra args to pass to vlagent. See the docs: https://docs.victoriametrics.com/vlagent.html#advanced-usage or vlagent -help for more information. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/vlagent.nix>

## services.vlagent.openFirewall

Whether to open the firewall for the default ports. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/vlagent.nix>
