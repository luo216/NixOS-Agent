---
module: services.nsd.zones.<name>
option_count: 17
source: options.html
---

# services.nsd.zones.<name>

## services.nsd.zones.<name>.allowAXFRFallback

If NSD as secondary server should be allowed to AXFR if the primary server does not allow IXFR. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.allowNotify

Listed primary servers are allowed to notify this secondary server. Format: <ip> <key-name | NOKEY | BLOCKED> <ip> either a plain IPv4/IPv6 address or range. Valid patters for ranges: 10.0.0.0/24: via subnet size 10.0.0.0&255.255.255.0: via subnet mask 10.0.0.1-10.0.0.254: via range A optional port number could be added with a ‘@’: 2001:1234::1@1234 <key-name | NOKEY | BLOCKED> <key-name> will use the specified TSIG key NOKEY no TSIG signature is required BLOCKEDnotifies from non-listed or blocked IPs will be ignored Type: list of string Default: [ ] Example: [ "192.0.2.0/24 NOKEY" "10.0.0.1-10.0.0.5 my_tsig_key_name" "10.0.3.4&255.255.0.0 BLOCKED" ] Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.children

Children zones inherit all options of their parents. Attributes defined in a child will overwrite the ones of its parent. Only leaf zones will be actually served. This way it’s possible to define maybe zones which share most attributes without duplicating everything. This mechanism replaces nsd’s patterns in a save and functional way. Type: attribute set of anything Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.data

The actual zone data. This is the content of your zone file. Use imports or pkgs.lib.readFile if you don’t want this data in your config file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.dnssec

Whether to enable DNSSEC. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.maxRefreshSecs

Limit refresh time for secondary zones. This is the timer which checks to see if the zone has to be refetched when it expires. Normally the value from the SOA record is used, but this option restricts that value. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.maxRetrySecs

Limit retry time for secondary zones. This is the timeout after a failed fetch attempt for the zone. Normally the value from the SOA record is used, but this option restricts that value. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.minRefreshSecs

Limit refresh time for secondary zones. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.minRetrySecs

Limit retry time for secondary zones. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.multiMasterCheck

If enabled, checks all masters for the last zone version. It uses the higher version from all configured masters. Useful if you have multiple masters that have different version numbers served. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.notify

This primary server will notify all given secondary servers about zone changes. Format: <ip> <key-name | NOKEY> <ip> a plain IPv4/IPv6 address with on optional port number (ip@port) <key-name | NOKEY> <key-name> sign notifies with the specified key NOKEY don’t sign notifies Type: list of string Default: [ ] Example: [ "10.0.0.1@3721 my_key" "::5 NOKEY" ] Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.notifyRetry

Specifies the number of retries for failed notifies. Set this along with notify. Type: signed integer Default: 5 Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.outgoingInterface

This address will be used for zone-transfer requests if configured as a secondary server or notifications in case of a primary server. Supply either a plain IPv4 or IPv6 address with an optional port number (ip@port). Type: null or string Default: null Example: "2000::1@1234" Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.provideXFR

Allow these IPs and TSIG to transfer zones, addr TSIG|NOKEY|BLOCKED address range 192.0.2.0/24, 1.2.3.4&255.255.0.0, 3.0.2.20-3.0.2.40 Type: list of string Default: [ ] Example: [ "192.0.2.0/24 NOKEY" "192.0.2.0/24 my_tsig_key_name" ] Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.requestXFR

Format: [AXFR|UDP] <ip-address> <key-name | NOKEY> Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.rrlWhitelist

Whitelists the given rrl-types. Type: list of (one of “nxdomain”, “error”, “referral”, “any”, “rrsig”, “wildcard”, “nodata”, “dnskey”, “positive”, “all”) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.zones.<name>.zoneStats

When set to something distinct to null NSD is able to collect statistics per zone. All statistics of this zone(s) will be added to the group specified by this given name. Use “%s” to use the zones name as the group. The groups are output from nsd-control stats and stats_noreset. Type: null or string Default: null Example: "%s" Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>
