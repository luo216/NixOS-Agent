---
module: services.pdns-recursor
option_count: 10
source: options.html
---

# services.pdns-recursor

## services.pdns-recursor.enable

Whether to enable PowerDNS Recursor, a recursive DNS server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/pdns-recursor.nix>

## services.pdns-recursor.dnssecValidation

Controls the level of DNSSEC processing done by the PowerDNS Recursor. See https://doc.powerdns.com/md/recursor/dnssec/ for a detailed explanation. Type: one of “off”, “process-no-validate”, “process”, “log-fail”, “validate” Default: "validate" Declared by: <nixpkgs/nixos/modules/services/networking/pdns-recursor.nix>

## services.pdns-recursor.exportHosts

Whether to export names and IP addresses defined in /etc/hosts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/pdns-recursor.nix>

## services.pdns-recursor.forwardZones

DNS zones to be forwarded to other authoritative servers. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/pdns-recursor.nix>

## services.pdns-recursor.forwardZonesRecurse

DNS zones to be forwarded to other recursive servers. Type: attribute set Default: { } Example: { eth = "[::1]:5353"; } Declared by: <nixpkgs/nixos/modules/services/networking/pdns-recursor.nix>

## services.pdns-recursor.luaConfig

The content Lua configuration file for PowerDNS Recursor. See https://doc.powerdns.com/recursor/lua-config/index.html. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/pdns-recursor.nix>

## services.pdns-recursor.old-settings

Older PowerDNS Recursor settings. Use this option to configure Recursor settings not exposed in a NixOS option or to bypass one. See the full documentation at https://doc.powerdns.com/recursor/settings.html for the available options. Warning This option is provided for backward compatibility only and will be removed in the next release of NixOS. Type: attribute set of (null or signed integer or string or boolean or absolute path or list of (signed integer or string or boolean or absolute path)) Default: { } Example: { loglevel = 8; log-common-errors = true; } Declared by: <nixpkgs/nixos/modules/services/networking/pdns-recursor.nix>

## services.pdns-recursor.resolveNamecoin

Resolve .bit top-level domains using ncdns and namecoin. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ncdns.nix>

## services.pdns-recursor.serveRFC1918

Whether to directly resolve the RFC1918 reverse-mapping domains: 10.in-addr.arpa, 168.192.in-addr.arpa, 16-31.172.in-addr.arpa This saves load on the AS112 servers. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/pdns-recursor.nix>

## services.pdns-recursor.yaml-settings

PowerDNS Recursor settings. Use this option to configure Recursor settings not exposed in a NixOS option or to bypass one. See the full documentation at https://doc.powerdns.com/recursor/yamlsettings.html for the available options. Type: YAML 1.1 value Default: { } Example: { loglevel = 8; log-common-errors = true; } Declared by: <nixpkgs/nixos/modules/services/networking/pdns-recursor.nix>
