---
module: services.nagios
option_count: 9
source: options.html
---

# services.nagios

## services.nagios.enable

Whether to enable Nagios to monitor your system or network. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/nagios.nix>

## services.nagios.enableWebInterface

Whether to enable the Nagios web interface. You should also enable Apache (services.httpd.enable). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/nagios.nix>

## services.nagios.cgiConfigFile

Derivation for the configuration file of Nagios CGI scripts that can be used in web servers for running the Nagios web interface. Type: package Default: nagiosCGICfgFile Declared by: <nixpkgs/nixos/modules/services/monitoring/nagios.nix>

## services.nagios.extraConfig

Configuration to add to /etc/nagios.cfg Type: attribute set of string Default: { } Example: { debug_file = "/var/log/nagios/debug.log"; debug_level = "-1"; } Declared by: <nixpkgs/nixos/modules/services/monitoring/nagios.nix>

## services.nagios.mainConfigFile

If non-null, overrides the main configuration file of Nagios. Type: null or package Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/nagios.nix>

## services.nagios.objectDefs

A list of Nagios object configuration files that must define the hosts, host groups, services and contacts for the network that you want Nagios to monitor. Type: list of absolute path Example: [ ./objects.cfg ] Declared by: <nixpkgs/nixos/modules/services/monitoring/nagios.nix>

## services.nagios.plugins

Packages to be added to the Nagios PATH. Typically used to add plugins, but can be anything. Type: list of package Default: [pkgs.monitoring-plugins pkgs.msmtp pkgs.mailutils] Declared by: <nixpkgs/nixos/modules/services/monitoring/nagios.nix>

## services.nagios.validateConfig

if true, the syntax of the nagios configuration file is checked at build time Type: boolean Default: pkgs.stdenv.hostPlatform == pkgs.stdenv.buildPlatform Declared by: <nixpkgs/nixos/modules/services/monitoring/nagios.nix>

## services.nagios.virtualHost

Apache configuration can be done by adapting services.httpd.virtualHosts. See services.httpd.virtualHosts for further information. Type: submodule Example: { hostName = "example.org"; adminAddr = "webmaster@example.org"; enableSSL = true; sslServerCert = "/var/lib/acme/example.org/full.pem"; sslServerKey = "/var/lib/acme/example.org/key.pem"; } Declared by: <nixpkgs/nixos/modules/services/monitoring/nagios.nix>
