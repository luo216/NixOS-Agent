---
module: services.prometheus.exporters.php-fpm
option_count: 12
source: options.html
---

# services.prometheus.exporters.php-fpm

## services.prometheus.exporters.php-fpm.enable

Whether to enable the prometheus php-fpm exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.php-fpm.package

The prometheus-php-fpm-exporter package to use. Type: package Default: pkgs.prometheus-php-fpm-exporter Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.php-fpm.environmentFile

Environment file as defined in systemd.exec(5). Secrets may be passed to the service without adding them to the world-readable Nix store, by specifying placeholder variables as the option value in Nix and setting these variables accordingly in the environment file. Environment variables from this file will be interpolated into the config file using envsubst with this syntax: $ENVIRONMENT ${VARIABLE} For variables to use see options and defaults. The main use is to set the PHP_FPM_SCRAPE_URI that indicate how to connect to PHP-FPM process. # Content of the environment file PHP_FPM_SCRAPE_URI="unix:///tmp/php.sock;/status" Note that this file needs to be available on the host on which this exporter is running. Type: null or absolute path Default: null Example: "/root/prometheus-php-fpm-exporter.env" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.php-fpm.extraFlags

Extra commandline options to pass to the php-fpm exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.php-fpm.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.php-fpm.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9253" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.php-fpm.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.php-fpm.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9253 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.php-fpm.group

Group under which the php-fpm exporter shall be run. Type: string Default: "php-fpm-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.php-fpm.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.php-fpm.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.php-fpm.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9253 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.php-fpm.telemetryPath

Path under which to expose metrics. Type: string Default: "/metrics" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.php-fpm.user

User name under which the php-fpm exporter shall be run. Type: string Default: "php-fpm-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
