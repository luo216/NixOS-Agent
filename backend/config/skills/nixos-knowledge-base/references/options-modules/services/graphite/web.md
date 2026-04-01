---
module: services.graphite.web
option_count: 4
source: options.html
---

# services.graphite.web

## services.graphite.web.enable

Whether to enable graphite web frontend. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>

## services.graphite.web.extraConfig

Graphite webapp settings. See: https://graphite.readthedocs.io/en/latest/config-local-settings.html Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>

## services.graphite.web.listenAddress

Graphite web frontend listen address. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>

## services.graphite.web.port

Graphite web frontend port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>
