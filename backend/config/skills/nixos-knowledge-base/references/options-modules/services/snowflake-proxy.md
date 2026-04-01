---
module: services.snowflake-proxy
option_count: 6
source: options.html
---

# services.snowflake-proxy

## services.snowflake-proxy.enable

Whether to enable snowflake-proxy, a system to defeat internet censorship. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/snowflake-proxy.nix>

## services.snowflake-proxy.broker

Broker URL (default “https://snowflake-broker.torproject.net/”) Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/snowflake-proxy.nix>

## services.snowflake-proxy.capacity

Limits the amount of maximum concurrent clients allowed. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/snowflake-proxy.nix>

## services.snowflake-proxy.extraFlags

Extra flags to pass to snowflake-proxy Type: list of string Default: [ ] Example: [ "-metrics" ] Declared by: <nixpkgs/nixos/modules/services/networking/snowflake-proxy.nix>

## services.snowflake-proxy.relay

websocket relay URL (default “wss://snowflake.bamsoftware.com/”) Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/snowflake-proxy.nix>

## services.snowflake-proxy.stun

STUN broker URL (default “stun:stun.stunprotocol.org:3478”) Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/snowflake-proxy.nix>
