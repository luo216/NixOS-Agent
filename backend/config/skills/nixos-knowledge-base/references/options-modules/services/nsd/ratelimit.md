---
module: services.nsd.ratelimit
option_count: 7
source: options.html
---

# services.nsd.ratelimit

## services.nsd.ratelimit.enable

Whether to enable ratelimit capabilities. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.ratelimit.ipv4PrefixLength

IPv4 prefix length. Addresses are grouped by netblock. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.ratelimit.ipv6PrefixLength

IPv6 prefix length. Addresses are grouped by netblock. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.ratelimit.ratelimit

Max qps allowed from any query source. 0 means unlimited. With an verbosity of 2 blocked and unblocked subnets will be logged. Type: signed integer Default: 200 Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.ratelimit.size

Size of the hashtable. More buckets use more memory but lower the chance of hash hash collisions. Type: signed integer Default: 1000000 Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.ratelimit.slip

Number of packets that get discarded before replying a SLIP response. 0 disables SLIP responses. 1 will make every response a SLIP response. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.ratelimit.whitelistRatelimit

Max qps allowed from whitelisted sources. 0 means unlimited. Set the rrl-whitelist option for specific queries to apply this limit instead of the default to them. Type: signed integer Default: 2000 Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>
