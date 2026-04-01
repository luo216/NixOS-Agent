---
module: services.prometheus.exporters.restic
option_count: 17
source: options.html
---

# services.prometheus.exporters.restic

## services.prometheus.exporters.restic.enable

Whether to enable the prometheus restic exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.restic.environmentFile

File containing the credentials to access the repository, in the format of an EnvironmentFile as described by systemd.exec(5) Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.restic.extraFlags

Extra commandline options to pass to the restic exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.restic.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.restic.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9753" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.restic.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.restic.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9753 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.restic.group

Group under which the restic exporter shall be run. Type: string Default: "restic-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.restic.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.restic.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.restic.passwordFile

File containing the password to the repository. Type: absolute path Example: "/etc/nixos/restic-password" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.restic.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9753 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.restic.rcloneConfig

Configuration for the rclone remote being used for backup. See the remote’s specific options under rclone’s docs at https://rclone.org/docs/. When specifying option names, use the “config” name specified in the docs. For example, to set --b2-hard-delete for a B2 remote, use hard_delete = true in the attribute set. Warning Secrets set in here will be world-readable in the Nix store! Consider using the rcloneConfigFile option instead to specify secret values separately. Note that options set here will override those set in the config file. Type: attribute set of (string or boolean) Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.restic.rcloneConfigFile

Path to the file containing rclone configuration. This file must contain configuration for the remote specified in this backup set and also must be readable by root. Caution Options set in rcloneConfig will override those set in this file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.restic.rcloneOptions

Options to pass to rclone to control its behavior. See https://rclone.org/docs/#options for available options. When specifying option names, strip the leading --. To set a flag such as --drive-use-trash, which does not take a value, set the value to the Boolean true. Type: attribute set of (string or boolean) Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.restic.refreshInterval

Refresh interval for the metrics in seconds. Computing the metrics is an expensive task, keep this value as high as possible. Type: unsigned integer, meaning >=0 Default: 60 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.restic.repository

URI pointing to the repository to monitor. Type: null or string Default: null Example: "sftp:backup@192.168.1.100:/backups/example" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.restic.repositoryFile

Path to the file containing the URI for the repository to monitor. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.restic.user

User name under which the restic exporter shall be run. Type: string Default: "restic-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
