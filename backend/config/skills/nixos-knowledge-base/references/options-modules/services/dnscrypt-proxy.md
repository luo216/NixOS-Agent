---
module: services.dnscrypt-proxy
option_count: 5
source: options.html
---

# services.dnscrypt-proxy

## services.dnscrypt-proxy.enable

Whether to enable dnscrypt-proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/dnscrypt-proxy.nix>

## services.dnscrypt-proxy.package

The dnscrypt-proxy package to use. Type: package Default: pkgs.dnscrypt-proxy Declared by: <nixpkgs/nixos/modules/services/networking/dnscrypt-proxy.nix>

## services.dnscrypt-proxy.configFile

Path to TOML config file. See: https://github.com/DNSCrypt/dnscrypt-proxy/blob/master/dnscrypt-proxy/example-dnscrypt-proxy.toml If this option is set, it will override any configuration done in options.services.dnscrypt-proxy.settings. Type: absolute path Default: TOML file generated from services.dnscrypt-proxy.settings Example: "/etc/dnscrypt-proxy/dnscrypt-proxy.toml" Declared by: <nixpkgs/nixos/modules/services/networking/dnscrypt-proxy.nix>

## services.dnscrypt-proxy.settings

Attrset that is converted and passed as TOML config file. For available params, see: https://github.com/DNSCrypt/dnscrypt-proxy/blob/2.1.14/dnscrypt-proxy/example-dnscrypt-proxy.toml Type: attribute set Default: { } Example: { sources.public-resolvers = { urls = [ "https://download.dnscrypt.info/resolvers-list/v2/public-resolvers.md" ]; cache_file = "public-resolvers.md"; minisign_key = "RWQf6LRCGA9i53mlYecO4IzT51TGPpvWucNSCh1CBM0QTaLn73Y7GFO3"; refresh_delay = 72; }; } Declared by: <nixpkgs/nixos/modules/services/networking/dnscrypt-proxy.nix>

## services.dnscrypt-proxy.upstreamDefaults

Whether to base the config declared in services.dnscrypt-proxy.settings on the upstream example config (https://github.com/DNSCrypt/dnscrypt-proxy/blob/master/dnscrypt-proxy/example-dnscrypt-proxy.toml) Disable this if you want to declare your dnscrypt config from scratch. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/dnscrypt-proxy.nix>
