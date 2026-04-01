---
module: services.netdata
option_count: 12
source: options.html
---

# services.netdata

## services.netdata.enable

Whether to enable netdata. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/netdata.nix>

## services.netdata.enableAnalyticsReporting

Enable reporting of anonymous usage statistics to Netdata Inc. via either Google Analytics (in versions prior to 1.29.4), or Netdata Inc.'s self-hosted PostHog (in versions 1.29.4 and later). See: https://learn.netdata.cloud/docs/agent/anonymous-statistics Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/netdata.nix>

## services.netdata.package

The netdata package to use. Type: package Default: pkgs.netdata Declared by: <nixpkgs/nixos/modules/services/monitoring/netdata.nix>

## services.netdata.claimTokenFile

If set, automatically registers the agent using the given claim token file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/netdata.nix>

## services.netdata.config

netdata.conf configuration as nix attributes. cannot be combined with configText. Type: attribute set of (attribute set) Default: { } Example: global = { "debug log" = "syslog"; "access log" = "syslog"; "error log" = "syslog"; }; Declared by: <nixpkgs/nixos/modules/services/monitoring/netdata.nix>

## services.netdata.configDir

Complete netdata config directory except netdata.conf. The default configuration is merged with changes defined in this option. Each top-level attribute denotes a path in the configuration directory as in environment.etc. Its value is the absolute path and must be readable by netdata. Cannot be combined with configText. Type: attribute set of absolute path Default: { } Example: "health_alarm_notify.conf" = pkgs.writeText "health_alarm_notify.conf" '' sendmail="/path/to/sendmail" ''; "health.d" = "/run/secrets/netdata/health.d"; Declared by: <nixpkgs/nixos/modules/services/monitoring/netdata.nix>

## services.netdata.configText

Verbatim netdata.conf, cannot be combined with config. Type: null or strings concatenated with “\n” Default: null Example: '' [global] debug log = syslog access log = syslog error log = syslog '' Declared by: <nixpkgs/nixos/modules/services/monitoring/netdata.nix>

## services.netdata.deadlineBeforeStopSec

In order to detect when netdata is misbehaving, we run a concurrent task pinging netdata (wait-for-netdata-up) in the systemd unit. If after a while, this task does not succeed, we stop the unit and mark it as failed. You can control this deadline in seconds with this option, it’s useful to bump it if you have (1) a lot of data (2) doing upgrades (3) have low IOPS/throughput. Type: signed integer Default: 120 Declared by: <nixpkgs/nixos/modules/services/monitoring/netdata.nix>

## services.netdata.extraNdsudoPackages

Extra packages to add to PATH to make available to ndsudo. Warning ndsudo has SUID privileges, be careful what packages you list here. Note cfg.package must be built with withNdsudo = true Type: list of package Default: [ ] Example: '' [ pkgs.smartmontools pkgs.nvme-cli ] '' Declared by: <nixpkgs/nixos/modules/services/monitoring/netdata.nix>

## services.netdata.extraPluginPaths

Extra paths to add to the netdata global “plugins directory” option. Useful for when you want to include your own collection scripts. Details about writing a custom netdata plugin are available at: https://docs.netdata.cloud/collectors/plugins.d/ Cannot be combined with configText. Type: list of absolute path Default: [ ] Example: [ "/path/to/plugins.d" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/netdata.nix>

## services.netdata.group

Group under which netdata runs. Type: string Default: "netdata" Declared by: <nixpkgs/nixos/modules/services/monitoring/netdata.nix>

## services.netdata.user

User account under which netdata runs. Type: string Default: "netdata" Declared by: <nixpkgs/nixos/modules/services/monitoring/netdata.nix>
