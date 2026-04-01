---
module: services.awstats
option_count: 4
source: options.html
---

# services.awstats

## services.awstats.enable

Whether to enable awstats, a real-time logfile analyzer. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/logging/awstats.nix>

## services.awstats.configs

Attribute set of domains to collect stats for. Type: attribute set of (submodule) Default: { } Example: { "mysite" = { domain = "example.com"; logFile = "/var/log/nginx/access.log"; }; } Declared by: <nixpkgs/nixos/modules/services/logging/awstats.nix>

## services.awstats.dataDir

The directory where awstats data will be stored. Type: absolute path Default: "/var/lib/awstats" Declared by: <nixpkgs/nixos/modules/services/logging/awstats.nix>

## services.awstats.updateAt

Specification of the time at which awstats will get updated. (in the format described by systemd.time(7)) Type: null or string Default: null Example: "hourly" Declared by: <nixpkgs/nixos/modules/services/logging/awstats.nix>
