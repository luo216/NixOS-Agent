---
module: services.graphite.seyren
option_count: 6
source: options.html
---

# services.graphite.seyren

## services.graphite.seyren.enable

Whether to enable seyren service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>

## services.graphite.seyren.extraConfig

Extra seyren configuration. See https://github.com/scobal/seyren#config Type: attribute set of string Default: { } Example: { GRAPHITE_USERNAME = "user"; GRAPHITE_PASSWORD = "pass"; } Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>

## services.graphite.seyren.graphiteUrl

Host where graphite service runs. Type: string Default: "http://${config.services.graphite.web.listenAddress}:${toString config.services.graphite.web.port}" Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>

## services.graphite.seyren.mongoUrl

Mongodb connection string. Type: string Default: "mongodb://${config.services.mongodb.bind_ip}:27017/seyren" Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>

## services.graphite.seyren.port

Seyren listening port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8081 Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>

## services.graphite.seyren.seyrenUrl

Host where seyren is accessible. Type: string Default: "http://localhost:${toString config.services.graphite.seyren.port}/" Declared by: <nixpkgs/nixos/modules/services/monitoring/graphite.nix>
