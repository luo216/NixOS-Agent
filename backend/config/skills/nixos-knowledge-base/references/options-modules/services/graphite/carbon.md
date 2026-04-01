---
module: services.graphite.carbon
option_count: 11
source: options.html
---

# services.graphite.carbon

## services.graphite.carbon.enableAggregator

Whether to enable carbon aggregator, the carbon buffering service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>

## services.graphite.carbon.enableCache

Whether to enable carbon cache, the graphite storage daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>

## services.graphite.carbon.enableRelay

Whether to enable carbon relay, the carbon replication and sharding service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>

## services.graphite.carbon.aggregationRules

Defines if and how received metrics will be aggregated. Type: null or string Default: null Example: '' <env>.applications.<app>.all.requests (60) = sum <env>.applications.<app>.*.requests <env>.applications.<app>.all.latency (60) = avg <env>.applications.<app>.*.latency '' Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>

## services.graphite.carbon.blacklist

Any metrics received which match one of the expressions will be dropped. Type: null or string Default: null Example: "^some\\.noisy\\.metric\\.prefix\\..*" Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>

## services.graphite.carbon.config

Content of carbon configuration file. Type: string Default: '' [cache] # Listen on localhost by default for security reasons UDP_RECEIVER_INTERFACE = 127.0.0.1 PICKLE_RECEIVER_INTERFACE = 127.0.0.1 LINE_RECEIVER_INTERFACE = 127.0.0.1 CACHE_QUERY_INTERFACE = 127.0.0.1 # Do not log every update LOG_UPDATES = False LOG_CACHE_HITS = False '' Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>

## services.graphite.carbon.relayRules

Relay rules are used to send certain metrics to a certain backend. Type: null or string Default: null Example: '' [example] pattern = ^mydata\.foo\..+ servers = 10.1.2.3, 10.1.2.4:2004, myserver.mydomain.com '' Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>

## services.graphite.carbon.rewriteRules

Regular expression patterns that can be used to rewrite metric names in a search and replace fashion. Type: null or string Default: null Example: '' [post] _sum$ = _avg$ = '' Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>

## services.graphite.carbon.storageAggregation

Defines how to aggregate data to lower-precision retentions. Type: null or string Default: null Example: '' [all_min] pattern = \.min$ xFilesFactor = 0.1 aggregationMethod = min '' Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>

## services.graphite.carbon.storageSchemas

Defines retention rates for storing metrics. Type: null or string Default: "" Example: '' [apache_busyWorkers] pattern = ^servers\.www.*\.workers\.busyWorkers$ retentions = 15s:7d,1m:21d,15m:5y '' Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>

## services.graphite.carbon.whitelist

Only metrics received which match one of the expressions will be persisted. Type: null or string Default: null Example: ".*" Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>
