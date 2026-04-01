---
module: services.opentsdb
option_count: 6
source: options.html
---

# services.opentsdb

## services.opentsdb.enable

Whether to enable OpenTSDB. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/opentsdb.nix>

## services.opentsdb.package

The opentsdb package to use. Type: package Default: pkgs.opentsdb Declared by: <nixpkgs/nixos/modules/services/databases/opentsdb.nix>

## services.opentsdb.config

The contents of OpenTSDB’s configuration file Type: strings concatenated with “\n” Default: '' tsd.core.auto_create_metrics = true tsd.http.request.enable_chunked = true '' Declared by: <nixpkgs/nixos/modules/services/databases/opentsdb.nix>

## services.opentsdb.group

Group account under which OpenTSDB runs. Type: string Default: "opentsdb" Declared by: <nixpkgs/nixos/modules/services/databases/opentsdb.nix>

## services.opentsdb.port

Which port OpenTSDB listens on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4242 Declared by: <nixpkgs/nixos/modules/services/databases/opentsdb.nix>

## services.opentsdb.user

User account under which OpenTSDB runs. Type: string Default: "opentsdb" Declared by: <nixpkgs/nixos/modules/services/databases/opentsdb.nix>
