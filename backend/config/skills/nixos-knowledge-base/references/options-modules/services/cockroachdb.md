---
module: services.cockroachdb
option_count: 12
source: options.html
---

# services.cockroachdb

## services.cockroachdb.enable

Whether to enable CockroachDB Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/cockroachdb.nix>

## services.cockroachdb.package

The cockroachdb package to use. This would primarily be useful to enable Enterprise Edition features in your own custom CockroachDB build (Nixpkgs CockroachDB binaries only contain open source features and open source code). Type: package Default: pkgs.cockroachdb Declared by: <nixpkgs/nixos/modules/services/databases/cockroachdb.nix>

## services.cockroachdb.cache

The total size for caches. This can be a percentage, expressed with a fraction sign or as a decimal-point number, or any bytes-based unit. For example, "25%", "0.25" both represent 25% of the available system memory. The values "1000000000" and "1GB" both represent 1 gigabyte of memory. Type: string Default: "25%" Declared by: <nixpkgs/nixos/modules/services/databases/cockroachdb.nix>

## services.cockroachdb.certsDir

The path to the certificate directory. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/databases/cockroachdb.nix>

## services.cockroachdb.extraArgs

Extra CLI arguments passed to cockroach start. For the full list of supported arguments, check https://www.cockroachlabs.com/docs/stable/cockroach-start.html#flags Type: list of string Default: [ ] Example: [ "--advertise-addr" "[fe80::f6f2:::]" ] Declared by: <nixpkgs/nixos/modules/services/databases/cockroachdb.nix>

## services.cockroachdb.group

User account under which CockroachDB runs Type: string Default: "cockroachdb" Declared by: <nixpkgs/nixos/modules/services/databases/cockroachdb.nix>

## services.cockroachdb.insecure

Run in insecure mode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/cockroachdb.nix>

## services.cockroachdb.join

The addresses for connecting the node to a cluster. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/cockroachdb.nix>

## services.cockroachdb.locality

An ordered, comma-separated list of key-value pairs that describe the topography of the machine. Topography might include country, datacenter or rack designations. Data is automatically replicated to maximize diversities of each tier. The order of tiers is used to determine the priority of the diversity, so the more inclusive localities like country should come before less inclusive localities like datacenter. The tiers and order must be the same on all nodes. Including more tiers is better than including fewer. For example: country=us,region=us-west,datacenter=us-west-1b,rack=12 country=ca,region=ca-east,datacenter=ca-east-2,rack=4 planet=earth,province=manitoba,colo=secondary,power=3 Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/cockroachdb.nix>

## services.cockroachdb.maxSqlMemory

The maximum in-memory storage capacity available to store temporary data for SQL queries. This can be a percentage, expressed with a fraction sign or as a decimal-point number, or any bytes-based unit. For example, "25%", "0.25" both represent 25% of the available system memory. The values "1000000000" and "1GB" both represent 1 gigabyte of memory. Type: string Default: "25%" Declared by: <nixpkgs/nixos/modules/services/databases/cockroachdb.nix>

## services.cockroachdb.openPorts

Open firewall ports for cluster communication by default Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/cockroachdb.nix>

## services.cockroachdb.user

User account under which CockroachDB runs Type: string Default: "cockroachdb" Declared by: <nixpkgs/nixos/modules/services/databases/cockroachdb.nix>
