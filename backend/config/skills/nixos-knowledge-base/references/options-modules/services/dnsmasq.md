---
module: services.dnsmasq
option_count: 6
source: options.html
---

# services.dnsmasq

## services.dnsmasq.enable

Whether to run dnsmasq. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/dnsmasq.nix>

## services.dnsmasq.package

The dnsmasq package to use. Type: package Default: pkgs.dnsmasq Declared by: <nixpkgs/nixos/modules/services/networking/dnsmasq.nix>

## services.dnsmasq.alwaysKeepRunning

If enabled, systemd will always respawn dnsmasq even if shut down manually. The default, disabled, will only restart it on error. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/dnsmasq.nix>

## services.dnsmasq.configFile

Path to the configuration file of dnsmasq. Type: package (read only) Default: Path of dnsmasq config file Declared by: <nixpkgs/nixos/modules/services/networking/dnsmasq.nix>

## services.dnsmasq.resolveLocalQueries

Whether dnsmasq should resolve local queries (i.e. add 127.0.0.1 to /etc/resolv.conf). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/dnsmasq.nix>

## services.dnsmasq.settings

Configuration of dnsmasq. Lists get added one value per line (empty lists and false values don’t get added, though false values get turned to comments). Gets merged with { dhcp-leasefile = "/var/lib/dnsmasq/dnsmasq.leases"; conf-file = optional cfg.resolveLocalQueries "/etc/dnsmasq-conf.conf"; resolv-file = optional cfg.resolveLocalQueries "/etc/dnsmasq-resolv.conf"; } Type: open submodule of attribute set of (atom (null, bool, int, float or string) or a list of them for duplicate keys) Default: { } Example: { domain-needed = true; dhcp-range = [ "192.168.0.2,192.168.0.254" ]; } Declared by: <nixpkgs/nixos/modules/services/networking/dnsmasq.nix>
