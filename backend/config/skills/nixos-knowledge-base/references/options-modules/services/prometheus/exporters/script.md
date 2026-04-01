---
module: services.prometheus.exporters.script
option_count: 10
source: options.html
---

# services.prometheus.exporters.script

## services.prometheus.exporters.script.enable

Whether to enable the prometheus script exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.script.extraFlags

Extra commandline options to pass to the script exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.script.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.script.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9172" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.script.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.script.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9172 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.script.group

Group under which the script exporter shall be run. Type: string Default: "script-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.script.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.script.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.script.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9172 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.script.settings

Free-form configuration for script_exporter, expressed as a Nix attrset and rendered to YAML. Migration note: The previous format using script = "sleep 5" is no longer supported. You must use command (list) and args (list), e.g. { command = [ "sleep" ]; args = [ "5" ]; }. See the official documentation for all available options: https://github.com/ricoberger/script_exporter#configuration-file Type: YAML 1.1 value Default: { } Example: { scripts = [ { name = "sleep"; command = [ "sleep" ]; args = [ "5" ]; } ]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.script.user

User name under which the script exporter shall be run. Type: string Default: "script-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
