---
module: services.guacamole-client
option_count: 6
source: options.html
---

# services.guacamole-client

## services.guacamole-client.enable

Whether to enable Apache Guacamole Client (Tomcat). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/guacamole-client.nix>

## services.guacamole-client.enableWebserver

Enable the Guacamole web application in a Tomcat webserver. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/guacamole-client.nix>

## services.guacamole-client.package

The guacamole-client package to use. Type: package Default: pkgs.guacamole-client Declared by: <nixpkgs/nixos/modules/services/web-apps/guacamole-client.nix>

## services.guacamole-client.logbackXml

Configuration file that correspond to logback.xml. Type: null or absolute path Default: null Example: "/path/to/logback.xml" Declared by: <nixpkgs/nixos/modules/services/web-apps/guacamole-client.nix>

## services.guacamole-client.settings

Configuration written to guacamole.properties. Note The Guacamole web application uses one main configuration file called guacamole.properties. This file is the common location for all configuration properties read by Guacamole or any extension of Guacamole, including authentication providers. Type: open submodule of attribute set of (string, package, bool, int or float) Default: { guacd-hostname = "localhost"; guacd-port = 4822; } Declared by: <nixpkgs/nixos/modules/services/web-apps/guacamole-client.nix>

## services.guacamole-client.userMappingXml

Configuration file that correspond to user-mapping.xml. Type: null or absolute path Default: null Example: "/path/to/user-mapping.xml" Declared by: <nixpkgs/nixos/modules/services/web-apps/guacamole-client.nix>
