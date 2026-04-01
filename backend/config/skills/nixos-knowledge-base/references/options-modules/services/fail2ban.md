---
module: services.fail2ban
option_count: 11
source: options.html
---

# services.fail2ban

## services.fail2ban.enable

Whether to enable the fail2ban service. See the documentation of services.fail2ban.jails for what jails are enabled by default. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/fail2ban.nix>

## services.fail2ban.package

The fail2ban package to use. Type: package Default: pkgs.fail2ban Example: fail2ban_0_11 Declared by: <nixpkgs/nixos/modules/services/security/fail2ban.nix>

## services.fail2ban.packageFirewall

The firewall package used by fail2ban service. Defaults to the package for your firewall (iptables or nftables). Type: package Default: config.networking.firewall.package Declared by: <nixpkgs/nixos/modules/services/security/fail2ban.nix>

## services.fail2ban.banaction

Default banning action (e.g. iptables, iptables-new, iptables-multiport, iptables-ipset-proto6-allports, shorewall, etc). It is used to define action_* variables. Can be overridden globally or per section within jail.local file Type: string Default: if config.networking.nftables.enable then "nftables-multiport" else "iptables-multiport" Declared by: <nixpkgs/nixos/modules/services/security/fail2ban.nix>

## services.fail2ban.banaction-allports

Default banning action (e.g. iptables, iptables-new, iptables-multiport, shorewall, etc) for “allports” jails. It is used to define action_* variables. Can be overridden globally or per section within jail.local file Type: string Default: if config.networking.nftables.enable then "nftables-allports" else "iptables-allports" Declared by: <nixpkgs/nixos/modules/services/security/fail2ban.nix>

## services.fail2ban.bantime

Number of seconds that a host is banned. Type: string Default: "10m" Example: "1h" Declared by: <nixpkgs/nixos/modules/services/security/fail2ban.nix>

## services.fail2ban.daemonSettings

The contents of Fail2ban’s main configuration file. It’s generally not necessary to change it. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { Definition = { logtarget = "SYSLOG"; socket = "/run/fail2ban/fail2ban.sock"; pidfile = "/run/fail2ban/fail2ban.pid"; dbfile = "/var/lib/fail2ban/fail2ban.sqlite3"; }; } Declared by: <nixpkgs/nixos/modules/services/security/fail2ban.nix>

## services.fail2ban.extraPackages

Extra packages to be made available to the fail2ban service. The example contains the packages needed by the iptables-ipset-proto6 action. Type: list of package Default: [ ] Example: [ pkgs.ipset ] Declared by: <nixpkgs/nixos/modules/services/security/fail2ban.nix>

## services.fail2ban.ignoreIP

“ignoreIP” can be a list of IP addresses, CIDR masks or DNS hosts. Fail2ban will not ban a host which matches an address in this list. Several addresses can be defined using space (and/or comma) separator. Type: list of string Default: [ ] Example: [ "192.168.0.0/16" "2001:DB8::42" ] Declared by: <nixpkgs/nixos/modules/services/security/fail2ban.nix>

## services.fail2ban.jails

The configuration of each Fail2ban “jail”. A jail consists of an action (such as blocking a port using iptables) that is triggered when a filter applied to a log file triggers more than a certain number of times in a certain time period. Actions are defined in /etc/fail2ban/action.d, while filters are defined in /etc/fail2ban/filter.d. NixOS comes with a default sshd jail; for it to work well, services.openssh.settings.LogLevel should be set to "VERBOSE" or higher so that fail2ban can observe failed login attempts. This module sets it to "VERBOSE" if not set otherwise, so enabling fail2ban can make SSH logs more verbose. Type: attribute set of (strings concatenated with “\n” or (submodule)) Default: { } Example: { apache-nohome-iptables = { settings = { # Block an IP address if it accesses a non-existent # home directory more than 5 times in 10 minutes, # since that indicates that it's scanning. filter = "apache-nohome"; action = ''iptables-multiport[name=HTTP, port="http,https"]''; logpath = "/var/log/httpd/error_log*"; backend = "auto"; findtime = 600; bantime = 600; maxretry = 5; }; }; dovecot = { settings = { # block IPs which failed to log-in # aggressive mode add blocking for aborted connections filter = "dovecot[mode=aggressive]"; maxretry = 3; }; }; }; Declared by: <nixpkgs/nixos/modules/services/security/fail2ban.nix>

## services.fail2ban.maxretry

Number of failures before a host gets banned. Type: unsigned integer, meaning >=0 Default: 3 Declared by: <nixpkgs/nixos/modules/services/security/fail2ban.nix>
