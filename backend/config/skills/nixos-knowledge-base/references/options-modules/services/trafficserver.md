---
module: services.trafficserver
option_count: 15
source: options.html
---

# services.trafficserver

## services.trafficserver.enable

Whether to enable Apache Traffic Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/trafficserver/default.nix>

## services.trafficserver.cache

Caching rules that overrule the origin’s caching policy. Consult the upstream documentation for more details. Type: strings concatenated with “\n” Default: "" Example: "dest_domain=example.com suffix=js action=never-cache" Declared by: <nixpkgs/nixos/modules/services/web-servers/trafficserver/default.nix>

## services.trafficserver.hosting

Partition the cache according to origin server or domain Consult the upstream documentation for more details. Type: strings concatenated with “\n” Default: "" Example: "domain=example.com volume=1" Declared by: <nixpkgs/nixos/modules/services/web-servers/trafficserver/default.nix>

## services.trafficserver.ipAllow

Control client access to Traffic Server and Traffic Server connections to upstream servers. Consult the upstream documentation for more details. Type: null or YAML 1.1 value Default: upstream defaults Example: { ip_allow = [{ apply = "in"; ip_addrs = "127.0.0.1"; action = "allow"; methods = "ALL"; }]; } Declared by: <nixpkgs/nixos/modules/services/web-servers/trafficserver/default.nix>

## services.trafficserver.logging

Configure logs. Consult the upstream documentation for more details. Type: null or YAML 1.1 value Default: upstream defaults Example: { } Declared by: <nixpkgs/nixos/modules/services/web-servers/trafficserver/default.nix>

## services.trafficserver.parent

Identify the parent proxies used in an cache hierarchy. Consult the upstream documentation for more details. Type: strings concatenated with “\n” Default: "" Example: '' dest_domain=. method=get parent="p1.example:8080; p2.example:8080" round_robin=true '' Declared by: <nixpkgs/nixos/modules/services/web-servers/trafficserver/default.nix>

## services.trafficserver.plugins

Controls run-time loadable plugins available to Traffic Server, as well as their configuration. Consult the upstream documentation for more details. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-servers/trafficserver/default.nix>

## services.trafficserver.records

List of configurable variables used by Traffic Server. Consult the upstream documentation for more details. Type: Traffic Server records value Default: { } Example: { proxy = { config = { proxy_name = "my_server"; }; }; } Declared by: <nixpkgs/nixos/modules/services/web-servers/trafficserver/default.nix>

## services.trafficserver.remap

URL remapping rules used by Traffic Server. Consult the upstream documentation for more details. Type: strings concatenated with “\n” Default: "" Example: "map http://from.example http://origin.example" Declared by: <nixpkgs/nixos/modules/services/web-servers/trafficserver/default.nix>

## services.trafficserver.sni

Configure aspects of TLS connection handling for both inbound and outbound connections. Consult the upstream documentation for more details. Type: null or YAML 1.1 value Default: null Example: { sni = [{ fqdn = "no-http2.example.com"; https = "off"; }]; } Declared by: <nixpkgs/nixos/modules/services/web-servers/trafficserver/default.nix>

## services.trafficserver.splitDns

Specify the DNS server that Traffic Server should use under specific conditions. Consult the upstream documentation for more details. Type: strings concatenated with “\n” Default: "" Example: '' dest_domain=internal.corp.example named="255.255.255.255:212 255.255.255.254" def_domain=corp.example search_list="corp.example corp1.example" dest_domain=!internal.corp.example named=255.255.255.253 '' Declared by: <nixpkgs/nixos/modules/services/web-servers/trafficserver/default.nix>

## services.trafficserver.sslMulticert

Configure SSL server certificates to terminate the SSL sessions. Consult the upstream documentation for more details. Type: strings concatenated with “\n” Default: "" Example: "dest_ip=* ssl_cert_name=default.pem" Declared by: <nixpkgs/nixos/modules/services/web-servers/trafficserver/default.nix>

## services.trafficserver.storage

List all the storage that make up the Traffic Server cache. Consult the upstream documentation for more details. Type: strings concatenated with “\n” Default: "/var/cache/trafficserver 256M" Example: "/dev/disk/by-id/XXXXX volume=1" Declared by: <nixpkgs/nixos/modules/services/web-servers/trafficserver/default.nix>

## services.trafficserver.strategies

Specify the next hop proxies used in an cache hierarchy and the algorithms used to select the next proxy. Consult the upstream documentation for more details. Type: null or YAML 1.1 value Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/trafficserver/default.nix>

## services.trafficserver.volume

Manage cache space more efficiently and restrict disk usage by creating cache volumes of different sizes. Consult the upstream documentation for more details. Type: null or YAML 1.1 value Default: "" Example: "volume=1 scheme=http size=20%" Declared by: <nixpkgs/nixos/modules/services/web-servers/trafficserver/default.nix>
