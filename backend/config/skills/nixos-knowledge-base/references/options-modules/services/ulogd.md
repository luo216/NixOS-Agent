---
module: services.ulogd
option_count: 3
source: options.html
---

# services.ulogd

## services.ulogd.enable

Whether to enable ulogd, a userspace logging daemon for netfilter/iptables related logging. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/logging/ulogd.nix>

## services.ulogd.logLevel

Log level (1 = debug, 3 = info, 5 = notice, 7 = error, 8 = fatal) Type: one of 1, 3, 5, 7, 8 Default: 5 Declared by: <nixpkgs/nixos/modules/services/logging/ulogd.nix>

## services.ulogd.settings

Configuration for ulogd. See /share/doc/ulogd/ in pkgs.ulogd.doc. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a list of them for duplicate keys) Default: { } Example: { emu1 = { file = "/var/log/ulogd_pkts.log"; sync = 1; }; global = { stack = [ "log1:NFLOG,base1:BASE,ifi1:IFINDEX,ip2str1:IP2STR,print1:PRINTPKT,emu1:LOGEMU" "log1:NFLOG,base1:BASE,pcap1:PCAP" ]; }; log1 = { group = 2; }; pcap1 = { file = "/var/log/ulogd.pcap"; sync = 1; }; } Declared by: <nixpkgs/nixos/modules/services/logging/ulogd.nix>
