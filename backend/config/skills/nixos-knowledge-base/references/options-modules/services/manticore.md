---
module: services.manticore
option_count: 2
source: options.html
---

# services.manticore

## services.manticore.enable

Whether to enable Manticoresearch. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/search/manticore.nix>

## services.manticore.settings

Configuration for Manticoresearch. See https://manual.manticoresearch.com/Server settings for more information. Type: open submodule of (JSON value) Default: { searchd = { data_dir = "/var/lib/manticore"; listen = [ "127.0.0.1:9312" "127.0.0.1:9306:mysql" "127.0.0.1:9308:http" ]; log = "/var/log/manticore/searchd.log"; pid_file = "/run/manticore/searchd.pid"; query_log = "/var/log/manticore/query.log"; }; } Example: { searchd = { listen = [ "127.0.0.1:9312" "127.0.0.1:9306:mysql" "127.0.0.1:9308:http" ]; log = "/var/log/manticore/searchd.log"; query_log = "/var/log/manticore/query.log"; pid_file = "/run/manticore/searchd.pid"; data_dir = "/var/lib/manticore"; }; } Declared by: <nixpkgs/nixos/modules/services/search/manticore.nix>
