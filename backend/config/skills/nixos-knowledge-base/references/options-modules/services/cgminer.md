---
module: services.cgminer
option_count: 6
source: options.html
---

# services.cgminer

## services.cgminer.enable

Whether to enable cgminer, an ASIC/FPGA/GPU miner for bitcoin and litecoin. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/cgminer.nix>

## services.cgminer.package

The cgminer package to use. Type: package Default: pkgs.cgminer Declared by: <nixpkgs/nixos/modules/services/misc/cgminer.nix>

## services.cgminer.config

Additional config Type: attribute set of (boolean or signed integer) Default: { } Example: { auto-fan = true; auto-gpu = true; expiry = 120; failover-only = true; gpu-threads = 2; log = 5; queue = 1; scan-time = 60; temp-histeresys = 3; } Declared by: <nixpkgs/nixos/modules/services/misc/cgminer.nix>

## services.cgminer.hardware

List of config options for every GPU Type: list of attribute set of (string or signed integer) Default: [ ] Example: [ { gpu-engine = "0-985"; gpu-fan = "0-85"; gpu-memclock = 860; gpu-powertune = 20; intensity = 9; temp-cutoff = 95; temp-overheat = 85; temp-target = 75; } { gpu-engine = "0-950"; gpu-fan = "0-85"; gpu-memclock = 825; gpu-powertune = 20; intensity = 9; temp-cutoff = 95; temp-overheat = 85; temp-target = 75; } ] Declared by: <nixpkgs/nixos/modules/services/misc/cgminer.nix>

## services.cgminer.pools

List of pools where to mine Type: list of attribute set of string Default: [ ] Example: [ { password = "X"; url = "http://p2pool.org:9332"; username = "17EUZxTvs9uRmPsjPZSYUU3zCz9iwstudk"; } ] Declared by: <nixpkgs/nixos/modules/services/misc/cgminer.nix>

## services.cgminer.user

User account under which cgminer runs Type: string Default: "cgminer" Declared by: <nixpkgs/nixos/modules/services/misc/cgminer.nix>
