---
module: services.apache-kafka.configFiles
option_count: 2
source: options.html
---

# services.apache-kafka.configFiles

## services.apache-kafka.configFiles.log4jProperties

Kafka log4j property configuration file path Type: absolute path Default: "pkgs.writeText \"log4j.properties\" cfg.log4jProperties" Declared by: <nixpkgs/nixos/modules/services/misc/apache-kafka.nix>

## services.apache-kafka.configFiles.serverProperties

Kafka server.properties configuration file path. Defaults to the rendered settings. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/misc/apache-kafka.nix>
