---
module: services.karma.settings.listen
option_count: 2
source: options.html
---

# services.karma.settings.listen

## services.karma.settings.listen.address

Hostname or IP to listen on. Type: string Default: "127.0.0.1" Example: "[::]" Declared by: <nixpkgs/nixos/modules/services/monitoring/karma.nix>

## services.karma.settings.listen.port

HTTP port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Example: 8182 Declared by: <nixpkgs/nixos/modules/services/monitoring/karma.nix>
