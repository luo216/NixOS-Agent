---
module: services.prometheus.exporters.buildkite-agent
option_count: 13
source: options.html
---

# services.prometheus.exporters.buildkite-agent

## services.prometheus.exporters.buildkite-agent.enable

Whether to enable the prometheus buildkite-agent exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.buildkite-agent.endpoint

The Buildkite Agent API endpoint. Type: string Default: "https://agent.buildkite.com/v3" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.buildkite-agent.extraFlags

Extra commandline options to pass to the buildkite-agent exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.buildkite-agent.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.buildkite-agent.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9876" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.buildkite-agent.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.buildkite-agent.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9876 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.buildkite-agent.group

Group under which the buildkite-agent exporter shall be run. Type: string Default: "buildkite-agent-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.buildkite-agent.interval

How often to update metrics. Type: string Default: "30s" Example: "1min" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.buildkite-agent.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.buildkite-agent.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.buildkite-agent.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9876 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.buildkite-agent.queues

Which specific queues to process. Type: null or (list of string) Default: null Example: [ "my-queue1" "my-queue2" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.buildkite-agent.tokenPath

The token from your Buildkite “Agents” page. A run-time path to the token file, which is supposed to be provisioned outside of Nix store. Type: null or absolute path Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.buildkite-agent.user

User name under which the buildkite-agent exporter shall be run. Type: string Default: "buildkite-agent-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
