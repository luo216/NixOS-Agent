---
module: services.postgresql.settings
option_count: 3
source: options.html
---

# services.postgresql.settings

## services.postgresql.settings.log_line_prefix

A printf-style string that is output at the beginning of each log line. Upstream default is '%m [%p] ', i.e. it includes the timestamp. We do not include the timestamp, because journal has it anyway. Type: string Default: "[%p] " Example: "%m [%p] " Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.settings.port

The port on which PostgreSQL listens. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5432 Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.settings.shared_preload_libraries

List of libraries to be preloaded. Type: null or (strings concatenated with “,” or (list of string) convertible to it) Default: null Example: [ "auto_explain" "anon" ] Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>
