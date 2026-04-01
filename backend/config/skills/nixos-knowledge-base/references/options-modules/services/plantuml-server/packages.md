---
module: services.plantuml-server.packages
option_count: 2
source: options.html
---

# services.plantuml-server.packages

## services.plantuml-server.packages.jdk

The jdk package to use. Type: package Default: pkgs.jdk Declared by: <nixpkgs/nixos/modules/services/web-apps/plantuml-server.nix>

## services.plantuml-server.packages.jetty

The jetty package to use. At the time of writing (v1.2023.12), PlantUML Server does not support Jetty versions higher than 12.x. Jetty 12.x has introduced major breaking changes, see https://github.com/jetty/jetty.project/releases/tag/jetty-12.0.0 and https://eclipse.dev/jetty/documentation/jetty-12/programming-guide/index.html#pg-migration-11-to-12 Type: package Default: pkgs.jetty_11 Declared by: <nixpkgs/nixos/modules/services/web-apps/plantuml-server.nix>
