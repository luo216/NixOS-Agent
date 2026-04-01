---
module: services.bird-lg.frontend
option_count: 14
source: options.html
---

# services.bird-lg.frontend

## services.bird-lg.frontend.enable

Whether to enable Bird Looking Glass Frontend Webserver. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.frontend.bgpMapInfo

Information displayed in bgpmap. Type: list of string Default: [ "asn" "as-name" "ASName" "descr" ] Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.frontend.dnsInterface

DNS zone to query ASN information. Type: string Default: "asn.cymru.com" Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.frontend.domain

Server name domain suffixes. Type: string Example: "dn42.lantian.pub" Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.frontend.extraArgs

Extra parameters documented here. Note Passing lines (plain strings) is deprecated in favour of passing lists of strings. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.frontend.listenAddresses

Address to listen on. Type: string or list of string Default: "127.0.0.1:5000" Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.frontend.nameFilter

Protocol names to hide in summary tables (RE2 syntax), Type: string Default: "" Example: "^ospf" Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.frontend.netSpecificMode

Apply network-specific changes for some networks. Type: string Default: "" Example: "dn42" Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.frontend.protocolFilter

Information displayed in bgpmap. Type: list of string Default: [ ] Example: [ "ospf" ] Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.frontend.proxyPort

Port bird-lg-proxy is running on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8000 Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.frontend.servers

Server name prefixes. Type: list of string Example: [ "gigsgigscloud" "hostdare" ] Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.frontend.timeout

Time before request timed out, in seconds. Type: signed integer Default: 120 Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.frontend.titleBrand

Prefix of page titles in browser tabs. Type: string Default: "Bird-lg Go" Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.frontend.whois

Whois server for queries. Type: string Default: "whois.verisign-grs.com" Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>
