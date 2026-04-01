---
module: services.plantuml-server
option_count: 11
source: options.html
---

# services.plantuml-server

## services.plantuml-server.enable

Whether to enable PlantUML server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/plantuml-server.nix>

## services.plantuml-server.package

The plantuml-server package to use. Type: package Default: pkgs.plantuml-server Declared by: <nixpkgs/nixos/modules/services/web-apps/plantuml-server.nix>

## services.plantuml-server.graphvizPackage

The graphviz package to use. Type: package Default: pkgs.graphviz Declared by: <nixpkgs/nixos/modules/services/web-apps/plantuml-server.nix>

## services.plantuml-server.group

Group which runs PlantUML server. Type: string Default: "plantuml" Declared by: <nixpkgs/nixos/modules/services/web-apps/plantuml-server.nix>

## services.plantuml-server.home

Home directory of the PlantUML server instance. Type: absolute path Default: "/var/lib/plantuml" Declared by: <nixpkgs/nixos/modules/services/web-apps/plantuml-server.nix>

## services.plantuml-server.httpAuthorization

When calling the proxy endpoint, the value of HTTP_AUTHORIZATION will be used to set the HTTP Authorization header. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/plantuml-server.nix>

## services.plantuml-server.listenHost

Host to listen on. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/plantuml-server.nix>

## services.plantuml-server.listenPort

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/web-apps/plantuml-server.nix>

## services.plantuml-server.plantumlLimitSize

Limits image width and height. Type: signed integer Default: 4096 Declared by: <nixpkgs/nixos/modules/services/web-apps/plantuml-server.nix>

## services.plantuml-server.plantumlStats

Set it to on to enable statistics report (https://plantuml.com/statistics-report). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/plantuml-server.nix>

## services.plantuml-server.user

User which runs PlantUML server. Type: string Default: "plantuml" Declared by: <nixpkgs/nixos/modules/services/web-apps/plantuml-server.nix>
