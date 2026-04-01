---
module: services.nsd
option_count: 31
source: options.html
---

# services.nsd

## services.nsd.enable

Whether to enable NSD authoritative DNS server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.bind8Stats

Whether to enable BIND8 like statistics. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.dnssecInterval

How often to check whether dnssec key rollover is required Type: string Default: "1h" Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.extraConfig

Extra nsd config. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.hideVersion

Whether NSD should answer VERSION.BIND and VERSION.SERVER CHAOS class queries. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.identity

Identify the server (CH TXT ID.SERVER entry). Type: string Default: "unidentified server" Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.interfaces

What addresses the server should listen to. Type: list of string Default: [ "127.0.0.0" "::1" ] Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.ipFreebind

Whether to bind to nonlocal addresses and interfaces that are down. Similar to ip-transparent. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.ipTransparent

Allow binding to non local addresses. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.ipv4

Whether to listen on IPv4 connections. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.ipv4EDNSSize

Preferred EDNS buffer size for IPv4. Type: signed integer Default: 4096 Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.ipv6

Whether to listen on IPv6 connections. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.ipv6EDNSSize

Preferred EDNS buffer size for IPv6. Type: signed integer Default: 4096 Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.keys

Define your TSIG keys here. Type: attribute set of (submodule) Default: { } Example: { "tsig.example.org" = { algorithm = "hmac-md5"; keyFile = "/path/to/my/key"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.logTimeAscii

Log time in ascii, if false then in unix epoch seconds. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.nsid

NSID identity (hex string, or “ascii_somestring”). Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.port

Port the service should bind do. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 53 Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.reuseport

Whether to enable SO_REUSEPORT on all used sockets. This lets multiple processes bind to the same port. This speeds up operation especially if the server count is greater than one and makes fast restarts less prone to fail Type: boolean Default: pkgs.stdenv.hostPlatform.isLinux Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.rootServer

Whether this server will be a root server (a DNS root server, you usually don’t want that). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.roundRobin

Whether to enable round robin rotation of records. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.serverCount

Number of NSD servers to fork. Put the number of CPUs to use here. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.statistics

Statistics are produced every number of seconds. Prints to log. If null no statistics are logged. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.tcpCount

Maximum number of concurrent TCP connections per server. Type: signed integer Default: 100 Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.tcpQueryCount

Maximum number of queries served on a single TCP connection. 0 means no maximum. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.tcpTimeout

TCP timeout in seconds. Type: signed integer Default: 120 Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.verbosity

Verbosity level. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.version

The version string replied for CH TXT version.server and version.bind queries. Will use the compiled package version on null. See hideVersion for enabling/disabling this responses. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.xfrdReloadTimeout

Number of seconds between reloads triggered by xfrd. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zonefilesCheck

Whether to check mtime of all zone files on start and sighup. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zonefilesWrite

Write changed secondary zones to their zonefile every N seconds. If the zone (pattern) configuration has “” zonefile, it is not written. Zones that have received zone transfer updates are written to their zonefile. 0 disables writing to zone files. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones

Define your zones here. Zones can cascade other zones and therefore inherit settings from parent zones. Look at the definition of children to learn about inheritance and child zones. The given example will define 3 zones (example.(com|org|net).). Both example.com. and example.org. inherit their configuration from serverGroup1. Type: attribute set of (submodule) Default: { } Example: { "serverGroup1" = { provideXFR = [ "10.1.2.3 NOKEY" ]; children = { "example.com." = { data = '' $ORIGIN example.com. $TTL 86400 @ IN SOA a.ns.example.com. admin.example.com. ( ... ''; }; "example.org." = { data = '' $ORIGIN example.org. $TTL 86400 @ IN SOA a.ns.example.com. admin.example.com. ( ... ''; }; }; }; "example.net." = { provideXFR = [ "10.3.2.1 NOKEY" ]; data = '' ... ''; }; } Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>
